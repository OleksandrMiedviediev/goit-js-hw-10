import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as D}from"./assets/vendor-77e16229.js";function i(e){return e<10?`0${e}`:e}let l=!1;document.addEventListener("DOMContentLoaded",function(){let e;S("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],e<new Date?(D.show({message:"Please choose a date in the future",position:"topCenter",timeout:5e3,backgroundColor:"red",theme:"dark",icon:"icon-person"}),u()):f()}});function u(){const t=document.querySelector("[data-start]");t&&(t.disabled=!0)}function f(){const t=document.querySelector("[data-start]");t&&!l&&(t.disabled=!1)}document.querySelector("[data-start]").addEventListener("click",function(){h(),l=!0,u()});function h(){const t=e,r=setInterval(()=>{const n=t-new Date;if(n<=0)clearInterval(r),m({days:0,hours:0,minutes:0,seconds:0}),u();else{const o=y(n);m(o)}},1e3)}function m({days:t,hours:r,minutes:d,seconds:n}){const o=document.querySelector("[data-days]"),a=document.querySelector("[data-hours]"),s=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");o&&a&&s&&c&&(o.textContent=i(t),a.textContent=i(r),s.textContent=i(d),c.textContent=i(n))}function y(t){const a=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:c,seconds:p}}});
//# sourceMappingURL=commonHelpers.js.map
