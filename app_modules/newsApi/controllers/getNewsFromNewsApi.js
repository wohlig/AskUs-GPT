const express = require('express')
const router = express.Router()
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
// const cache = require('../../../middlewares/requestCacheMiddleware')
const NewsAPiService = require('../../../services/newsapi/NewsApiService')

/**
 * @namespace -NewsAPi-MODULE-
 * @description API’s related to GNEWS module.
 */

/**
 * @memberof -newsapi-module-
 * @name getNewsFromNewsAPi
 * @path {POST} /api/newsapi/getNewsAPi
 * @description Bussiness Logic :- In getNewsFromNewsAPi API, we get all the news of the enabled categories.
 * @response {string} ContentType=application/json - Response content type.
 * @response {string} metadata.msg=Success  - Response got successfully.
 * @response {string} metadata.data - It will return the data.
 * @code {200} if the msg is success the api returns the news of the enabled categories.
 * @author Samay Gada, 11th April 2023
 * *** Last-Updated :- Bilal Sani, 11th April 2023 ***
 */

const validationSchema = {
  type: 'object',
  required: true,
  properties: {
    categoryName: {
      type: 'string',
      required: true
    },
    language: {
      type: 'string',
      required: true
    }
  }
}
const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'body')
}
const getNewsAPi = async (req, res) => {
  try {
    const result = await NewsAPiService.getNewsFromNewsAPi(req.body.categoryName, req.body.language)
    res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { news: result } })
  } catch (err) {
    console.log('getNewsAPi Error', err)
    return res.sendJson({
      type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR,
      err: err.err || err
    })
  }
}

router.post('/getNewsAPi', validation, getNewsAPi)
module.exports = router
