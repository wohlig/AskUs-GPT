const express = require('express')
const router = express.Router()
const adminServices = require('../../../services/admin/adminService')
const __constants = require('../../../config/constants')
const validationOfAPI = require('../../../middlewares/validation')
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
    wa: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 20
    }
  }
}

const validation = (req, res, next) => {
  return validationOfAPI(req, res, next, validationSchema, 'params')
}

const getAllSubUsers = async (req, res) => {
  try {
    const result = await adminServices.resolvedService(req.body)
    res.sendJson({ type: __constants.RESPONSE_MESSAGES.SUCCESS, data: { result } })
  } catch (err) {
    return res.sendJson({ type: err.type || __constants.RESPONSE_MESSAGES.SERVER_ERROR, err: err.err || err })
  }
}

router.post('/getAllUsers/subUsers/:wa', cache.route(100), validation, getAllSubUsers)
module.exports = router
