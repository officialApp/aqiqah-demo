(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-nikah-wanita~9ba64b0f"],{"3d75":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow p-3 rounded-lg"},[t._m(0),e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm table-striped table-bordered"},[t._m(1),e("tr",[e("td",{staticClass:"capitalize"},[t._v("nama_lengkap")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama_lengkap,expression:"vdata.nama_lengkap"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nama_lengkap",name:"nama_lengkap",placeholder:"nama_lengkap"},domProps:{value:t.vdata.nama_lengkap},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama_lengkap",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("nama_singkat")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama_singkat,expression:"vdata.nama_singkat"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nama_singkat",name:"nama_singkat",placeholder:"nama_singkat"},domProps:{value:t.vdata.nama_singkat},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama_singkat",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("keluarga")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.keluarga,expression:"vdata.keluarga"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"keluarga",name:"keluarga",placeholder:"keluarga"},domProps:{value:t.vdata.keluarga},on:{input:function(a){a.target.composing||t.$set(t.vdata,"keluarga",a.target.value)}}})])])])])]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])])]),e("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?e("div",{staticClass:"p-2"},[e("div",{staticClass:"text-right"},[e("vue-json-excel",{attrs:{data:t.datanya}},[e("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v(" Export "),e("span",{staticClass:"typcn typcn-chart-area"})])])],1),e("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:[""]},on:{selected:t.ambil}})],1):t._e()])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"p-2 text-lg font-semibold"},[e("span",{staticClass:"typcn typcn-pen"}),t._v(" FORM UNDANGAN")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{attrs:{colspan:"3"}},[e("p",{staticClass:"p-2 font-semibold text-lg"},[t._v("Data Mempelai Wanita : ")])])])}],i=e("1da1"),r=(e("96cf"),e("4b97")),l=e("6be6"),o=new r["a"],c="https://undangan.officialapp.website",d={layout:"app_admin_undangan",components:{Btables:l["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},methods:{getData:function(){var t=this;o.collection("app_undangan_nikah_wanita",!1,c).doc().select("select * from app_undangan_nikah_wanita").then((function(a){t.datanya=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t,!confirm("Apakah yakin proses dilanjutkan ?")){a.next=19;break}if("tambah"!=t.btn){a.next=9;break}return delete t.vdata.id,a.next=6,o.collection("app_undangan_nikah_wanita",!0,c).doc().set(t.vdata);case 6:e.getData(),a.next=19;break;case 9:if("update"!=t.btn){a.next=15;break}return a.next=12,o.collection("app_undangan_nikah_wanita",!0,c).doc().set(t.vdata);case 12:e.getData(),a.next=19;break;case 15:if("delete"!=t.btn){a.next=19;break}return a.next=18,o.collection("app_undangan_nikah_wanita",!0,c).doc(t.vdata.id)["delete"]();case 18:e.getData();case 19:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData();case 1:case"end":return a.stop()}}),a)})))()}},p=d,m=e("2877"),u=Object(m["a"])(p,n,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=page-admin-nikah-wanita~9ba64b0f.01774444.js.map