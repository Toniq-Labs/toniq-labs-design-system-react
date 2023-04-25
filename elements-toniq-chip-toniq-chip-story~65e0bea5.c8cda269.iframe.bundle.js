(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/elements/toniq-chip/toniq-chip.story.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mainStory",(function(){return mainStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/react/index.js");var _icons__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/icons/index.ts"),_storybook_helpers_standard_controls__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/storybook-helpers/standard-controls.ts"),_styles__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/styles/index.ts"),_styles_css_to_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/styles/css-to-react.ts"),_react_components__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/elements/react-components.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var chipStoryControls=Object.assign({},_storybook_helpers_standard_controls__WEBPACK_IMPORTED_MODULE_17__.a,{text:{name:"Text",control:"text"},iconName:{name:"16px Icon",control:"select",options:["None"].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_icons__WEBPACK_IMPORTED_MODULE_16__.j["core-16"].map((function(icon){return icon.iconName}))))},className:{name:"Host class",control:"select",options:["None","toniq-chip-secondary"]},icon:{table:{disable:!0}}}),componentStoryMeta={title:"Elements/Toniq Chip",component:_react_components__WEBPACK_IMPORTED_MODULE_20__.c,argTypes:chipStoryControls,parameters:{actions:{disable:!0}},args:{text:"Custom text here",iconName:"None",className:"None"}};__webpack_exports__.default=componentStoryMeta;var mainStory=function mainStory(controls){function generateSection(heading){var className=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_19__.a)(_styles__WEBPACK_IMPORTED_MODULE_18__.g.h3Font)),children:heading}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px",flexWrap:"wrap"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.c,{className:className,children:"inner HTML"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_react_components__WEBPACK_IMPORTED_MODULE_20__.c,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.e,{icon:_icons__WEBPACK_IMPORTED_MODULE_16__.e}),"inner HTML with icon"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.c,{className:className,text:"with text input"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.c,{className:className,text:"with text and icon inputs",icon:_icons__WEBPACK_IMPORTED_MODULE_16__.e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.c,{style:{width:"200px"},className:className,text:"with custom size",icon:_icons__WEBPACK_IMPORTED_MODULE_16__.e})]})]})}var customIcon=_icons__WEBPACK_IMPORTED_MODULE_16__.j["core-16"].find((function(icon){return icon.iconName===controls.iconName}));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment,{children:[generateSection("Primary"),generateSection("Secondary","toniq-chip-secondary"),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_19__.a)(_styles__WEBPACK_IMPORTED_MODULE_18__.g.h3Font)),children:"Custom Inputs"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.c,{className:controls.className,text:controls.text,icon:customIcon})]})};mainStory.storyName="Toniq Chip",mainStory.parameters=Object.assign({storySource:{source:"(controls: Record<keyof typeof chipStoryControls, string>) => {\n    function generateSection(heading: string, className: string = '') {\n        return (\n            <>\n                <h3\n                    style={{\n                        ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                    }}\n                >\n                    {heading}\n                </h3>\n                <div\n                    style={{\n                        display: 'flex',\n                        alignItems: 'flex-start',\n                        gap: '16px',\n                        flexWrap: 'wrap',\n                    }}\n                >\n                    <ToniqChip className={className}>inner HTML</ToniqChip>\n                    <ToniqChip className={className}>\n                        <ToniqIcon icon={Copy16Icon} />\n                        inner HTML with icon\n                    </ToniqChip>\n                    <ToniqChip className={className} text={'with text input'} />\n                    <ToniqChip\n                        className={className}\n                        text={'with text and icon inputs'}\n                        icon={Copy16Icon}\n                    />\n                    <ToniqChip\n                        style={{width: '200px'}}\n                        className={className}\n                        text={'with custom size'}\n                        icon={Copy16Icon}\n                    />\n                </div>\n            </>\n        );\n    }\n\n    const customIcon = allIconsByCategory['core-16'].find(\n        (icon) => icon.iconName === controls.iconName,\n    );\n\n    return (\n        <>\n            {generateSection('Primary')}\n            {generateSection('Secondary', 'toniq-chip-secondary')}\n            <h3\n                style={{\n                    ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                }}\n            >\n                Custom Inputs\n            </h3>\n\n            <ToniqChip className={controls.className} text={controls.text} icon={customIcon} />\n        </>\n    );\n}"}},mainStory.parameters);try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/toniq-chip/toniq-chip.story.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/elements/toniq-chip/toniq-chip.story.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{mainStory.displayName="mainStory",mainStory.__docgenInfo={description:"",displayName:"mainStory",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"string"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/toniq-chip/toniq-chip.story.tsx#mainStory"]={docgenInfo:mainStory.__docgenInfo,name:"mainStory",path:"src/elements/toniq-chip/toniq-chip.story.tsx#mainStory"})}catch(__react_docgen_typescript_loader_error){}}}]);