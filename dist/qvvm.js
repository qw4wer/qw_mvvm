/*!
 * built in 2016-7-19:11 by qw4wer
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






	__webpack_require__(3);

	__webpack_require__(2);




	module.exports = qvvm;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * autor: qw4wer
	 * time: 2016/7/7 10:41
	 * disc : 初始化方法
	 */


	var arr = [
	    __webpack_require__(8),
	    __webpack_require__(9),
	    __webpack_require__(10),
	    __webpack_require__(4),
	    __webpack_require__(5),
	    __webpack_require__(7),
	    __webpack_require__(11),
	    __webpack_require__(12),

	];
	for(var i=0,a;a=arr[i++];){
	    qvvm.extend(qvvm,a,false,true);
	}


	qvvm.prototype = qvvm.init.prototype = qvvm.fn;


/***/ },
/* 3 */
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

	qvvm.fn = qvvm.prototype = qvvm.init.prototype

	qvvm.extend = function (srcObj, extendObj) {
	    for (var property in  extendObj) {
	        srcObj[property] = extendObj[property];
	    }
	    return srcObj;
	}

	qvvm.extend(qvvm, {
	    fn: {},
	    vmodules: [],
	    flag: 'vm-controller',
	    arr2Obj: function (arr) {
	        var obj = {};
	        if (typeof arr != "arr") {
	            for (var i = 0, n = arr.length; i < n; i++) {
	                obj[arr[i]] = true;
	            }
	        }
	        return obj;
	    }


	});


	module.exports = qvvm;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * autor: qw4wer
	 * time: 2016/7/11 10:19
	 * disc :配置信息
	 */


	function config(configs) {
	    for (var c in configs) {
	        if (typeof config.handels[c] === 'function')
	            config[c] = config.handels[c](configs[c]);
	        else
	            config[c] = configs[c];

	    }
	}

	var handels = {
	    interpolate: function (arr) {
	        var openOperator = arr[0];
	        var closeOperator = arr[1];

	        if (openOperator === closeOperator) {
	            throw new SyntaxError('起始符不能与截止符相同');
	        }

	        config.openOperator = openOperator;
	        config.closeOperator = closeOperator;

	        config.rexpr = new RegExp(openOperator + '([\\s\\S]*)' + closeOperator);


	    }

	}
	config.handels = handels;

	qvvm.config = config;


	qvvm.config({
	    debug: true,
	    interpolate: ["{{", "}}"]
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by qw4wer on 2016/7/6.
	 */

	var dom = __webpack_require__(6);

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


	var hideProperty = function (obj, name, value) {
	    Object.defineProperty(obj, name, {
	        value: value,
	        writable: true,
	        enumerable: false,
	        configurable: true
	    });
	}

	module.exports = {
	    copy: copy,
	    hideProperty: hideProperty,
	};



/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/6.
	 */
	/**
	 * 判断是否为dom对象
	 * @type {Function}
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
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by qw4wer on 2016/7/12.
	 */


	var noop = function () {
	};
	var invokFn = function (list, fn) {
	    fn.apply(noop, list);
	}


	module.exports = {
	    noop: noop,
	    invokFn: invokFn
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * 跳过的属性
	 * @type {*[]}
	 */
	var skipAttribute = [
	    '$id'
	];

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
	function makeAccessor(depend) {
	    var old = NaN;

	    var accessor = {
	        get: function () {
	            return old;
	        },
	        set: function (val) {
	            if (val === old) {
	                return;
	            }

	            for(var i= 0,length=depend.length;i<length;i++){
	                depend[i].apply("",[depend.dom,val]);
	            }
	            old = val;

	        },
	        enumerable: true,
	        configurable: true
	    };

	    Object.defineProperty(accessor.get, 'depend', {
	        value: depend,
	        writable: true,
	        enumerable: true,
	        configurable: true
	    });

	    return accessor;
	}
	/**
	 * autor: qw4wer
	 * time: 2016/7/6 11:33
	 * disc : 工厂方法
	 */
	function factory(definition, depend) {
	    var key, accesses = {};
	    depend = depend || [];
	    for (key in definition) {
	        if (skipAttribute[key])
	            continue;
	        accesses[key] = makeAccessor(depend);
	    }
	    var $vmodel = new Observer();

	    Object.defineProperties($vmodel, accesses);

	    for (key in definition) {
	        $vmodel[key] = definition[key];
	    }
	    qvvm.hideProperty($vmodel, "$accesses", accesses);

	    return $vmodel;
	}


	module.exports = {
	    makeAccessor: makeAccessor,
	    factory: factory
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var processors = __webpack_require__(13);

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
	                vm.$dom = e;
	                var h = handel(vm,e);

	            } else if (!$id) {
	                scan(e.childNodes);
	            }
	        }
	    }

	}

	function handel(vm, dom) {
	    var attrs = dom.attributes, value, name,k;
	    for (var i = 0, length = attrs.length; i < length; i++) {
	        if (processors.origin[name = attrs[i].name]) {
	            value = attrs[i].value;

	            k = qvvm.matchFirst(qvvm.config.rexpr)(value);

	            vm.$accesses[k].get.depend.push(processors.processor(name));

	            vm.$accesses[k].get.depend.dom = dom;
	        }
	    }
	}


	module.exports = {
	    scan: function (a) {
	        if (!a || !a.nodeType)
	            return;
	        return scan([a]);
	    }
	};




/***/ },
/* 10 */
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

	    var vm = qvvm.factory(definition);
	    return qvvm.vmodules[$id] = vm;

	}

	module.exports = {define: define};

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * autor: qw4wer
	 * time: 2016/7/13 10:38
	 * disc :
	 */

	var readyFnList = [], isReady;

	/**
	 * 执行加载函数
	 * @param fn
	 */
	var performReadyFn = function (fn) {
	    isReady = true;
	    while (fn = readyFnList.shift()) {
	        fn(qvvm);
	    }
	}
	/**
	 * 加载成功后方法
	 * @param fn
	 */
	var ready = function (fn) {
	    if (!isReady) {
	        readyFnList.push(fn)
	    } else {
	        fn(qvvm);
	    }

	}

	function bind() {
	    if (document.readyState === 'complete') {
	        setTimeout(performReadyFn, 1);
	    } else if (document.addEventListener) {
	        document.addEventListener('DOMContentLoaded', performReadyFn);
	    }
	}


	module.exports = {
	    bind: (function () {
	        bind();
	        return bind()
	    })(),
	    ready: ready
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	function matchFirst(reg) {
	    return function (str) {
	        var arr = str.match(reg);
	        if (arr.length > 1)
	            return arr[1];
	    }

	}


	module.exports = {
	    matchFirst: matchFirst

	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var val = __webpack_require__(14);

	var origin = {'qv-val': val};


	function processor(name) {
	    name = name || "";
	    if (name === "")
	        return qvvm.noop();

	    var processor = origin[name];
	    return processor;

	}

	module.exports = {
	    processor: processor,
	    origin: origin
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var handler = function (dom, value) {
	    if (typeof value === "object") {
	        for (var i in value) {
	            dom.setAttribute(i, value[i]);
	        }
	    } else {
	        dom.setAttribute('value', value);
	    }
	}


	module.exports = handler;

/***/ }
/******/ ]);