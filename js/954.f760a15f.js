"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[954],{7954:function(e,r,s){s.r(r),s.d(r,{default:function(){return p}});s(7658);var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"reg-container"},[r("div",{staticClass:"reg-box"},[r("div",{staticClass:"title-box"}),r("el-form",{ref:"regRef",attrs:{model:e.regForm,rules:e.rulesObj}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.regForm.username,callback:function(r){e.$set(e.regForm,"username",r)},expression:"regForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码","show-password":""},model:{value:e.regForm.password,callback:function(r){e.$set(e.regForm,"password",r)},expression:"regForm.password"}})],1),r("el-form-item",{attrs:{prop:"repassword"}},[r("el-input",{attrs:{type:"password",placeholder:"请再次确认密码","show-password":""},model:{value:e.regForm.repassword,callback:function(r){e.$set(e.regForm,"repassword",r)},expression:"regForm.repassword"}})],1),r("el-form-item",[r("el-button",{staticClass:"btn-reg",attrs:{type:"primary"},on:{click:e.registerFn}},[e._v("注册")]),r("el-link",{attrs:{type:"info"},on:{click:function(r){return e.$router.push("/login")}}},[e._v("去登录")])],1)],1)],1)])},a=[],o=(s(1703),s(7877)),i={name:"my-register",data(){const e=(e,r,s)=>{r!==this.regForm.password?s(new Error("两次输入的密码不一致")):s()};return{regForm:{username:"",password:"",repassword:""},rulesObj:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,10}$/,message:"长度在 1 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"长度在 6 到 15 个字符",trigger:"blur"}],repassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{registerFn(){this.$refs.regRef.validate((async e=>{if(!e)return!1;{const{data:e}=await(0,o.QV)(this.regForm);if(0!==e.code)return this.$message.error(e.message);this.$message.success(e.message),this.$router.push({path:"/login"})}}))}}},l=i,n=s(1001),u=(0,n.Z)(l,t,a,!1,null,"0b92b19d",null),p=u.exports}}]);
//# sourceMappingURL=954.f760a15f.js.map