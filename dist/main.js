/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/welcome-page */ \"./src/pages/welcome-page.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  console.log('Dom Fully loaded and parsed'); // let element = document.getElementById('welcome');\n\n  new _pages_welcome_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUQ4QyxDQUU5Qzs7QUFDQSxNQUFJSiwyREFBSjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbGl6ZWR3ZWFwb24tY2l2aWxpemVkYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vcGFnZXMvd2VsY29tZS1wYWdlXCJcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRG9tIEZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7XG4gICAgLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZScpO1xuICAgIG5ldyBXZWxjb21lKCk7XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbIldlbGNvbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/welcome-page.js":
/*!***********************************!*\
  !*** ./src/pages/welcome-page.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Welcome; }\n/* harmony export */ });\n/* harmony import */ var _workbench_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workbench-page */ \"./src/pages/workbench-page.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// const Workbench = require(\"./workbench-page\");\n\n\nvar Welcome = /*#__PURE__*/function () {\n  function Welcome() {\n    _classCallCheck(this, Welcome);\n\n    this.welcomeStructure();\n  }\n\n  _createClass(Welcome, [{\n    key: \"welcomeStructure\",\n    value: function welcomeStructure() {\n      var welcomePageFigure = document.createElement(\"figure\");\n      welcomePageFigure.id = 'welcome';\n      document.body.appendChild(welcomePageFigure);\n      var ul = document.createElement(\"ul\");\n      ul.id = \"welcome-text-box\";\n      console.log(welcomePageFigure);\n      welcomePageFigure.appendChild(ul);\n      var li1 = document.createElement(\"li\");\n      li1.className = \"welcome-1\";\n      ul.appendChild(li1);\n      var li2 = document.createElement(\"li\");\n      li2.className = \"welcome-2\";\n      ul.appendChild(li2);\n      var li3 = document.createElement(\"li\");\n      li3.className = \"welcome-3\";\n      ul.appendChild(li3);\n      var li4 = document.createElement(\"button\");\n      li4.className = \"launch-button\"; //this should link us to generating the workbench page//\n\n      ul.appendChild(li4);\n      li4.addEventListener(\"click\", this.switchScreens.bind(this));\n      this.welcomeContent(li1, li2, li3, li4);\n    }\n  }, {\n    key: \"welcomeContent\",\n    value: function welcomeContent(li1, li2, li3, li4) {\n      li1.innerHTML = 'Welcome, Padawan';\n      li2.innerHTML = 'These are your first steps... -Ben Kenobi';\n      li3.innerHTML = 'Before you can be fully accepted into the Jedi Order, you must construct your first lightsaber prototype';\n      li3.innerHTML += '. Think carefully about your design. Remember, there are consequences to every choice, and the choices ';\n      li3.innerHTML += 'you make now will help determine your focus as a Jedi. May the Force be with you.';\n      li4.innerHTML = \"Launch\";\n    } // addEventListener(\"click\",)\n\n  }, {\n    key: \"switchScreens\",\n    value: function switchScreens(e) {\n      var welcomeBox = document.getElementById('welcome');\n      document.body.removeChild(welcomeBox);\n      new _workbench_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //this is where we are switching pages\n    }\n  }]);\n\n  return Welcome;\n}(); // module.exports = Welcome;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2VsY29tZS1wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJDO0FBQ2pCLHFCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsZ0JBQUw7QUFDSDs7OztXQUNELDRCQUFrQjtBQUNkLFVBQUlDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQUYsTUFBQUEsaUJBQWlCLENBQUNHLEVBQWxCLEdBQXVCLFNBQXZCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxpQkFBMUI7QUFDQSxVQUFJTSxFQUFFLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0FJLE1BQUFBLEVBQUUsQ0FBQ0gsRUFBSCxHQUFRLGtCQUFSO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixpQkFBWjtBQUNBQSxNQUFBQSxpQkFBaUIsQ0FBQ0ssV0FBbEIsQ0FBOEJDLEVBQTlCO0FBQ0EsVUFBSUcsR0FBRyxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNJTyxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsV0FBaEI7QUFDQUosTUFBQUEsRUFBRSxDQUFDRCxXQUFILENBQWVJLEdBQWY7QUFDSixVQUFJRSxHQUFHLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFWO0FBQ0lTLE1BQUFBLEdBQUcsQ0FBQ0QsU0FBSixHQUFnQixXQUFoQjtBQUNBSixNQUFBQSxFQUFFLENBQUNELFdBQUgsQ0FBZU0sR0FBZjtBQUNKLFVBQUlDLEdBQUcsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVY7QUFDSVUsTUFBQUEsR0FBRyxDQUFDRixTQUFKLEdBQWdCLFdBQWhCO0FBQ0FKLE1BQUFBLEVBQUUsQ0FBQ0QsV0FBSCxDQUFlTyxHQUFmO0FBQ0osVUFBSUMsR0FBRyxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNJVyxNQUFBQSxHQUFHLENBQUNILFNBQUosR0FBZ0IsZUFBaEIsQ0FsQlUsQ0FtQlY7O0FBQ0FKLE1BQUFBLEVBQUUsQ0FBQ0QsV0FBSCxDQUFlUSxHQUFmO0FBQ0pBLE1BQUFBLEdBQUcsQ0FBQ0MsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBOUI7QUFDQSxXQUFLQyxjQUFMLENBQW9CUixHQUFwQixFQUF5QkUsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DQyxHQUFuQztBQUNIOzs7V0FFRCx3QkFBZUosR0FBZixFQUFvQkUsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFrQztBQUM5QkosTUFBQUEsR0FBRyxDQUFDUyxTQUFKLEdBQWdCLGtCQUFoQjtBQUNBUCxNQUFBQSxHQUFHLENBQUNPLFNBQUosR0FBZ0IsMkNBQWhCO0FBQ0FOLE1BQUFBLEdBQUcsQ0FBQ00sU0FBSixHQUFnQiwwR0FBaEI7QUFDQU4sTUFBQUEsR0FBRyxDQUFDTSxTQUFKLElBQWlCLHlHQUFqQjtBQUNBTixNQUFBQSxHQUFHLENBQUNNLFNBQUosSUFBaUIsbUZBQWpCO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQixRQUFoQjtBQUNILE1BRUQ7Ozs7V0FDQSx1QkFBY0MsQ0FBZCxFQUFpQjtBQUNiLFVBQUlDLFVBQVUsR0FBR25CLFFBQVEsQ0FBQ29CLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBakI7QUFDQXBCLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFja0IsV0FBZCxDQUEwQkYsVUFBMUI7QUFDQSxVQUFJdkIsdURBQUosR0FIYSxDQUliO0FBQ0g7Ozs7S0FJTCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsaXplZHdlYXBvbi1jaXZpbGl6ZWRhZ2UvLi9zcmMvcGFnZXMvd2VsY29tZS1wYWdlLmpzPzA3NzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgV29ya2JlbmNoID0gcmVxdWlyZShcIi4vd29ya2JlbmNoLXBhZ2VcIik7XG5pbXBvcnQgV29ya2JlbmNoIGZyb20gXCIuL3dvcmtiZW5jaC1wYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VsY29tZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy53ZWxjb21lU3RydWN0dXJlKCk7XG4gICAgfVxuICAgIHdlbGNvbWVTdHJ1Y3R1cmUoKXtcbiAgICAgICAgbGV0IHdlbGNvbWVQYWdlRmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKVxuICAgICAgICB3ZWxjb21lUGFnZUZpZ3VyZS5pZCA9ICd3ZWxjb21lJ1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlbGNvbWVQYWdlRmlndXJlKVxuICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgdWwuaWQgPSBcIndlbGNvbWUtdGV4dC1ib3hcIlxuICAgICAgICBjb25zb2xlLmxvZyh3ZWxjb21lUGFnZUZpZ3VyZSlcbiAgICAgICAgd2VsY29tZVBhZ2VGaWd1cmUuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICBsZXQgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkxLmNsYXNzTmFtZSA9IFwid2VsY29tZS0xXCI7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgICAgICBsZXQgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkyLmNsYXNzTmFtZSA9IFwid2VsY29tZS0yXCI7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgICAgICBsZXQgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkzLmNsYXNzTmFtZSA9IFwid2VsY29tZS0zXCI7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICAgICAgICBsZXQgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxpNC5jbGFzc05hbWUgPSBcImxhdW5jaC1idXR0b25cIjtcbiAgICAgICAgICAgIC8vdGhpcyBzaG91bGQgbGluayB1cyB0byBnZW5lcmF0aW5nIHRoZSB3b3JrYmVuY2ggcGFnZS8vXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaTQpXG4gICAgICAgIGxpNC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zd2l0Y2hTY3JlZW5zLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLndlbGNvbWVDb250ZW50KGxpMSwgbGkyLCBsaTMsIGxpNCk7XG4gICAgfVxuXG4gICAgd2VsY29tZUNvbnRlbnQobGkxLCBsaTIsIGxpMywgbGk0KXtcbiAgICAgICAgbGkxLmlubmVySFRNTCA9ICdXZWxjb21lLCBQYWRhd2FuJ1xuICAgICAgICBsaTIuaW5uZXJIVE1MID0gJ1RoZXNlIGFyZSB5b3VyIGZpcnN0IHN0ZXBzLi4uIC1CZW4gS2Vub2JpJ1xuICAgICAgICBsaTMuaW5uZXJIVE1MID0gJ0JlZm9yZSB5b3UgY2FuIGJlIGZ1bGx5IGFjY2VwdGVkIGludG8gdGhlIEplZGkgT3JkZXIsIHlvdSBtdXN0IGNvbnN0cnVjdCB5b3VyIGZpcnN0IGxpZ2h0c2FiZXIgcHJvdG90eXBlJ1xuICAgICAgICBsaTMuaW5uZXJIVE1MICs9ICcuIFRoaW5rIGNhcmVmdWxseSBhYm91dCB5b3VyIGRlc2lnbi4gUmVtZW1iZXIsIHRoZXJlIGFyZSBjb25zZXF1ZW5jZXMgdG8gZXZlcnkgY2hvaWNlLCBhbmQgdGhlIGNob2ljZXMgJ1xuICAgICAgICBsaTMuaW5uZXJIVE1MICs9ICd5b3UgbWFrZSBub3cgd2lsbCBoZWxwIGRldGVybWluZSB5b3VyIGZvY3VzIGFzIGEgSmVkaS4gTWF5IHRoZSBGb3JjZSBiZSB3aXRoIHlvdS4nXG4gICAgICAgIGxpNC5pbm5lckhUTUwgPSBcIkxhdW5jaFwiXG4gICAgfVxuXG4gICAgLy8gYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKVxuICAgIHN3aXRjaFNjcmVlbnMoZSkge1xuICAgICAgICBsZXQgd2VsY29tZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQod2VsY29tZUJveClcbiAgICAgICAgbmV3IFdvcmtiZW5jaCgpO1xuICAgICAgICAvL3RoaXMgaXMgd2hlcmUgd2UgYXJlIHN3aXRjaGluZyBwYWdlc1xuICAgIH1cbiAgICBcbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBXZWxjb21lO1xuXG5cbiJdLCJuYW1lcyI6WyJXb3JrYmVuY2giLCJXZWxjb21lIiwid2VsY29tZVN0cnVjdHVyZSIsIndlbGNvbWVQYWdlRmlndXJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ1bCIsImNvbnNvbGUiLCJsb2ciLCJsaTEiLCJjbGFzc05hbWUiLCJsaTIiLCJsaTMiLCJsaTQiLCJhZGRFdmVudExpc3RlbmVyIiwic3dpdGNoU2NyZWVucyIsImJpbmQiLCJ3ZWxjb21lQ29udGVudCIsImlubmVySFRNTCIsImUiLCJ3ZWxjb21lQm94IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/welcome-page.js\n");

