(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./node_modules/core-js/internals/flatten-into-array.js":function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__("./node_modules/core-js/internals/global.js"),isArray=__webpack_require__("./node_modules/core-js/internals/is-array.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),bind=__webpack_require__("./node_modules/core-js/internals/function-bind-context.js"),TypeError=global.TypeError,flattenIntoArray=function(target,original,source,sourceLen,start,depth,mapper,thisArg){for(var element,elementLen,targetIndex=start,sourceIndex=0,mapFn=!!mapper&&bind(mapper,thisArg);sourceIndex<sourceLen;){if(sourceIndex in source){if(element=mapFn?mapFn(source[sourceIndex],sourceIndex,original):source[sourceIndex],depth>0&&isArray(element))elementLen=lengthOfArrayLike(element),targetIndex=flattenIntoArray(target,original,element,elementLen,targetIndex,depth-1)-1;else{if(targetIndex>=9007199254740991)throw TypeError("Exceed the acceptable array length");target[targetIndex]=element}targetIndex++}sourceIndex++}return targetIndex};module.exports=flattenIntoArray},"./node_modules/core-js/modules/es.array.flat.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),flattenIntoArray=__webpack_require__("./node_modules/core-js/internals/flatten-into-array.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),arraySpeciesCreate=__webpack_require__("./node_modules/core-js/internals/array-species-create.js");$({target:"Array",proto:!0},{flat:function flat(){var depthArg=arguments.length?arguments[0]:void 0,O=toObject(this),sourceLen=lengthOfArrayLike(O),A=arraySpeciesCreate(O,0);return A.length=flattenIntoArray(A,O,O,sourceLen,0,void 0===depthArg?1:toIntegerOrInfinity(depthArg)),A}})},"./src/augments/type.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";function wrapTypeWithReadonly(){return function(input){return input}}__webpack_require__.d(__webpack_exports__,"a",(function(){return wrapTypeWithReadonly}))},"./src/storybook-helpers/css-var-story-helpers.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createCssVarMap}));__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js");function createCssVarMap(value,cssVars){return cssVars.reduce((function(accum,currentCssVarName){return accum[currentCssVarName]=value,accum}),{})}},"./src/storybook-helpers/css-vars.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getAllCssVars}));__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js");var _augment_vir_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@augment-vir/common/dist/esm/index.js"),_styles_css_to_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/styles/css-to-react.ts");function getAllCssVars(fontStyle){var stylesObject=Object(_styles_css_to_react__WEBPACK_IMPORTED_MODULE_4__.a)(fontStyle),cssVars=Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_3__.n)(stylesObject,(function(key,value){return String(value).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/)}));return Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_3__.i)(cssVars).reduce((function(accum,propertyName){var value=cssVars[propertyName];return value&&value[1]&&value[2]&&(accum[propertyName]={cssVarName:value[1],defaultValue:value[2]}),accum}),{})}},"./src/styles/colors.story.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mainStory",(function(){return mainStory}));__webpack_require__("./node_modules/core-js/modules/es.array.flat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.string.ends-with.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _augment_vir_common__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@augment-vir/common/dist/esm/index.js"),_augments_type__WEBPACK_IMPORTED_MODULE_20__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/augments/type.ts")),_storybook_helpers_css_var_story_helpers__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/storybook-helpers/css-var-story-helpers.ts"),_storybook_helpers_css_vars__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./src/storybook-helpers/css-vars.ts"),_colors__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./src/styles/colors.ts"),_css_to_react__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./src/styles/css-to-react.ts"),_fonts__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./src/styles/fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ExtraApplyColorOptions,flattenedColorCssVarNames=Object.values(_colors__WEBPACK_IMPORTED_MODULE_23__.c).map((function(value){return Object.values(value).map((function(mappingValue){return String(mappingValue)}))})).flat();!function(ExtraApplyColorOptions){ExtraApplyColorOptions.None="None",ExtraApplyColorOptions.AllForeground="All Foreground CSS vars",ExtraApplyColorOptions.AllBackground="All Background CSS vars",ExtraApplyColorOptions.All="All CSS vars"}(ExtraApplyColorOptions||(ExtraApplyColorOptions={}));var componentStoryMeta={title:"Styles/Toniq Colors",argTypes:Object(_augments_type__WEBPACK_IMPORTED_MODULE_20__.a)()({color:{name:"Color",control:"color"},applyColor:{name:"Apply Color To",control:"select",options:[].concat(_toConsumableArray(Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_18__.h)(ExtraApplyColorOptions)),_toConsumableArray(flattenedColorCssVarNames))}}),args:{color:"",applyColor:ExtraApplyColorOptions.None},parameters:{actions:{disable:!0}}};__webpack_exports__.default=componentStoryMeta;var mainStory=function mainStory(controls){var colorInstances=Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_18__.i)(_colors__WEBPACK_IMPORTED_MODULE_23__.d).map((function(colorKey){var _allCssVarStyles$colo,_allCssVarStyles$back,colorDefinitions=_colors__WEBPACK_IMPORTED_MODULE_23__.d[colorKey],colorCssVars=_colors__WEBPACK_IMPORTED_MODULE_23__.c[colorKey],appliedStyles=Object(_colors__WEBPACK_IMPORTED_MODULE_23__.a)(colorDefinitions),allCssVarStyles=Object(_storybook_helpers_css_vars__WEBPACK_IMPORTED_MODULE_22__.a)(appliedStyles);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"16px",borderRadius:"4px",border:"1px solid "+_colors__WEBPACK_IMPORTED_MODULE_23__.d.divider.foregroundColor},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("div",{className:"color-swatch",style:Object.assign({},Object(_css_to_react__WEBPACK_IMPORTED_MODULE_24__.a)(_fonts__WEBPACK_IMPORTED_MODULE_25__.a.h2Font),{width:"100px",height:"50px",boxSizing:"border-box",borderRadius:"4px",border:"1px solid "+_colors__WEBPACK_IMPORTED_MODULE_23__.d.divider.foregroundColor,backgroundColor:String(colorDefinitions.backgroundColor),color:String(colorDefinitions.foregroundColor),textDecoration:"underline",display:"flex",justifyContent:"center",alignItems:"center"}),children:"Aa"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("span",{style:{marginTop:"4px"},children:colorKey}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("span",{style:{color:String(_colors__WEBPACK_IMPORTED_MODULE_23__.d.pageSecondary.foregroundColor)},children:[String(colorCssVars.foregroundColor),":"," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("code",{children:null===(_allCssVarStyles$colo=allCssVarStyles.color)||void 0===_allCssVarStyles$colo?void 0:_allCssVarStyles$colo.defaultValue})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("span",{style:{color:String(_colors__WEBPACK_IMPORTED_MODULE_23__.d.pageSecondary.foregroundColor)},children:[String(colorCssVars.backgroundColor)," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("code",{children:null===(_allCssVarStyles$back=allCssVarStyles.backgroundColor)||void 0===_allCssVarStyles$back?void 0:_allCssVarStyles$back.defaultValue})]})]})},colorKey)})),cssVarStyling=function generateAppliedCssVarColors(controls){var _ref;return controls.applyColor&&controls.color?controls.applyColor===ExtraApplyColorOptions.None?{}:controls.applyColor===ExtraApplyColorOptions.All?Object(_storybook_helpers_css_var_story_helpers__WEBPACK_IMPORTED_MODULE_21__.a)(controls.color,flattenedColorCssVarNames):controls.applyColor===ExtraApplyColorOptions.AllBackground?Object(_storybook_helpers_css_var_story_helpers__WEBPACK_IMPORTED_MODULE_21__.a)(controls.color,flattenedColorCssVarNames.filter((function(cssVarName){return cssVarName.endsWith("background-color")}))):controls.applyColor===ExtraApplyColorOptions.AllForeground?Object(_storybook_helpers_css_var_story_helpers__WEBPACK_IMPORTED_MODULE_21__.a)(controls.color,flattenedColorCssVarNames.filter((function(cssVarName){return cssVarName.endsWith("foreground-color")}))):((_ref={})[controls.applyColor]=controls.color,_ref):{}}(controls);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("article",{style:Object.assign({display:"flex",flexWrap:"wrap",gap:"16px",padding:"16px",justifyContent:"center"},Object(_css_to_react__WEBPACK_IMPORTED_MODULE_24__.a)(_fonts__WEBPACK_IMPORTED_MODULE_25__.a.paragraphFont),cssVarStyling),children:colorInstances})};mainStory.displayName="mainStory",mainStory.storyName="Toniq Colors",mainStory.parameters=Object.assign({storySource:{source:"(controls: Record<keyof typeof colorsStroyControls, string>) => {\n    const colorInstances = getObjectTypedKeys(toniqColors).map((colorKey) => {\n        const colorDefinitions = toniqColors[colorKey];\n        const colorCssVars = toniqColorCssVarNames[colorKey];\n        const appliedStyles = applyBackgroundAndForeground(colorDefinitions);\n        const allCssVarStyles = getAllCssVars(appliedStyles);\n\n        return (\n            <div\n                key={colorKey}\n                style={{\n                    display: 'flex',\n                    justifyContent: 'center',\n                    alignItems: 'flex-start',\n                }}\n            >\n                <div\n                    style={{\n                        display: 'flex',\n                        flexDirection: 'column',\n                        alignItems: 'center',\n                        padding: '16px',\n                        borderRadius: '4px',\n                        border: `1px solid ${toniqColors.divider.foregroundColor}`,\n                    }}\n                >\n                    <div\n                        className=\"color-swatch\"\n                        style={{\n                            ...cssToReactStyleObject(toniqFontStyles.h2Font),\n                            width: '100px',\n                            height: '50px',\n                            boxSizing: 'border-box',\n                            borderRadius: '4px',\n                            border: `1px solid ${toniqColors.divider.foregroundColor}`,\n                            backgroundColor: String(colorDefinitions.backgroundColor),\n                            color: String(colorDefinitions.foregroundColor),\n                            textDecoration: 'underline',\n                            display: 'flex',\n                            justifyContent: 'center',\n                            alignItems: 'center',\n                        }}\n                    >\n                        Aa\n                    </div>\n                    <span style={{marginTop: '4px'}}>{colorKey}</span>\n                    <span style={{color: String(toniqColors.pageSecondary.foregroundColor)}}>\n                        {String(colorCssVars.foregroundColor)}:{' '}\n                        <code>{allCssVarStyles.color?.defaultValue}</code>\n                    </span>\n                    <span style={{color: String(toniqColors.pageSecondary.foregroundColor)}}>\n                        {String(colorCssVars.backgroundColor)}{' '}\n                        <code>{allCssVarStyles.backgroundColor?.defaultValue}</code>\n                    </span>\n                </div>\n            </div>\n        );\n    });\n\n    const cssVarStyling = generateAppliedCssVarColors(controls);\n\n    return (\n        <article\n            style={{\n                display: 'flex',\n                flexWrap: 'wrap',\n                gap: '16px',\n                padding: '16px',\n                justifyContent: 'center',\n                ...cssToReactStyleObject(toniqFontStyles.paragraphFont),\n                ...cssVarStyling,\n            }}\n        >\n            {colorInstances}\n        </article>\n    );\n}"}},mainStory.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styles/colors.story.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/styles/colors.story.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}try{mainStory.displayName="mainStory",mainStory.__docgenInfo={description:"",displayName:"mainStory",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},applyColor:{defaultValue:null,description:"",name:"applyColor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styles/colors.story.tsx#mainStory"]={docgenInfo:mainStory.__docgenInfo,name:"mainStory",path:"src/styles/colors.story.tsx#mainStory"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/colors.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return toniqColorCssVarNames})),__webpack_require__.d(__webpack_exports__,"b",(function(){return colorValueToVarCall})),__webpack_require__.d(__webpack_exports__,"d",(function(){return toniqColors})),__webpack_require__.d(__webpack_exports__,"a",(function(){return applyBackgroundAndForeground}));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_augment_vir_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@augment-vir/common/dist/esm/index.js"),element_vir__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/element-vir/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js"),_augments_type__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/augments/type.ts");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function swapColors(input){return{foregroundColor:input.backgroundColor,backgroundColor:input.foregroundColor}}var pagePrimary,brandPrimary,pageSecondary,pageTertiary,pageInteraction,pageInteractionHover,pageInteractionActive,divider,dividerFaint,dropShadow,accentPrimary,accentPrimaryHover,accentPrimaryActive,pageDarkPrimary,accentSecondary,accentTertiary,fallbackColors=(pagePrimary={backgroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["#ffffff"]))),foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["#000000"])))},brandPrimary=Object.assign({},pagePrimary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["#00D093"])))}),pageSecondary=Object.assign({},pagePrimary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["#ACADAD"])))}),pageTertiary=Object.assign({},pagePrimary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["#D6D6D6"])))}),pageInteraction=Object.assign({},brandPrimary),pageInteractionHover=Object.assign({},brandPrimary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["#00A876"])))}),pageInteractionActive=Object.assign({},brandPrimary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["#1D6852"])))}),divider=Object.assign({},pageTertiary),dividerFaint=Object.assign({},pagePrimary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["#EAFBF7"])))}),dropShadow=Object.assign({},pagePrimary,{backgroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["#D2EEFA"])))}),accentPrimary=swapColors(pageInteraction),accentPrimaryHover=swapColors(pageInteractionHover),accentPrimaryActive=swapColors(pageInteractionActive),pageDarkPrimary=accentPrimaryActive,accentSecondary={backgroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["#F1F3F6"]))),foregroundColor:pagePrimary.foregroundColor},accentTertiary=Object.assign({},accentSecondary,{foregroundColor:Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["#9A9A9D"])))}),Object(_augments_type__WEBPACK_IMPORTED_MODULE_5__.a)()({brandPrimary:brandPrimary,pagePrimary:pagePrimary,pageSecondary:pageSecondary,pageTertiary:pageTertiary,pageInteraction:pageInteraction,pageInteractionHover:pageInteractionHover,pageInteractionActive:pageInteractionActive,divider:divider,dividerFaint:dividerFaint,dropShadow:dropShadow,pageDarkPrimary:pageDarkPrimary,accentPrimary:accentPrimary,accentPrimaryHover:accentPrimaryHover,accentPrimaryActive:accentPrimaryActive,accentSecondary:accentSecondary,accentTertiary:accentTertiary}));function colorKeyToCssVarName(colorKey,type){return Object(lit__WEBPACK_IMPORTED_MODULE_4__.e)("--toniq-"+Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_2__.b)(colorKey)+"-"+Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_2__.b)(type))}var toniqColorCssVarNames=Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_2__.n)(fallbackColors,(function(colorKey){return{backgroundColor:colorKeyToCssVarName(colorKey,"backgroundColor"),foregroundColor:colorKeyToCssVarName(colorKey,"foregroundColor")}}));function colorValueToVarCall(colorKey,type){var fallbackColor=fallbackColors[colorKey][type],cssVarName=toniqColorCssVarNames[colorKey][type];return Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject12||(_templateObject12=_taggedTemplateLiteralLoose(["var(",", ",")"])),cssVarName,fallbackColor)}var toniqColors=Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_2__.n)(toniqColorCssVarNames,(function(colorKey){return{foregroundColor:colorValueToVarCall(colorKey,"foregroundColor"),backgroundColor:colorValueToVarCall(colorKey,"backgroundColor")}}));function applyBackgroundAndForeground(colorDefinition){return Object(element_vir__WEBPACK_IMPORTED_MODULE_3__.b)(_templateObject13||(_templateObject13=_taggedTemplateLiteralLoose(["\n        background-color: ",";\n        color: ",";\n    "])),colorDefinition.backgroundColor,colorDefinition.foregroundColor)}},"./src/styles/css-to-react.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return cssToReactStyleObject}));__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js");var _augment_vir_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@augment-vir/common/dist/esm/index.js");function cssToReactStyleObject(input){"string"!=typeof input&&(input=String(input));var cssJson='{"'+Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_4__.c)(input.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")+'"}';try{var cssObject=JSON.parse(cssJson);return Object.keys(cssObject).reduce((function(accum,key){return accum[Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_4__.m)(key)]=cssObject[key],accum}),{})}catch(error){throw console.error("Failed to JSON parse: "+cssJson),error}}},"./src/styles/fonts.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return toniqFontStylesCssVarNames})),__webpack_require__.d(__webpack_exports__,"a",(function(){return toniqFontStyles}));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_templateObject23,_templateObject24,_templateObject25,_templateObject26,_templateObject27,_templateObject28,_templateObject29,_templateObject30,_augment_vir_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@augment-vir/common/dist/esm/index.js"),element_vir__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/element-vir/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/index.js"),_augments_type__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/augments/type.ts"),_colors__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/styles/colors.ts");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var fontStylesFallbacks=Object(_augments_type__WEBPACK_IMPORTED_MODULE_8__.a)()({toniqFont:{"font-family":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["'Rubik', sans-serif"])))},normalWeightFont:{"font-weight":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["400"])))},boldFont:{"font-weight":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["600"])))},extraBoldFont:{"font-weight":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["900"])))},paragraphFont:{"line-height":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["24px"]))),"font-size":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["16px"])))},boldParagraphFont:{},labelFont:{"line-height":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["16px"]))),"font-size":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["12px"])))},boldLabelFont:{},h1Font:{"line-height":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["96px"]))),"font-size":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["64px"])))},h2Font:{"line-height":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["48px"]))),"font-size":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject12||(_templateObject12=_taggedTemplateLiteralLoose(["32px"])))},h3Font:{"line-height":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject13||(_templateObject13=_taggedTemplateLiteralLoose(["32px"]))),"font-size":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject14||(_templateObject14=_taggedTemplateLiteralLoose(["24px"])))},monospaceFont:{"font-family":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject15||(_templateObject15=_taggedTemplateLiteralLoose(["'Inconsolata', monospace"]))),"line-height":Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject16||(_templateObject16=_taggedTemplateLiteralLoose(["1.125em"])))}}),toniqFontStylesCssVarNames=Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_5__.n)(fontStylesFallbacks,(function(fontStyleKey,fontFallbacksRecord){var styleName=Object(lit__WEBPACK_IMPORTED_MODULE_7__.e)(Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_5__.b)(fontStyleKey.replace(/Font$/,"")));return Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_5__.n)(fontFallbacksRecord,(function(fontPropName){var prop=Object(lit__WEBPACK_IMPORTED_MODULE_7__.e)(fontPropName);return Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject17||(_templateObject17=_taggedTemplateLiteralLoose(["--toniq-font-","-",""])),styleName,prop)}))}));function combineFallbacksAndVars(fontStylesKey){var vars=toniqFontStylesCssVarNames[fontStylesKey],fallbacks=fontStylesFallbacks[fontStylesKey],combined=Object(_augment_vir_common__WEBPACK_IMPORTED_MODULE_5__.i)(vars).map((function(propName){var fallbackValue=fallbacks[propName],varName=vars[propName];return Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject18||(_templateObject18=_taggedTemplateLiteralLoose(["\n            ",": var(",", ",");\n        "])),Object(lit__WEBPACK_IMPORTED_MODULE_7__.e)(propName),varName,fallbackValue)}));return Object(lit__WEBPACK_IMPORTED_MODULE_7__.e)(combined.join("\n"))}var toniqFont,normalWeightFont,boldFont,extraBoldFont,paragraphFont,boldParagraphFont,labelFont,boldLabelFont,h1Font,h2Font,h3Font,monospaceFont,toniqFontStyles=(toniqFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject19||(_templateObject19=_taggedTemplateLiteralLoose(["\n        font-style: normal;\n        color: ",";\n        ",";\n    "])),_colors__WEBPACK_IMPORTED_MODULE_9__.d.pagePrimary.foregroundColor,combineFallbacksAndVars("toniqFont")),normalWeightFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject20||(_templateObject20=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),toniqFont,combineFallbacksAndVars("normalWeightFont")),boldFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject21||(_templateObject21=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),toniqFont,combineFallbacksAndVars("boldFont")),extraBoldFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject22||(_templateObject22=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),toniqFont,combineFallbacksAndVars("extraBoldFont")),paragraphFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject23||(_templateObject23=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n        ",";\n    "])),toniqFont,combineFallbacksAndVars("paragraphFont"),normalWeightFont),boldParagraphFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject24||(_templateObject24=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n        ",";\n    "])),toniqFont,paragraphFont,boldFont),labelFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject25||(_templateObject25=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n        ",";\n    "])),toniqFont,combineFallbacksAndVars("labelFont"),normalWeightFont),boldLabelFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject26||(_templateObject26=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),labelFont,boldFont),h1Font=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject27||(_templateObject27=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),combineFallbacksAndVars("h1Font"),extraBoldFont),h2Font=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject28||(_templateObject28=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),combineFallbacksAndVars("h2Font"),boldFont),h3Font=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject29||(_templateObject29=_taggedTemplateLiteralLoose(["\n        ",";\n        ",";\n    "])),combineFallbacksAndVars("h3Font"),boldFont),monospaceFont=Object(element_vir__WEBPACK_IMPORTED_MODULE_6__.b)(_templateObject30||(_templateObject30=_taggedTemplateLiteralLoose(["\n        ","\n    "])),combineFallbacksAndVars("monospaceFont")),Object(_augments_type__WEBPACK_IMPORTED_MODULE_8__.a)()({toniqFont:toniqFont,normalWeightFont:normalWeightFont,boldFont:boldFont,extraBoldFont:extraBoldFont,paragraphFont:paragraphFont,boldParagraphFont:boldParagraphFont,labelFont:labelFont,boldLabelFont:boldLabelFont,h1Font:h1Font,h2Font:h2Font,h3Font:h3Font,monospaceFont:monospaceFont}))}}]);