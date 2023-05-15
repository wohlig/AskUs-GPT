const express = require('express')
const router = express.Router()
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
const cache = require('../../../middlewares/requestCacheMiddleware')
const gptServices = require('../../../services/gpt/GptService')

/**
 * @namespace -GNEWS-MODULE-
 * @description API’s related to GNEWS module.
 */

/**
 * @memberof -gnews-module-
 * @name getNewsSentiment
 * @path {POST} /api/gnews/getNewsSentiment
 * @description Bussiness Logic :- In getNewsSentiment API, we get sentiment of the news.
 * @response {string} ContentType=application/json - Response content type.
 * @response {string} metadata.msg=Success  - Response got successfully.
 * @response {string} metadata.data - It will return the data.
 * @code {200} if the msg is success the api returns the sentiment of the news
 * @author Bilal Sani, 10th May 2023
 * *** Last-Updated :- Bilal Sani, 10th May 2023 ***
 */

const validationSchema = {
  type: 'object',
  required: true,
  properties: {
    fullContent: {
      type: 'string',
      required: true
    }
  }
}
const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'body')
}
const getNewsSentiment = async (req, res) => {
  try {
    const result = await gptServices.getNewsSentiment(req.body.fullContent)
    res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { sentiment: result } })
  } catch (err) {
    console.log('getNewsSentiment Error', err)
    return res.sendJson({
      type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR,
      err: err.err || err
    })
  }
}

router.post('/getNewsSentiment', cache.route(10), validation, getNewsSentiment)
module.exports = router
