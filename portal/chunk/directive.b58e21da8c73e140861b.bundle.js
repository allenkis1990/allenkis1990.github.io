(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Wp7":function(e,r,t){e.exports={default:t("1w8H"),__esModule:!0}},"1w8H":function(e,r,t){t("h/TJ"),e.exports=t("ZXEq").Object.values},B2kr:function(e,r,t){"use strict";var n=t("QTgu");t.n(n).a},CDCx:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _keys=__webpack_require__("sB3K"),_keys2=_interopRequireDefault(_keys),_values=__webpack_require__("+Wp7"),_values2=_interopRequireDefault(_values),_vue=__webpack_require__("Z6av"),_vue2=_interopRequireDefault(_vue);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var utils={isNull:function(e){return null==e||""===e.replace(/^\s+/,"").replace(/\s+$/,"")}};function Validation(){this.registInnerDirectives()}Validation.prototype={getOptions:function(s,a){var l=this;return{inserted:function(e,r,t){if(!e.name)return!1;var n=t.data.directives.find(function(e){return"model"===e.name});if(!n)throw new Error("表单name为"+e.name+"的v-model未定义");e.formModelName=n.expression;var o=r.value,i={initFormObj:function(t,e,n,o,a){l.initFormObj(t,e,n,o,a,s);var i=o.context,u=e.name,m=n.name;n.inputEvent=function(e){var r=e.target.value;i.$set(i[u][m],"$dirty",!0),t?t(n,a,o,r):l.compiler[s](n,a,o,r),l.setInvalid(i[u],i[u][m])},n.addEventListener("input",n.inputEvent)},findParentNode:function(e,r,t,n,o){if("form"===r.nodeName.toLowerCase()){if(!r.name)return!1;this.initFormObj(e,r,t,o,n)}else{var a=r.parentNode;i.findParentNode(e,a,t,n,o)}}};if(!o)return!1;i.findParentNode(a,e.parentNode,e,r,t)},update:function(e,r,t){},unbind:function(e,r){e.formName=null,e.formItemName=null,e.formModelName=null,e.removeEventListener("input",e.inputEvent,!0),e.inputEvent=null}}},initFormObj:function initFormObj(compileFn,node,ele,vNode,bind,directive){ele.formName=node.name,ele.formItemName=ele.name;var context=vNode.context,formModel=context[ele.formName],formItemModel=formModel[ele.formItemName],$error=formItemModel.$error;context.$set($error,directive,!0),context.$set(formItemModel,"$invalid",!0),context.$set(formModel,"$invalid",!0);var value=eval("context."+ele.formModelName);value&&context.$set(formItemModel,"$dirty",!0),compileFn?compileFn(ele,bind,vNode,value):this.compiler[directive](ele,bind,vNode,value),this.setInvalid(formModel,formItemModel)},setInvalid:function(r,e){var t=(0,_values2.default)(e.$error).some(function(e){return!0===e});e.$invalid=t;var n=[];(0,_keys2.default)(r).forEach(function(e){r[e].hasOwnProperty("$invalid")&&n.push(r[e].$invalid)});var o=n.some(function(e){return!0===e});r.$invalid=o},initForm:function(e,r){var t=r[e];t.$invalid=!0,(0,_keys2.default)(t).forEach(function(r){"$invalid"!==r&&(t[r].$invalid=!0,t[r].$dirty=!1,(0,_keys2.default)(t[r].$error).forEach(function(e){t[r].$error[e]=!0}))})},compiler:{required:function(e,r,t,n){var o=t.context,a=e.formName,i=e.formItemName,u=(o[a],o[a][i]);utils.isNull(n)?u.$error.required=!0:u.$error.required=!1},pattern:function(e,r,t,n){var o=t.context,a=e.formName,i=e.formItemName,u=o[a][i],m=r.value;utils.isNull(n)?u.$error.pattern=!0:m.test(n)?u.$error.pattern=!1:u.$error.pattern=!0}},registInnerDirectives:function(){_vue2.default.directive("required",this.getOptions("required")),_vue2.default.directive("pattern",this.getOptions("pattern"))},constructor:Validation},exports.default=new Validation},Dfe6:function(e,r,t){var m=t("RR7s"),s=t("OBfP"),l=t("MWs+").f;e.exports=function(u){return function(e){for(var r,t=s(e),n=m(t),o=n.length,a=0,i=[];a<o;)l.call(t,r=n[a++])&&i.push(u?[r,t[r]]:t[r]);return i}}},EAod:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=t("CDCx"),a=(n=o)&&n.__esModule?n:{default:n};r.default={data:function(){return{dataSource:"initDataSource",userName:"",userName2:"",phone:"",num:"",sel:{data:""},myForm:{sel:{$error:{}},userName:{$error:{}},phone:{$error:{}},num:{$error:{}}},myForm2:{userName:{$error:{}}}}},mounted:function(){},methods:{fn:function(){},fuck:function(){this.dataSource=Math.random()},initForm:function(){a.default.initForm("myForm",this)}},directives:{myDirective:{inserted:function(e,r){},bind:function(e,r,t){var n=t.context;e.addEventListener("click",function(e){"button"===e.target.nodeName.toLowerCase()&&(n.dataSource="我被指令内部修改了")})},update:function(e,r,t){}},num:a.default.getOptions("num",function(e,r,t,n){var o=t.context,a=e.formName,i=e.formItemName,u=o[a][i];u.$error.pattern=!1,u.$error.num=100!=n})}}},Hf6s:function(e,r,t){t("tVwg"),e.exports=t("ZXEq").Object.keys},KVFw:function(e,r,t){"use strict";t.r(r);var n=t("Sr4n"),o=t("lPzc");for(var a in o)"default"!==a&&function(e){t.d(r,e,function(){return o[e]})}(a);t("B2kr"),t("f6Cp");var i=t("se7T"),u=Object(i.a)(o.default,n.a,n.b,!1,null,"51c5668a",null);u.options.__file="projects/project1/portal/views/directive/directive.vue",r.default=u.exports},QTgu:function(e,r,t){},SWqD:function(e,r,t){},Sr4n:function(e,r,t){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t._v("指令基本用法")]),t._v(" "),r("div",{directives:[{name:"my-directive",rawName:"v-my-directive",value:t.dataSource,expression:"dataSource"}]},[t._m(0)]),t._v(" "),r("button",{on:{click:function(e){return t.fn()}}},[t._v("检验外部data是否变化")]),t._v(" "),r("button",{on:{click:function(e){return t.fuck()}}},[t._v("随机改变外部值")]),t._v(" "),r("div",[t._v("\n        dataSource:"+t._s(t.dataSource)+"\n    ")]),t._v(" "),r("hr"),t._v(" "),r("div",[t._v("实现表单校验指令")]),t._v(" "),r("button",{on:{click:function(e){return t.initForm()}}},[t._v("初始化表单状态")]),t._v(" "),r("div",[r("form",{attrs:{name:"myForm"}},[r("ul",[r("li",[t._v("\n                    用户名："),r("input",{directives:[{name:"pattern",rawName:"v-pattern",value:/^[a-zA-Z]+$/,expression:"/^[a-zA-Z]+$/"},{name:"model",rawName:"v-model",value:t.userName,expression:"userName"},{name:"required",rawName:"v-required",value:!0,expression:"true"}],attrs:{type:"text",name:"userName",placeholder:"请输入用户名"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),t.myForm.userName.$error.required&&t.myForm.userName.$dirty?r("span",{staticStyle:{color:"red"}},[t._v("请输入用户名")]):t._e(),t._v(" "),t.myForm.userName.$error.pattern&&t.myForm.userName.$dirty&&!t.myForm.userName.$error.required?r("span",{staticStyle:{color:"red"}},[t._v("请输入英文")]):t._e()]),t._v(" "),r("li",[t._v("\n                    爱好："),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sel.data,expression:"sel.data"},{name:"required",rawName:"v-required",value:!0,expression:"true"}],attrs:{name:"sel"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});t.$set(t.sel,"data",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("篮球")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("游戏")])]),t._v(" "),t.myForm.sel.$error.required&&t.myForm.sel.$dirty?r("span",{staticStyle:{color:"red"}},[t._v("请选择一个内容")]):t._e()]),t._v(" "),r("li",[t._v("\n                    电话号码："),r("input",{directives:[{name:"pattern",rawName:"v-pattern",value:/^\d{11}$/,expression:"/^\\d{11}$/"},{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"required",rawName:"v-required",value:!0,expression:"true"}],attrs:{type:"text",name:"phone",placeholder:"请输入电话号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),t.myForm.phone.$error.required&&t.myForm.phone.$dirty?r("span",{staticStyle:{color:"red"}},[t._v("请输入电话号码")]):t._e(),t._v(" "),t.myForm.phone.$error.pattern&&t.myForm.phone.$dirty&&!t.myForm.phone.$error.required?r("span",{staticStyle:{color:"red"}},[t._v("请输入11位电话号码")]):t._e()]),t._v(" "),r("li",[t._v("\n                    固定数字："),r("input",{directives:[{name:"num",rawName:"v-num",value:!0,expression:"true"},{name:"model",rawName:"v-model",value:t.num,expression:"num"},{name:"required",rawName:"v-required",value:!0,expression:"true"}],attrs:{type:"text",name:"num",placeholder:"请输入固定数字100"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),t._v(" "),t.myForm.num.$error.required&&t.myForm.num.$dirty?r("span",{staticStyle:{color:"red"}},[t._v("必填")]):t._e(),t._v(" "),t.myForm.num.$error.num&&t.myForm.num.$dirty&&!t.myForm.num.$error.required?r("span",{staticStyle:{color:"red"}},[t._v("请输入固定数字")]):t._e()]),t._v(" "),t.myForm.$invalid?r("li",{staticStyle:{color:"red"}},[t._v("整个表单没过")]):t._e()])])]),t._v(" "),r("div",[r("form",{attrs:{name:"myForm2"}},[r("ul",[r("li",[t._v("\n                    用户名："),r("input",{directives:[{name:"pattern",rawName:"v-pattern",value:/^[a-zA-Z]+$/,expression:"/^[a-zA-Z]+$/"},{name:"model",rawName:"v-model",value:t.userName2,expression:"userName2"},{name:"required",rawName:"v-required",value:!0,expression:"true"}],attrs:{type:"text",name:"userName",placeholder:"请输入用户名"},domProps:{value:t.userName2},on:{input:function(e){e.target.composing||(t.userName2=e.target.value)}}}),t._v(" "),t.myForm2.userName.$error.required&&t.myForm2.userName.$dirty?r("span",{staticStyle:{color:"red"}},[t._v("请输入用户名")]):t._e(),t._v(" "),t.myForm2.userName.$error.pattern&&t.myForm2.userName.$dirty&&!t.myForm2.userName.$error.required?r("span",{staticStyle:{color:"red"}},[t._v("请输入英文")]):t._e()]),t._v(" "),t.myForm2.$invalid?r("li",{staticStyle:{color:"red"}},[t._v("整个表单没过")]):t._e()])])])])},o=[function(){var e=this.$createElement,r=this._self._c||e;return r("div",[this._v("我是指令内部的元素\n            "),r("button",[this._v("修改外部data")])])}];n._withStripped=!0,t.d(r,"a",function(){return n}),t.d(r,"b",function(){return o})},f6Cp:function(e,r,t){"use strict";var n=t("SWqD");t.n(n).a},"h/TJ":function(e,r,t){var n=t("Tn8B"),o=t("Dfe6")(!1);n(n.S,"Object",{values:function(e){return o(e)}})},k5mx:function(e,r,t){var o=t("Tn8B"),a=t("ZXEq"),i=t("4ZdK");e.exports=function(e,r){var t=(a.Object||{})[e]||Object[e],n={};n[e]=r(t),o(o.S+o.F*i(function(){t(1)}),"Object",n)}},lPzc:function(e,r,t){"use strict";t.r(r);var n=t("EAod"),o=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(r,e,function(){return n[e]})}(a);r.default=o.a},sB3K:function(e,r,t){e.exports={default:t("Hf6s"),__esModule:!0}},tVwg:function(e,r,t){var n=t("6QIx"),o=t("RR7s");t("k5mx")("keys",function(){return function(e){return o(n(e))}})}}]);