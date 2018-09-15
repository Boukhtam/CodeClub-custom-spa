module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code.club.js":
/*!**********************!*\
  !*** ./code.club.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/setup */ \"./server/setup.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations/env.vars */ \"./configurations/env.vars.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//Setup mongoose connection\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useCreateIndex', true);\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useFindAndModify', false);\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(`${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_dialect\"]}://${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_host\"]}:${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_port\"]}/${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_name\"]}`, { useNewUrlParser: true });\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nconst db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\ndb.on('open', console.info.bind(console, 'mongoose connected ...')).on('error', console.error.bind(console, 'mongoose connection error:'));\n\n_server_setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"port\"], err => {\n    if (err) console.log(err);\n    console.info('Server started on port: %s.', _configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"port\"]);\n});\n\n//# sourceURL=webpack:///./code.club.js?");

/***/ }),

/***/ "./configurations/env.vars.js":
/*!************************************!*\
  !*** ./configurations/env.vars.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nmodule.exports = {\n    app: process.env.APP || 'dev',\n    port: process.env.PORT || '1337',\n    db_dialect: process.env.DB_DIALECT || 'mongodb',\n    db_host: process.env.DB_HOST || 'localhost',\n    db_port: process.env.DB_PORT || '27017',\n    db_name: process.env.DB_NAME || 'CodeClub',\n    db_user: process.env.DB_USER || 'root',\n    db_password: process.env.DB_PASSWORD || 'password',\n    jwt_encryption: process.env.JWT_ENCRYPTION || 'BLALBLA',\n    jwt_expiration: process.env.JWT_EXPIRATION || 1000 * 60 * 60 * 24 * 7,\n    session_encryption: 'secret',\n    session_expiration: 1000 * 60, // one min\n    cookie_encryption: 'secret',\n    cookie_name: 'session_id'\n};\n\n//# sourceURL=webpack:///./configurations/env.vars.js?");

/***/ }),

/***/ "./configurations/hbs.config.js":
/*!**************************************!*\
  !*** ./configurations/hbs.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_handlebars__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst hbs = express_handlebars__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    extname: \"hbs\",\n    defaultLayout: \"layout\",\n    layoutsDir: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, './views/layouts'),\n    partialsDir: [path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, './views/partials'), path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(CURRENT_WORKING_DIR, './views/shared')],\n    helpers: {}\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hbs);\n\n//# sourceURL=webpack:///./configurations/hbs.config.js?");

/***/ }),

/***/ "./configurations/passport.config.js":
/*!*******************************************!*\
  !*** ./configurations/passport.config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/utils.service */ \"./services/utils.service.js\");\n/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models */ \"./models/index.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../configurations/env.vars */ \"./configurations/env.vars.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_local__WEBPACK_IMPORTED_MODULE_1__[\"Strategy\"]({\n  usernameField: 'unique_key',\n  passwordField: 'password'\n}, async (unique_key, password, done) => {\n  let auth_info = {};\n  auth_info.status = 'login';\n\n  if (!unique_key) return done(null, false, { message: 'Please enter an email or a phone number to login' });\n\n  if (!password) done(null, false, { message: 'Please enter a password to login' });\n\n  let err, user, pass;\n  if (validator__WEBPACK_IMPORTED_MODULE_3___default.a.isEmail(unique_key)) {\n    auth_info.method = 'email';\n    console.log(unique_key);\n\n    [err, user] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__[\"to\"])(_models__WEBPACK_IMPORTED_MODULE_5__[\"UserModel\"].findOne({ \"email\": unique_key }));\n    if (err) return done(err);\n\n    if (!user) return done(null, false, { message: 'Incorrect email.' });\n  } else if (validator__WEBPACK_IMPORTED_MODULE_3___default.a.isMobilePhone(unique_key, 'any')) {\n    //checks if only phone number was sent\n    auth_info.method = 'phone';\n\n    [err, user] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__[\"to\"])(_models__WEBPACK_IMPORTED_MODULE_5__[\"UserModel\"].findOne({ \"phone\": unique_key }));\n    if (err) done(err);\n    if (!user) return done(null, false, { message: 'Incorrect phone number.' });\n  } else {\n    return done(null, false, { message: 'Invalid email or phone number.' });\n  }\n\n  if (user.isLocked) {\n    [err] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__[\"to\"])(user.incLoginAttempts());\n    if (err) TE(err);\n\n    return done(null, false, { message: 'Max attempts: ' + user.lockUntil });\n  };\n\n  [err, pass] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__[\"to\"])(user.comparePassword(password));\n\n  if (err) done(err);\n\n  if (pass) {\n    if (!user.loginAttempts && !user.lockUntil) return done(null, user);\n\n    var updates = {\n      $set: { loginAttempts: 0 },\n      $unset: { lockUntil: 1 }\n    };\n\n    [err, up] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__[\"to\"])(user.update(updates));\n    if (err) return done(err);\n    return done(null, user);\n  }\n\n  user.incLoginAttempts();\n  return done(null, false, { message: 'Incorrect password.' });\n}));\n\nlet opts = {};\nopts.jwtFromRequest = passport_jwt__WEBPACK_IMPORTED_MODULE_2__[\"ExtractJwt\"].fromAuthHeaderAsBearerToken();\nopts.secretOrKey = _configurations_env_vars__WEBPACK_IMPORTED_MODULE_6___default.a.jwt_encryption;\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_2__[\"Strategy\"](opts, async function (jwt_payload, done) {\n  let err, user;\n  [err, user] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_4__[\"to\"])(_models__WEBPACK_IMPORTED_MODULE_5__[\"UserModel\"].findById(jwt_payload.user_id));\n  if (err) return done(err, false);\n  if (user) {\n    return done(null, user);\n  } else {\n    return done(null, false);\n  }\n}));\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.serializeUser(function (user, done) {\n  done(null, user.id);\n});\n\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.deserializeUser(function (id, done) {\n  _models__WEBPACK_IMPORTED_MODULE_5__[\"UserModel\"].findById(id, function (err, user) {\n    done(err, user);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  // Passport init\n  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default.a.initialize());\n  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default.a.session());\n  console.log('passport loaded...');\n  // return app;\n});\n\n//# sourceURL=webpack:///./configurations/passport.config.js?");

