const express = require('express')
const router = express.Router()
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
// const cache = require('../../../middlewares/requestCacheMiddleware')
const NewsDataService = require('../../../services/newsdata/NewsDataService')

/**
 * @namespace -NewsData-MODULE-
 * @description API’s related to NewsData module.
 */

/**
 * @memberof -NewsData-module-
 * @name getNewsFromNewsData
 * @path {POST} /api/newsdata/getNewsFromNewsData
 * @description Bussiness Logic :- In getNewsFromNewsData API, we get all the news of the enabled categories from NewsData.io.
 * @response {string} ContentType=application/json - Response content type.
 * @response {string} metadata.msg=Success  - Response got successfully.
 * @response {string} metadata.data - It will return the data.
 * @code {200} if the msg is success the api returns the news of the enabled categories.
 * @author Bilal Sani, 20th March 2023
 * *** Last-Updated :- Bilal Sani, 20th March 2023 ***
 */

const validationSchema = {
  type: 'object',
  required: true,
  properties: {
    categoryName: {
      type: 'string',
      required: true
    },
    from: {
      type: 'string',
      required: true
    },
    to: {
      type: 'string',
      required: true
    },
    lang: {
      type: 'string',
      required: true
    }
  }
}
const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'body')
}
const getNewsData = async (req, res) => {
  try {
    const result = await NewsDataService.getNewsFromNewsData(req.body.categoryName, req.body.from, req.body.to, req.body.lang)
    res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { news: result } })
  } catch (err) {
    console.log('getNewsData Error', err)
    return res.sendJson({
      type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR,
      err: err.err || err
    })
  }
}

router.post('/getNewsData', validation, getNewsData)
module.exports = router
