const express = require('express')
const router = express.Router()
const adminServices = require('../../../services/admin/adminService')
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
const logMiddleware = require('../../../middlewares/UserActivityLogs')
const cache = require('../../../middlewares/requestCacheMiddleware')
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
  return validationOfAPI(req, res, next, validationSchema, 'query')
}
const getAllUsers = async (req, res) => {
  try {
    const result = await adminServices.resolvedService(req.body)
    // setTimeout(() => {
    //   console.log('Delayed for 6 second.')
    //   res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { result } })
    // }, '6000')
    res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { result } })
  } catch (err) {
    console.log('Error in getAllUsers :: ', err)
    return res.sendJson({ type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR, err: err.err || err })
  }
}

router.post('/getAllUsers', logMiddleware.userActivityLog, cache.route(10), validation, getAllUsers)
module.exports = router