/***/ }),

/***/ "./controllers/index.js":
/*!******************************!*\
  !*** ./controllers/index.js ***!
  \******************************/
/*! exports provided: userController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.controller */ \"./controllers/user.controller.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"userController\", function() { return _user_controller__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n//# sourceURL=webpack:///./controllers/index.js?");

/***/ }),

/***/ "./controllers/user.controller.js":
/*!****************************************!*\
  !*** ./controllers/user.controller.js ***!
  \****************************************/
/*! exports provided: create, registerInterstitial, confirmEmail, get, update, remove, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerInterstitial\", function() { return registerInterstitial; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmEmail\", function() { return confirmEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/utils.service */ \"./services/utils.service.js\");\n/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_utils_service__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ \"./services/auth.service.js\");\n\n\n\n\nconst create = async (req, res) => {\n    res.setHeader('Content-Type', 'application/json');\n    const userData = req.body;\n\n    if (!userData.unique_key && !userData.email && !userData.phone) {\n        return Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_0__[\"ReE\"])(res, 'Please enter an email or phone number to register.');\n    } else if (!userData.password) {\n        return Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_0__[\"ReE\"])(res, 'Please entre a password');\n    } else {\n        let err, newUser;\n\n        [err, newUser] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_0__[\"to\"])(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"](userData));\n        if (err) return Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_0__[\"ReE\"])(res, err, 422);\n\n        Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_0__[\"ReS\"])(res, { message: 'Successfully created new user.', user: newUser.toWeb(), token: newUser.getJWT() }, 201);\n    }\n};\n\nconst registerInterstitial = async (req, res) => {};\n\nconst confirmEmail = async (req, res) => {};\n\nconst get = async (req, res) => {};\n\nconst update = async (req, res) => {};\n\nconst remove = async (req, res) => {};\n\nconst login = async (req, res) => {\n    console.log(req.query);\n\n    if (!req.user && req.info) {\n        res.statusCode = 401;\n        return res.json(req.info);\n    };\n\n    // res.statusCode = 200;\n    return res.json({\n        token: req.user.getJWT(),\n        user: req.user.toWeb()\n    });\n};\n\n\n\n//# sourceURL=webpack:///./controllers/user.controller.js?");

/***/ }),

/***/ "./middlewares/auth.middleware.js":
/*!****************************************!*\
  !*** ./middlewares/auth.middleware.js ***!
  \****************************************/
