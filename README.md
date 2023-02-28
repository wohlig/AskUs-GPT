![](https://www.wohlig.com/_nuxt/img/241480c.png) FrameWork
-------------
#### To Run This Application Follow The Steps Below : 
```sh
$ git clone https://github.com/wohlig/Wohlig-Framework-V2
```
```sh 
$ cd  Wohlig-Framework-V2/
```
>Create a file named `.env` in app_root/config folder and paste the content at the end of this document in newly created file.

```sh
$ npm i
```
```sh
$ npm run develop
```

```sh
NOTES :
Use standard.js for the visual studio i your development environment to maintain the standard of js among all the team members
Below given are the steps for install standard js for VS code
```

#### For Local development :
```sh
Use nodemon in package.json (nodemon server.js)
```
#### Standard Js Installation :
```sh
1. Go to Extensions in your left navigation bar of VS Code
2. Type Standard js in search box
3. Click on Standard js then install it. (It will automatically gets enabled)
```


#### Developement environment .env file :
```sh
Sample .env
NODE_ENV = development
PORT = 3005
BASE_URL = ''
REDIS_INIT = false
REDIS_HOST = localhost
REDIS_NO_READY_CHECK = true
REDIS_AUTH_PASS = 'password'
REDIS_PORT = 6379
REDIS_DB = ''
AUTHENTICATION_INTERNAL_ALLOW = true
APP_NAME = framework
MONGO_INIT = false
MONGO_URL = localhost
APM_ENABLE_APM = false
APM_SERVICE_NAME = framework
APM_SECRET_TOKEN = twW4p9qC4vhYgWstdF
APM_SERVER_URL = https://71e04c24c1db4adf87a5d7d76f6fb555.apm.ap-south-1.aws.elastic-cloud.com:443
APM_ENVIRONMENT = development
APM_LOG_UNCAUGHT_EXCEPTIONS = true
APM_TRANSACTION_SAMPLE_RATE = 0.1
ELASTIC_CLOUD_ID = cloud:ELASTIC_CLOUD_ID
ELASTIC_USERNAME = ELASTIC_USERNAME
ELASTIC_PASSWORD = ELASTIC_PASSWORD
VAULT_ENDPOINT = VAULT_ENDPOINT
VAULT_ROLE_ID = VAULT_ROLE_ID
VAULT_SECRET_ID = VAULT_SECRET_ID
VAULT_PATH = VAULT_PATH
USE_VAULT = false
AUTHENTICATION_JWT_SECRET_KEY = bchvceydfgwfdwydrs
ELASTIC_INIT_USER_ACTIVITY = false
```

#### Docker build command :
```sh
docker buildx build -t github.com/wohlig/wohlig-framework-v2 .
```

