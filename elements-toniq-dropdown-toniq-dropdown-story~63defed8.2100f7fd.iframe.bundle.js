(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/elements/toniq-dropdown/toniq-dropdown.story.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mainStory",(function(){return mainStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var _templateObject,element_vir__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/element-vir/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/react/index.js"),_icons__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/icons/index.ts"),_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/storybook-helpers/actions.ts"),_storybook_helpers_standard_controls__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/storybook-helpers/standard-controls.ts"),_styles__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/styles/index.ts"),_react_components__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/elements/react-components.tsx"),_toniq_dropdown_element__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/elements/toniq-dropdown/toniq-dropdown.element.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var options=[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:"3",label:"Option 3"},{value:6,label:"Really really super duper long option!"}],dropdownStoryControls=Object.assign({},_storybook_helpers_standard_controls__WEBPACK_IMPORTED_MODULE_18__.a,{selected:{options:Object.keys(options),mapping:options,control:{type:"select",labels:options.reduce((function(accum,option){return accum[option.value]=option.label,accum}),{})}},dropdownOpen:{control:"boolean"}}),componentStoryMeta={title:"Elements/Toniq Dropdown",component:_react_components__WEBPACK_IMPORTED_MODULE_20__.d,argTypes:dropdownStoryControls,args:{selected:options[0],options:options,dropdownOpen:!1}};__webpack_exports__.default=componentStoryMeta;var dropdownSelectionStateInit={static:{default:options[0],defaultWithIcon:options[0],withPrefixAndIcon:options[0],withPrefixOnly:options[0],customSize:options[3],growHeight:options[3],squishedHeight:options[0],withDifferentBackgroundColor:options[0]},custom:options[0]},mainStory=function mainStory(controls){var _ref2,strings,raw,_useReducer2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useReducer)((function(state,_ref){var _Object$assign,_Object$assign2,key=_ref.key,subKey=_ref.subKey,option=_ref.option;if("custom"===key)return Object.assign({},state,{custom:option});if(void 0!==subKey)return Object.assign({},state,((_Object$assign2={})[key]=Object.assign({},state[key],((_Object$assign={})[subKey]=option,_Object$assign)),_Object$assign2));throw new Error("Key was not custom but subKey was not defined.")}),dropdownSelectionStateInit),2),dropdownSelectionStates=_useReducer2[0],updateDropdownSelectionStates=_useReducer2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("style",{dangerouslySetInnerHTML:{__html:String(Object(element_vir__WEBPACK_IMPORTED_MODULE_14__.b)(_templateObject||(strings=["\n                        "," {\n                            margin: 8px;\n                        }\n                    "],raw||(raw=strings.slice(0)),strings.raw=raw,_templateObject=strings),_toniq_dropdown_element__WEBPACK_IMPORTED_MODULE_21__.a))}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("article",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h3",{children:"Static examples"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,selected:dropdownSelectionStates.static.default,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"default",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,icon:_icons__WEBPACK_IMPORTED_MODULE_16__.c,selected:dropdownSelectionStates.static.defaultWithIcon,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"defaultWithIcon",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,icon:_icons__WEBPACK_IMPORTED_MODULE_16__.c,selectedLabelPrefix:"Sort By: ",selected:dropdownSelectionStates.static.withPrefixAndIcon,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"withPrefixAndIcon",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,selectedLabelPrefix:"Sort By: ",selected:dropdownSelectionStates.static.withPrefixOnly,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"withPrefixOnly",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{style:{width:"350px",height:"200px"},options:options,selectedLabelPrefix:"custom height: ",selected:dropdownSelectionStates.static.customSize,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"customSize",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,selectedLabelPrefix:"Sort By: ",selected:dropdownSelectionStates.static.growHeight,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"growHeight",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,selectedLabelPrefix:"squished: ",style:{minHeight:40,maxHeight:40},selected:dropdownSelectionStates.static.squishedHeight,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"squishedHeight",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{style:(_ref2={},_ref2[String(_styles__WEBPACK_IMPORTED_MODULE_19__.e.accentSecondary.backgroundColor)]="transparent",_ref2),options:options,icon:_icons__WEBPACK_IMPORTED_MODULE_16__.c,selected:dropdownSelectionStates.static.withDifferentBackgroundColor,onSelectChange:function onSelectChange(event){updateDropdownSelectionStates({key:"static",subKey:"withDifferentBackgroundColor",option:event.detail}),Object(_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a)(event)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("h3",{children:"Customized example"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_react_components__WEBPACK_IMPORTED_MODULE_20__.d,{options:options,selected:controls.selected,dropdownOpen:controls.dropdownOpen,onSelectChange:_storybook_helpers_actions__WEBPACK_IMPORTED_MODULE_17__.a})]})]})};mainStory.storyName="Toniq Dropdown",mainStory.parameters=Object.assign({storySource:{source:"(controls: Record<keyof typeof dropdownStoryControls, any>) => {\n    const [\n        dropdownSelectionStates,\n        updateDropdownSelectionStates,\n    ] = useReducer(\n        (\n            state: DropdownStoryState,\n            {\n                key,\n                subKey,\n                option,\n            }: {\n                key: keyof DropdownStoryState;\n                subKey: keyof DropdownStoryState['static'] | undefined;\n                option: ArrayElement<typeof options>;\n            },\n        ): DropdownStoryState => {\n            if (key === 'custom') {\n                return {...state, custom: option};\n            } else if (subKey !== undefined) {\n                return {\n                    ...state,\n                    [key]: {\n                        ...state[key],\n                        [subKey]: option,\n                    },\n                };\n            } else {\n                throw new Error(`Key was not custom but subKey was not defined.`);\n            }\n        },\n        dropdownSelectionStateInit,\n    );\n\n    return (\n        <>\n            <style\n                dangerouslySetInnerHTML={{\n                    __html: String(css`\n                        ${NativeToniqDropdown} {\n                            margin: 8px;\n                        }\n                    `),\n                }}\n            />\n            <article>\n                <h3>Static examples</h3>\n                <ToniqDropdown\n                    options={options}\n                    selected={dropdownSelectionStates.static.default}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'default',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    options={options}\n                    icon={ArrowsSort24Icon}\n                    selected={dropdownSelectionStates.static.defaultWithIcon}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'defaultWithIcon',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    options={options}\n                    icon={ArrowsSort24Icon}\n                    selectedLabelPrefix={'Sort By: '}\n                    selected={dropdownSelectionStates.static.withPrefixAndIcon}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'withPrefixAndIcon',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    options={options}\n                    selectedLabelPrefix={'Sort By: '}\n                    selected={dropdownSelectionStates.static.withPrefixOnly}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'withPrefixOnly',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    style={{\n                        width: '350px',\n                        height: '200px',\n                    }}\n                    options={options}\n                    selectedLabelPrefix={'custom height: '}\n                    selected={dropdownSelectionStates.static.customSize}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'customSize',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    options={options}\n                    selectedLabelPrefix={'Sort By: '}\n                    selected={dropdownSelectionStates.static.growHeight}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'growHeight',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    options={options}\n                    selectedLabelPrefix={'squished: '}\n                    style={{minHeight: 40, maxHeight: 40}}\n                    selected={dropdownSelectionStates.static.squishedHeight}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'squishedHeight',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <ToniqDropdown\n                    style={{\n                        [String(toniqColorCssVarNames.accentSecondary.backgroundColor)]:\n                            'transparent',\n                    }}\n                    options={options}\n                    icon={ArrowsSort24Icon}\n                    selected={dropdownSelectionStates.static.withDifferentBackgroundColor}\n                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {\n                        updateDropdownSelectionStates({\n                            key: 'static',\n                            subKey: 'withDifferentBackgroundColor',\n                            option: event.detail,\n                        });\n                        handleEventAsAction(event);\n                    }}\n                />\n                <h3>Customized example</h3>\n                <ToniqDropdown\n                    options={options}\n                    selected={controls.selected}\n                    dropdownOpen={controls.dropdownOpen}\n                    onSelectChange={handleEventAsAction}\n                />\n            </article>\n        </>\n    );\n}"}},mainStory.parameters);try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/toniq-dropdown/toniq-dropdown.story.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/elements/toniq-dropdown/toniq-dropdown.story.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{mainStory.displayName="mainStory",mainStory.__docgenInfo={description:"",displayName:"mainStory",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"any"}},dropdownOpen:{defaultValue:null,description:"",name:"dropdownOpen",required:!0,type:{name:"any"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/toniq-dropdown/toniq-dropdown.story.tsx#mainStory"]={docgenInfo:mainStory.__docgenInfo,name:"mainStory",path:"src/elements/toniq-dropdown/toniq-dropdown.story.tsx#mainStory"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook-helpers/actions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return handleEventAsAction}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");function handleEventAsAction(event){var actionType=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(event.type);event instanceof CustomEvent?actionType({detail:event.detail,fullEvent:event}):actionType(event)}}}]);