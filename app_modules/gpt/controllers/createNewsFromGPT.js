const express = require('express')
const router = express.Router()
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
// const cache = require('../../../middlewares/requestCacheMiddleware')
const GptService = require('../../../services/gpt/GptService')

/**
 * @namespace -GPT-MODULE-
 * @description API’s related to GPT module.
 */

/**
 * @memberof -GPT-module-
 * @name createNewsFromGPT
 * @path {POST} /api/gpt/
 * @description Bussiness Logic :- In createNewsFromGPT API, we get summary, headline, tweet and tags of the context from gpt
 * @response {string} ContentType=application/json - Response content type.
 * @response {string} metadata.msg=Success  - Response got successfully.
 * @response {string} metadata.data - It will return the data.
 * @code {200} if the msg is success the api returns the summary, headline, tweet and tags of the context.
 * @author Manan Savla, 14th July 2023
 * *** Last-Updated :- Manan Savla, 14th July 2023 ***
 */

const validationSchema = {
  type: 'object',
  required: true,
  properties: {
    match_id: {
      type: 'string',
      required: true
    }
  }
}
const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'body')
}
const createNewsFromGPT = async (req, res) => {
  console.log('req.body', req.body)
  try {
    const [fullContent, result] = await GptService.createNewsFromGPT(req.body)

    res.sendJson({
      type: __constants.RESPONSE_MESSAGES.SUCCESS,
      data: { gpt: result, fullContent: fullContent }
    })
  } catch (err) {
    console.log('createNewsFromGPT Error', err)
    return res.sendJson({
      type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR,
      err: err.err || err
    })
  }
}

router.post('/createNewsFromGPT', validation, createNewsFromGPT)
module.exports = router
