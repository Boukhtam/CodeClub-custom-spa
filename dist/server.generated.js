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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/setup */ \"./server/setup.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations/env.vars */ \"./configurations/env.vars.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//Setup mongoose connection\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(`${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_dialect\"]}://${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_host\"]}:${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_port\"]}/${_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"db_name\"]}`, { useNewUrlParser: true });\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nconst db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\ndb.on('open', console.info.bind(console, 'mongoose connected ...')).on('error', console.error.bind(console, 'mongoose connection error:'));\n\n_server_setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"port\"], err => {\n    if (err) console.log(err);\n    console.info('Server started on port: %s.', _configurations_env_vars__WEBPACK_IMPORTED_MODULE_2__[\"port\"]);\n});\n\n//# sourceURL=webpack:///./code.club.js?");

/***/ }),

/***/ "./configurations/env.vars.js":
/*!************************************!*\
  !*** ./configurations/env.vars.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nmodule.exports = {\n    app: process.env.APP || 'dev',\n    port: process.env.PORT || '3000',\n    db_dialect: process.env.DB_DIALECT || 'mongodb',\n    db_host: process.env.DB_HOST || 'localhost',\n    db_port: process.env.DB_PORT || '27017',\n    db_name: process.env.DB_NAME || 'PharmaZone',\n    db_user: process.env.DB_USER || 'root',\n    db_password: process.env.DB_PASSWORD || 'password',\n    jwt_encryption: process.env.JWT_ENCRYPTION || 'BLALBLA',\n    jwt_expiration: process.env.JWT_EXPIRATION || 1000 * 60 * 60 * 24 * 7,\n    session_encryption: 'secret',\n    session_expiration: 1000 * 60, // one min\n    cookie_encryption: 'secret',\n    cookie_name: 'session_id'\n};\n\n//# sourceURL=webpack:///./configurations/env.vars.js?");

/***/ }),

/***/ "./configurations/hbs.config.js":
/*!**************************************!*\
  !*** ./configurations/hbs.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_handlebars__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst hbs = express_handlebars__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    extname: \"hbs\",\n    defaultLayout: \"layout\",\n    layoutsDir: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, './../views/layouts'),\n    partialsDir: [path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, './../views/partials'), path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, './views/shared')],\n    helpers: {}\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hbs);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./configurations/hbs.config.js?");

/***/ }),

/***/ "./server/setup.js":
/*!*************************!*\
  !*** ./server/setup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../configurations/hbs.config */ \"./configurations/hbs.config.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../configurations/env.vars */ \"./configurations/env.vars.js\");\n/* harmony import */ var _configurations_env_vars__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n// import passport from './../configurations/passport.config'\n// import routes from '../routes'\n\n\nconst MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_2___default()(express_session__WEBPACK_IMPORTED_MODULE_1___default.a);\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// view engine setup\napp.set('views', path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, './../views'));\napp.engine('hbs', _configurations_hbs_config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].engine);\napp.set('view engine', 'hbs');\n\n// middlewares \napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: true }));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()(_configurations_env_vars__WEBPACK_IMPORTED_MODULE_11___default.a.cookie_encryption));\napp.use(compression__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, '../public')));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({\n    store: new MongoStore({ mongooseConnection: mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connection }),\n    secret: _configurations_env_vars__WEBPACK_IMPORTED_MODULE_11___default.a.session_encryption,\n    name: _configurations_env_vars__WEBPACK_IMPORTED_MODULE_11___default.a.cookie_name,\n    cookie: { maxAge: _configurations_env_vars__WEBPACK_IMPORTED_MODULE_11___default.a.session_expiration },\n    resave: false,\n    saveUninitialized: true\n}));\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_9___default()('dev'));\n\n// passport(app);\n// routes(app);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/setup.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./code.club.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! e:\\programming\\2018\\code-club-custom-spa\\code.club.js */\"./code.club.js\");\n\n\n//# sourceURL=webpack:///multi_./code.club.js?");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });