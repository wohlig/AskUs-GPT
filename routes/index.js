// const dateUtil = require('date-format-utils')
const __config = require('../config')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const cache = require('./../middlewares/requestCacheMiddleware')
// const UserActivityLogs = require('./../middlewares/UserActivityLogs')
const __constants = require('./../config/constants')
const sendResponse = require('../responses/sendResponse')

module.exports = async function (app) {
  app.all('*', function (req, res, next) {
    req.req_ip = (req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',').shift().trim() : req.ip)
    const startTime = new Date()
    req.req_t = startTime
    console.log('=> API REQUEST:: ', {
      req_ip: req.req_ip,
      uri: req.originalUrl,
      req_t: moment(startTime).format()
    })
    res.on('finish', function (data) {
      const endTime = new Date()
      const responseTime = endTime - startTime
      console.log('=> API RESPONSE:: ', {
        req_ip: req.req_ip,
        uri: req.originalUrl,
        req_t: moment(startTime).format(),
        res_t: moment(endTime).format(),
        res_in: (responseTime / 1000) + 'sec'
      })
    })
    next()
  })
  app.use('/', (req, res, next) => {
    const old = res.json.bind(res)
    try {
      res.json = async (body) => {
        old(body)
        // if (req.logUserActivities) { UserActivityLogs.userActivityLogMiddleware(req, body) }
        if (res && res.statusCode && res.statusCode >= 200 && res.statusCode < 300 && req && !req.isCachedResponse && req.toCached) {
          const key = req.originalUrl + '_' + (req && req.body && Object.keys(req.body).length > 0 ? JSON.stringify(req.body) : '')
          body = JSON.stringify(body)
          await cache.set(key, body, req.expiryOfCache = __constants.EXPIRY_OF_CACHE)
        }
      }
    } catch (err) {
      console.log('Error in setting the key And app.use() :: ', err)
      throw new Error(err)
    }
    res.sendJson = (options) => sendResponse.send(res, options)
    next()
  })
  const apiUrlPrefix = '/' + __config.api_prefix + '/api'
  const appModulePath = `${__dirname}./../app_modules/`
  const controllers = '/controllers/'
  fs.readdirSync(path.resolve(appModulePath)).forEach((folder) => {
    if (fs.existsSync(path.resolve(appModulePath + folder + controllers))) {
      fs.readdirSync(path.resolve(appModulePath + folder + controllers)).forEach((file) => {
        if (require(path.resolve(appModulePath + folder + controllers + file)).stack) {
          app.use(apiUrlPrefix + '/' + folder, require(path.resolve(appModulePath + folder + controllers + file)))
          const routeToCheckValidator = require(path.resolve(appModulePath + folder + controllers + file)).stack[0]
          if (routeToCheckValidator && routeToCheckValidator.route && routeToCheckValidator.route.stack && !routeToCheckValidator.route.stack.filter(ele => ele.name === __constants.VALIDATION).length) {
            console.log('\x1b[31m Error :: \nCompiled time Failed\nValidation not present in API\n'); process.exit(0)
          }
        }
      })
    }
  })
}
