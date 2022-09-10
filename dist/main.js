/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/logofont.ttf */ \"./src/fonts/logofont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Myfont';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf');\\n    font-weight: 600;\\n    font-style: normal;\\n}\\n:root{\\n    --main-bg-color: #ffb3c6;\\n    --nav-bg-color: #ff206e;\\n    --logo-font-color: #ffc2d1;\\n    --poster-font-color: #fb6f92;\\n    --donut-font-color: #fb6f92;\\n    --menu-font-color: #ff206e;\\n    --contact-border-color: #fe6d73;\\n    --contact-font-color: #8f2d56;\\n}\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\nbody{\\n    background-color: var(--main-bg-color);\\n    font-family: 'Titillium Web',sans-serif;\\n}\\n\\n#content{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 4rem;\\n}\\n/*home.js styles starts*/\\n.navLinks{\\n    display: flex;\\n    justify-content:  space-around;\\n    align-items: center;\\n    gap: 1rem;\\n}\\n.logo{\\n    color: var(--logo-font-color);\\n    font-size: 2.3rem;\\n    font-weight: 800;\\n}\\n.logo:hover{\\n    cursor: default;\\n    color: #d81159;\\n}\\n.home{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n}\\nnav{\\n    background-color: var(--nav-bg-color);\\n    display: flex;\\n    justify-content: space-around;\\n    padding: 0.8rem 0;\\n    position:sticky;\\n    top:0;\\n}\\n.navLinks>div{\\n    color: var(--logo-font-color);\\n    font-size: 1.2rem;\\n}\\n.navLinks>div:hover{\\n    cursor: default;\\n    color: #7209b7;\\n}\\n.selectedLink{\\n    font-size: 2.7rem;\\n    font-weight: 800;\\n    color: #b5179e;\\n}\\n.selectedLink::before,.selectedLink::after{\\n    content: ' | ';\\n}\\n.posterDiv{\\n    margin-top: 2rem;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 2em;\\n    align-items: center;\\n}\\n.posterDiv>img{\\n    width: 30%;\\n    border: 1px solid orange;\\n    border-radius: 40%;\\n}\\n.posterDiv>p{\\n    color: var(--poster-font-color);\\n    font-size: 4rem;\\n    width: 40%; \\n}\\n/*home.js style ends*/\\n\\n/*menu.js style start */\\n\\n.menu{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    gap: 4.5rem;\\n}\\n.menuHeader{\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 2.5rem;\\n}\\n.menuHeader>p{\\n    color: var(--menu-font-color);\\n    font-size: 4rem;\\n    /* border-bottom: 5px solid black; */\\n}\\n.menuHeader>p:hover{\\n    cursor:default;\\n}\\n.allDonuts{\\n    display: grid;\\n    grid-template-columns: repeat(2,1fr);\\n    width: 30%;\\n    align-self: center;\\n    row-gap: 1.5rem;\\n    column-gap: 4.5rem;\\n    padding-bottom: 2em;\\n}\\n.allDonuts>div{\\n    color: var(--donut-font-color);\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    text-align: center;\\n    font-size: 1.3rem;\\n    font-weight: 700;\\n    gap: 8px;\\n}\\n.allDonuts>div>img{\\n    width:100%;\\n    border-radius: 12px;\\n}\\n/* menu styling ends */\\n\\n/*contact styling starts */\\n\\n.contact{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 12rem;\\n    margin-top: 7.2rem;\\n\\n}\\n.infoBox{\\n    color: var(--contact-font-color);\\n    font-weight: 500;\\n    padding: 3em;\\n    align-self: center;\\n    border: 2px solid var(--contact-border-color);\\n    background-color: var(--donut-font-color);\\n    width: 40%;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n    align-items: center;\\n    text-align: center;\\n}\\n.infoBox>p{\\n    font-size: 1.3rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\nfunction init() {\n    const content = document.querySelector('#content');\n    content.appendChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.navfun)());\n    content.appendChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n}\n\nfunction tabSwitch() {\n    const homeLink = document.querySelector('.homeLink');\n    const menuLink = document.querySelector('.menuLink');\n    const contactLink = document.querySelector('.contactLink');\n\n    homeLink.classList.add('selectedLink');\n\n    homeLink.addEventListener('click', () => {\n        content.replaceChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.home)(), content.lastChild);\n        if (!(homeLink.classList.contains('selectedLink'))) {\n            homeLink.classList.add('selectedLink');\n        }\n        menuLink.classList.remove('selectedLink');\n        contactLink.classList.remove('selectedLink');\n    });\n\n    menuLink.addEventListener('click', () => {\n        content.replaceChild((0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), content.lastChild);\n        homeLink.classList.remove('selectedLink');\n        menuLink.classList.add('selectedLink');\n        contactLink.classList.remove('selectedLink');\n    });\n\n    contactLink.addEventListener('click', () => {\n        content.replaceChild((0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), content.lastChild);\n        homeLink.classList.remove('selectedLink');\n        menuLink.classList.remove('selectedLink');\n        contactLink.classList.add('selectedLink');\n    });\n}\n\ninit();\ntabSwitch();\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n\nfunction contact(){\n\n    const contactDiv = document.createElement('div');\n    const infoBox = document.createElement('div');\n    const address = document.createElement('p');\n    const phone = document.createElement('p');\n    const timings = document.createElement('p');\n    const email = document.createElement('p');\n\n    contactDiv.classList.add('contact');\n    infoBox.classList.add('infoBox');\n\n    address.textContent = \"Address: Ground Floor, New Shop No. GF 19 & 20,Old Shop No. GF 25, 26 & 27,ROF Portico, Sector-43, Sushant Lok-1 Gurugram Haryana - 122003\"\n    timings.textContent = \"Timings: 11:00AM - 12:00AM\";\n    phone.textContent = \"Phone: 0755-4584-3432\";\n    email.textContent = \"Email: customerdonke@donkfood.com\";\n\n    infoBox.appendChild(address);\n    infoBox.appendChild(timings);\n    infoBox.appendChild(phone);\n    infoBox.appendChild(email);\n\n\n    contactDiv.appendChild(infoBox);\n\n    return contactDiv;\n}\n\n//# sourceURL=webpack://restaurant_page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home),\n/* harmony export */   \"navfun\": () => (/* binding */ navfun)\n/* harmony export */ });\n/* harmony import */ var _images_donut_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../images/donut.jpg */ \"./src/images/donut.jpg\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/style.css */ \"./src/styles/style.css\");\n\n\n\nfunction navfun(){\n    const nav = document.createElement('nav');\n    const navLinks = document.createElement('div');\n    const logoDiv = document.createElement('div');\n    const logo = document.createElement('p');\n    const navHome = document.createElement('div');\n    const navMenu = document.createElement('div');\n    const navContact = document.createElement('div');\n\n    navLinks.classList.add(\"navLinks\");\n    logoDiv.classList.add('logo');\n    navHome.classList.add('homeLink');\n    navMenu.classList.add('menuLink');\n    navContact.classList.add('contactLink');\n\n    logoDiv.textContent = \"Donk-E-Donuts\";\n    navHome.textContent = \"Home\";\n    navMenu.textContent = \"Menu\";\n    navContact.textContent = \"Contact\";\n\n    logoDiv.appendChild(logo);\n    navLinks.appendChild(navHome);\n    navLinks.appendChild(navMenu);\n    navLinks.appendChild(navContact);\n\n    nav.appendChild(logoDiv);\n    nav.appendChild(navLinks);\n\n    return nav;\n}\nfunction home(){\n    const homeDiv = document.createElement('div');\n    const poster = document.createElement('div');\n    poster.classList.add('posterDiv');\n    const jingle = document.createElement('p');\n\n    const donutImg = new Image();\n    donutImg.src = _images_donut_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    jingle.textContent = \"All donuts approved by Donk-E himself! Grab one Today!\";\n\n    poster.appendChild(jingle);\n    poster.appendChild(donutImg);\n\n    homeDiv.appendChild(poster);\n\n    return homeDiv;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _images_donutImgs_bostonDon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/donutImgs/bostonDon.jpg */ \"./src/images/donutImgs/bostonDon.jpg\");\n/* harmony import */ var _images_donutImgs_cakeDon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/donutImgs/cakeDon.jpg */ \"./src/images/donutImgs/cakeDon.jpg\");\n/* harmony import */ var _images_donutImgs_crullerDon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/donutImgs/crullerDon.jpg */ \"./src/images/donutImgs/crullerDon.jpg\");\n/* harmony import */ var _images_donutImgs_donutHoles_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../images/donutImgs/donutHoles.jpg */ \"./src/images/donutImgs/donutHoles.jpg\");\n/* harmony import */ var _images_donutImgs_longJohnDon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../images/donutImgs/longJohnDon.jpg */ \"./src/images/donutImgs/longJohnDon.jpg\");\n/* harmony import */ var _images_donutImgs_yeastDon_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../images/donutImgs/yeastDon.jpg */ \"./src/images/donutImgs/yeastDon.jpg\");\n\n\n\n\n\n\n\n\nfunction menu(){\n    const menuDiv = document.createElement('div');\n\n    const menuHeader = document.createElement('div');\n    const menuLogo = document.createElement('p');\n    const donutDiv = document.createElement('div');\n    \n    const bostonDonDiv = document.createElement('div');\n    const cakeDonDiv = document.createElement('div');\n    const crullerDonDiv = document.createElement('div');\n    const donutHolesDiv = document.createElement('div');\n    const longJohnDonDiv = document.createElement('div');\n    const yeastDonDiv = document.createElement('div');\n\n    const bostonImg = new Image();\n    bostonImg.src = _images_donutImgs_bostonDon_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    const cakeImg = new Image();\n    cakeImg.src = _images_donutImgs_cakeDon_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    const crullerImg = new Image();\n    crullerImg.src = _images_donutImgs_crullerDon_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    const donutholeImg = new Image();\n    donutholeImg.src = _images_donutImgs_donutHoles_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    const longJohnImg = new Image();\n    longJohnImg.src = _images_donutImgs_longJohnDon_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    const yeastImg = new Image();\n    yeastImg.src = _images_donutImgs_yeastDon_jpg__WEBPACK_IMPORTED_MODULE_6__;\n\n    const bostonName = document.createElement('p');\n    const cakeName = document.createElement('p');\n    const crullerName = document.createElement('p');\n    const donutholeName = document.createElement('p');\n    const longJohnName = document.createElement('p');\n    const yeastName = document.createElement('p');\n\n    bostonName.textContent = \"Boston Cream Doughnut\";\n    cakeName.textContent = \"Cake Doughnuts\";\n    crullerName.textContent = \"Cruller\";\n    donutholeName.textContent = \"Doughnut Holes\";\n    longJohnName.textContent = \"Long John\";\n    yeastName.textContent = \"Yeast Doughnuts\";\n\n    bostonDonDiv.appendChild(bostonImg);\n    bostonDonDiv.appendChild(bostonName);\n    cakeDonDiv.appendChild(cakeImg);\n    cakeDonDiv.appendChild(cakeName);\n    crullerDonDiv.appendChild(crullerImg);\n    crullerDonDiv.appendChild(crullerName);\n    donutHolesDiv.appendChild(donutholeImg);\n    donutHolesDiv.appendChild(donutholeName);\n    longJohnDonDiv.appendChild(longJohnImg);\n    longJohnDonDiv.appendChild(longJohnName);\n    yeastDonDiv.appendChild(yeastImg);\n    yeastDonDiv.appendChild(yeastName);\n\n    donutDiv.appendChild(bostonDonDiv);\n    donutDiv.appendChild(cakeDonDiv);\n    donutDiv.appendChild(crullerDonDiv);\n    donutDiv.appendChild(donutHolesDiv);\n    donutDiv.appendChild(longJohnDonDiv);\n    donutDiv.appendChild(yeastDonDiv);\n\n    menuDiv.classList.add('menu');\n    menuHeader.classList.add('menuHeader');\n    donutDiv.classList.add('allDonuts');\n\n    menuLogo.textContent = \"|| Menu ||\";\n    menuHeader.appendChild(menuLogo);\n\n    \n    menuDiv.appendChild(menuHeader);\n    menuDiv.appendChild(donutDiv);\n\n    return menuDiv;\n}\n\n//# sourceURL=webpack://restaurant_page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/fonts/logofont.ttf":
/*!********************************!*\
  !*** ./src/fonts/logofont.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4a518de8c15146ca09a.ttf\";\n\n//# sourceURL=webpack://restaurant_page/./src/fonts/logofont.ttf?");

/***/ }),

