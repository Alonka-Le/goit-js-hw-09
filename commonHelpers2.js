import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},t={form:document.querySelector(".feedback-form"),input:document.querySelector('input[type="email"]'),message:document.querySelector("textarea")};function s(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function m(){const a=localStorage.getItem("feedback-form-state");if(a){const o=JSON.parse(a);t.input.value=o.email,t.message.value=o.message}}m();t.form.addEventListener("submit",r);t.form.addEventListener("input",()=>{e.email=t.input.value.trim(),e.message=t.message.value.trim(),s()});function r(a){e.email===""||e.message===""?alert("Fill please all fields"):(localStorage.removeItem("feedback-form-state"),console.log(e),a.currentTarget.reset()),a.preventDefault()}
//# sourceMappingURL=commonHelpers2.js.map