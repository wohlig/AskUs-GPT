const express = require('express')
const router = express.Router()
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
const cache = require('../../../middlewares/requestCacheMiddleware')
const gptServices = require('../../../services/gpt/GptService')

/**
 * @namespace -GPT-MODULE-
 * @description API’s related to GPT module.
 */

/**
 * @memberof -GPT-module-
 * @name getCategoriesFromChatGPT
 * @path {POST} /api/gpt/getCategoriesFromChatGPT
 * @description Bussiness Logic :- In getCategoriesFromChatGPT API, we get categories of a news from gpt.
 * @response {string} ContentType=application/json - Response content type.
 * @response {string} metadata.msg=Success  - Response got successfully.
 * @response {string} metadata.data - It will return the data.
 * @code {200} if the msg is success the api returns the news categories.
 * @author Bilal Sani, 19th April 2023
 * *** Last-Updated :- Bilal Sani, 19th April 2023 ***
 */

const validationSchema = {
  type: 'object',
  required: true,
  properties: {
    context: {
      type: 'string',
      required: true
    },
    updatedCategories: {
      type: 'array',
      required: true
    }
  }
}
const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'body')
}
const assignCategoryFromChatGPT = async (req, res) => {
  try {
    const result = await gptServices.assignCategoryFromChatGPT(req.body.context, req.body.updatedCategories)
    res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { data: result } })
  } catch (err) {
    console.log('assignCategoryFromChatGPT Error', err)
    return res.sendJson({ type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR, err: err.err || err })
  }
}

router.post('/assignCategoryFromChatGPT', cache.route(10), validation, assignCategoryFromChatGPT)
module.exports = router