/***/ "./src/images/donut.jpg":
/*!******************************!*\
  !*** ./src/images/donut.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"071d0fea1fbe131bfff0.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donut.jpg?");

/***/ }),

/***/ "./src/images/donutImgs/bostonDon.jpg":
/*!********************************************!*\
  !*** ./src/images/donutImgs/bostonDon.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df361bfb110d85ee309a.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donutImgs/bostonDon.jpg?");

/***/ }),

/***/ "./src/images/donutImgs/cakeDon.jpg":
/*!******************************************!*\
  !*** ./src/images/donutImgs/cakeDon.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8a3428126ec7692e789.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donutImgs/cakeDon.jpg?");

/***/ }),

/***/ "./src/images/donutImgs/crullerDon.jpg":
/*!*********************************************!*\
  !*** ./src/images/donutImgs/crullerDon.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c94bbbbe2a0a353b165.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donutImgs/crullerDon.jpg?");

/***/ }),

/***/ "./src/images/donutImgs/donutHoles.jpg":
/*!*********************************************!*\
  !*** ./src/images/donutImgs/donutHoles.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2b47cea30eaac09e678.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donutImgs/donutHoles.jpg?");

/***/ }),

/***/ "./src/images/donutImgs/longJohnDon.jpg":
/*!**********************************************!*\
  !*** ./src/images/donutImgs/longJohnDon.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c83abc6e329f55211c65.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donutImgs/longJohnDon.jpg?");

/***/ }),

/***/ "./src/images/donutImgs/yeastDon.jpg":
/*!*******************************************!*\
  !*** ./src/images/donutImgs/yeastDon.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b222113b7aa9c6b16ca.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/donutImgs/yeastDon.jpg?");

/***/ })

/******/ 	});
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;