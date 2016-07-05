/*!
 * built in 2016-7-5:14 by qw4wer
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by qw4wer on 2016/7/4.
	 */

	var subscribe = __webpack_require__(2);

	qvvm = __webpack_require__(3);

	qvvm.fn = subscribe.f2;


	module.exports = qvvm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/4.
	 */

	function test(){

	    console.log(10);
	}

	function f2(){
	    console.log('f2')
	}



	module.exports={
	    test:test,
	    f2:f2
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Created by qw4wer on 2016/7/4.
	 */

	function qvvm(el) {
	    return new qvvm.init(el);
	}

	global.qvvm = qvvm;
	if (typeof window !== 'undefined') {
	    window.qvvm = qvvm;
	}

	qvvm.init = function (el) {
	    this[0] = this.element = el;
	}

	module.exports = qvvm;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);