/*! exports provided: authenticateLocal, ensureAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticateLocal\", function() { return authenticateLocal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureAuthenticated\", function() { return ensureAuthenticated; });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst authenticateLocal = (req, res, next) => {\n    passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('local', (err, user, info) => {\n        if (err) return next(err);\n\n        if (!user) {\n            req.info = info;\n            return next();\n        }\n\n        req.logIn(user, err => {\n            if (err) return next(err);\n            return next();\n        });\n    })(req, res, next);\n};\n\nconst ensureAuthenticated = (req, res, next) => {\n    if (req.isAuthenticated()) {\n        return next();\n    } else {}\n};\n\n\n\n//# sourceURL=webpack:///./middlewares/auth.middleware.js?");

/***/ }),

/***/ "./middlewares/hbs.middleware.js":
/*!***************************************!*\
  !*** ./middlewares/hbs.middleware.js ***!
  \***************************************/
/*! exports provided: exposeTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exposeTemplates\", function() { return exposeTemplates; });\n/* harmony import */ var _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../configurations/hbs.config */ \"./configurations/hbs.config.js\");\n\n\nconst exposeTemplates = (req, res, next) => {\n    // Uses the `ExpressHandlebars` instance to get the **precompiled**\n    // templates which will be shared with the client-side of the app.\n    _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTemplates('views/shared/', {\n        // cache      : app.enabled('view cache'),\n        precompiled: true\n    }).then(function (templates) {\n        // RegExp to remove the \".handlebars\" extension from the template names.\n        const extRegex = new RegExp(_configurations_hbs_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extname + '$');\n\n        // Creates an array of templates which are exposed via\n        // `res.locals.templates`.\n        templates = Object.keys(templates).map(function (name) {\n            return {\n                name: name.replace(extRegex, ''),\n                template: templates[name]\n            };\n        });\n\n        // Exposes the templates during view rendering.\n        if (templates.length) {\n            res.locals.templates = templates;\n        }\n\n        setImmediate(next);\n    }).catch(next);\n};\n\n\n\n//# sourceURL=webpack:///./middlewares/hbs.middleware.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ \"./models/user.model.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UserModel\", function() { return _user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n// import ArticleModel from './article.model'\n// import CommentModel from './comment.model'\n\n\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/utils.service */ \"./services/utils.service.js\");\n/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../configurations/env.vars */ \"./configurations/env.vars.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nconst ObjectId = Schema.Types.ObjectId;\nconst MAX_LOGIN_ATTEMPTS = 5;\nconst LOCK_TIME = /*2 * 60 * */60 * 1000;\n\nlet UserSchema = new Schema({\n    username: { type: String },\n    first_name: { type: String },\n    last_name: { type: String },\n    email: {\n        type: String,\n        lowercase: true, trim: true, index: true, unique: true, sparse: true\n    },\n    phone: { type: String, lowercase: true, trim: true, index: true, unique: true, sparse: true },\n    password: { type: String },\n\n    admin: { type: Boolean, default: false },\n\n    places: [{ type: ObjectId }],\n\n    scopes: [{ type: String }],\n    loginAttempts: { type: Number, required: true, default: 0 },\n    lockUntil: { type: Number }\n}, { timestamps: true });\n\nUserSchema.virtual('full_name').set(name => {\n    let sp = name.split(' ');\n    _this.first_name = sp[0];\n    _this.last_name = sp[1];\n}).get(function () {\n    if (!this.first_name) return null;\n    if (!this.last_name) return this.first_name;\n\n    return this.first_name + ' ' + this.last_name;\n});\n\nUserSchema.virtual('isLocked').get(function () {\n    return !!(this.lockUntil && this.lockUntil > Date.now());\n});\n\nUserSchema.pre('save', async function (next) {\n    var user = this;\n\n    // only hash the password if it has been modified (or is new)\n    if (!user.isModified('password') || !user.isNew) return next();\n    // generate a salt\n    let err, salt, hash;\n\n    [err, salt] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"to\"])(bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10));\n    if (err) Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"TE\"])(err);\n\n    [err, hash] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"to\"])(bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(user.password, salt));\n    if (err) Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"TE\"])(err);\n\n    user.password = hash;\n    next();\n});\n\nUserSchema.methods.comparePassword = async function (pw) {\n    let err, pass;\n    if (!this.password) Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"TE\"])('password not set');\n\n    [err, pass] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"to\"])(bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(pw, this.password));\n\n    if (err) Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"TE\"])(err);\n\n    return pass;\n};\n\nUserSchema.methods.incLoginAttempts = async function (callback) {\n    // if we have a previous lock that has expired, restart at 1\n    let err, user;\n    if (this.lockUntil && this.lockUntil < Date.now()) {\n\n        [err, user] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"to\"])(this.update({\n            $set: { loginAttempts: 1 },\n            $unset: { lockUntil: 1 }\n        }));\n\n        if (err) Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"TE\"])('lakh...');\n\n        return user;\n    }\n    // otherwise we're incrementing\n    var updates = { $inc: { loginAttempts: 1 } };\n    // lock the account if we've reached max attempts and it's not locked already\n    if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {\n        updates.$set = { lockUntil: Date.now() + LOCK_TIME };\n    }\n\n    [err, user] = await Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"to\"])(this.update(updates));\n\n    if (err) Object(_services_utils_service__WEBPACK_IMPORTED_MODULE_3__[\"TE\"])(err);\n    return user;\n};\n\nUserSchema.methods.getJWT = function () {\n    let expiration_time = parseInt(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_4___default.a.jwt_expiration);\n    return 'Bearer ' + jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__[\"sign\"]({ user_id: this.id }, _configurations_env_vars__WEBPACK_IMPORTED_MODULE_4___default.a.jwt_encryption, { expiresIn: expiration_time });\n};\n\nUserSchema.methods.toWeb = function () {\n    let json = this.toJSON();\n    let userData = {};\n\n    if (json.email) userData.email = json.email;\n    if (json.phone) userData.phone = json.phone;\n    if (json.first_name) userData.first_name = json.first_name;\n    if (json.last_name) userData.last_name = json.last_name;\n\n    return userData;\n};\n\nvar reasons = UserSchema.statics.failedLogin = {\n    NOT_FOUND: 0,\n    PASSWORD_INCORRECT: 1,\n    MAX_ATTEMPTS: 2\n};\n\nUserSchema.statics.getAuthenticated = function (username, password, callback) {\n    this.findOne({ username: username }, function (err, user) {\n        if (err) return callback(err);\n\n        if (!user) return callback(null, null, reasons.NOT_FOUND);\n\n        if (user.isLocked) {\n            return user.incLoginAttempts(function (err) {\n                if (err) return callback(err);\n\n                return callback(null, null, reasons.MAX_ATTEMPTS);\n            });\n        }\n\n        user.comparePassword(password, function (err, isMatch) {\n            if (err) callback(err);\n\n            if (isMatch) {\n                if (!user.loginAttempts && !user.lockUntil) return callback(null, user);\n\n                var updates = {\n                    $set: { loginAttempts: 0 },\n                    $unset: { lockUntil: 1 }\n                };\n                return user.update(updates, function (err) {\n                    if (err) return callback(err);\n                    return callback(null, user);\n                });\n            }\n\n            user.incLoginAttempts(function (err) {\n                if (err) return callback(err);\n\n                return callback(null, null, reasons.PASSWORD_INCORRECT);\n            });\n        });\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./models/user.model.js?");

