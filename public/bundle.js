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

/***/ "./src/api/addLike.js":
/*!****************************!*\
  !*** ./src/api/addLike.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst addLike = async (item_id) => {\r\n  try {\r\n    await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/apps/${_constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/likes`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id,\r\n      }),\r\n      headers: {\r\n        Accept: 'application.json',\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n  } catch (err) {\r\n    console.error(err);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://js-capstone/./src/api/addLike.js?");

/***/ }),

/***/ "./src/api/comments.js":
/*!*****************************!*\
  !*** ./src/api/comments.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst getComments = async (id) => {\r\n  const response = await fetch(\r\n    `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/apps/${_constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/comments?item_id=${id}`,\r\n  );\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postComment = async (id, name, comment) => {\r\n  const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/apps/${_constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/comments`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    }),\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://js-capstone/./src/api/comments.js?");

/***/ }),

/***/ "./src/api/getItems.js":
/*!*****************************!*\
  !*** ./src/api/getItems.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getItems\": () => (/* binding */ getItems)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst getItems = async () => Promise.all(\r\n  _constants_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT_IDS.map(async (id) => {\r\n    const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ART_API}/${id}`);\r\n    return response.json();\r\n  }),\r\n);\r\n\n\n//# sourceURL=webpack://js-capstone/./src/api/getItems.js?");

/***/ }),

/***/ "./src/api/getLikes.js":
/*!*****************************!*\
  !*** ./src/api/getLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nconst getLikes = async () => {\r\n  try {\r\n    const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API}/apps/${_constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/likes`);\r\n    return response.json();\r\n  } catch (error) {\r\n    console.error(error);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://js-capstone/./src/api/getLikes.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_ID\": () => (/* binding */ APP_ID),\n/* harmony export */   \"ART_API\": () => (/* binding */ ART_API),\n/* harmony export */   \"INVOLVEMENT_API\": () => (/* binding */ INVOLVEMENT_API),\n/* harmony export */   \"OBJECT_IDS\": () => (/* binding */ OBJECT_IDS)\n/* harmony export */ });\nconst ART_API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';\r\nconst INVOLVEMENT_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\nconst APP_ID = 'IRmh7KS3bxHMUMwKVm5P';\r\n\r\nconst OBJECT_IDS = [\r\n  329767, 329768, 329769, 329771, 329774, 329782, 329783, 329785, 329789,\r\n  329790, 329792, 329793, 329796, 544074, 544075, 544076, 544077, 544078,\r\n  544079, 544080, 544081, 544082, 544083, 544084,\r\n];\r\n\n\n//# sourceURL=webpack://js-capstone/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './tailwind.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _views_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/item.js */ \"./src/views/item.js\");\n/* harmony import */ var _api_getItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/getItems.js */ \"./src/api/getItems.js\");\n/* harmony import */ var _api_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/getLikes.js */ \"./src/api/getLikes.js\");\n/* harmony import */ var _api_addLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/addLike.js */ \"./src/api/addLike.js\");\n/* harmony import */ var _views_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/modal.js */ \"./src/views/modal.js\");\n/* harmony import */ var _api_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/comments.js */ \"./src/api/comments.js\");\n/* harmony import */ var _modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n/* harmony import */ var _modules_comment_counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/comment-counter */ \"./src/modules/comment-counter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst modalClose = () => {\r\n  const modal = document.querySelector('#modal');\r\n  modal.classList.remove('fadeIn');\r\n  modal.classList.add('fadeOut');\r\n  setTimeout(() => {\r\n    modal.style.display = 'none';\r\n    modal.parentElement.removeChild(modal);\r\n  }, 500);\r\n};\r\n\r\nconst handleSubmit = (e, id) => {\r\n  e.preventDefault();\r\n  const form = e.target;\r\n  const name = document.querySelector('#name').value;\r\n  const comment = document.querySelector('#comment').value;\r\n  (0,_api_comments_js__WEBPACK_IMPORTED_MODULE_6__.postComment)(id, name, comment);\r\n  const commentsList = document.querySelector('#comments-list');\r\n  const commentObj = {\r\n    username: name,\r\n    comment,\r\n    creation_date: new Date().toLocaleString(),\r\n  };\r\n  const li = document.createElement('li');\r\n  li.classList.add('flex', 'flex-col', 'py-2', 'border-b', 'border-gray-300');\r\n  li.innerHTML = `<div class='flex justify-between items-center'>\r\n    <p class='font-bold'>${commentObj.username}</p>\r\n    <p class='text-sm text-gray-500'>${commentObj.creation_date}</p>\r\n  </div>\r\n  <p class='text-sm'>${commentObj.comment}</p>`;\r\n\r\n  commentsList.appendChild(li);\r\n  const span = document.createElement('span');\r\n  span.classList.add('font-light', 'text-sm', 'text-green-600');\r\n  span.innerHTML = 'Comment added successfully';\r\n  form.appendChild(span);\r\n  form.reset();\r\n  setTimeout(() => {\r\n    span.parentElement.removeChild(span);\r\n  }, 3000);\r\n  (0,_modules_comment_counter__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n};\r\n\r\nconst openModal = (title, img, id, objectDate, period, repository) => {\r\n  const modal = (0,_views_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    title,\r\n    img,\r\n    id,\r\n    objectDate,\r\n    period,\r\n    repository,\r\n  });\r\n  document.body.appendChild(modal);\r\n  const closeButton = document.querySelector('#close-modal');\r\n  const form = document.querySelector(`#form-${id}`);\r\n  form.addEventListener('submit', (e) => handleSubmit(e, id));\r\n  closeButton.addEventListener('click', modalClose);\r\n  modal.classList.remove('fadeOut');\r\n  modal.classList.add('fadeIn');\r\n  modal.style.display = 'flex';\r\n};\r\n\r\nif (!window.customElements.get('item-card')) {\r\n  window.customElements.define('item-card', _views_item_js__WEBPACK_IMPORTED_MODULE_1__.item);\r\n}\r\n\r\nconst main = async () => {\r\n  const items = await (0,_api_getItems_js__WEBPACK_IMPORTED_MODULE_2__.getItems)();\r\n  const likes = await (0,_api_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\r\n  const likesObj = {};\r\n  likes.forEach(({ likes, item_id }) => {\r\n    likesObj[item_id] = likes;\r\n  });\r\n  const itemsContainer = document.querySelector('.items-container');\r\n  items.forEach(\r\n    ({\r\n      title,\r\n      primaryImageSmall,\r\n      objectID,\r\n      objectDate,\r\n      period,\r\n      repository,\r\n    }) => {\r\n      const likes = likesObj[objectID] ? likesObj[objectID] : 0;\r\n      const itemDiv = document.createElement('div');\r\n      itemDiv.classList.add('flex', 'flex-col', 'w-full', 'py-4');\r\n      itemDiv.innerHTML = `<item-card\r\n    imgSrc=\"${primaryImageSmall}\"\r\n    objectID=\"${objectID}\"\r\n    title=\"${title}\"\r\n    likes=\"${likes}\"\r\n    >\r\n    </item-card>`;\r\n      const commentBtn = document.createElement('button');\r\n      const commentBtnClasses =\r\n        'comment-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';\r\n      commentBtn.classList.add(...commentBtnClasses.split(' '));\r\n      commentBtn.innerHTML = 'Comment';\r\n      commentBtn.addEventListener('click', () => {\r\n        openModal(\r\n          title,\r\n          primaryImageSmall,\r\n          objectID,\r\n          objectDate,\r\n          period,\r\n          repository\r\n        );\r\n      });\r\n      itemDiv.appendChild(commentBtn);\r\n      itemsContainer.appendChild(itemDiv);\r\n    }\r\n  );\r\n\r\n  const likeBtns = document.querySelectorAll('.like-btn');\r\n  likeBtns.forEach((btn) => {\r\n    btn.addEventListener('click', async (e) => {\r\n      const objectID = e.currentTarget.id.split('-')[2];\r\n      (0,_api_addLike_js__WEBPACK_IMPORTED_MODULE_4__.addLike)(objectID);\r\n      const svg = e.currentTarget.querySelector('.svg-img');\r\n      svg.classList.remove('text-gray-300');\r\n\r\n      if (!svg.classList.contains('text-red-400')) {\r\n        const likesCount = document.getElementById(`likes-count-${objectID}`);\r\n        const num = parseInt(likesCount.innerHTML);\r\n        likesCount.innerHTML = '';\r\n        likesCount.innerHTML = `${num + 1}`;\r\n      }\r\n      svg.classList.add('text-red-400');\r\n    });\r\n  });\r\n\r\n  (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_7__.itemsCounter)();\r\n};\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentCounter)\n/* harmony export */ });\nfunction commentCounter() {\r\n  const commentsList = document.getElementById('comments-list');\r\n  const commentsCount = document.getElementById('comments-count');\r\n  commentsCount.innerHTML = '';\r\n  commentsCount.innerHTML = `(${commentsList.childElementCount})`;\r\n}\n\n//# sourceURL=webpack://js-capstone/./src/modules/comment-counter.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsCounter\": () => (/* binding */ itemsCounter)\n/* harmony export */ });\nconst itemsCounter = () => {\r\n  const itemsContainer = document.querySelector('.items-container');\r\n  const len = itemsContainer.getElementsByTagName('item-card').length;\r\n\r\n  const counter = document.getElementById('counter');\r\n  counter.innerHTML = `(${len})`;\r\n  // return len;\r\n};\n\n//# sourceURL=webpack://js-capstone/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/views/item.js":
/*!***************************!*\
  !*** ./src/views/item.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"item\": () => (/* binding */ item)\n/* harmony export */ });\nclass item extends HTMLElement {\r\n  connectedCallback() {\r\n    const {\r\n      imgSrc, title, likes, objectID,\r\n    } = this.attributes;\r\n    this.innerHTML = `<img\r\n    src=\"${imgSrc.value}\"\r\n    class=\"rounded aspect-square\"\r\n  />\r\n  <span class=\"flex flex-row justify-between my-2 h-12 items-center\">\r\n    <p class=\"text-start text-lg break-all\">${title.value}</p>\r\n    <span class=\"text-end flex flex-row justify-end\">\r\n      <p class=\"text-base px-2 text-center\"><span class=\"text-red-400\" id=\"likes-count-${objectID.value}\">${likes.value}</span></p>\r\n      <button class=\"like-btn\" id=\"like-btn-${objectID.value}\">\r\n        <svg\r\n          class=\"text-gray-300 w-6 h-auto fill-current svg-img\"\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          viewBox=\"0 0 512 512\"\r\n        >\r\n          <path\r\n            d=\"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z\"\r\n          />\r\n        </svg>\r\n      </button>\r\n    </span>\r\n  </span>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://js-capstone/./src/views/item.js?");

/***/ }),

/***/ "./src/views/modal.js":
/*!****************************!*\
  !*** ./src/views/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/comments.js */ \"./src/api/comments.js\");\n/* harmony import */ var _modules_comment_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/comment-counter.js */ \"./src/modules/comment-counter.js\");\n\r\n\r\n\r\nconst modalClasses = 'border border-gray-300 modal-container bg-white w-11/12 md:max-w-lg mx-auto rounded overflow-y-auto shadow-2xl z-50 max-h-[90vh]';\r\nconst modalContainerClasses = 'main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster';\r\n\r\nconst createModal = (item) => {\r\n  (0,_api_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(item.id).then((comments) => {\r\n    const commentsList = document.querySelector('#comments-list');\r\n    comments.forEach((comment) => {\r\n      const li = document.createElement('li');\r\n      li.classList.add(\r\n        'flex',\r\n        'flex-col',\r\n        'py-2',\r\n        'border-b',\r\n        'border-gray-300',\r\n      );\r\n      li.innerHTML = `<div class='flex justify-between items-center'>\r\n        <p class='font-bold'>${comment.username}</p>\r\n        <p class='text-sm text-gray-500'>${comment.creation_date}</p>\r\n      </div>\r\n      <p class='text-sm'>${comment.comment}</p>`;\r\n\r\n      commentsList.appendChild(li);\r\n    });\r\n    (0,_modules_comment_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const modalContainer = document.createElement('div');\r\n  modalContainer.id = 'modal';\r\n  modalContainer.classList.add(...modalContainerClasses.split(' '));\r\n  const modal = document.createElement('div');\r\n  modal.classList.add(...modalClasses.split(' '));\r\n  const modalContent = document.createElement('div');\r\n  modalContent.classList.add('py-4', 'px-6', 'text-left');\r\n  modalContent.innerHTML = `<div class='flex flex-col'>\r\n  <div class=\"flex items-center justify-between\">\r\n    <p class='text-2xl font-bold'>${item.title}</p>\r\n    <div id='close-modal' class='modal-close cursor-pointer z-50'>\r\n      <svg\r\n        class='fill-current text-black'\r\n        xmlns='http://www.w3.org/2000/svg'\r\n        width='18'\r\n        height='18'\r\n        viewBox='0 0 18 18'\r\n      >\r\n        <path\r\n          d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'\r\n        ></path>\r\n      </svg>\r\n    </div>\r\n    </div>\r\n    <div class=\"flex flex-col mt-3 w-full\">\r\n    <span class=\"flex flex-row justify-between items-start\">\r\n      <p class=\"text-base text-gray-700\">Dated: <span class=\"font-semibold\">${item.objectDate}</span></p>\r\n      <p class=\"text-base text-gray-700\">Period: <span class=\"font-semibold\">${item.period}</span></p>\r\n    </span>\r\n    <p class=\"text-base font-bold\">${item.repository}</p>\r\n  </div>\r\n  </div>\r\n  <!--Body-->\r\n  <div class='my-5'>\r\n    <div>\r\n      <img\r\n        src='${item.img}'\r\n        class='md:h-60 lg:-h-96 w-full object-cover mx-auto'\r\n        alt='image'\r\n      />\r\n    </div>\r\n    <div class='mt-4'>\r\n      <!-- comments list -->\r\n      <h4 class='text-gray-900 text-xl font-semibold'>Comments\r\n        <span id=\"comments-count\" class='text-gray-400 font-normal'>(0)</span>\r\n      </h4>\r\n      <ul id='comments-list' class='border border-gray-300 p-4 rounded-md shadow-sm mt-2'>\r\n\r\n      </ul>\r\n      <form id='form-${item.id}' class='mt-4 shadow-sm'>\r\n        <h4 class='text-gray-900 text-xl font-semibold'>Add Comment</h4>\r\n        <div class='flex flex-col'>\r\n          <label\r\n            for='name'\r\n            class='text-gray-700 font-semibold mb-1'\r\n          >\r\n            Name\r\n          </label>\r\n          <input\r\n            id='name'\r\n            name='name'\r\n            type='text'\r\n            class='border border-gray-300 p-2 rounded'\r\n          />\r\n\r\n          <label\r\n            for='comment'\r\n            class='text-gray-700 mt-2 font-semibold mb-1'\r\n          >\r\n            Comment\r\n          </label>\r\n          <textarea\r\n            id='comment'\r\n            name='comment'\r\n            class='border border-gray-300 p-2 rounded resize-none'\r\n            rows='2'\r\n          ></textarea>\r\n        </div>\r\n        <div class='flex justify-end mt-2'>\r\n          <button\r\n            id='comment-btn'\r\n            class='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'\r\n          >\r\n            Comment\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  `;\r\n  modalContainer.appendChild(modal);\r\n  modal.appendChild(modalContent);\r\n  return modalContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);\r\n\n\n//# sourceURL=webpack://js-capstone/./src/views/modal.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;