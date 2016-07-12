/*!
 * built in 2016-7-12:10 by qw4wer
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

	__webpack_require__(6);




	module.exports = qvvm;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Created by qw4wer on 2016/7/6.
	 */

	var object = __webpack_require__(3);

	var config = __webpack_require__(5);


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

	qvvm.fn = qvvm.prototype = qvvm.init.prototype

	object.copy(qvvm, {
	    fn: {},
	    vmodules: [],
	    flag: 'vm-controller',
	    config: config

	}, false, true);



	module.exports = qvvm;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by qw4wer on 2016/7/6.
	 */

	var dom = __webpack_require__(4);

	/**
	 * autor: qw4wer
	 * time: 2016/7/6 16:28
	 * disc : 复制对象
	 */
	var copy = function (src, desc, isDeep, isCover) {

	    if (typeof src === 'array') {
	        desc = desc || [];
	        return copyArr(src.desc);
	    }

	    if (typeof src === 'object' || typeof src === 'function') {
	        desc = desc || {};
	        if (isCover)
	            return copyCover(src, desc);
	        return copyObj(src, desc, isCover);
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

	    function copyCover(src, desc) {
	        src = src || {};
	        desc = desc || {};
	        for (var key in desc) {
	            src[key] = typeof desc[key] === 'object' ? copyObj(desc[key]) : desc[key];
	        }
	    }
	}

	module.exports = {copy: copy};



/***/ },
/* 4 */
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
	    };


	module.exports = {isDom: isDom};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * autor: qw4wer
	 * time: 2016/7/11 10:19
	 * disc :配置信息
	 */


	var config = {
	    debug: true

	};

	module.exports = config;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * autor: qw4wer
	 * time: 2016/7/7 10:41
	 * disc : 初始化方法
	 */
	var object = __webpack_require__(3);

	var invok = __webpack_require__(10);

	var subscribe = __webpack_require__(7);

	var scan = __webpack_require__(8);

	var define = __webpack_require__(9);

	var arr = [
	    __webpack_require__(3),
	    __webpack_require__(10),
	    __webpack_require__(7),
	    __webpack_require__(8),
	    __webpack_require__(9)
	];

	for(var i=0,a;a=arr[i++];){
	    object.copy(qvvm.fn,a,false,true);
	}

	//qvvm.fn = object.copy(qvvm.fn, subscribe);
	//qvvm.fn = object.copy(qvvm.fn, object);
	//qvvm.fn = object.copy(qvvm.fn, {scan: scan});
	//qvvm.fn = object.copy(qvvm.fn, {define: define});

	qvvm.prototype = qvvm.init.prototype = qvvm.fn;

	//qvvm.prototype = {a:function(){console.log('a')}};

/***/ },
/* 7 */
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/8.
	 */
	/**
	 * autor: qw4wer
	 * time: 2016/7/8 17:43
	 * disc : 扫描并初始化
	 */
	var scan = function (nodes) {
	    for (var i = 0, e; e = nodes[i++];) {
	        if (e.nodeType === 1) {
	            var id = e.getAttribute(qvvm.flag);
	            var vm = qvvm.vmodules[id];
	            if (vm) {
	                vm.$e = e;

	            } else if (!$id) {
	                scan(e.childNodes);
	            }
	        }
	    }

	}


	module.exports = {
	    sacn: function (a) {
	        if (!a || !a.nodeType)
	            return;
	        return scan([a]);
	    }
	};




/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * autor: qw4wer
	 * time: 2016/7/8 17:41
	 * disc :
	 */

	var define = function (definition) {
	    var $id = definition.$id;

	    if (qvvm.vmodules[$id]) {
	        return;
	    }

	    var vm = qvvm.fn.factory(definition);
	    return qvvm.vmodules[$id] = vm;

	}

	module.exports = {define: define};

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/12.
	 */


	var noop = function () {
	};
	var invok = function (list, fn) {
	    fn.apply(noop, list);
	}


	module.exports = {
	    noop: noop,
	    invok: invok
	};


/***/ }
/******/ ]);