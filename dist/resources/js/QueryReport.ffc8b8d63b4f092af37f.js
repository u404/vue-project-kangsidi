webpackJsonp([5],{288:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e(440),o=e(356),i=(e(447),e(0)),a=Object(i.a)(o.a,t.a,t.b,!1,null,"ecdc3040",null);r.default=a.exports},356:function(n,r,e){"use strict";var t=e(357);r.a=t.a},357:function(n,r,e){"use strict";var t=e(442);r.a={data:function(){return{iframeSrc:""}},components:{QueryConfigTable:t.a}}},358:function(n,r,e){"use strict";var t=e(359);r.a=t.a},359:function(n,r,e){"use strict";r.a={data:function(){return{tableList:[{title:"报表项一级",value:1e3,unit:"元"},{title:"报表项二级",value:1e3,unit:"元"},{title:"成本中心",value:1e3,unit:"元"},{title:"成本中心类别",value:1e3,unit:"元"},{title:"公司",value:1e3,unit:"元"},{title:"月份",value:1e3,unit:"元"}],editIndex:-1,editValue:null}},watch:{editValue:function(n,r){""!==n&&isNaN(+n)?this.editValue=r:this.tableList[this.editIndex].value=+n},editIndex:function(n){console.log(n)}},methods:{edit:function(n){var r=this;this.editIndex=n,this.editValue=this.tableList[n].value,this.$nextTick(function(){r.$refs["numInput"+n].focus()})}}}},360:function(n,r,e){var t=e(446);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var o=e(278).default;o("4290528a",t,!0,{})},361:function(n,r,e){var t=e(448);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var o=e(278).default;o("232df4b6",t,!0,{})},440:function(n,r,e){"use strict";var t=e(441);e.d(r,"a",function(){return t.a}),e.d(r,"b",function(){return t.b})},441:function(n,r,e){"use strict";e.d(r,"a",function(){return t}),e.d(r,"b",function(){return o});var t=function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("div",{staticClass:"query-report-wrap"},[e("div",{staticClass:"base-main-title"},[n._v("查询报告>")]),n._v(" "),e("div",{staticClass:"base-main-panel"},[e("query-config-table")],1),n._v(" "),e("div",{staticClass:"base-main-panel"},[e("div",{staticClass:"panel-title"},[n._v("查询报告")]),n._v(" "),n._m(0),n._v(" "),e("div",{staticClass:"report-iframe-box"},[e("div",{staticClass:"report-warning-tips"},[n._v("\n        暂不支持可视化查询报告功能，请在BI下查看报告！\n      ")]),n._v(" "),e("iframe",{directives:[{name:"show",rawName:"v-show",value:n.iframeSrc,expression:"iframeSrc"}],staticClass:"report-iframe",attrs:{src:n.iframeSrc,frameborder:"1"}})])])])},o=[function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("div",{staticClass:"query-box"},[e("div",{staticClass:"form-item select-group"},[e("select",{staticClass:"base-select"},[e("option",[n._v("请选择开始")])]),n._v(" "),e("select",{staticClass:"base-select"},[e("option",[n._v("请选择开始")])]),n._v(" "),e("span",{staticClass:"split-line"},[n._v("--")]),n._v(" "),e("select",{staticClass:"base-select"},[e("option",[n._v("请选择开始")])]),n._v(" "),e("select",{staticClass:"base-select"},[e("option",[n._v("请选择开始")])])]),n._v(" "),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"base-btn export-btn"},[n._v("导出报表")])])])}]},442:function(n,r,e){"use strict";var t=e(443),o=e(358),i=(e(445),e(0)),a=Object(i.a)(o.a,t.a,t.b,!1,null,"a050df76",null);r.a=a.exports},443:function(n,r,e){"use strict";var t=e(444);e.d(r,"a",function(){return t.a}),e.d(r,"b",function(){return t.b})},444:function(n,r,e){"use strict";e.d(r,"a",function(){return t}),e.d(r,"b",function(){return o});var t=function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("base-table",{staticClass:"query-config-table",attrs:{list:n.tableList},scopedSlots:n._u([{key:"header",fn:function(r){return[e("th",[n._v("汇总层级")]),n._v(" "),e("th",[n._v("数字单位（阈值）")]),n._v(" "),e("th",[n._v("单位名称")])]}},{key:"default",fn:function(r){return[e("td",[n._v(n._s(r.item.title))]),n._v(" "),e("td",{staticClass:"base-center config-col",class:{active:n.editIndex===r.index}},[e("span",{staticClass:"num-input-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.editValue,expression:"editValue"}],ref:"numInput"+r.index,staticClass:"base-input num-input",style:{width:1.5+.6*String(r.item.value).length+"em"},domProps:{value:n.editValue},on:{blur:function(r){n.editIndex=-1},input:function(r){r.target.composing||(n.editValue=r.target.value)}}})]),n._v(" "),e("span",{staticClass:"num-text"},[n._v("\n        "+n._s(r.item.value)+"\n        "),e("i",{staticClass:"edit-icon",on:{click:function(e){n.edit(r.index)}}})])]),n._v(" "),e("td",{staticClass:"base-center"},[n._v("元")])]}}])})},o=[]},445:function(n,r,e){"use strict";var t=e(360),o=e.n(t);o.a},446:function(n,r,e){var t=e(279);r=n.exports=e(277)(!0),r.push([n.i,".query-config-table .config-col .num-input-box[data-v-a050df76]{display:none;min-width:140px;line-height:20px;border-bottom:1px solid #25539d}.query-config-table .config-col .num-input-box .num-input[data-v-a050df76]{min-width:4em;width:4em;padding:0 .5em;height:16px;border:none;background:#a5cdfb;font-size:12px;text-align:center}.query-config-table .config-col .num-text[data-v-a050df76]{position:relative}.query-config-table .config-col .num-text .edit-icon[data-v-a050df76]{position:absolute;width:18px;height:18px;top:50%;margin-top:-9px;left:100%;margin-left:14px;cursor:pointer;background:url("+t(e(280))+") -18px -40px no-repeat;display:none}.query-config-table .config-col[data-v-a050df76]:not(.active):hover{background:#fff8df}.query-config-table .config-col:not(.active):hover .num-text .edit-icon[data-v-a050df76]{display:block}.query-config-table .config-col.active .num-input-box[data-v-a050df76]{display:inline-block}.query-config-table .config-col.active .num-text[data-v-a050df76]{display:none}","",{version:3,sources:["D:/Projects/app_kangsidi/src/components/D:/Projects/app_kangsidi/src/components/QueryConfigTable.vue"],names:[],mappings:"AAqPA,gEAGM,aAAa,AACb,gBAAgB,AAChB,iBAAiB,AACjB,+BAnOqB,CA+OtB,AAlBL,2EAQQ,cAAc,AACd,UAAU,AACV,eAAgB,AAChB,YAAY,AACZ,YAAY,AACZ,mBA7OsB,AA+OtB,eAAe,AACf,iBAAkB,CACnB,AAjBP,2DAqBM,iBAAkB,CAanB,AAlCL,sEAuBQ,kBAAkB,AAClB,WAAW,AACX,YAAY,AACZ,QAAQ,AACR,gBAAgB,AAChB,UAAU,AACV,iBAAiB,AACjB,eAAe,AACf,+DAAiE,AACjE,YAAa,CACd,AAjCP,oEAoCM,kBA5PwB,CAkQzB,AA1CL,yFAuCU,aAAc,CACf,AAxCT,uEA6CQ,oBAAqB,CACtB,AA9CP,kEAgDQ,YAAa,CACd",file:"QueryConfigTable.vue?vue&type=style&index=0&id=a050df76&lang=scss&scoped=true",sourcesContent:["//视图尺寸定义\r\n$width-design-m: 750;\r\n$width-pc-min: 1000;\r\n//字体大小定义\r\n$font-default: 12px;\r\n$font-s: 12px;\r\n$font-h1: 40px;\r\n$font-h2: 30px;\r\n$font-h3: 22px;\r\n$font-h4: 18px;\r\n$font-h5: 16px;\r\n$font-h6: 14px;\r\n//颜色定义，$color-xxx定义前景色\r\n$color-empty: #eff4fb;\r\n$color-border: #dddddd;\r\n$color-input-border: #bfbfbf;\r\n$color-input-border-dark: #aaaaaa;\r\n$color-input-hover: #cfe0ff;\r\n$color-white: #ffffff;\r\n$color-black: #000000;\r\n$color-default: #333333;\r\n$color-active-lighter: #a5cdfb;\r\n$color-active-light: #5386d9;\r\n$color-active: #3072e5;\r\n$color-active-dark: #25539d;\r\n$color-disabled-light: #f6f6f6;\r\n$color-bg-light: #f8f8f8;\r\n$color-bg-light-2: #f5f5f5;\r\n$color-bg-light-3: #f2f2f2;\r\n$color-bg-table-hover: #fff8df;\r\n$color-warning-text: #fa763c;\r\n$color-warning: #ff6633;\r\n$color-error: #fe0000;\r\n$color-error-2: #f30000;\r\n$color-success: green;\r\n$color-tips-bg: #5b5b5b;\r\n$color-table-bg: $color-white;\r\n$color-table-bg-1: #f5f5f5;\r\n$color-table-bg-2: #d7e4ff;\r\n$color-table-bg-3: #9ab7ea;\r\n$color-table-bg-warning: #fff8ac;\r\n//边框、线条定义\r\n$border-default: 1px solid $color-border;\r\n//边距尺寸定义\r\n$margin-default: 12px;\r\n$margin-s: 8px;\r\n@mixin mobile() {\r\n  @media screen and (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-xs() {\r\n  @media screen and (max-width: 359px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin flex($flow:row nowrap, $jus:space-between, $ali:center) {\r\n  display: flex;\r\n  flex-flow: $flow;\r\n  justify-content: $jus;\r\n  align-items: $ali;\r\n}\r\n\r\n@mixin text-overflow {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n@mixin clearfix-after {\r\n  &:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n  }\r\n}\r\n\r\n@mixin content {\r\n  .content {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin btn-size($width: auto, $height: auto, $font-size: 12px) {\r\n  width: $width;\r\n  height: $height;\r\n  font-size: $font-size;\r\n  border-radius: $height;\r\n}\r\n\r\n@mixin btn($width: auto, $height: auto, $font-size: 12px) {\r\n  @include flex($jus: center);\r\n  @include btn-size($width, $height, $font-size);\r\n  line-height: 1;\r\n  background: $color-active;\r\n  color: $color-white;\r\n  border: none;\r\n  font-size: $font-size;\r\n  cursor: pointer;\r\n  &:hover,\r\n  &:active {\r\n    background: $color-active-light;\r\n  }\r\n  &.base-line-btn {\r\n    background: $color-white;\r\n    border: 1px solid $color-active;\r\n    color: $color-active;\r\n    &:hover,\r\n    &:active {\r\n      background: $color-white;\r\n      border-color: $color-active-light;\r\n      color: $color-active-light;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin upload-btn {\r\n  position: relative;\r\n  overflow: hidden;\r\n  input[type=\"file\"] {\r\n    position: absolute;\r\n    left: -100%;\r\n    top: -100%;\r\n    width: 200%;\r\n    height: 200%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@mixin auto-scroll {\r\n  overflow: auto;\r\n  &::-webkit-scrollbar {\r\n    position: absolute;\r\n    top: 10px;\r\n    padding-top: 20px;\r\n    width: 6px;\r\n    height: 6px;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    /*滚动条里面小方块*/\r\n    border-radius: 10px;\r\n    background-color: $color-input-border;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    /*滚动条里面轨道*/\r\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n    /*border-radius: 10px;*/\r\n    // background: #EDEDED;\r\n  }\r\n}\r\n\r\n@function get-rem-size($px) {\r\n  @return $px/100+'rem';\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.query-config-table {\r\n  .config-col {\r\n    .num-input-box {\r\n      display: none;\r\n      min-width: 140px;\r\n      line-height: 20px;\r\n      border-bottom: 1px solid $color-active-dark;\r\n      .num-input {\r\n        min-width: 4em;\r\n        width: 4em;\r\n        padding: 0 0.5em;\r\n        height: 16px;\r\n        border: none;\r\n        background: $color-active-lighter;\r\n\r\n        font-size: 12px;\r\n        text-align: center;\r\n      }\r\n    }\r\n\r\n    .num-text {\r\n      position: relative;\r\n      .edit-icon {\r\n        position: absolute;\r\n        width: 18px;\r\n        height: 18px;\r\n        top: 50%;\r\n        margin-top: -9px;\r\n        left: 100%;\r\n        margin-left: 14px;\r\n        cursor: pointer;\r\n        background: url(../assets/images/icons.png) -18px -40px no-repeat;\r\n        display: none;\r\n      }\r\n    }\r\n    &:not(.active):hover {\r\n      background: $color-bg-table-hover;\r\n      .num-text {\r\n        .edit-icon {\r\n          display: block;\r\n        }\r\n      }\r\n    }\r\n    &.active {\r\n      .num-input-box {\r\n        display: inline-block;\r\n      }\r\n      .num-text {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}])},447:function(n,r,e){"use strict";var t=e(361),o=e.n(t);o.a},448:function(n,r,e){var t=e(279);r=n.exports=e(277)(!0),r.push([n.i,'.query-report-wrap .base-main-panel[data-v-ecdc3040]{padding:10px}.query-report-wrap .base-main-panel .panel-title[data-v-ecdc3040]{margin-top:5px;margin-bottom:15px;padding-left:10px;font-size:14px;font-weight:700;line-height:1;color:#5386d9;border-left:5px solid #5386d9}.query-report-wrap .base-main-panel .query-box[data-v-ecdc3040]{margin-bottom:8px;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.query-report-wrap .base-main-panel .query-box .select-group[data-v-ecdc3040]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:404px}.query-report-wrap .base-main-panel .query-box .select-group .split-line[data-v-ecdc3040]{color:#bfbfbf}.query-report-wrap .base-main-panel .query-box .select-group .base-select[data-v-ecdc3040]{width:90px;height:22px;font-size:12px}.query-report-wrap .base-main-panel .query-box .btn-group .export-btn[data-v-ecdc3040]{width:110px;height:25px;font-size:12px;border-radius:25px}.query-report-wrap .base-main-panel .report-iframe-box[data-v-ecdc3040]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;width:100%;height:625px;border:1px solid #bfbfbf}.query-report-wrap .base-main-panel .report-iframe-box .report-warning-tips[data-v-ecdc3040]{line-height:32px;padding-left:42px;font-size:14px;font-weight:700;position:relative}.query-report-wrap .base-main-panel .report-iframe-box .report-warning-tips[data-v-ecdc3040]:before{content:"";position:absolute;top:0;left:0;width:32px;height:32px;background:url('+t(e(280))+") 0 -145px no-repeat}.query-report-wrap .base-main-panel .report-iframe-box .report-iframe[data-v-ecdc3040]{width:100%;height:100%;border:none}","",{version:3,sources:["D:/Projects/app_kangsidi/src/views/D:/Projects/app_kangsidi/src/views/QueryReport.vue"],names:[],mappings:"AAiNA,qDAEI,YAAa,CA2Dd,AA7DH,kEAIM,eAAe,AACf,mBAAmB,AACnB,kBAAkB,AAClB,eA7MQ,AA8MR,gBAAiB,AACjB,cAAc,AACd,cArMsB,AAsMtB,6BAtMsB,CAuMvB,AAZL,gEAcM,kBAAkB,AApKtB,aAAa,AACb,qBAF0B,AAG1B,8BAH8C,AAI9C,kBAJ2D,CAwLxD,AAjCL,8EAtJE,aAAa,AACb,qBAF0B,AAG1B,8BAH8C,AAI9C,mBAJ2D,AAyKrD,WAAY,CASb,AA3BP,0FAoBU,aAtNkB,CAuNnB,AArBT,2FAuBU,WAAW,AACX,YAAY,AACZ,cAAe,CAChB,AA1BT,uFA3HE,YAyJ+B,AAxJ/B,YAwJqC,AAvJrC,eAH2D,AAI3D,kBAsJqC,CAC9B,AA/BT,wEAtJE,aAAa,AACb,qBAF0B,AAG1B,uBAuL8B,AAtL9B,mBAJ2D,AA2LvD,WAAW,AACX,aAAa,AACb,wBAxOsB,CA8PvB,AA5DL,6FAwCQ,iBAAiB,AACjB,kBAAkB,AAClB,eAhPM,AAiPN,gBAAiB,AACjB,iBAAkB,CAUnB,AAtDP,oGA8CU,WAAW,AACX,kBAAkB,AAClB,MAAM,AACN,OAAO,AACP,WAAW,AACX,YAAY,AACZ,2DAA8D,CAC/D,AArDT,uFAwDQ,WAAW,AACX,YAAY,AACZ,WAAY,CACb",file:"QueryReport.vue?vue&type=style&index=0&id=ecdc3040&lang=scss&scoped=true",sourcesContent:["//视图尺寸定义\r\n$width-design-m: 750;\r\n$width-pc-min: 1000;\r\n//字体大小定义\r\n$font-default: 12px;\r\n$font-s: 12px;\r\n$font-h1: 40px;\r\n$font-h2: 30px;\r\n$font-h3: 22px;\r\n$font-h4: 18px;\r\n$font-h5: 16px;\r\n$font-h6: 14px;\r\n//颜色定义，$color-xxx定义前景色\r\n$color-empty: #eff4fb;\r\n$color-border: #dddddd;\r\n$color-input-border: #bfbfbf;\r\n$color-input-border-dark: #aaaaaa;\r\n$color-input-hover: #cfe0ff;\r\n$color-white: #ffffff;\r\n$color-black: #000000;\r\n$color-default: #333333;\r\n$color-active-lighter: #a5cdfb;\r\n$color-active-light: #5386d9;\r\n$color-active: #3072e5;\r\n$color-active-dark: #25539d;\r\n$color-disabled-light: #f6f6f6;\r\n$color-bg-light: #f8f8f8;\r\n$color-bg-light-2: #f5f5f5;\r\n$color-bg-light-3: #f2f2f2;\r\n$color-bg-table-hover: #fff8df;\r\n$color-warning-text: #fa763c;\r\n$color-warning: #ff6633;\r\n$color-error: #fe0000;\r\n$color-error-2: #f30000;\r\n$color-success: green;\r\n$color-tips-bg: #5b5b5b;\r\n$color-table-bg: $color-white;\r\n$color-table-bg-1: #f5f5f5;\r\n$color-table-bg-2: #d7e4ff;\r\n$color-table-bg-3: #9ab7ea;\r\n$color-table-bg-warning: #fff8ac;\r\n//边框、线条定义\r\n$border-default: 1px solid $color-border;\r\n//边距尺寸定义\r\n$margin-default: 12px;\r\n$margin-s: 8px;\r\n@mixin mobile() {\r\n  @media screen and (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-xs() {\r\n  @media screen and (max-width: 359px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin flex($flow:row nowrap, $jus:space-between, $ali:center) {\r\n  display: flex;\r\n  flex-flow: $flow;\r\n  justify-content: $jus;\r\n  align-items: $ali;\r\n}\r\n\r\n@mixin text-overflow {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n@mixin clearfix-after {\r\n  &:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n  }\r\n}\r\n\r\n@mixin content {\r\n  .content {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin btn-size($width: auto, $height: auto, $font-size: 12px) {\r\n  width: $width;\r\n  height: $height;\r\n  font-size: $font-size;\r\n  border-radius: $height;\r\n}\r\n\r\n@mixin btn($width: auto, $height: auto, $font-size: 12px) {\r\n  @include flex($jus: center);\r\n  @include btn-size($width, $height, $font-size);\r\n  line-height: 1;\r\n  background: $color-active;\r\n  color: $color-white;\r\n  border: none;\r\n  font-size: $font-size;\r\n  cursor: pointer;\r\n  &:hover,\r\n  &:active {\r\n    background: $color-active-light;\r\n  }\r\n  &.base-line-btn {\r\n    background: $color-white;\r\n    border: 1px solid $color-active;\r\n    color: $color-active;\r\n    &:hover,\r\n    &:active {\r\n      background: $color-white;\r\n      border-color: $color-active-light;\r\n      color: $color-active-light;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin upload-btn {\r\n  position: relative;\r\n  overflow: hidden;\r\n  input[type=\"file\"] {\r\n    position: absolute;\r\n    left: -100%;\r\n    top: -100%;\r\n    width: 200%;\r\n    height: 200%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@mixin auto-scroll {\r\n  overflow: auto;\r\n  &::-webkit-scrollbar {\r\n    position: absolute;\r\n    top: 10px;\r\n    padding-top: 20px;\r\n    width: 6px;\r\n    height: 6px;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    /*滚动条里面小方块*/\r\n    border-radius: 10px;\r\n    background-color: $color-input-border;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    /*滚动条里面轨道*/\r\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n    /*border-radius: 10px;*/\r\n    // background: #EDEDED;\r\n  }\r\n}\r\n\r\n@function get-rem-size($px) {\r\n  @return $px/100+'rem';\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.query-report-wrap {\r\n  .base-main-panel {\r\n    padding: 10px;\r\n    .panel-title {\r\n      margin-top: 5px;\r\n      margin-bottom: 15px;\r\n      padding-left: 10px;\r\n      font-size: $font-h6;\r\n      font-weight: bold;\r\n      line-height: 1;\r\n      color: $color-active-light;\r\n      border-left: 5px solid $color-active-light;\r\n    }\r\n    .query-box {\r\n      margin-bottom: 8px;\r\n      @include flex;\r\n      .select-group {\r\n        @include flex;\r\n        width: 404px;\r\n        .split-line {\r\n          color: $color-input-border;\r\n        }\r\n        .base-select {\r\n          width: 90px;\r\n          height: 22px;\r\n          font-size: 12px;\r\n        }\r\n      }\r\n      .btn-group {\r\n        .export-btn {\r\n          @include btn-size(110px, 25px);\r\n        }\r\n      }\r\n    }\r\n    .report-iframe-box {\r\n      @include flex($jus: center);\r\n      width: 100%;\r\n      height: 625px;\r\n      border: 1px solid $color-input-border;\r\n      .report-warning-tips {\r\n        line-height: 32px;\r\n        padding-left: 42px;\r\n        font-size: $font-h6;\r\n        font-weight: bold;\r\n        position: relative;\r\n        &:before {\r\n          content: \"\";\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          width: 32px;\r\n          height: 32px;\r\n          background: url(../assets/images/icons.png) 0 -145px no-repeat;\r\n        }\r\n      }\r\n      .report-iframe {\r\n        width: 100%;\r\n        height: 100%;\r\n        border: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=QueryReport.ffc8b8d63b4f092af37f.js.map