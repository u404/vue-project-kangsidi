webpackJsonp([2],{283:function(n,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=t(393),e=t(311),o=(t(405),t(0)),a=Object(o.a)(e.a,i.a,i.b,!1,null,"12f0433e",null);r.default=a.exports},284:function(n,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=t(407),e=t(320),o=(t(414),t(0)),a=Object(o.a)(e.a,i.a,i.b,!1,null,"0701d47b",null);r.default=a.exports},311:function(n,r,t){"use strict";var i=t(312);r.a=i.a},312:function(n,r,t){"use strict";var i=t(395),e=t(400);r.a={data:function(){return{activeTab:0}},methods:{},components:{SourceDataBox:i.a,GlobalConfigBox:e.a}}},313:function(n,r,t){"use strict";var i=t(314);r.a=i.a},314:function(n,r,t){"use strict";r.a={data:function(){return{tableList:[],addDataDialogDisplay:!1,addDataId:null}},beforeMount:function(){var n=this;this.$loading({title:"正在加载",msg:"正在加载数据，请稍后..."}),this.$services.manage.getSourceWorkTableList().then(function(r){n.$loading.close(),n.tableList=r.data}).catch(function(r){n.$loading.close(),n.$dialog.alert({type:"error",msg:r.msg})})},methods:{formatTime:function(n){return new Date(1e3*n).format("yyyy-MM-dd hh:mm:ss")},showAddDataDialog:function(n){this.addDataDialogDisplay=!0,this.addDataId=n},upload:function(n){var r=this;if(n.target.files.length){var t=new FormData;t.append("config_id",this.addDataId),t.append("excel_file",n.target.files[0]),this.addDataDialogDisplay=!1,this.$loading({title:"正在上传",msg:"正在上传中，请稍后..."}),this.$services.manage.uploadExcel({},t).then(function(n){r.$loading.close(),r.alertSuccess()}).catch(function(n){console.log(n),r.$loading.close(),2107===n.code?r.confirmRecoverTips():r.alertFail()})}},recover:function(){var n=this;this.$loading({title:"正在上传",msg:"正在写入数据，请稍后..."}),this.$services.manage.forceRecoverData({config_id:this.addDataId}).then(function(r){n.$loading.close(),n.alertSuccess()}).catch(function(r){console.log(r),n.$loading.close(),n.alertFail()})},alertSuccess:function(){this.$dialog.alert({type:"success",msg:"添加数据成功！"})},alertFail:function(){this.$dialog.alert({type:"error",msg:"添加数据失败！"})},confirmRecoverTips:function(){var n=this;this.$dialog.confirm({title:"提示",msg:"是否继续上传并覆盖原始数据？",onSure:function(){n.recover()},onCancel:function(){n.alertFail()}})}}}},315:function(n,r,t){var i=t(399);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=t(280).default;e("2603e0a7",i,!0,{})},316:function(n,r,t){"use strict";var i=t(317);r.a=i.a},317:function(n,r,t){"use strict";r.a={data:function(){return{isEdit:!1,configList:null,variance:0,variancePer:0}},watch:{variance:function(n,r){""===n?this.getConfigById(1).val=n:isNaN(+n)||+n<0||+n%1>0?this.variance=r:/ /.test(n)?this.variance=n.replace(/(^ +)|( +$)/,""):this.getConfigById(1).val=n},variancePer:function(n,r){""===n?this.getConfigById(2).val=n:isNaN(+n)||+n>100||+n<0?this.variancePer=r:/ /.test(n)?this.variancePer=n.replace(/(^ +)|( +$)/,""):this.getConfigById(2).val=n}},methods:{validNumber:function(n){return!isNaN(+n)},save:function(){var n=this;if(""===this.getConfigById(1).val||isNaN(+this.getConfigById(1).val)||""===this.getConfigById(2).val||isNaN(+this.getConfigById(2).val))return void this.showInputError();this.variance=this.getConfigById(1).val=+this.getConfigById(1).val,this.variancePer=this.getConfigById(2).val=+this.getConfigById(2).val,console.log(this.configList),this.$services.manage.saveConfigs({params:this.configList}).then(function(r){n.isEdit=!1}).catch(function(r){n.$dialog.alert({type:"error",msg:r.msg})})},mapUnitList:function(n){return n.split(",").map(function(n){return{value:n,text:n}})},showInputError:function(){this.$tips({msg:"请输入正确的数字！"})},loadConfigList:function(){var n=this;this.$services.manage.getGlobalConfigList().then(function(r){n.configList=r.data,n.variance=n.getConfigById(1).val,n.variancePer=n.getConfigById(2).val})},getConfigById:function(n){return this.configList.find(function(r){return r.id===n})}},beforeMount:function(){this.loadConfigList()}}},318:function(n,r,t){var i=t(404);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=t(280).default;e("c3f1168e",i,!0,{})},319:function(n,r,t){var i=t(406);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=t(280).default;e("c33e0fe4",i,!0,{})},320:function(n,r,t){"use strict";var i=t(321);r.a=i.a},321:function(n,r,t){"use strict";var i=t(409);r.a={props:{id:Number},data:function(){return{thList:[],tableTitle:""}},beforeMount:function(){var n=this;this.$services.manage.getSourceWorkTableList().then(function(r){var t=r.data.find(function(r){return r.id===n.id});n.thList=t.column_names.split(","),n.tableTitle=t.sheet_name})},methods:{},components:{PreviewTable:i.a}}},322:function(n,r,t){"use strict";var i=t(323);r.a=i.a},323:function(n,r,t){"use strict";r.a={props:{id:Number,thList:{type:Array,default:function(){return[]}}},data:function(){return{dataList:[],defualtPage:1,pageCount:1}},beforeMount:function(){this.id&&this.loadDataList(this.defualtPage)},methods:{loadDataList:function(n){var r=this;this.$loading({title:"正在加载",msg:"正在加载数据，请稍后..."}),this.$services.manage.getPreviewDataList({config_id:this.id,page:n}).then(function(n){r.$loading.close(),r.dataList=n.data.data,r.pageCount=n.datta.last_page}).catch(function(){r.$loading.close()})}}}},324:function(n,r,t){var i=t(413);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=t(280).default;e("a05d11ae",i,!0,{})},325:function(n,r,t){var i=t(415);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=t(280).default;e("7f20839a",i,!0,{})},393:function(n,r,t){"use strict";var i=t(394);t.d(r,"a",function(){return i.a}),t.d(r,"b",function(){return i.b})},394:function(n,r,t){"use strict";t.d(r,"a",function(){return i}),t.d(r,"b",function(){return e});var i=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"source-data-wrap"},[t("div",{staticClass:"base-main-title"},[n._v("基础数据>")]),n._v(" "),t("div",{staticClass:"base-tab"},[t("ul",{staticClass:"tab-list"},[t("li",{staticClass:"tab",class:{active:0==n.activeTab},on:{click:function(r){n.activeTab=0}}},[n._v("基础资料维护")]),n._v(" "),t("li",{staticClass:"tab",class:{active:1==n.activeTab},on:{click:function(r){n.activeTab=1}}},[n._v("全局参数设置")])]),n._v(" "),t("ul",{staticClass:"content-list"},[t("li",{directives:[{name:"show",rawName:"v-show",value:0==n.activeTab,expression:"activeTab == 0"}],staticClass:"content"},[t("source-data-box")],1),n._v(" "),t("li",{directives:[{name:"show",rawName:"v-show",value:1==n.activeTab,expression:"activeTab == 1"}],staticClass:"content"},[t("global-config-box")],1)])])])},e=[]},395:function(n,r,t){"use strict";var i=t(396),e=t(313),o=(t(398),t(0)),a=Object(o.a)(e.a,i.a,i.b,!1,null,"73b20825",null);r.a=a.exports},396:function(n,r,t){"use strict";var i=t(397);t.d(r,"a",function(){return i.a}),t.d(r,"b",function(){return i.b})},397:function(n,r,t){"use strict";t.d(r,"a",function(){return i}),t.d(r,"b",function(){return e});var i=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"source-data-box"},[t("div",{staticClass:"tab-title"},[n._v("工作表列表")]),n._v(" "),t("base-table",{staticClass:"source-table",attrs:{list:n.tableList},scopedSlots:n._u([{key:"header",fn:function(r){return[t("th",{staticClass:"source-name"},[n._v("工作表名称")]),n._v(" "),t("th",{staticClass:"source-time"},[n._v("更新时间")]),n._v(" "),t("th",{staticClass:"source-controls"},[n._v("操作")])]}},{key:"default",fn:function(r){return[t("td",[n._v(n._s(r.item.sheet_name))]),n._v(" "),t("td",[n._v(n._s(n.formatTime(r.item.utime)))]),n._v(" "),t("td",{staticClass:"base-center"},[t("span",{staticClass:"base-table-btn",on:{click:function(t){n.showAddDataDialog(r.item.id)}}},[n._v("添加")]),n._v(" "),t("router-link",{staticClass:"base-table-btn",attrs:{to:"/SourceData/Preview/"+r.item.id}},[n._v("预览")])],1)]}}])}),n._v(" "),t("base-dialog",{staticClass:"add-data-dialog",attrs:{title:"添加数据",show:n.addDataDialogDisplay},on:{close:function(r){n.addDataDialogDisplay=!1}}},[t("div",{staticClass:"base-btn upload-file-btn"},[t("span",[n._v("上传本地文件")]),n._v(" "),n.addDataDialogDisplay?t("input",{attrs:{type:"file"},on:{change:n.upload}}):n._e()]),n._v(" "),t("div",{staticClass:"upload-file-tips"},[n._v("仅支持xls(excel2003)文件格式，"),t("br"),n._v("单个文件建议控制在50MB以内")])])],1)},e=[]},398:function(n,r,t){"use strict";var i=t(315),e=t.n(i);e.a},399:function(n,r,t){r=n.exports=t(279)(!0),r.push([n.i,".source-data-box .tab-title[data-v-73b20825]{font-size:14px;font-weight:700;margin-bottom:10px}.source-data-box .add-data-dialog .upload-file-btn[data-v-73b20825]{margin:0 auto;width:145px;height:40px;font-size:14px;border-radius:40px;position:relative;overflow:hidden}.source-data-box .add-data-dialog .upload-file-btn input[type=file][data-v-73b20825]{position:absolute;left:-100%;top:-100%;width:200%;height:200%;opacity:0;cursor:pointer}.source-data-box .add-data-dialog .upload-file-tips[data-v-73b20825]{margin-top:28px;font-size:12px;color:#f63;line-height:1.2em}","",{version:3,sources:["D:/Projects/app_kangsidi/src/components/SourceData/D:/Projects/app_kangsidi/src/components/SourceData/SourceDataBox.vue"],names:[],mappings:"AA0SA,6CAEI,eAAe,AACf,gBAAiB,AACjB,kBAAmB,CACpB,AALH,oEAQM,cAAc,AA3NlB,YA4N2B,AA3N3B,YA2NiC,AA1NjC,eA9EY,AA+EZ,mBAyNiC,AA3LjC,kBAAkB,AAClB,eAAgB,CA4Lb,AA3LH,qFACE,kBAAkB,AAClB,WAAW,AACX,UAAU,AACV,WAAW,AACX,YAAY,AACZ,UAAU,AACV,cAAe,CAChB,AAwKH,qEAaM,gBAAgB,AAChB,eAAe,AACf,WAzRiB,AA0RjB,iBAAkB,CACnB",file:"SourceDataBox.vue?vue&type=style&index=0&id=73b20825&lang=scss&scoped=true",sourcesContent:['//视图尺寸定义\r\n$width-design-m: 750;\r\n$width-pc-min: 1000;\r\n//字体大小定义\r\n$font-default: 12px;\r\n$font-s: 12px;\r\n$font-h1: 40px;\r\n$font-h2: 30px;\r\n$font-h3: 22px;\r\n$font-h4: 18px;\r\n$font-h5: 16px;\r\n$font-h6: 14px;\r\n//颜色定义，$color-xxx定义前景色\r\n$color-empty: #eff4fb;\r\n$color-border: #dddddd;\r\n$color-input-border: #bfbfbf;\r\n$color-input-border-dark: #aaaaaa;\r\n$color-input-hover: #cfe0ff;\r\n$color-white: #ffffff;\r\n$color-black: #000000;\r\n$color-default: #333333;\r\n$color-active-lighter: #a5cdfb;\r\n$color-active-light: #5386d9;\r\n$color-active: #3072e5;\r\n$color-active-dark: #25539d;\r\n$color-disabled: #999;\r\n$color-disabled-light: #f6f6f6;\r\n$color-bg-light: #f8f8f8;\r\n$color-bg-light-2: #f5f5f5;\r\n$color-bg-light-3: #f2f2f2;\r\n$color-bg-table-hover: #fff8df;\r\n$color-warning-text: #fa763c;\r\n$color-warning: #ff6633;\r\n$color-error: #fe0000;\r\n$color-error-2: #f30000;\r\n$color-success: green;\r\n$color-tips-bg: #5b5b5b;\r\n$color-table-bg: $color-white;\r\n$color-table-bg-1: #f5f5f5;\r\n$color-table-bg-2: #d7e4ff;\r\n$color-table-bg-3: #9ab7ea;\r\n$color-table-bg-warning: #fff8ac;\r\n//边框、线条定义\r\n$border-default: 1px solid $color-border;\r\n//边距尺寸定义\r\n$margin-default: 12px;\r\n$margin-s: 8px;\r\n@mixin mobile() {\r\n  @media screen and (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-xs() {\r\n  @media screen and (max-width: 359px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin flex($flow: row nowrap, $jus: space-between, $ali: center) {\r\n  display: flex;\r\n  flex-flow: $flow;\r\n  justify-content: $jus;\r\n  align-items: $ali;\r\n}\r\n\r\n@mixin text-overflow {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n@mixin clearfix-after {\r\n  &:after {\r\n    display: block;\r\n    content: "";\r\n    clear: both;\r\n  }\r\n}\r\n\r\n@mixin content {\r\n  .content {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin btn-size($width: auto, $height: auto, $font-size: 12px) {\r\n  width: $width;\r\n  height: $height;\r\n  font-size: $font-size;\r\n  border-radius: $height;\r\n}\r\n\r\n@mixin btn($width: auto, $height: auto, $font-size: 12px) {\r\n  @include flex($jus: center);\r\n  @include btn-size($width, $height, $font-size);\r\n  line-height: 1;\r\n  background: $color-active;\r\n  color: $color-white;\r\n  border: none;\r\n  font-size: $font-size;\r\n  cursor: pointer;\r\n  &:hover,\r\n  &:active {\r\n    background: $color-active-light;\r\n  }\r\n  &.base-line-btn {\r\n    background: $color-white;\r\n    border: 1px solid $color-active;\r\n    color: $color-active;\r\n    &:hover,\r\n    &:active {\r\n      background: $color-white;\r\n      border-color: $color-active-light;\r\n      color: $color-active-light;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin upload-btn {\r\n  position: relative;\r\n  overflow: hidden;\r\n  input[type="file"] {\r\n    position: absolute;\r\n    left: -100%;\r\n    top: -100%;\r\n    width: 200%;\r\n    height: 200%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@mixin auto-scroll {\r\n  overflow: auto;\r\n  &::-webkit-scrollbar {\r\n    position: absolute;\r\n    top: 10px;\r\n    padding-top: 20px;\r\n    width: 6px;\r\n    height: 6px;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    /*滚动条里面小方块*/\r\n    border-radius: 10px;\r\n    background-color: $color-input-border;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    /*滚动条里面轨道*/\r\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n    /*border-radius: 10px;*/\r\n    // background: #EDEDED;\r\n  }\r\n}\r\n\r\n@function get-rem-size($px) {\r\n  @return $px/100 + "rem";\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.source-data-box {\r\n  .tab-title {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n  }\r\n  .add-data-dialog {\r\n    .upload-file-btn {\r\n      margin: 0 auto;\r\n      @include btn-size(145px, 40px, $font-h6);\r\n      @include upload-btn;\r\n    }\r\n    .upload-file-tips {\r\n      margin-top: 28px;\r\n      font-size: 12px;\r\n      color: $color-warning;\r\n      line-height: 1.2em;\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}])},400:function(n,r,t){"use strict";var i=t(401),e=t(316),o=(t(403),t(0)),a=Object(o.a)(e.a,i.a,i.b,!1,null,"05914f60",null);r.a=a.exports},401:function(n,r,t){"use strict";var i=t(402);t.d(r,"a",function(){return i.a}),t.d(r,"b",function(){return i.b})},402:function(n,r,t){"use strict";t.d(r,"a",function(){return i}),t.d(r,"b",function(){return e});var i=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"global-config-box"},[t("div",{staticClass:"control-bar"},[n.isEdit?n._e():t("button",{staticClass:"base-btn edit-btn",on:{click:function(r){n.isEdit=!0}}},[n._v("编辑")]),n._v(" "),n.isEdit?t("button",{staticClass:"base-btn base-line-btn save-btn",on:{click:n.save}},[n._v("保存")]):n._e()]),n._v(" "),t("div",{staticClass:"config-list-box"},[n.configList?t("ul",{staticClass:"config-list"},[t("li",{staticClass:"config"},[t("span",{staticClass:"config-label"},[n._v("问题清单重要性水平全局上限控制")]),n._v(" "),t("div",{staticClass:"form-item"},[t("span",{staticClass:"form-label"},[n._v("variance")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.variance,expression:"variance"}],ref:"config0",staticClass:"base-input form-input",attrs:{type:"text",placeholder:"请输入数字",disabled:!n.isEdit,readonly:!n.isEdit},domProps:{value:n.variance},on:{input:function(r){r.target.composing||(n.variance=r.target.value)}}})]),n._v(" "),t("div",{staticClass:"form-item"},[t("span",{staticClass:"form-label"},[n._v("variance%")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.variancePer,expression:"variancePer"}],ref:"config1",staticClass:"base-input form-input",attrs:{type:"text",placeholder:"请输入数字",disabled:!n.isEdit,readonly:!n.isEdit},domProps:{value:n.variancePer},on:{input:function(r){r.target.composing||(n.variancePer=r.target.value)}}}),n._v(" "),t("span",{staticClass:"form-text"},[n._v("%")])])]),n._v(" "),t("li",{staticClass:"config"},[t("span",{staticClass:"config-label"},[n._v("报表金额单位")]),n._v(" "),t("div",{staticClass:"form-item"},[t("base-check-group",{attrs:{list:n.mapUnitList(n.getConfigById(3).option),disabled:!n.isEdit,"checked-value":n.getConfigById(3).val},on:{change:function(r){n.getConfigById(3).val=r.value}}})],1)]),n._v(" "),t("li",{staticClass:"config"},[t("span",{staticClass:"config-label"},[n._v("报告金额单位")]),n._v(" "),t("div",{staticClass:"form-item"},[t("base-check-group",{attrs:{list:n.mapUnitList(n.getConfigById(4).option),disabled:!n.isEdit,"checked-value":n.getConfigById(4).val},on:{change:function(r){n.getConfigById(4).val=r.value}}})],1)])]):n._e()])])},e=[]},403:function(n,r,t){"use strict";var i=t(318),e=t.n(i);e.a},404:function(n,r,t){r=n.exports=t(279)(!0),r.push([n.i,".global-config-box .control-bar[data-v-05914f60]{display:flex;flex-flow:row nowrap;justify-content:flex-end;align-items:center}.global-config-box .control-bar .edit-btn[data-v-05914f60],.global-config-box .control-bar .save-btn[data-v-05914f60]{width:80px;height:25px;font-size:12px;border-radius:25px}.global-config-box .config-list-box .config-list[data-v-05914f60]{padding:0 8px}.global-config-box .config-list-box .config-list .config[data-v-05914f60]{padding-left:14px;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #ddd}.global-config-box .config-list-box .config-list .config .config-label[data-v-05914f60]{display:block;margin-left:-14px;margin-bottom:20px;padding-left:9px;font-size:14px;font-weight:700;line-height:1em;border-left:5px solid #5386d9}.global-config-box .config-list-box .config-list .config .form-item[data-v-05914f60]{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center}.global-config-box .config-list-box .config-list .config .form-item .form-label[data-v-05914f60]{flex:0 0 auto;min-width:64px;margin-right:10px}.global-config-box .config-list-box .config-list .config .form-item .form-input[data-v-05914f60]{width:146px;height:24px;margin-right:5px;font-size:12px}.global-config-box .config-list-box .config-list .config .form-item .form-input[disabled][data-v-05914f60]{background:#f6f6f6}.global-config-box .config-list-box .config-list .config .form-item[data-v-05914f60]:nth-child(n+2){margin-top:14px}","",{version:3,sources:["D:/Projects/app_kangsidi/src/components/SourceData/D:/Projects/app_kangsidi/src/components/SourceData/GlobalConfigBox.vue"],names:[],mappings:"AAgSA,iDApOE,aAAa,AACb,qBAF2B,AAG3B,yBAoO8B,AAnO9B,kBAJ8D,CA4O7D,AAPH,sHAzME,WA8M0B,AA7M1B,YA6MgC,AA5MhC,eAH2D,AAI3D,kBA2MgC,CAC7B,AANL,kEAUM,aAAc,CAsCf,AAhDL,0EAYQ,kBAAkB,AAClB,oBAAoB,AACpB,mBAAmB,AACnB,4BAjSc,CAiUf,AA/CP,wFAiBU,cAAc,AACd,kBAAkB,AAClB,mBAAmB,AACnB,iBAAiB,AACjB,eAAe,AACf,gBAAiB,AACjB,gBAAgB,AAChB,6BAlSkB,CAmSnB,AAzBT,qFApOE,aAAa,AACb,qBAF2B,AAG3B,2BA6PsC,AA5PtC,kBAJ8D,CAmRvD,AA9CT,iGA6BY,cAAc,AACd,eAAe,AACf,iBAAkB,CACnB,AAhCX,iGAkCY,YAAY,AACZ,YAAY,AACZ,iBAAiB,AACjB,cAAe,CAIhB,AAzCX,2GAuCc,kBA7SgB,CA8SjB,AAxCb,oGA4CY,eAAgB,CACjB",file:"GlobalConfigBox.vue?vue&type=style&index=0&id=05914f60&lang=scss&scoped=true",sourcesContent:['//视图尺寸定义\r\n$width-design-m: 750;\r\n$width-pc-min: 1000;\r\n//字体大小定义\r\n$font-default: 12px;\r\n$font-s: 12px;\r\n$font-h1: 40px;\r\n$font-h2: 30px;\r\n$font-h3: 22px;\r\n$font-h4: 18px;\r\n$font-h5: 16px;\r\n$font-h6: 14px;\r\n//颜色定义，$color-xxx定义前景色\r\n$color-empty: #eff4fb;\r\n$color-border: #dddddd;\r\n$color-input-border: #bfbfbf;\r\n$color-input-border-dark: #aaaaaa;\r\n$color-input-hover: #cfe0ff;\r\n$color-white: #ffffff;\r\n$color-black: #000000;\r\n$color-default: #333333;\r\n$color-active-lighter: #a5cdfb;\r\n$color-active-light: #5386d9;\r\n$color-active: #3072e5;\r\n$color-active-dark: #25539d;\r\n$color-disabled: #999;\r\n$color-disabled-light: #f6f6f6;\r\n$color-bg-light: #f8f8f8;\r\n$color-bg-light-2: #f5f5f5;\r\n$color-bg-light-3: #f2f2f2;\r\n$color-bg-table-hover: #fff8df;\r\n$color-warning-text: #fa763c;\r\n$color-warning: #ff6633;\r\n$color-error: #fe0000;\r\n$color-error-2: #f30000;\r\n$color-success: green;\r\n$color-tips-bg: #5b5b5b;\r\n$color-table-bg: $color-white;\r\n$color-table-bg-1: #f5f5f5;\r\n$color-table-bg-2: #d7e4ff;\r\n$color-table-bg-3: #9ab7ea;\r\n$color-table-bg-warning: #fff8ac;\r\n//边框、线条定义\r\n$border-default: 1px solid $color-border;\r\n//边距尺寸定义\r\n$margin-default: 12px;\r\n$margin-s: 8px;\r\n@mixin mobile() {\r\n  @media screen and (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-xs() {\r\n  @media screen and (max-width: 359px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin flex($flow: row nowrap, $jus: space-between, $ali: center) {\r\n  display: flex;\r\n  flex-flow: $flow;\r\n  justify-content: $jus;\r\n  align-items: $ali;\r\n}\r\n\r\n@mixin text-overflow {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n@mixin clearfix-after {\r\n  &:after {\r\n    display: block;\r\n    content: "";\r\n    clear: both;\r\n  }\r\n}\r\n\r\n@mixin content {\r\n  .content {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin btn-size($width: auto, $height: auto, $font-size: 12px) {\r\n  width: $width;\r\n  height: $height;\r\n  font-size: $font-size;\r\n  border-radius: $height;\r\n}\r\n\r\n@mixin btn($width: auto, $height: auto, $font-size: 12px) {\r\n  @include flex($jus: center);\r\n  @include btn-size($width, $height, $font-size);\r\n  line-height: 1;\r\n  background: $color-active;\r\n  color: $color-white;\r\n  border: none;\r\n  font-size: $font-size;\r\n  cursor: pointer;\r\n  &:hover,\r\n  &:active {\r\n    background: $color-active-light;\r\n  }\r\n  &.base-line-btn {\r\n    background: $color-white;\r\n    border: 1px solid $color-active;\r\n    color: $color-active;\r\n    &:hover,\r\n    &:active {\r\n      background: $color-white;\r\n      border-color: $color-active-light;\r\n      color: $color-active-light;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin upload-btn {\r\n  position: relative;\r\n  overflow: hidden;\r\n  input[type="file"] {\r\n    position: absolute;\r\n    left: -100%;\r\n    top: -100%;\r\n    width: 200%;\r\n    height: 200%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@mixin auto-scroll {\r\n  overflow: auto;\r\n  &::-webkit-scrollbar {\r\n    position: absolute;\r\n    top: 10px;\r\n    padding-top: 20px;\r\n    width: 6px;\r\n    height: 6px;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    /*滚动条里面小方块*/\r\n    border-radius: 10px;\r\n    background-color: $color-input-border;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    /*滚动条里面轨道*/\r\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n    /*border-radius: 10px;*/\r\n    // background: #EDEDED;\r\n  }\r\n}\r\n\r\n@function get-rem-size($px) {\r\n  @return $px/100 + "rem";\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.global-config-box {\r\n  .control-bar {\r\n    @include flex($jus: flex-end);\r\n    .edit-btn,\r\n    .save-btn {\r\n      @include btn-size(80px, 25px);\r\n    }\r\n  }\r\n  .config-list-box {\r\n    .config-list {\r\n      padding: 0 8px;\r\n      .config {\r\n        padding-left: 14px;\r\n        padding-bottom: 20px;\r\n        margin-bottom: 20px;\r\n        border-bottom: $border-default;\r\n        .config-label {\r\n          display: block;\r\n          margin-left: -14px;\r\n          margin-bottom: 20px;\r\n          padding-left: 9px;\r\n          font-size: 14px;\r\n          font-weight: bold;\r\n          line-height: 1em;\r\n          border-left: 5px solid $color-active-light;\r\n        }\r\n        .form-item {\r\n          @include flex($jus: flex-start);\r\n          .form-label {\r\n            flex: 0 0 auto;\r\n            min-width: 64px;\r\n            margin-right: 10px;\r\n          }\r\n          .form-input {\r\n            width: 146px;\r\n            height: 24px;\r\n            margin-right: 5px;\r\n            font-size: 12px;\r\n            &[disabled] {\r\n              background: $color-disabled-light;\r\n            }\r\n          }\r\n\r\n          &:nth-child(n + 2) {\r\n            margin-top: 14px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}])},405:function(n,r,t){"use strict";var i=t(319),e=t.n(i);e.a},406:function(n,r,t){r=n.exports=t(279)(!0),r.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Index.vue?vue&type=style&index=0&id=12f0433e&lang=scss&scoped=true",sourceRoot:""}])},407:function(n,r,t){"use strict";var i=t(408);t.d(r,"a",function(){return i.a}),t.d(r,"b",function(){return i.b})},408:function(n,r,t){"use strict";t.d(r,"a",function(){return i}),t.d(r,"b",function(){return e});var i=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"source-preview-wrap"},[t("div",{staticClass:"base-main-title"},[n._v("基础数据>")]),n._v(" "),t("div",{staticClass:"base-main-panel"},[t("div",{staticClass:"table-header"},[t("div",{staticClass:"table-title"},[n._v(n._s(n.tableTitle)+"预览")])]),n._v(" "),t("preview-table",{attrs:{id:n.id,thList:n.thList}})],1)])},e=[]},409:function(n,r,t){"use strict";var i=t(410),e=t(322),o=(t(412),t(0)),a=Object(o.a)(e.a,i.a,i.b,!1,null,"31e88136",null);r.a=a.exports},410:function(n,r,t){"use strict";var i=t(411);t.d(r,"a",function(){return i.a}),t.d(r,"b",function(){return i.b})},411:function(n,r,t){"use strict";t.d(r,"a",function(){return i}),t.d(r,"b",function(){return e});var i=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"table-wrap"},[t("base-table",{staticClass:"preview-table",attrs:{list:n.dataList},scopedSlots:n._u([{key:"header",fn:function(r){return n._l(n.thList,function(r){return t("th",{key:r},[n._v(n._s(r))])})}},{key:"default",fn:function(r){return n._l(r.item,function(r,i){return t("td",{key:"td-"+i},[n._v(n._s(r))])})}}])}),n._v(" "),t("base-pager",{attrs:{count:n.pageCount,default:n.defualtPage},on:{pagechange:n.loadDataList}})],1)},e=[]},412:function(n,r,t){"use strict";var i=t(324),e=t.n(i);e.a},413:function(n,r,t){r=n.exports=t(279)(!0),r.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PreviewTable.vue?vue&type=style&index=0&id=31e88136&lang=scss&scoped=true",sourceRoot:""}])},414:function(n,r,t){"use strict";var i=t(325),e=t.n(i);e.a},415:function(n,r,t){r=n.exports=t(279)(!0),r.push([n.i,".source-preview-wrap .table-header[data-v-0701d47b]{padding:20px 0}.source-preview-wrap .table-header .table-title[data-v-0701d47b]{font-size:14px;line-height:1}","",{version:3,sources:["D:/Projects/app_kangsidi/src/views/SourceData/D:/Projects/app_kangsidi/src/views/SourceData/Preview.vue"],names:[],mappings:"AAyMA,oDAEI,cAAe,CAKhB,AAPH,iEAIM,eAlMQ,AAmMR,aAAc,CACf",file:"Preview.vue?vue&type=style&index=0&id=0701d47b&lang=scss&scoped=true",sourcesContent:['//视图尺寸定义\r\n$width-design-m: 750;\r\n$width-pc-min: 1000;\r\n//字体大小定义\r\n$font-default: 12px;\r\n$font-s: 12px;\r\n$font-h1: 40px;\r\n$font-h2: 30px;\r\n$font-h3: 22px;\r\n$font-h4: 18px;\r\n$font-h5: 16px;\r\n$font-h6: 14px;\r\n//颜色定义，$color-xxx定义前景色\r\n$color-empty: #eff4fb;\r\n$color-border: #dddddd;\r\n$color-input-border: #bfbfbf;\r\n$color-input-border-dark: #aaaaaa;\r\n$color-input-hover: #cfe0ff;\r\n$color-white: #ffffff;\r\n$color-black: #000000;\r\n$color-default: #333333;\r\n$color-active-lighter: #a5cdfb;\r\n$color-active-light: #5386d9;\r\n$color-active: #3072e5;\r\n$color-active-dark: #25539d;\r\n$color-disabled: #999;\r\n$color-disabled-light: #f6f6f6;\r\n$color-bg-light: #f8f8f8;\r\n$color-bg-light-2: #f5f5f5;\r\n$color-bg-light-3: #f2f2f2;\r\n$color-bg-table-hover: #fff8df;\r\n$color-warning-text: #fa763c;\r\n$color-warning: #ff6633;\r\n$color-error: #fe0000;\r\n$color-error-2: #f30000;\r\n$color-success: green;\r\n$color-tips-bg: #5b5b5b;\r\n$color-table-bg: $color-white;\r\n$color-table-bg-1: #f5f5f5;\r\n$color-table-bg-2: #d7e4ff;\r\n$color-table-bg-3: #9ab7ea;\r\n$color-table-bg-warning: #fff8ac;\r\n//边框、线条定义\r\n$border-default: 1px solid $color-border;\r\n//边距尺寸定义\r\n$margin-default: 12px;\r\n$margin-s: 8px;\r\n@mixin mobile() {\r\n  @media screen and (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-xs() {\r\n  @media screen and (max-width: 359px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin flex($flow: row nowrap, $jus: space-between, $ali: center) {\r\n  display: flex;\r\n  flex-flow: $flow;\r\n  justify-content: $jus;\r\n  align-items: $ali;\r\n}\r\n\r\n@mixin text-overflow {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n@mixin clearfix-after {\r\n  &:after {\r\n    display: block;\r\n    content: "";\r\n    clear: both;\r\n  }\r\n}\r\n\r\n@mixin content {\r\n  .content {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin btn-size($width: auto, $height: auto, $font-size: 12px) {\r\n  width: $width;\r\n  height: $height;\r\n  font-size: $font-size;\r\n  border-radius: $height;\r\n}\r\n\r\n@mixin btn($width: auto, $height: auto, $font-size: 12px) {\r\n  @include flex($jus: center);\r\n  @include btn-size($width, $height, $font-size);\r\n  line-height: 1;\r\n  background: $color-active;\r\n  color: $color-white;\r\n  border: none;\r\n  font-size: $font-size;\r\n  cursor: pointer;\r\n  &:hover,\r\n  &:active {\r\n    background: $color-active-light;\r\n  }\r\n  &.base-line-btn {\r\n    background: $color-white;\r\n    border: 1px solid $color-active;\r\n    color: $color-active;\r\n    &:hover,\r\n    &:active {\r\n      background: $color-white;\r\n      border-color: $color-active-light;\r\n      color: $color-active-light;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin upload-btn {\r\n  position: relative;\r\n  overflow: hidden;\r\n  input[type="file"] {\r\n    position: absolute;\r\n    left: -100%;\r\n    top: -100%;\r\n    width: 200%;\r\n    height: 200%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@mixin auto-scroll {\r\n  overflow: auto;\r\n  &::-webkit-scrollbar {\r\n    position: absolute;\r\n    top: 10px;\r\n    padding-top: 20px;\r\n    width: 6px;\r\n    height: 6px;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    /*滚动条里面小方块*/\r\n    border-radius: 10px;\r\n    background-color: $color-input-border;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    /*滚动条里面轨道*/\r\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n    /*border-radius: 10px;*/\r\n    // background: #EDEDED;\r\n  }\r\n}\r\n\r\n@function get-rem-size($px) {\r\n  @return $px/100 + "rem";\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.source-preview-wrap {\r\n  .table-header {\r\n    padding: 20px 0;\r\n    .table-title {\r\n      font-size: $font-h6;\r\n      line-height: 1;\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}])}});
//# sourceMappingURL=SourceData.ebb475ff86e4fd7b36e5.js.map