/***/ }),

/***/ "./routes/articles.route.js":
/*!**********************************!*\
  !*** ./routes/articles.route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controllers */ \"./controllers/index.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../middlewares/auth.middleware */ \"./middlewares/auth.middleware.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// router.use()\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/articles.route.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.route */ \"./routes/users.route.js\");\n/* harmony import */ var _articles_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.route */ \"./routes/articles.route.js\");\n/* harmony import */ var _main_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.route */ \"./routes/main.route.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n\n    app.use('/', _main_route__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    app.use('/users', _users_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    app.use('/articles', _articles_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./routes/main.route.js":
/*!******************************!*\
  !*** ./routes/main.route.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../middlewares/auth.middleware */ \"./middlewares/auth.middleware.js\");\n/* harmony import */ var _middlewares_hbs_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../middlewares/hbs.middleware */ \"./middlewares/hbs.middleware.js\");\n/* harmony import */ var _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../configurations/hbs.config */ \"./configurations/hbs.config.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// router.use()\n\nrouter.get('/', _middlewares_hbs_middleware__WEBPACK_IMPORTED_MODULE_3__[\"exposeTemplates\"], (req, res) => {\n    res.render('CodeClub', {\n        layout: false\n    });\n});\n\nrouter.get('/t', (req, res) => {\n    _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getTemplate('views/shared/shell.hbs', {\n        precompiled: false\n    }).then(template => {\n        res.json(template);\n    });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/main.route.js?");

/***/ }),

