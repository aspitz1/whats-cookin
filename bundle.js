/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_nav_bar_img_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_nav_bar_img_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(210, 208, 192);\n  font-family: sans-serif;\n  margin: 0;\n}\n\n.nav-wrapper {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 18vh;\n}\n\n.heading {\n  background-color: rgb(106, 105, 96);\n  margin-top: 30px;\n  padding: 8px 40px;\n  font-size: 3em;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.nav-bar {\n  background-color: rgb(210, 208, 192);\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\nimg {\n  border-radius: 25px;\n  padding: 10px;\n}\n\n.recipe-image:hover {\n  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.8);\n}\n\n.favorite-button {\n  background-image: linear-gradient(92.88deg, #376387 9.16%, #5643CC 43.89%, #673FD7 64.72%);\n  border-radius: 8px;\n  border-style: none;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  flex-shrink: 0;\n  height: 2rem;\n  padding: 0 1.6rem;\n  text-align: center;\n  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;\n  margin-bottom: 8px;\n}\n\n.favorite-button:hover {\n  cursor: pointer;\n  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;\n}\n\n.recipe-display {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.recipe-heading-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.selected-recipe-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.recipe-image-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.recipe-image {\n  width: 400px;\n}\n\n.hidden {\n  display: none;\n}\n\n.instructions-display {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  width: 1000px;\n  text-align: left;\n  border-radius: 15px;\n}\n\n.instruction-design-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.ingredients-design-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-button {\n  background-color: #673FD7;\n  border: none;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 3px;\n}\n\n.nav-button:hover {\n  cursor: pointer;\n  background-color: #376387;\n}\n\n.input {\n  border: none;\n  height: 19px;\n  border-radius: 3px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,oCAAA;EACA,uBAAA;EACA,SAAA;AACF;;AAEA;EACE,yDAAA;EACA,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;AACF;;AAEA;EACE,mCAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,WAAA;EACA,mBAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,aAAA;EACA,6BAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;AACF;;AAEA;EACE,+CAAA;AACF;;AAGA;EACI,0FAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,kBAAA;AAAJ;;AAGA;EACE,eAAA;EACA,6CAAA;AAAF;;AAIA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;AADF;;AAIA;EACE,aAAA;EACA,uBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;;AAIA;EACE,YAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AADF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,eAAA;EACA,yBAAA;AAAF;;AAGA;EACE,YAAA;EACA,YAAA;EACA,kBAAA;AAAF","sourcesContent":["body {\n  background-color: rgb(210, 208, 192);\n  font-family: sans-serif;\n  margin: 0;\n}\n\n.nav-wrapper {\n  background-image: url(images/nav-bar-img.jpg);\n  background-size: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 18vh;\n}\n\n.heading {\n  background-color: rgb(106, 105, 96);\n  margin-top: 30px;\n  padding: 8px 40px;\n  font-size: 3em;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.nav-bar {\n  background-color:rgb(210, 208, 192);\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\nimg {\n  border-radius: 25px;\n  padding: 10px;\n}\n\n.recipe-image:hover{\n  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, .8);\n  }\n\n\n.favorite-button{\n    background-image: linear-gradient(92.88deg, #376387 9.16%, #5643CC 43.89%, #673FD7 64.72%);\n    border-radius: 8px;\n    border-style: none;\n    box-sizing: border-box;\n    color: #FFFFFF;\n    flex-shrink: 0;\n    height: 2rem;\n    padding: 0 1.6rem;\n    text-align: center;\n    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;\n    margin-bottom: 8px;\n  }\n\n.favorite-button:hover {\n  cursor: pointer;\n  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;\n}\n\n\n.recipe-display {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.recipe-heading-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.selected-recipe-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.recipe-image-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.recipe-image {\n  width: 400px;\n}\n\n.hidden {\n  display: none;\n}\n\n.instructions-display {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  width: 1000px;\n  text-align:left;\n  border-radius: 15px;\n}\n\n.instruction-design-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n.ingredients-design-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-button {\n  background-color: #673FD7;\n  border: none;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 3px;\n}\n\n.nav-button:hover {\n  cursor: pointer;\n  background-color: #376387;\n}\n\n.input {\n  border: none;\n  height: 19px;\n  border-radius: 3px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/nav-bar-img.jpg");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiCalls": () => (/* binding */ apiCalls)
/* harmony export */ });
const apiCalls = {
    fetchData() {
        const result = Promise.all(apiCalls.getAllData())
            .then(responses => {
                return responses
            });
        return result;
    },

    getAllData() {
        return [apiCalls.getRecipeData(), apiCalls.getAllIngredientsData(), apiCalls.getAllUserData()];
    },

    getRecipeData() {
        return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
            .then(response => response.json());
    },

    getAllIngredientsData() {
        return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
            .then(response => response.json());
    },

    getAllUserData() {
        return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
            .then(response => response.json());
    },
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User {
  constructor(userDetails) {
    this.name = userDetails.name;
    this.id = userDetails.id;
    this.pantry = userDetails.pantry;
    this.recipesToCook = [];

  }

  addRecipesToCook(recipeToAdd) {
    if (!this.recipesToCook.filter(recipe => recipe.id === recipeToAdd.id).length) {
      this.recipesToCook.push(recipeToAdd);
    }
  }

  removeRecipesToCook(id) {
    this.recipesToCook.forEach((recipe, index) => {
      if(recipe.id === id) {
        this.recipesToCook.splice(index, 1);
      }

    });
  }

  filterRecipesToCookByTag(tag) {
    if (this.recipesToCook.filter(recipe => recipe.tags.includes(tag)).length) {
      return this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    }
    return `Sorry, no recipe with ${tag}.`;
  }

  filterRecipesToCookByName(name) {
    if(this.recipesToCook.filter(recipe => recipe.name.includes(name)).length) {
      return this.recipesToCook.filter(recipe => recipe.name.includes(name));
    }
    return `Sorry, no recipe named ${name}.`
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
    this.recipeList = [];
  }

  listRecipes() {
    this.recipeData.forEach(recipe => {
      this.recipeList.push(new _Recipe__WEBPACK_IMPORTED_MODULE_0__["default"](recipe));
    });
  }

  findRecipeByTag(tag) {
    if (this.recipeList.filter(recipe => recipe.tags.includes(tag)).length) {
      return this.recipeList.filter(recipe => recipe.tags.includes(tag));
    } 
    
    return `Sorry, no recipe with ${tag}.`;
  }

  findRecipeByName(name) {
    if (this.recipeList.filter(recipe => recipe.name.includes(name)).length) {
      return this.recipeList.filter(recipe => recipe.name.includes(name));
    } 
    
    return `Sorry, no recipe named ${name}.`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeRepository);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);




class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.ingredients = recipeDetails.ingredients;
    this.instructions = recipeDetails.instructions;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;
    this.ingredientsNeeded;
  }
  
  getAllIngredients(ingredients) {
    const allIngredients = ingredients.map((ingredient) => {
        return new _Ingredient__WEBPACK_IMPORTED_MODULE_1__["default"](ingredient);
    });
    return allIngredients;
  }

  buildIngredientsNeeded(ingredients) {
    const ingredientsHave = this.getAllIngredients(ingredients);
    const ingredientIds = this.ingredients.map(ingredient => ingredient.id);
    this.ingredientsNeeded = ingredientIds.map(ingredientId => {
      return ingredientsHave.find(ingredientObj => ingredientObj.id === ingredientId);
    }); 
  }

  getTotalCost() {
    const costsInCents = this.ingredientsNeeded.map(ingredient => ingredient.estimatedCostInCents);
    const totalCost = costsInCents.reduce((acc, cents) => {
      return acc += cents;
    }, 0);
   return `$${totalCost / 100}`;
  }

  returnInstructions() {
    return this.instructions;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipe);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ingredient {
    constructor(ingredientDetails) {
        this.id = ingredientDetails.id;
        this.name = ingredientDetails.name;
        this.estimatedCostInCents = ingredientDetails.estimatedCostInCents;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ingredient);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);





const {fetchData} = _apiCalls__WEBPACK_IMPORTED_MODULE_1__.apiCalls;

const recipeDisplay = document.querySelector('#recipeDisplay');
const recipeHeading = document.querySelector('#recipeHeading');
const homeButton = document.querySelector('#homeButton');
const favoriteButton = document.querySelector('#favoriteButton');
const recipeNameInput = document.querySelector('#recipeNameInput');
const recipeTagInput = document.querySelector('#recipeTagInput');
const filterForm = document.querySelector('#filterForm');
const searchForm = document.querySelector('#searchForm');
const filterFavoriteForm = document.querySelector('#filterFavoriteForm');
const recipeFavoriteTagInput = document.querySelector('#recipeFavoriteTagInput');
const favSearchForm = document.querySelector('#favSearchForm');
const recipeFavNameInput = document.querySelector('#favRecipeNameInput')


let user;
let ingredientsInfo;
let userInfo;
let recipeRepository;

fetchData().then(responses => {
    ingredientsInfo = responses[1]
    userInfo = responses[2]
    recipeRepository = new _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__["default"](responses[0].recipeData)

    recipeRepository.listRecipes();
    user = createUser();

    recipeDisplay.addEventListener('click', recipeDisplayHandler);
    homeButton.addEventListener('click', goHome);
    filterForm.addEventListener('submit', filterRecipeTag);
    searchForm.addEventListener('submit', searchRecipeName);
    favoriteButton.addEventListener('click', showFavorites);
    filterFavoriteForm.addEventListener('submit', filterFavoriteRecipesByTag);
    favSearchForm.addEventListener('submit', searchFavRecipeListByName);
    
    displayRecipeList();

});

function hideOn(element) {
    element.classList.add('hidden')
}

function hideOff(element) {
    element.classList.remove('hidden')
}


function createUser() {
    const randomNumber = Math.floor(Math.random() * userInfo.usersData.length);
    const user = userInfo.usersData[randomNumber];
    return new _classes_User__WEBPACK_IMPORTED_MODULE_2__["default"](user);
}

function recipeDisplayHandler(event) {
    if (event.target.getAttribute("data-recipeId")) {
        showRecipeInstructions(event);
    } else if (event.target.getAttribute("data-favoriteRecipe")) {
        addToFavorite(event);
    }
}

function addToFavorite(event) {
    const recipeId = parseInt(event.target.getAttribute('data-favoriteRecipe'))
    const selectedRecipe = recipeRepository.recipeList.find(recipe => recipe.id === recipeId);
    user.addRecipesToCook(selectedRecipe);
}

function showFavorites() {
    hideOn(searchForm);
    hideOn(filterForm);
    hideOn(favoriteButton);
    hideOff(filterFavoriteForm);
    hideOff(favSearchForm);
    hideOff(homeButton);
    
    homeButton.classList.remove('hidden');
    homeButton.classList.add('favorite');
    recipeHeading.innerText = 'Favorite Recipes';
    recipeDisplay.innerHTML = "";
    user.recipesToCook.forEach((recipe) => {
        recipeDisplay.innerHTML += (`
            <div class="recipe-image-wrapper">
                <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="favorite" src=${recipe.image} alt=${recipe.name}>
                <p class="recipe-name">${recipe.name}</p>
            </div>
        `)
    });
};

function displayRecipeList() {
    hideOff(searchForm);
    hideOff(filterForm);
    hideOff(favoriteButton);
    hideOn(homeButton);
    hideOn(filterFavoriteForm);
    hideOn(favSearchForm);

    recipeDisplay.innerHTML = "";
    recipeRepository.recipeList.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
            <img class="recipe-image" data-recipeId=${recipe.id} src=${recipe.image} alt=${recipe.name}>
            <p class="recipe-name">${recipe.name}</p>
            <button class="favorite-button" data-favoriteRecipe=${recipe.id} id="favoriteButton">Favorite</button>
        </div>
      `)
   });
};

function goHome() {
    hideOn(homeButton);

    recipeHeading.innerText = 'All Recipes';
    recipeDisplay.innerHTML = "";

    displayRecipeList();
   
}

function showRecipeInstructions(event) {
    hideOn(searchForm);
    hideOn(filterForm);
    hideOn(filterFavoriteForm);
    hideOn(favSearchForm);
    hideOff(favoriteButton);
    hideOff(homeButton);

    const recipeId = parseInt(event.target.getAttribute("data-recipeId"));
    const selectedRecipe = recipeRepository.recipeList.find(recipe => recipe.id === recipeId);

    selectedRecipe.buildIngredientsNeeded(ingredientsInfo.ingredientsData);

    const totalCost = selectedRecipe.getTotalCost();

    recipeDisplay.innerHTML = "";
    recipeHeading.innerText = `${selectedRecipe.name}`;
    recipeDisplay.innerHTML = (`
        <div class="selected-recipe-display">
            <img class="selected-recipe-image" src=${selectedRecipe.image} alt=${selectedRecipe.name}>
            <button class="favorite-button" id="favoriteButton" data-favoriteRecipe=${selectedRecipe.id}>Favorite</button>
            <div class="instruction-design-div">
                <div class="instructions-display">
                <ol id="recipeInstructions"></ol>
            </div>
            <div class="ingredients-design-div">
                <h3 class="ingredients">Ingredients</h3>
                <ul class="ingredients-list" id="ingredientsList"></ul>
                <p class="total">Total Cost: ${totalCost}</p>  
            </div>
            </div>
        </div>
    `);

    selectedRecipe.instructions.forEach((instruction) => {
        document.querySelector("#recipeInstructions").innerHTML += (`
            <li class="instructions">${instruction.instruction}</li>
        `);
    });

    selectedRecipe.ingredientsNeeded.forEach((ingredient) => {
        document.querySelector("#ingredientsList").innerHTML += (`
            <li class="ingredient">${ingredient.name}</li>
        `);
    });
};

function filterRecipeTag(event) {
    event.preventDefault();

    const inputValue = recipeTagInput.value;
    const requestedRecipes = recipeRepository.findRecipeByTag(inputValue);

    recipeHeading.innerText = 'Filtered Recipes by Tag';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe with ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteBtn" data-favoriteRecipe=${recipe.id}>Favorite</button>
        </div>
      `)
   });
}

