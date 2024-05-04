import"./assets/modulepreload-polyfill-3cfb730f.js";const t={email:"",message:""},o=document.querySelector("#email"),s=document.querySelector("#message");o.addEventListener("input",e=>{t.email=e.target.value,a()});s.addEventListener("input",e=>{t.message=e.target.value,a()});function a(){localStorage.setItem("feedback-form-state",JSON.stringify(t))}
//# sourceMappingURL=commonHelpers2.js.map
