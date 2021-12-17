(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/stopwatch/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4e00":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"indigo",dark:"",dense:""}},[n("v-toolbar-title",[t._v("Stop Watch")]),n("v-spacer"),n("v-btn",{attrs:{color:"light-blue"},on:{click:t.addStopwatch}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" Add Stopwatch ")],1)],1),n("v-content",[n("v-container",[n("v-row",t._l(t.stopwatches,(function(e,r){return n("Stopwatch",{key:e.guid,attrs:{index:r,guid:e.guid},on:{rm:function(n){return t.remove(e)},mark:function(e){return t.mark(e)},reset:function(n){return t.reset(e)}}})})),1),t.marksRaw.length>0?n("v-card",{staticClass:"mt-2",attrs:{outlined:""}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Stopwatch")]),n("th",[t._v("Total Duration")])])]),n("tbody",t._l(t.totals,(function(e,r){return n("tr",{key:r},[n("td",[n("span",{staticClass:"sw-display",style:{backgroundColor:e.color}},[t._v(t._s(e.watch))])]),n("td",[t._v(t._s((e.total/3600).toLocaleString())+" Hours")])])})),0)]},proxy:!0}],null,!1,1787443668)})],1):t._e(),t.marksRaw.length>0?n("v-card",{staticClass:"mt-5",attrs:{outlined:""}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Stopwatch")]),n("th",[t._v("Start")]),n("th",[t._v("Stop")]),n("th",[t._v("Duration")]),n("th",[t._v("Actions")])])]),n("tbody",t._l(t.marksRaw,(function(e,r){return n("tr",{key:r},[n("td",[n("span",{staticClass:"sw-display",style:{backgroundColor:e.color}},[t._v(t._s(e.watch))])]),n("td",[t._v(t._s(t.format(e.start)))]),n("td",[t._v(t._s(t.format(e.stop)))]),n("td",[t._v(" "+t._s(t.distance(e))+" ")]),n("td",[n("v-icon",{on:{click:function(n){return t.em(e)}}},[t._v("mdi-pencil ")]),n("v-icon",{on:{click:function(e){return t.removeMark(r)}}},[t._v(" mdi-delete ")])],1)])})),0)]},proxy:!0}],null,!1,3765781580)})],1):t._e(),n("v-dialog",{attrs:{width:"800"},model:{value:t.editMark,callback:function(e){t.editMark=e},expression:"editMark"}},[n("v-card",[n("v-card-text",{staticClass:"pt-1"},[n("v-form",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-datetime-picker",{staticClass:"mt-4",attrs:{label:"Start"},model:{value:t.editingMark.start,callback:function(e){t.$set(t.editingMark,"start",e)},expression:"editingMark.start"}},[n("template",{slot:"dateIcon"},[n("v-icon",[t._v("mdi-calendar")])],1),n("template",{slot:"timeIcon"},[n("v-icon",[t._v("mdi-clock")])],1)],2)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-datetime-picker",{staticClass:"mt-4",attrs:{label:"Stop"},model:{value:t.editingMark.stop,callback:function(e){t.$set(t.editingMark,"stop",e)},expression:"editingMark.stop"}},[n("template",{slot:"dateIcon"},[n("v-icon",[t._v("mdi-calendar")])],1),n("template",{slot:"timeIcon"},[n("v-icon",[t._v("mdi-clock")])],1)],2)],1)],1)],1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:t.finalizeMarkEdit}},[t._v(" Done ")])],1)],1)],1)],1)],1)],1)},o=[],i=n("5530"),c=(n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("159b"),n("d81d"),n("b64b"),n("4de4"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"stop-watch",attrs:{cols:"12",md:"3"}},[n("v-dialog",{attrs:{width:"300"},model:{value:t.overlay,callback:function(e){t.overlay=e},expression:"overlay"}},[n("v-card",[n("v-card-text",{staticClass:"pt-1"},[n("v-form",[n("v-text-field",{attrs:{placeholder:"Stop Watch Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-color-picker",{attrs:{"hide-mode-switch":"","hide-inputs":""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:t.done}},[t._v(" Done ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.deleteStopwatch}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),n("v-card",{staticClass:"mx-auto",attrs:{color:t.color,outlined:"",dark:""}},[n("v-list-item",{attrs:{"one-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(t.n)+" ")])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.overlay=!t.overlay}}},[n("v-icon",{attrs:{color:"lighten-1"}},[t._v("mdi-pencil")])],1)],1)],1),n("v-divider"),n("div",{staticClass:"color-block pa-4"},[t.running?n("span",[n("v-progress-circular",{staticClass:"mr-4",attrs:{indeterminate:"",color:"white"}}),t._v(" Running, started at: "+t._s(t.formattedStart)+" ")],1):n("span",[n("v-icon",{attrs:{color:"lighten-1"}},[t._v("mdi-timer-off")]),t._v(" Not Running ")],1)]),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(e){t.running=!t.running}}},[t._v(" "+t._s(t.running?"Stop":"Start")+" ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.reset}},[n("v-icon",[t._v("mdi-refresh")])],1)],1)],1)],1)}),s=[],l=(n("a9e3"),n("b0c0"),n("340b"));n("e9c4");function u(t){localStorage.setItem("watches",JSON.stringify(t))}function d(){return JSON.parse(localStorage.getItem("watches")||"[]")}function p(t){localStorage.setItem("marks",JSON.stringify(t))}function v(){return JSON.parse(localStorage.getItem("marks")||"[]")}function f(t){var e=JSON.parse(localStorage.getItem("configs")||"{}");e[t.guid]=t,localStorage.setItem("configs",JSON.stringify(e))}function m(t){return JSON.parse(localStorage.getItem("configs")||"{}")[t]}var h=["#b648a9","#6232b6","#70b633","#2b74b6","#b63956","#03b674"],g={name:"Stopwatch",props:{index:{type:Number,required:!0},guid:{type:String,required:!0}},data:function(){return{overlay:!1,name:null,color:h[this.index%h.length],running:!1,startTime:null,stopTime:null}},computed:{formattedStart:function(){return Object(l["format"])(this.startTime,"h:mm:ss a")},n:function(){return this.name||"Stopwatch ".concat(this.index+1)}},watch:{running:function(t){t?this.startTime=new Date:this.stopTime=new Date},stopTime:function(){this.$emit("mark",{start:this.startTime,stop:this.stopTime,guid:this.guid,watch:this.n,color:this.color})}},created:function(){var t=m(this.guid);t.guid&&(this.name=t.name,this.color=t.color)},methods:{deleteStopwatch:function(){this.$emit("rm")},reset:function(){this.$emit("reset")},done:function(){f({guid:this.guid,name:this.name,color:this.color}),this.overlay=!1}}},b=g,k=(n("6e35"),n("2877")),w=Object(k["a"])(b,c,s,!1,null,"6fe2ac0e",null),x=w.exports;function _(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)}))}var S={name:"App",components:{Stopwatch:x},data:function(){return{stopwatches:[],marksRaw:[],editingMark:{start:null,stop:null},editMark:!1}},computed:{totals:function(){var t={};return this.marksRaw.forEach((function(e){t[e.guid]||(t[e.guid]=Object(i["a"])(Object(i["a"])({},e),{},{total:0})),t[e.guid].total=t[e.guid].total+Object(l["differenceInSeconds"])(Object(l["parse"])(e.stop),Object(l["parse"])(e.start))})),Object.keys(t).map((function(e){return t[e]}))}},watch:{marksRaw:function(){p(this.marksRaw)},stopwatches:function(){u(this.stopwatches)}},created:function(){this.stopwatches=d(),this.marksRaw=v()},methods:{addStopwatch:function(){this.stopwatches.push({guid:_()})},remove:function(t){this.stopwatches=this.stopwatches.filter((function(e){return e.guid!==t.guid}))},mark:function(t){var e=t.start,n=t.stop,r=t.watch,a=t.guid,o=t.color;this.marksRaw.push({mguid:_(),start:e,stop:n,watch:r,guid:a,color:o})},format:function(t){return Object(l["format"])(Object(l["parse"])(t),"M/D h:mm:ss a")},distance:function(t){return Object(l["distanceInWordsStrict"])(t.start,t.stop)},reset:function(t){this.marksRaw=this.marksRaw.filter((function(e){return e.guid!==t.guid}))},removeMark:function(t){this.marksRaw.splice(t,1)},em:function(t){this.editingMark=t,this.editingMark.start=Object(l["parse"])(this.editingMark.start),this.editingMark.stop=Object(l["parse"])(this.editingMark.stop),this.editMark=!0},finalizeMarkEdit:function(){this.editMark=!1}}},y=S,O=(n("5c0b"),Object(k["a"])(y,a,o,!1,null,null,null)),M=O.exports,j=n("ce5b"),C=n.n(j);n("bf40");r["default"].use(C.a);var R={},I=new C.a(R),T=n("ad24");r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({vuetify:I,render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6e35":function(t,e,n){"use strict";n("4e00")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.a88bf169.js.map