function searchRecipeName(event) {
    event.preventDefault();

    const inputValue = recipeNameInput.value;
    const requestedRecipes = recipeRepository.findRecipeByName(inputValue);

    recipeHeading.innerText = 'Filtered Recipes by Name';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe named ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteButton" data-favoriteRecipe=${recipe.id}>Favorite</button>
        </div>
      `)
   });
 }

 function filterFavoriteRecipesByTag(event) {
    event.preventDefault();

    const inputValue = recipeFavoriteTagInput.value;
    const requestedRecipes = user.filterRecipesToCookByTag(inputValue);

    recipeHeading.innerText = 'Filtered Favorite Recipes by Tag';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe with ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
            <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
            <p class="recipe-name">${recipe.name}</p>
        </div>
      `)
   });
 }

 function searchFavRecipeListByName(event) {
   event.preventDefault();

   const inputValue = recipeFavNameInput.value;
   const requestedRecipes = user.filterRecipesToCookByName(inputValue);

   recipeHeading.innerText = 'Filtered Favorite Recipes by Name';
   recipeDisplay.innerHTML = "";

   if (requestedRecipes === `Sorry, no recipe named ${inputValue}.`) {
       return recipeHeading.innerText = requestedRecipes;
   }

   requestedRecipes.forEach((recipe) => {
   recipeDisplay.innerHTML += (`
       <div class="recipe-image-wrapper">
            <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
            <p class="recipe-name">${recipe.name}</p>
       </div>
     `)
  });
 }

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map