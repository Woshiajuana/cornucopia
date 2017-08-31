// { "framework": "Vue" }
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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(12)
	)

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/budao/temp/Svg/src/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f4481ae"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "group-item": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 110,
	    "color": "#555555"
	  },
	  "group-item-text": {
	    "flex": 1,
	    "marginLeft": 40,
	    "paddingBottom": 20,
	    "borderBottom": "2px solid rgba(0,0,0,.1)"
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(3);

	var _icon2 = _interopRequireDefault(_icon);

	var _helper = __webpack_require__(7);

	var _helper2 = _interopRequireDefault(_helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	var navigator = weex.requireModule('navigator');
	exports.default = {
	  components: {
	    icon: _icon2.default
	  },
	  props: {
	    name: {
	      default: '',
	      type: String
	    },
	    icon: {
	      default: '',
	      type: String
	    },
	    url: {
	      default: '',
	      type: String
	    }
	  },

	  methods: {
	    redirect: function redirect() {
	      var url = _helper2.default.setBundleUrl(this.url, weex);
	      navigator.push({
	        url: url
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/budao/temp/Svg/src/include/icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-19f33279"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "icon": {
	    "width": 54,
	    "height": 54
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    src: {
	      default: ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    staticClass: ["icon"],
	    attrs: {
	      "src": _vm.src
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper.js 2016
	exports.default = {
	  setBundleUrl: function setBundleUrl(jsFile, weex) {
	    var bundleUrl = weex.config.bundleUrl;
	    var host = '';
	    var path = '';
	    var nativeBase = void 0;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	      nativeBase = 'file://assets/dist/';
	    } else if (isiOSAssets) {
	      // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	      // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	      var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	      var matchFirstPath = /\/\/.+\/([^\/]+?)\//.exec(bundleUrl);
	      if (matches && matches.length >= 2) {
	        host = matches[1];
	      }
	      if (matchFirstPath && matchFirstPath.length >= 2) {
	        path = matchFirstPath[1];
	      }
	      nativeBase = 'http://' + host + '/';
	    }
	    var h5Base = './weex.html?page=';
	    // in Native
	    var base = nativeBase;
	    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	      // check if in weexpack project
	      if (path === 'web' || path === 'dist') {
	        base = h5Base + '/dist/';
	      } else {
	        base = h5Base + '';
	      }
	    } else {
	      base = nativeBase + path;
	      //jsFile = jsFile.replace('.js', '.weex.js');
	    }
	    var newUrl = base + jsFile;
	    return newUrl;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["group-item"],
	    on: {
	      "click": _vm.redirect
	    }
	  }, [_c('icon', {
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["group-item-text"]
	  }, [_vm._v(_vm._s(_vm.name))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "paddingTop": 20,
	    "textAlign": "center",
	    "backgroundColor": "#f1f1f1"
	  },
	  "hd": {
	    "alignItems": "center"
	  },
	  "logo": {
	    "width": 375,
	    "height": 240
	  },
	  "main": {
	    "marginTop": 40,
	    "overflow": "auto"
	  },
	  "h3": {
	    "margin": 20,
	    "fontSize": 24,
	    "textAlign": "left",
	    "color": "#888888"
	  },
	  "group": {
	    "paddingTop": 10,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "backgroundColor": "#ffffff",
	    "borderTop": "2px solid rgba(0,0,0,.1)",
	    "borderBottom": "2px solid rgba(0,0,0,.3)"
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _groupItem = __webpack_require__(14);

	var _groupItem2 = _interopRequireDefault(_groupItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  components: {
	    groupItem: _groupItem2.default
	  },
	  data: function data() {
	    return {
	      coms: [{
	        name: 'rect',
	        icon: 'http://img1.vued.vanthink.cn/vuedd801b5ac3622f3a86e1274693e0cca06.png',
	        url: 'pages/com-rect.js'
	      }, {
	        name: 'circle',
	        icon: 'http://img1.vued.vanthink.cn/vuedc972ff2bbd382918da0d54a50abf5886.png',
	        url: 'pages/com-circle.js'
	      }, {
	        name: 'line',
	        icon: 'http://img1.vued.vanthink.cn/vuedd34a9f03fb2cfb4e4928fd50dac7c2f0.png',
	        url: 'pages/com-line.js'
	      }, {
	        name: 'polyline',
	        icon: 'http://img1.vued.vanthink.cn/vued636ac9019ecf3cfb37203afaf58831a1.png',
	        url: 'pages/com-polyline-and-polygon.js'
	      }, {
	        name: 'path',
	        icon: 'http://img1.vued.vanthink.cn/vued95cc17b37133964d0700f8efe0dd464f.png',
	        url: 'pages/com-path.js'
	      }, {
	        name: 'gradient',
	        icon: 'http://img1.vued.vanthink.cn/vued8f6b468fa26fca56c459d2dcaf5c572d.png',
	        url: 'pages/com-gradient.js'
	      }],
	      props: [{
	        name: 'fill',
	        icon: 'http://img1.vued.vanthink.cn/vued6ff56846b1d309224d1c4984b7e885be.png',
	        url: 'pages/prop-fill.js'
	      }, {
	        name: 'stroke',
	        icon: 'http://img1.vued.vanthink.cn/vued8ad53b37ce358bbe5fa5964f46cc1309.png',
	        url: 'pages/prop-stroke.js'
	      }],
	      demos: [{
	        name: 'complex svg shape',
	        icon: 'http://img1.vued.vanthink.cn/vued1d89bd6213951e62d0bad242093c82ce.png',
	        url: 'pages/complex-shape.js'
	      }, {
	        name: 'Test',
	        icon: 'http://img1.vued.vanthink.cn/vued1d89bd6213951e62d0bad242093c82ce.png',
	        url: 'pages/pressure.js'
	      }]

	    };
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/budao/temp/Svg/src/include/group-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-791571a1"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["page"]
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["main"]
	  }, [_c('text', {
	    staticClass: ["h3"]
	  }, [_vm._v("Components")]), _c('div', {
	    staticClass: ["group"]
	  }, _vm._l((_vm.coms), function(com) {
	    return _c('group-item', {
	      key: com.name,
	      attrs: {
	        "url": com.url,
	        "name": com.name,
	        "icon": com.icon
	      }
	    })
	  })), _c('text', {
	    staticClass: ["h3"]
	  }, [_vm._v("Props")]), _c('div', {
	    staticClass: ["group"]
	  }, _vm._l((_vm.props), function(prop) {
	    return _c('group-item', {
	      key: prop.name,
	      attrs: {
	        "url": prop.url,
	        "name": prop.name,
	        "icon": prop.icon
	      }
	    })
	  })), _c('text', {
	    staticClass: ["h3"]
	  }, [_vm._v("Advanced")]), _c('div', {
	    staticClass: ["group"]
	  }, _vm._l((_vm.demos), function(demo) {
	    return _c('group-item', {
	      key: demo.name,
	      attrs: {
	        "url": demo.url,
	        "name": demo.name,
	        "icon": demo.icon
	      }
	    })
	  }))])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["hd"]
	  }, [_c('image', {
	    staticClass: ["logo"],
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued50a9ba7ffdffdfe2578e0f921a741f5a.png"
	    }
	  }), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v(" A weex plugin for svg support ")])])
	}]}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);