/***/ "./routes/users.route.js":
/*!*******************************!*\
  !*** ./routes/users.route.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controllers */ \"./controllers/index.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../middlewares/auth.middleware */ \"./middlewares/auth.middleware.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// router.use()\nrouter.post('/register', _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].create);\nrouter.post('/login', _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authenticateLocal\"], _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].login);\n\nrouter.get('/', passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', { session: false }), _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].get);\nrouter.put('/', passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', { session: false }), _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].update);\nrouter.delete('/', passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', { session: false }), _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].remove);\n\nrouter.post('/complete', _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].registerInterstitial);\nrouter.get('/confirm/:code', _controllers__WEBPACK_IMPORTED_MODULE_2__[\"userController\"].confirmEmail);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/users.route.js?");

/***/ }),

/***/ "./server/dev.bundle.js":
/*!******************************!*\
  !*** ./server/dev.bundle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst compile = app => {\n    if (true) {\n        const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a);\n        const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n            publicPath: _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n        });\n        app.use(middleware);\n        app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    compile\n});\n\n//# sourceURL=webpack:///./server/dev.bundle.js?");

/***/ }),

/***/ "./server/setup.js":
/*!*************************!*\
  !*** ./server/setup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../configurations/hbs.config */ \"./configurations/hbs.config.js\");\n/* harmony import */ var _configurations_passport_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../configurations/passport.config */ \"./configurations/passport.config.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ \"./routes/index.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../configurations/env.vars */ \"./configurations/env.vars.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _dev_bundle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dev.bundle */ \"./server/dev.bundle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_2___default()(express_session__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n // To be commented out on production\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_dev_bundle__WEBPACK_IMPORTED_MODULE_14__[\"default\"].compile(app); // To be commented out on production\n\n// view engine setup\napp.set('views', path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(CURRENT_WORKING_DIR, './views'));\napp.engine('hbs', _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].engine);\napp.set('view engine', 'hbs');\n\n// middlewares \napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: true }));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_13___default.a.cookie_encryption));\napp.use(compression__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(CURRENT_WORKING_DIR, './public')));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({\n    store: new MongoStore({ mongooseConnection: mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connection }),\n    secret: _configurations_env_vars__WEBPACK_IMPORTED_MODULE_13___default.a.session_encryption,\n    name: _configurations_env_vars__WEBPACK_IMPORTED_MODULE_13___default.a.cookie_name,\n    cookie: { maxAge: _configurations_env_vars__WEBPACK_IMPORTED_MODULE_13___default.a.session_expiration },\n    resave: false,\n    saveUninitialized: true\n}));\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_9___default()('dev'));\n\nObject(_configurations_passport_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(app);\nObject(_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(app);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/setup.js?");

/***/ }),

/***/ "./services/auth.service.js":
/*!**********************************!*\
  !*** ./services/auth.service.js ***!
  \**********************************/
