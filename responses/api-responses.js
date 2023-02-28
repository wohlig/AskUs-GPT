module.exports = {
  INVALID_REQUEST: {
    status_code: 400,
    code: 4000,
    message: 'Invalid request'
  },
  NOT_FOUND: {
    status_code: 404,
    code: 4004,
    message: 'requested resource not found.'
  },
  NOT_AUTHORIZED: {
    status_code: 401,
    code: 4001,
    message: 'Unauthorized access.'
  },
  PAYMENT_REQUIRED: {
    status_code: 402,
    code: 4002,
    message: 'Payment required.'
  },
  ACCESS_DENIED: {
    status_code: 403,
    code: 4003,
    message: 'Access denied'
  },
  SERVER_TIMEOUT: {
    status_code: 408,
    code: 4008,
    message: 'request timeout.'
  },
  RATE_LIMITED: {
    status_code: 429,
    code: 4029,
    message: 'Too many request. request rate limited'
  },
  PROVIDE_FILE: {
    status_code: 400,
    code: 4030,
    message: 'Please provide a file'
  },
  INVALID_FILE_TYPE: {
    status_code: 400,
    code: 4031,
    message: 'Invalid file type'
  },
  INVALID_URL: {
    status_code: 400,
    code: 4032,
    message: 'Invalid request URL'
  },
  INVALID_FILE_SIZE: {
    status_code: 400,
    code: 4033,
    message: 'File size or pixel is less than expected'
  },
  SERVER_ERROR: {
    status_code: 500,
    code: 5000,
    message: 'Something went wrong. Please try again later.'
  },
  SERVICE_PROVIDER_NOT_PRESENT: {
    status_code: 500,
    code: 5000,
    message: 'Please ensure service provider data is present.'
  },
  // Note: use codes 2000 to 2999 for api success
  SUCCESS: {
    status_code: 200,
    code: 2000,
    message: 'Success'
  },
  ACCEPTED: {
    status_code: 202,
    code: 2002,
    message: 'Request Accepted'
  },
  EMAIL_VC: {
    status_code: 200,
    code: 2001,
    message: 'Please check your registered email for verification code'
  },
  PHONE_VC: {
    status_code: 200,
    code: 2002,
    message: 'Please check your registered contact number for verification code'
  },
  EMAIL_VERIFIED: {
    status_code: 200,
    code: 2003,
    message: 'Email address verified'
  },
  PHONE_VERIFIED: {
    status_code: 200,
    code: 2003,
    message: 'Phone number verified'
  },
  BUSINESS_PHONE_VC: {
    status_code: 200,
    code: 2001,
    message: 'Please check your registered business phone number for verification code'
  },
  BUSINESS_PHONE_VERIFIED: {
    status_code: 200,
    code: 2003,
    message: 'Business phone number verified'
  },
  // Note: use codes 3000 to 3999 for api error
  NO_RECORDS_FOUND: {
    status_code: 200,
    code: 3000,
    message: 'No record found.'
  },
  INVALID_CODE: {
    status_code: 200,
    code: 3002,
    message: 'Response code and msg not mention. please select valid response code.'
  },
  FAILED: {
    status_code: 200,
    code: 3003,
    message: 'Failed'
  },
  LOGIN_FAILED: {
    status_code: 200,
    code: 3004,
    message: 'credential are wrong.'
  },
  USERNAME_EXIST: {
    status_code: 200,
    code: 3005,
    message: 'username already exists.'
  },
  USER_EXIST: {
    status_code: 200,
    code: 3008,
    message: 'user already exists.'
  },
  INACTIVE_USER: {
    status_code: 200,
    code: 3006,
    message: 'inactive user.'
  },
  REDIRECTION_FAILED: {
    status_code: 200,
    code: 3007,
    message: 'failed to redirect.'
  },
  PROCESS_FAILED: {
    status_code: 200,
    code: 3010,
    message: 'Failed to process request.'
  },
  UPLOAD_FAILED: {
    status_code: 200,
    code: 3011,
    message: 'Upload failed.'
  },
  CAMP_ID_NOT_EXIT: {
    status_code: 200,
    code: 3012,
    message: 'camp_id not exit'
  },
  RECORD_EXIST: {
    status_code: 200,
    code: 3013,
    message: 'Record Already Exists.'
  },
  USER_ID_NOT_EXIST: {
    status_code: 200,
    code: 3014,
    message: 'User does not exist'
  },
  EMAIL_ALREADY_VERIFIED: {
    status_code: 200,
    code: 3015,
    message: 'Email already verified for user'
  },
  PHONE_ALREADY_VERIFIED: {
    status_code: 200,
    code: 3016,
    message: 'Phone number already verified for user'
  },
  INVALID_VERIFICATION_CODE: {
    status_code: 401,
    code: 3017,
    message: 'Invalid verification code'
  },
  BUSINESS_ACCESS_INFO_NOT_COMPLETE: {
    status_code: 200,
    code: 3018,
    message: 'Please complete whatsapp business access info first'
  },
  BUSINESS_INFO_NOT_COMPLETE: {
    status_code: 200,
    code: 3019,
    message: 'Please complete whatsapp business info first'
  },
  BUSINESS_PHONE_NUMBER_ALREADY_VERIFIED: {
    status_code: 200,
    code: 3020,
    message: 'Business phone number already verified for WABA'
  },
  WABA_ID_NOT_EXISTS: {
    status_code: 200,
    code: 3021,
    message: 'WABA profile does not exists.'
  },
  WABA_PHONE_NUM_NOT_EXISTS: {
    status_code: 200,
    code: 3021,
    message: 'WABA phone number does not exists.'
  },
  WABA_ACCOUNT_NOT_EXISTS: {
    status_code: 200,
    code: 3021,
    message: 'WABA account does not exists.'
  },
  WABA_PHONE_NUM_EXISTS: {
    status_code: 200,
    code: 3021,
    message: 'WABA phone number already exists.'
  },
  AUDIENCE_ID_NOT_EXISTS: {
    status_code: 200,
    code: 3021,
    message: 'Audience id does not exists.'
  },
  MAX_TEMPLATE: {
    status_code: 200,
    code: 3022,
    message: 'Maximum number of template allowed for this account has exausted.'
  },
  MASTER_NOT_EXISTS: {
    status_code: 200,
    code: 3023,
    message: 'Master data does not exists.'
  },
  ERROR_SENDING_MESSAGE: {
    status_code: 500,
    code: 3024,
    message: 'Error while sending message'
  },
  NOT_REDIRECTED: {
    status_code: 406,
    code: 3025,
    message: 'Fail to redirect payload'
  },
  TEMPLATE_ID_NOT_EXISTS: {
    status_code: 400,
    code: 3026,
    message: 'TemplateId does not exist for this waba number'
  },
  COMPONENTS_COUNT_MISMATCH: {
    status_code: 400,
    code: 3027,
    message: 'Header,footer and body should appear in component only once'
  },
  HEADER_PARAM_MISMATCH: {
    status_code: 400,
    code: 3030,
    message: 'Parameters provided in request and parameters required by template hedaer does not match'
  },
  BODY_PARAM_MISMATCH: {
    status_code: 400,
    code: 3028,
    message: 'Parameters provided in request and parameters required by template body does not match'
  },
  FOOTER_PARAM_MISMATCH: {
    status_code: 400,
    code: 3029,
    message: 'Parameters provided in request and parameters required by template footer does not match'
  },
  LANGUAGE_NOT_APPROVED: {
    status_code: 400,
    code: 3037,
    message: 'Provided language is not approved to be used with this template'
  },
  TEMPLATE_VALID: {
    status_code: 200,
    code: 2055,
    message: 'Template Valid'
  },
  WABA_NO_VALID: {
    status_code: 200,
    code: 2056,
    message: 'WABA number valid'
  },
  WABA_NO_INVALID: {
    status_code: 400,
    code: 3031,
    message: 'Provided WABA number is invalid'
  },
  EXPECT_ARRAY: {
    status_code: 400,
    code: 3032,
    message: 'Expect input in array'
  },
  CANNOT_SEND_MESSAGE: {
    status_code: 200,
    code: 2057,
    message: 'Cannot send message to user, Make sure you have obtained the optin or you have received message form user in last 24 hours'
  },
  LIMIT_EXCEEDED: {
    status_code: 400,
    code: 3033,
    message: 'You\'ve exceeded the allowed limit please try again after some time'
  },
  IDENTIFIER_EXIST: {
    status_code: 200,
    code: 3034,
    message: 'Identifier Text Already Exists.'
  },
  PARENT_IDENTIFIER_NOT_EXIST: {
    status_code: 200,
    code: 3035,
    message: 'Parent Identifier Text Does Not Exists.'
  },
  EMAIL_FORGET_PASSWORD: {
    status_code: 200,
    code: 2001,
    message: 'Link to set new password has been sent on your registered email'
  },
  INVALID_PASS_TOKEN: {
    status_code: 200,
    code: 3036,
    message: 'Invalid token.'
  },
  OPTIN_NOT_SET: {
    status_code: 200,
    code: 3038,
    message: 'optin text not updated.'
  },
  META_DATA_NOT_FOUND: {
    status_code: 200,
    code: 3039,
    message: 'chat metadata not found.'
  },
  META_DATA_NOT_SET: {
    status_code: 200,
    code: 3040,
    message: 'chat metadata not set.'
  },
  EMAIL_OTP: {
    status_code: 200,
    code: 2001,
    message: 'Please check your registered email for one time code'
  },
  SMS_OTP: {
    status_code: 200,
    code: 2001,
    message: 'Please check your registered phone number for one time code'
  },
  TFA_NOT_SETTED_UP: {
    status_code: 200,
    code: 3041,
    message: 'Please Setup 2FA first.'
  },
  INVALID_TFA_TYPE: {
    status_code: 200,
    code: 3042,
    message: 'Invalid tfa type.'
  },
  TFA_ALREADY_SETTED_UP: {
    status_code: 200,
    code: 3043,
    message: '2FA setup already done'
  },
  QRCODE_GEN_ERR: {
    status_code: 200,
    code: 3044,
    message: 'Unable to generate QRcode'
  },
  TEMP_TFA_NOT_FOUND: {
    status_code: 200,
    code: 3045,
    message: 'Authentication method change request not found'
  },
  AUTHENTICATOR_QR_GENERATED: {
    status_code: 200,
    code: 2001,
    message: 'Please scan the QRcode or enter the secret key in authenticator app and then enter the OTP received.'
  },
  AUTHENTICATOR_CHECK_APP: {
    status_code: 200,
    code: 2001,
    message: 'Please check the authenticator app and then enter the OTP received.'
  },
  INVALID_BACKUP_CODE: {
    status_code: 401,
    code: 3046,
    message: 'Invalid backup code'
  },
  ERROR_CALLING_PROVIDER: {
    status_code: 500,
    code: 5005,
    message: 'Something went wrong. Please try again later.'
  },
  CATEGORY_MAPPING_NOT_FOUND: {
    status_code: 500,
    code: 3047,
    message: 'Some error occured'
  },
  CANNOT_CHANGE_STATUS: {
    status_code: 200,
    code: 3048,
    message: 'Status cannot be changed'
  },
  TEMPLATE_DELETED: {
    status_code: 200,
    code: 3048,
    message: 'Template has already been deleted'
  },
  TEMPLATE_DELETE_INITIATED: {
    status_code: 200,
    code: 3047,
    message: 'Template Deletion already intiated'
  },
  STATUS_MAPPING_NOT_FOUND: {
    status_code: 500,
    code: 3049,
    message: 'Some error occured'
  },
  ALL_STATUS_NOT_UPDATED: {
    status_code: 500,
    code: 3050,
    message: 'Some error occured'
  },
  TEMPLATE_SENT_FOR_DELETION: {
    status_code: 204,
    code: 3051,
    message: 'Template has been sent for deletion'
  },
  TEMPLATE_DELETION_ERROR: {
    status_code: 404,
    code: 3052,
    message: 'Error ocurred while template deletion'
  },
  TEMPLATE_NOT_FOUND: {
    status_code: 200,
    code: 3053,
    message: 'Template not found'
  },
  EVALUTAION_CANNOT_BE_PROCEDDED: {
    status_code: 200,
    code: 3061,
    message: 'Evaluation cannot be proceeded as the approval or rejection from support person is not received'
  },
  TEMPLATE_STATUS_ROLLBACK: {
    status_code: 200,
    code: 3054,
    message: 'Template status has been rolled over to previous state'
  },
  TEMPLATE_CANNOT_BE_EDITED: {
    status_code: 200,
    code: 3055,
    message: 'Template cannot be edited in this current status'
  },
  TEMPLATE_CANNOT_BE_ADDED: {
    status_code: 200,
    code: 3056,
    message: 'Template with same name already exists'
  },
  NOT_AUTHORIZED_JWT: {
    status_code: 401,
    code: 4001,
    message: 'Unauthorized'
  },
  WABA_PROFILE_STATUS_CANNOT_BE_CHANGED: {
    status_code: 200,
    code: 3057,
    message: 'Status cannot be changed in current state.'
  },
  WABA_PROFILE_STATUS_CANNOT_BE_UPDATED: {
    status_code: 200,
    code: 3058,
    message: 'Cannot process data in this current profile status.'
  },
  WABA_PROFILE_REJECTION_REASON: {
    status_code: 200,
    code: 3059,
    message: 'Please make sure reason for rejection is added.'
  },
  WABA_PROFILE_STATUS_ID_REQUIRED: {
    status_code: 200,
    code: 3060,
    message: 'Please make sure waba profile status id is entered.'
  },
  FEEDBACK_SUCCESS: {
    status_code: 200,
    code: 3062,
    message: 'Thank you for providing feedback.'
  },
  NO_RECORDS_FOUND_FOR_CATEGORY: {
    status_code: 200,
    code: 3063,
    message: 'No such category found'
  },
  AGREEMENT_STATUS_CANNOT_BE_UPDATED: {
    status_code: 200,
    code: 3064,
    message: 'Agreement status cannot be updated in current state.'
  },
  AGREEMENT_FILE_CANNOT_BE_DOWNLOADED: {
    status_code: 200,
    code: 3065,
    message: 'File cannot be downloaded in current state.'
  },
  AGREEMENT_FILE_CANNOT_BE_VIEWED: {
    status_code: 200,
    code: 3066,
    message: 'Agreement cannot be viewed in current state.'
  },
  WABA_PROFILE_STATUS_ERROR: {
    status_code: 200,
    code: 3067,
    message: 'Please make sure that the waba profile is approved.'
  },
  WABA_INFO_NOT_COMPLETE: {
    status_code: 200,
    code: 3068,
    message: 'Please complete WABA info first'
  },
  LOGOUT: {
    status_code: 200,
    code: 3069,
    message: 'Successfully Logged Out'
  },
  INVALID_TEMPLATE_TYPE: {
    status_code: 200,
    code: 3070,
    message: 'Invalid template type'
  },
  INVALID_PARAMETER_COUNT: {
    status_code: 200,
    code: 3071,
    message: ''
  },
  RCS_AGENT_NOT_CONFIGURED: {
    status_code: 200,
    code: 3072,
    message: 'Please configure rcs agent'
  },
  INVALID_TEMPLATE_COMPONENT: {
    status_code: 200,
    code: 3073,
    message: 'Invalid component'
  },
  STATUS_ADD_FAILED: {
    status_code: 200,
    code: 3074,
    message: 'Failed to add message status / status already added'
  },
  INVALID_PLATFORM: {
    status_code: 200,
    code: 3075,
    message: 'Invalid platform type in config'
  },
  INVALID_METHOD: {
    status_code: 200,
    code: 3076,
    message: 'Invalid method type in config'
  },
  USER_ALREADY_OPTED_IN: {
    status_code: 200,
    code: 3077,
    message: 'This number has already opted-in'
  },
  USER_NOT_OPTED_IN: {
    status_code: 200,
    code: 3078,
    message: 'This number has not opted-in'
  },
  OPTOUT_ERROR: {
    status_code: 200,
    code: 3079,
    message: 'Error Opting out'
  },
  RCS_INCOMPATIBLE: {
    status_code: 200,
    code: 3080,
    message: 'No RCS compatible phone number found'
  },
  PHONE_DOES_NOT_SUPPORT_RCS: {
    status_code: 400,
    code: 3081,
    message: 'This phone number is not RCS compatible'
  },
  GOOGLE_PERMISSION_DENIED: {
    status_code: 403,
    code: 3082,
    message: 'Unauthorised access to google RBM API'
  },
  NO_RECORDS_FOUND_FOR_LANGUAGE: {
    status_code: 200,
    code: 3083,
    message: 'No such language found'
  },
  AGENT_ADDED_TO_POOL: {
    status_code: 200,
    code: 3084,
    message: 'Agent added to the pool succesfully'
  },
  UPDATE_TEMPLATE_LIMIT_EXCEEDED: {
    status_code: 500,
    code: 3085,
    message: 'Max number of template to be updated is exceeded'
  },
  INVALID_AUDIENCE: {
    status_code: 500,
    code: 3086,
    message: 'Invalid audience'
  },
  AUDIENCE_REQUIRED: {
    status_code: 500,
    code: 3087,
    message: 'Please enter atleast one valid audience'
  },
  APPROVED_TEMPLATE_NOT_FOUND: {
    status_code: 500,
    code: 3088,
    message: 'No approved templates found'
  },
  HEADER_HANDLE_NOT_CREATED: {
    status_code: 500,
    code: 3089,
    message: 'Error while submitting template'
  },
  INVALID_EMAIL: {
    status: 400,
    code: 3090,
    message: 'Invalid email'
  },
  USER_BLOCKED: {
    status: 400,
    code: 3091,
    message: 'User is blocked'
  },
  INVALID_PASSWORD: {
    status: 400,
    code: 3092,
    message: 'Password is incorrect'
  },
  INVALID_PHONE: {
    status: 400,
    code: 3093,
    message: 'Phone is incorrect'
  },
  INVALID_NEW_PASSWORD: {
    status: 400,
    code: 3094,
    message: 'New password cannot be same as old password'
  },
  NO_VALID_ROLE_ASSIGNED: {
    status: 400,
    code: 3095,
    message: 'No valid role is assigned to the logged in user'
  },
  SUB_USER_NOT_EXIST: {
    status_code: 400,
    code: 3096,
    message: 'Subuser does not exist'
  },
  ADD_SUBUSER_LIMIT_EXCEEDED: {
    status_code: 400,
    code: 3097,
    message: 'Max number of subusers to be added is exceeded'
  },
  INVALID_ROUTES: {
    status_code: 400,
    code: 3098,
    message: 'Invalid routes'
  },
  USER_ID_IS_NOT_OF_TYPE_STRING: {
    status_code: 400,
    code: 3099,
    message: 'User Id is not of type string'
  },
  SET_PASSWORD_BEFORE_LOGIN: {
    status_code: 200,
    code: 3100,
    message: 'Please set the password using the set password link sent to you before trying to login'
  },
  NO_SESSION_IDS_FOR_FORCE_LOGOUT: {
    status_code: 200,
    code: 3101,
    message: 'There is no open session of the user you are trying to force logout'
  },
  NEW_EMAIL_CANNOT_BE_SAME_AS_OLD: {
    status_code: 200,
    code: 3102,
    message: 'New email cannot be as same old email'
  },
  CANNOT_RESET_SUPPORT_EMAIL_PASSWORD: {
    status_code: 403,
    code: 3103,
    message: "You cannot reset email and password of support's account"
  },
  CANNOT_RESEND_RESET_PASSWORD_FOR_SUPPORT: {
    status_code: 403,
    code: 3104,
    message: 'You cannot resend reset password of supports account'
  },
  INVALID_SIGNUP_SOURCE_IN_HEADERS: {
    status_code: 400,
    code: 3105,
    message: 'Invalid signup source in headers'
  },
  INVALID_ROLE_ID: {
    status_code: 400,
    code: 3106,
    message: 'Invalid role id'
  },
  PROVIDE_UNIQUE_USERIDS: {
    status_code: 400,
    code: 3107,
    message: 'Please provide unique user ids'
  },
  INVALID_USER_IDS: {
    status_code: 400,
    code: 3108,
    message: 'Invalid user ids'
  },
  INVALID_SUBUSER_IDS: {
    status_code: 400,
    code: 3109,
    message: 'Invalid subuser ids'
  },
  INVALID_GROUP_ID: {
    status_code: 400,
    code: 3110,
    message: 'Invalid group id'
  },
  ROLE_IDS_ARE_OF_MULTIPLE_OWNER: {
    status_code: 400,
    code: 3111,
    message: 'Role ids are not of one single owner'
  },
  INVALID_ROLE_IDS: {
    status_code: 400,
    code: 3112,
    message: 'Invalid role ids'
  },
  INVALID_ROLE_OR_GROUP_IDS: {
    status_code: 400,
    code: 3113,
    message: 'Invalid role ids or group ids'
  },
  GROUP_NAME_EXISTS: {
    status_code: 400,
    code: 3114,
    message: 'Group name already exists'
  },
  ROLE_NAME_EXISTS: {
    status_code: 400,
    code: 3115,
    message: 'Role name already exists'
  },
  CANNOT_DELETE_GROUP: {
    status_code: 400,
    code: 3116,
    message: 'Cannot delete group which is not created by you'
  },
  ROLE_IDS_SHOULD_BE_VALID_AND_OF_SAME_USER_TYPE: {
    status_code: 400,
    code: 3117,
    message: 'Role ids should be valid and of same user type'
  },
  INVALID_RESOURCE_ID: {
    status_code: 400,
    code: 3118,
    message: 'Invalid resource id'
  },
  ROUTE_ALREADY_MAPPED_TO_ROLES: {
    status_code: 200,
    code: 3119,
    message: 'Route is already mapped to all the provided role ids'
  },
  GROUP_IDS_SHOULD_BE_VALID_AND_OF_SAME_USER_TYPE: {
    status_code: 400,
    code: 3120,
    message: 'Group ids should be valid and of same user type'
  },
  INVALID_GROUP_IDS: {
    status_code: 400,
    code: 3121,
    message: 'Invalid group ids'
  },
  ROLE_ALREADY_MAPPED_TO_GROUPS: {
    status_code: 200,
    code: 3122,
    message: 'Role is already mapped to all the provided group ids'
  },
  PROVIDE_UNIQUE_GROUPIDS: {
    status_code: 400,
    code: 3123,
    message: 'Please provide unique group ids'
  },
  VERIFICATION_CHANNEL_NOT_CONFIGURED: {
    status_code: 400,
    code: 3124,
    message: 'Verification channel not configured'
  },
  USER_DETAILS_EXIST: {
    status_code: 200,
    code: 3125,
    message: 'user details already exists.'
  },
  SYSTEM_ID_ALREADY_ASSIGNED_TO_RESOURCES: {
    status_code: 400,
    code: 3126,
    message: 'SYSTEM ID IS ALRAEDY ASSIGN TO SOME RESOURCES'
  },
  IDENTIFIER_NOT_PROVIDED: {
    status_code: 400,
    code: 3127,
    message: 'Please provide valid Identifier Text.'
  },
  CANNOT_UPDATE_FLOW_TYPE: {
    status_code: 400,
    code: 3128,
    message: 'Cannot update flow type (mbc to pbc/pbc to mbc).'
  }
}
