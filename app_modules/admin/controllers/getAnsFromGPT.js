const express = require('express')
const router = express.Router()
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
const cache = require('../../../middlewares/requestCacheMiddleware')
// const axios = require('axios')
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

/**
 * @namespace -ADMIN-MODULE-
 * @description API’s related to ADMIN module.
 */

/**
 * @memberof -user-module-
 * @name getAdminCall
 * @path {GET} /api/user/getAdminCall
 * @description Bussiness Logic :- In getAdminCall API, we get all the users from db.
 * @response {string} ContentType=application/json - Response content type.
 * @response {string} metadata.msg=Success  - Response got successfully.
 * @response {string} metadata.data - It will return the data.
 * @code {200} if the msg is success the api returns the token (access token).
 * @author Vasim Gujrati, 14th December 2022
 * *** Last-Updated :- Vasim Gujrati, 14th December 2022 ***
 */

const validationSchema = {
  type: 'object',
  required: true,
  properties: {
    username: {
      type: 'string',
      required: false,
      unique: true,
      minLength: 2,
      maxLength: 20
    }
  }
}
const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'body')
}
const getAnsFromGPT = async (req, res, data) => {
  try {
    console.log('Sending Question to GPT')
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `This is a news article: 
        ${data.context}
        AskUs is a chatbot that answers any question within the scope of the above news article. If the question is outside the scope of the news article, AskUs will respond with "Sorry, I don't know. If the user acknowledges the answer or writes any form of 'okay' slang, AskUs will respond with 👍. Do not generate questions and answers on your own.
        Question: ${data.question}
        Answer: `,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
    res.sendJson({
      type: __constants.RESPONSE_MESSAGES.SUCCESS,
      data: { gptAns: response }
    })
  } catch (err) {
    return res.sendJson({
      type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR,
      err: err.err || err
    })
  }
}

router.post('/getAnsFromGPT', cache.route(10), validation, getAnsFromGPT)
module.exports = router