/*! exports provided: createUser, authenticateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticateUser\", function() { return authenticateUser; });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { UserModel } = __webpack_require__(/*! ./../models */ \"./models/index.js\");\nconst { to, TE } = __webpack_require__(/*! ./../services/utils.service */ \"./services/utils.service.js\");\n\nconst getUniqueKeyFromBody = userData => {\n    let unique_key = userData.unique_key;\n\n    if (typeof userData.email != 'undefined') {\n        unique_key = userData.email;\n    } else if (typeof userData.phone != 'undefined') {\n        unique_key = userData.phone;\n    } else {\n        unique_key = null;\n    }\n    return unique_key;\n};\n\nconst createUser = async userData => {\n    let auth_info, unique_key, err, user;\n\n    auth_info = {};\n    auth_info.status = 'create';\n\n    unique_key = getUniqueKeyFromBody(userData);\n\n    if (!unique_key) throw new Error('Please entre an email or a phone number');\n\n    if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(unique_key)) {\n        auth_info.method = 'email';\n        userData.email = unique_key;\n\n        [err, user] = await to(UserModel.create(userData));\n\n        if (err) TE('user already exists with that email.');\n\n        return user;\n    } else if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isMobilePhone(unique_key, 'any')) {\n        auth_info.method = 'phone';\n        userData.phone = unique_key;\n\n        [err, user] = await to(UserModel.create(userData));\n        console.log(err);\n\n        if (err) TE('user already exists with that phone number');\n\n        return user;\n    } else {\n        TE('A valid email or phone number was not entered.');\n    }\n};\n\nconst authenticateUser = async userData => {\n    let unique_key;\n    let auth_info = {};\n    auth_info.status = 'login';\n    unique_key = getUniqueKeyFromBody(userData);\n\n    if (!unique_key) TE('Please enter an email or phone number to login');\n\n    if (!userData.password) TE('Please enter a password to login');\n\n    let err, user;\n    if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isAlphanumeric(unique_key)) {\n        auth_info.method = 'username';\n\n        [err, user] = await to(UserModel.findOne({ \"username\": unique_key }));\n\n        if (!user) TE('Not registered');\n        if (err) TE(err.message);\n    } else if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(unique_key)) {\n        auth_info.method = 'email';\n        console.log(unique_key);\n\n        [err, user] = await to(UserModel.findOne({ \"email\": unique_key }));\n\n        if (!user) TE('Not registered');\n        if (err) TE(err.message);\n    } else if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isMobilePhone(unique_key, 'any')) {\n        //checks if only phone number was sent\n        auth_info.method = 'phone';\n\n        [err, user] = await to(UserModel.findOne({ \"phone\": unique_key }));\n        if (err) TE(err.message);\n    } else {\n        TE('A valid email or phone number was not entered');\n    }\n\n    if (user.isLocked) {\n        [err] = await to(user.incLoginAttempts());\n        if (err) TE(err);\n\n        TE('Max attempts: ' + user.lockUntil);\n    };\n\n    [err, pass] = await to(user.comparePassword(userData.password));\n\n    if (err) TE(err.message);\n\n    if (pass) {\n        if (!user.loginAttempts && !user.lockUntil) return user;\n\n        var updates = {\n            $set: { loginAttempts: 0 },\n            $unset: { lockUntil: 1 }\n        };\n        [err, up] = await to(user.update(updates));\n        if (err) TE(err);\n        return user;\n    }\n\n    [err] = await to(user.incLoginAttempts());\n    if (err) TE(err);\n    TE('Invalid password');\n\n    // return user;\n};\n\n\n\n//# sourceURL=webpack:///./services/auth.service.js?");

/***/ }),

/***/ "./services/utils.service.js":
/*!***********************************!*\
  !*** ./services/utils.service.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { to } = __webpack_require__(/*! await-to-js */ \"await-to-js\");\nconst pe = __webpack_require__(/*! parse-error */ \"parse-error\");\n\nmodule.exports.to = async promise => {\n    let err, res;\n\n    [err, res] = await to(promise);\n    if (err) return [pe(err)];\n\n    return [null, res];\n};\n\nmodule.exports.ReE = function (res, err, code) {\n    if (typeof code !== 'undefined') res.statusCode = code;\n\n    return res.json({ error: err });\n};\n\nmodule.exports.ReS = function (res, data, code) {\n    // Success Web Response\n    let send_data = { success: true };\n\n    if (typeof data == 'object') {\n        send_data = Object.assign(data, send_data); //merge the objects\n    }\n\n    if (typeof code !== 'undefined') res.statusCode = code;\n\n    return res.json(send_data);\n};\n\nmodule.exports.TE = TE = function (err_message, log) {\n    // TE stands for Throw Error\n    if (log === true) {\n        console.error(err_message);\n    }\n\n    throw new Error(err_message);\n};\n\n//# sourceURL=webpack:///./services/utils.service.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: \"eval-source-map\",\n    entry: [path.join(CURRENT_WORKING_DIR, \"source/code.club.js\")],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, \"public/js\"),\n        filename: \"code.club.js\",\n        publicPath: \"/public/js\"\n    },\n    resolve: {\n        alias: {\n            handlebars: 'handlebars/dist/handlebars.min.js'\n        }\n    }\n};\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./code.club.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\programming\\2018\\code-club-custom-spa\\code.club.js */\"./code.club.js\");\n\n\n//# sourceURL=webpack:///multi_./code.club.js?");

/***/ }),

/***/ "await-to-js":
/*!******************************!*\
  !*** external "await-to-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"await-to-js\");\n\n//# sourceURL=webpack:///external_%22await-to-js%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");\n\n//# sourceURL=webpack:///external_%22connect-mongo%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-handlebars\");\n\n//# sourceURL=webpack:///external_%22express-handlebars%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "parse-error":
/*!******************************!*\
  !*** external "parse-error" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"parse-error\");\n\n//# sourceURL=webpack:///external_%22parse-error%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });