"use strict";(self.webpackChunkowncast_admin=self.webpackChunkowncast_admin||[]).push([[9141],{"./components/chat/ChatTextField/EmojiPicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmojiPicker:()=>EmojiPicker});__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),picmo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/picmo/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),EmojiPicker=function EmojiPicker(_ref){var onEmojiSelect=_ref.onEmojiSelect,onCustomEmojiSelect=_ref.onCustomEmojiSelect,customEmoji=_ref.customEmoji,ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){var e=customEmoji.map((function(emoji){return{emoji:emoji.name,label:emoji.name,url:emoji.url}}));(0,picmo__WEBPACK_IMPORTED_MODULE_3__.wU)({rootElement:ref.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0}).addEventListener("emoji:select",(function(event){event.url?onCustomEmojiSelect(event.label,event.url):onEmojiSelect(event.emoji)}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref})};EmojiPicker.displayName="EmojiPicker";try{EmojiPicker.displayName="EmojiPicker",EmojiPicker.__docgenInfo={description:"",displayName:"EmojiPicker",props:{onEmojiSelect:{defaultValue:null,description:"",name:"onEmojiSelect",required:!0,type:{name:"(emoji: string) => void"}},onCustomEmojiSelect:{defaultValue:null,description:"",name:"onCustomEmojiSelect",required:!0,type:{name:"(name: string, url: string) => void"}},customEmoji:{defaultValue:null,description:"",name:"customEmoji",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatTextField/EmojiPicker.tsx#EmojiPicker"]={docgenInfo:EmojiPicker.__docgenInfo,name:"EmojiPicker",path:"components/chat/ChatTextField/EmojiPicker.tsx#EmojiPicker"})}catch(__react_docgen_typescript_loader_error){}}}]);