import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as D,i as u}from"./assets/vendor-77e16229.js";function r(e){return e<10?`0${e}`:e}document.addEventListener("DOMContentLoaded",function(){let e;D("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],e<new Date?(u.show("Please choose a date in the future"),i()):d()}});function i(){const t=document.querySelector("[data-start]");t&&(t.disabled=!0)}function d(){const t=document.querySelector("[data-start]");t&&(t.disabled=!1)}document.querySelector("[data-start]").addEventListener("click",function(){l()});function l(){const t=e,a=setInterval(()=>{const n=t-new Date;if(n<=0)clearInterval(a),c({days:0,hours:0,minutes:0,seconds:0}),i();else{const o=m(n);c(o)}},1e3)}function c({days:t,hours:a,minutes:s,seconds:n}){const o=document.getElementById("timer");o&&(o.textContent=`${r(t)}:${r(a)}:${r(s)}:${r(n)}`)}function m(t){const f=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:y,seconds:p}}u.show({title:"Alert",message:"Please choose a date in the future",position:"topRight",timeout:5e3,theme:"red"})});
//# sourceMappingURL=commonHelpers.js.map