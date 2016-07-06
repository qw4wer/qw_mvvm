/*!
 * built in 2016-7-6:18 by qw4wer
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





	__webpack_require__(2);
	qvvm.fn = {};
	__webpack_require__(3);




	module.exports = qvvm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Created by qw4wer on 2016/7/6.
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by qw4wer on 2016/7/4.
	 */

	var object =  __webpack_require__(4);

	var subscribe = __webpack_require__(6);

	qvvm.fn = object.copy(qvvm.fn,subscribe);

	//Object.defineProperties(qvvm, object.copy(qvvm.fn,subscribe));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by qw4wer on 2016/7/6.
	 */

	var dom = __webpack_require__(5);

	/**
	 * autor: qw4wer
	 * time: 2016/7/6 16:28
	 * disc : 复制对象
	 */
	var copy = function (src, desc, isDeep) {

	    if (typeof src === 'array') {
	        desc = desc || [];
	        return copyArr(src.desc);
	    }

	    if (typeof src === 'object') {
	        desc = desc || {};
	        return copyObj(src, desc);
	    }
	    if (dom.isDom(src)) {
	        return dom.cloneNode(isDeep);
	    }


	    /**
	     * autor: qw4wer
	     * time: 2016/7/6 16:28
	     * disc : 复制数组
	     */
	    function copyArr(src, desc) {
	        src = src || [];
	        desc = desc || [];

	        return Array.prototype.concat.call(src, desc);
	    }

	    /**
	     * autor: qw4wer
	     * time: 2016/7/6 16:27
	     * disc : 深复制对象
	     */
	    function copyObj(src, desc) {
	        src = src || {};
	        desc = desc || {};
	        for (var key in src) {
	            desc[key] = typeof src[key] === 'object' ? copyObj(src[key]) : src[key];
	        }
	        return desc;
	    }
	}

	module.exports = {copy: copy};



/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/6.
	 */
	/**
	* autor: qw4wer
	* time: 2016/7/6 17:43
	* disc : 判断是否为dom对象
	*/
	var isDom = ( typeof HTMLElement === 'object' ) ?
	    function (obj) {
	        return obj instanceof HTMLElement;
	    } :
	    function (obj) {
	        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
	    }

	module.exports = {isDom: isDom};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/4.
	 */
	/**
	 * autor: qw4wer
	 * time: 2016/7/6 11:41
	 * disc : 观测者
	 */
	function Observer() {
	}

	/**
	 * autor: qw4wer
	 * time: 2016/7/6 11:37
	 * disc : 生成访问器
	 */
	function makeAccessor() {
	    var old = NaN;

	    return {
	        get: function () {
	            return old;
	        },
	        set: function (val) {
	            if (val === old) {
	                return;
	            }
	            old = val;

	        },
	        enumerable: true,
	        configurable: true
	    }
	}
	/**
	 * autor: qw4wer
	 * time: 2016/7/6 11:33
	 * disc : 工厂方法
	 */
	function factory(definition) {
	    var key, accesses = [];
	    for (key in definition) {
	        accesses[key] = makeAccessor();
	    }
	    var $vmodel = new Observer();

	    Object.defineProperties($vmodel, accesses);

	    for(key in definition){
	        $vmodel[key]=definition[key];
	    }

	    return $vmodel;
	}
	module.exports = {
	    makeAccessor: makeAccessor,
	    factory: factory
	};

/***/ }
/******/ ]);