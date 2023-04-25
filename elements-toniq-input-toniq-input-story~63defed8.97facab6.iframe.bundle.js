(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/elements/toniq-input/toniq-input.story.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mainStory",(function(){return mainStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react/index.js");var _icons__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/icons/index.ts"),_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/storybook-helpers/actions.ts"),_storybook_helpers_multi_element_state__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/storybook-helpers/multi-element-state.ts"),_storybook_helpers_standard_controls__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/storybook-helpers/standard-controls.ts"),_styles__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/styles/index.ts"),_styles_css_to_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/styles/css-to-react.ts"),_react_components__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/elements/react-components.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var inputStoryControls=Object.assign({},_storybook_helpers_standard_controls__WEBPACK_IMPORTED_MODULE_16__.a,{value:{table:{disable:!0}},placeholder:{name:"Placeholder",control:"text"},disabled:{name:"Disabled",control:"boolean"},allowedInputs:{name:"Allowed Letters",control:"text"},blockedInputs:{name:"Blocked Letters",control:"text"},innerInputElement:{table:{disable:!0}}}),inputComponentStoryMeta={title:"Elements/Toniq Input",component:_react_components__WEBPACK_IMPORTED_MODULE_19__.f,argTypes:inputStoryControls,args:{placeholder:"Custom placeholder",allowedInputs:"",blockedInputs:"",disabled:!1}};__webpack_exports__.default=inputComponentStoryMeta;var inputsStateInit={squished:"",squishedOutline:"",short:"",withValue:"with value",cannotType:"cannot type into",noBrowserHelps:"",custom:"",noD:"",onlyNumbers:"",blockedNumbers:"",withKeyPress:"",withPlaceholder:"",withIcon:"",stretched:""},mainStory=function mainStory(controls){var sectionStyles={display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"flex-start"},_createMultiElementSt2=_slicedToArray(Object(_storybook_helpers_multi_element_state__WEBPACK_IMPORTED_MODULE_15__.a)(inputsStateInit),3),state=_createMultiElementSt2[0],updateState=_createMultiElementSt2[1],stateKeys=_createMultiElementSt2[2];function makeInputs(key){return{value:state[key],onValueChange:function onValueChange(event){updateState({key:key,value:event.detail}),console.log(state[key]),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a)(event)},onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a}}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("article",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_18__.a)(_styles__WEBPACK_IMPORTED_MODULE_17__.g.h3Font)),children:"With assigned values"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("section",{style:sectionStyles,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a},makeInputs(stateKeys.withValue))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onKeyDown:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"with keypress listener"},makeInputs(stateKeys.withKeyPress))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"with placeholder"},makeInputs(stateKeys.withPlaceholder))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"with icon",icon:_icons__WEBPACK_IMPORTED_MODULE_13__.i},makeInputs(stateKeys.withIcon))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"stretched",style:{width:"500px"},icon:_icons__WEBPACK_IMPORTED_MODULE_13__.i},makeInputs(stateKeys.stretched))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"Search squished",style:{height:"40px"},icon:_icons__WEBPACK_IMPORTED_MODULE_13__.i},makeInputs(stateKeys.squished))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"short",style:{width:"140px"}},makeInputs(stateKeys.short))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"Search outline squished",className:_react_components__WEBPACK_IMPORTED_MODULE_19__.f.hostClasses.outline,style:{height:"40px"},icon:_icons__WEBPACK_IMPORTED_MODULE_13__.i},makeInputs(stateKeys.squishedOutline)))]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_18__.a)(_styles__WEBPACK_IMPORTED_MODULE_17__.g.h3Font)),children:"With input restrictions"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("section",{style:sectionStyles,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"letter 'd' is blocked",blockedInputs:"d"},makeInputs(stateKeys.noD))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"only numbers are allowed",allowedInputs:/\d/},makeInputs(stateKeys.onlyNumbers))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:"numbers are blocked",allowedInputs:/\D/},makeInputs(stateKeys.blockedNumbers)))]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_18__.a)(_styles__WEBPACK_IMPORTED_MODULE_17__.g.h3Font)),children:"Disabled"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("section",{style:sectionStyles,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({},makeInputs(stateKeys.cannotType),{disabled:!0,onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_18__.a)(_styles__WEBPACK_IMPORTED_MODULE_17__.g.h3Font)),children:"No browser helps"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("section",{style:sectionStyles,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({},makeInputs(stateKeys.noBrowserHelps),{onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:'try typing "im" to see if it auto-corrects',disableBrowserHelps:!0}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h3",{style:Object.assign({},Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_18__.a)(_styles__WEBPACK_IMPORTED_MODULE_17__.g.h3Font)),children:"Custom inputs"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("section",{style:sectionStyles,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_19__.f,Object.assign({onValueChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,onInputBlocked:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_14__.a,placeholder:controls.placeholder,allowedInputs:controls.allowedInputs,blockedInputs:controls.blockedInputs,disabled:!!controls.disabled},makeInputs(stateKeys.custom)))})]})};mainStory.displayName="mainStory",mainStory.storyName="Toniq Input",mainStory.parameters=Object.assign({storySource:{source:'(controls: Record<keyof typeof inputStoryControls, string>) => {\n    const sectionStyles: CSSProperties = {\n        display: \'flex\',\n        gap: \'8px\',\n        flexWrap: \'wrap\',\n        alignItems: \'flex-start\',\n    };\n\n    const [\n        state,\n        updateState,\n        stateKeys,\n    ] = createMultiElementState(inputsStateInit);\n\n    function makeInputs(key: keyof typeof state) {\n        const props: ComponentProps<typeof ToniqInput> = {\n            value: state[key],\n            onValueChange: (event) => {\n                updateState({\n                    key,\n                    value: event.detail,\n                });\n                console.log(state[key]);\n                handleEventAsAction(event);\n            },\n            onInputBlocked: handleEventAsAction,\n        };\n\n        return props;\n    }\n\n    return (\n        <article>\n            <h3\n                style={{\n                    ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                }}\n            >\n                With assigned values\n            </h3>\n            <section style={sectionStyles}>\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    {...makeInputs(stateKeys.withValue)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    onKeyDown={handleEventAsAction}\n                    placeholder="with keypress listener"\n                    {...makeInputs(stateKeys.withKeyPress)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="with placeholder"\n                    {...makeInputs(stateKeys.withPlaceholder)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="with icon"\n                    icon={Search24Icon}\n                    {...makeInputs(stateKeys.withIcon)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="stretched"\n                    style={{width: \'500px\'}}\n                    icon={Search24Icon}\n                    {...makeInputs(stateKeys.stretched)}\n                />\n                <ToniqInput\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="Search squished"\n                    style={{height: \'40px\'}}\n                    icon={Search24Icon}\n                    {...makeInputs(stateKeys.squished)}\n                />\n                <ToniqInput\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="short"\n                    style={{width: \'140px\'}}\n                    {...makeInputs(stateKeys.short)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="Search outline squished"\n                    className={ToniqInput.hostClasses.outline}\n                    style={{height: \'40px\'}}\n                    icon={Search24Icon}\n                    {...makeInputs(stateKeys.squishedOutline)}\n                />\n            </section>\n            <h3\n                style={{\n                    ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                }}\n            >\n                With input restrictions\n            </h3>\n            <section style={sectionStyles}>\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="letter \'d\' is blocked"\n                    blockedInputs="d"\n                    {...makeInputs(stateKeys.noD)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="only numbers are allowed"\n                    allowedInputs={/\\d/}\n                    {...makeInputs(stateKeys.onlyNumbers)}\n                />\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder="numbers are blocked"\n                    allowedInputs={/\\D/}\n                    {...makeInputs(stateKeys.blockedNumbers)}\n                />\n            </section>\n\n            <h3\n                style={{\n                    ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                }}\n            >\n                Disabled\n            </h3>\n            <section style={sectionStyles}>\n                <ToniqInput\n                    {...makeInputs(stateKeys.cannotType)}\n                    disabled={true}\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                />\n            </section>\n\n            <h3\n                style={{\n                    ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                }}\n            >\n                No browser helps\n            </h3>\n            <section style={sectionStyles}>\n                <ToniqInput\n                    {...makeInputs(stateKeys.noBrowserHelps)}\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder={\'try typing "im" to see if it auto-corrects\'}\n                    disableBrowserHelps={true}\n                />\n            </section>\n\n            <h3\n                style={{\n                    ...cssToReactStyleObject(toniqFontStyles.h3Font),\n                }}\n            >\n                Custom inputs\n            </h3>\n            <section style={sectionStyles}>\n                <ToniqInput\n                    onValueChange={handleEventAsAction}\n                    onInputBlocked={handleEventAsAction}\n                    placeholder={controls.placeholder}\n                    allowedInputs={controls.allowedInputs}\n                    blockedInputs={controls.blockedInputs}\n                    disabled={!!controls.disabled}\n                    {...makeInputs(stateKeys.custom)}\n                />\n            </section>\n        </article>\n    );\n}'}},mainStory.parameters);try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/toniq-input/toniq-input.story.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/elements/toniq-input/toniq-input.story.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{mainStory.displayName="mainStory",mainStory.__docgenInfo={description:"",displayName:"mainStory",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"string"}},allowedInputs:{defaultValue:null,description:"",name:"allowedInputs",required:!0,type:{name:"string"}},blockedInputs:{defaultValue:null,description:"",name:"blockedInputs",required:!0,type:{name:"string"}},innerInputElement:{defaultValue:null,description:"",name:"innerInputElement",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/toniq-input/toniq-input.story.tsx#mainStory"]={docgenInfo:mainStory.__docgenInfo,name:"mainStory",path:"src/elements/toniq-input/toniq-input.story.tsx#mainStory"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook-helpers/actions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return handleEventAsAction}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");function handleEventAsAction(event){var actionType=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(event.type);event instanceof CustomEvent?actionType({detail:event.detail,fullEvent:event}):actionType(event)}},"./src/storybook-helpers/multi-element-state.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createMultiElementState}));__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var _augment_vir_common__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@augment-vir/common/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function createMultiElementState(initState){var reference=Object(react__WEBPACK_IMPORTED_MODULE_13__.useRef)(initState),forceUpdate=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useReducer)((function(x){return x+1}),0),2)[1];var keysEnum=function stateToKeyObject(state){return Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_12__.i)(state).reduce((function(accum,key){return accum[key]=key,accum}),{})}(initState);return[reference.current,function updateState(_ref){var key=_ref.key,value=_ref.value;reference.current[key]=value,forceUpdate()},keysEnum]}}}]);