/***/ }),

/***/ "./src/pages/workbench-page.js":
/*!*************************************!*\
  !*** ./src/pages/workbench-page.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Workbench; }\n/* harmony export */ });\n/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-page */ \"./src/pages/welcome-page.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// const Welcome = require(\"./welcome-page\")\n\n\nvar Workbench = /*#__PURE__*/function () {\n  function Workbench() {\n    _classCallCheck(this, Workbench);\n\n    this.workbenchStructure();\n  }\n\n  _createClass(Workbench, [{\n    key: \"workbenchStructure\",\n    value: function workbenchStructure() {\n      var workbenchPageFigure = document.createElement(\"figure\");\n      workbenchPageFigure.id = 'workbench';\n      document.body.appendChild(workbenchPageFigure);\n      var backButton = document.createElement(\"button\");\n      backButton.id = \"back-button\";\n      workbenchPageFigure.appendChild(backButton);\n      backButton.innerHTML = \"Back\";\n      backButton.addEventListener(\"click\", this.toWelcomeScreen.bind(this));\n    }\n  }, {\n    key: \"toWelcomeScreen\",\n    value: function toWelcomeScreen() {\n      var workbenchFigure = document.getElementById('workbench');\n      document.body.removeChild(workbenchFigure);\n      new _welcome_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n  }]);\n\n  return Workbench;\n}(); // module.exports = Workbench;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29ya2JlbmNoLXBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkM7QUFFakIsdUJBQWU7QUFBQTs7QUFDWCxTQUFLQyxrQkFBTDtBQUNIOzs7O1dBRUQsOEJBQW9CO0FBQ2hCLFVBQUlDLG1CQUFtQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBMUI7QUFDQUYsTUFBQUEsbUJBQW1CLENBQUNHLEVBQXBCLEdBQXlCLFdBQXpCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxtQkFBMUI7QUFDQSxVQUFJTSxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBSSxNQUFBQSxVQUFVLENBQUNILEVBQVgsR0FBZ0IsYUFBaEI7QUFDQUgsTUFBQUEsbUJBQW1CLENBQUNLLFdBQXBCLENBQWdDQyxVQUFoQztBQUNBQSxNQUFBQSxVQUFVLENBQUNDLFNBQVgsR0FBdUIsTUFBdkI7QUFDQUQsTUFBQUEsVUFBVSxDQUFDRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxLQUFLQyxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFyQztBQUNIOzs7V0FFRCwyQkFBaUI7QUFDYixVQUFJQyxlQUFlLEdBQUdWLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixXQUF4QixDQUF0QjtBQUNBWCxNQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FBY1MsV0FBZCxDQUEwQkYsZUFBMUI7QUFDQSxVQUFJZCxxREFBSjtBQUNIOzs7O0tBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbGl6ZWR3ZWFwb24tY2l2aWxpemVkYWdlLy4vc3JjL3BhZ2VzL3dvcmtiZW5jaC1wYWdlLmpzPzdkOWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgV2VsY29tZSA9IHJlcXVpcmUoXCIuL3dlbGNvbWUtcGFnZVwiKVxuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vd2VsY29tZS1wYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2JlbmNoIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy53b3JrYmVuY2hTdHJ1Y3R1cmUoKTtcbiAgICB9XG5cbiAgICB3b3JrYmVuY2hTdHJ1Y3R1cmUoKXtcbiAgICAgICAgbGV0IHdvcmtiZW5jaFBhZ2VGaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgICAgICB3b3JrYmVuY2hQYWdlRmlndXJlLmlkID0gJ3dvcmtiZW5jaCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod29ya2JlbmNoUGFnZUZpZ3VyZSk7XG4gICAgICAgIGxldCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYmFja0J1dHRvbi5pZCA9IFwiYmFjay1idXR0b25cIjtcbiAgICAgICAgd29ya2JlbmNoUGFnZUZpZ3VyZS5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKVxuICAgICAgICBiYWNrQnV0dG9uLmlubmVySFRNTCA9IFwiQmFja1wiO1xuICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvV2VsY29tZVNjcmVlbi5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBcbiAgICB0b1dlbGNvbWVTY3JlZW4oKXtcbiAgICAgICAgbGV0IHdvcmtiZW5jaEZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JrYmVuY2gnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh3b3JrYmVuY2hGaWd1cmUpXG4gICAgICAgIG5ldyBXZWxjb21lKCk7XG4gICAgfVxufVxuLy8gbW9kdWxlLmV4cG9ydHMgPSBXb3JrYmVuY2g7Il0sIm5hbWVzIjpbIldlbGNvbWUiLCJXb3JrYmVuY2giLCJ3b3JrYmVuY2hTdHJ1Y3R1cmUiLCJ3b3JrYmVuY2hQYWdlRmlndXJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJiYWNrQnV0dG9uIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvV2VsY29tZVNjcmVlbiIsImJpbmQiLCJ3b3JrYmVuY2hGaWd1cmUiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/workbench-page.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbGl6ZWR3ZWFwb24tY2l2aWxpemVkYWdlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;