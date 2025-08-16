import{a as L,S as b}from"./assets/vendor-D3cdi7O1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const v="51737021-87f818cc1ae3d02e4bfd7c05a",w="https://pixabay.com/api/",S=15;async function q(a,e=1){const t={key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:S},{data:s}=await L.get(w,{params:t});return s}const f=document.querySelector(".gallery"),y=document.querySelector("#load-more"),h=document.querySelector(".loader"),A=new b(".gallery a",{captionsData:"alt",captionDelay:250});function $(a){const e=a.map(t=>`
    <li class="card">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
      </a>
      <ul class="meta">
        <li>❤ ${t.likes}</li>
        <li>👁 ${t.views}</li>
        <li>💬 ${t.comments}</li>
        <li>⬇ ${t.downloads}</li>
      </ul>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",e),A.refresh()}function E(){f.innerHTML=""}function P(){h.classList.remove("is-hidden")}function B(){h.classList.add("is-hidden")}function M(){y.classList.remove("is-hidden")}function n(){y.classList.add("is-hidden")}const m=document.querySelector(".form"),O=m.querySelector('input[name="search-text"]'),x=document.querySelector("#load-more");let p="",d=1,u=0,l=0,c=!1;n();m.addEventListener("submit",async a=>{a.preventDefault();const e=O.value.trim();e&&(p=e,d=1,l=0,E(),n(),await g())});x.addEventListener("click",async()=>{d+=1,await g(!0)});async function g(a=!1){try{if(c)return;c=!0,P();const e=await q(p,d),t=e.hits??[];if(u=e.totalHits??0,!a&&t.length===0){n(),alert("Нічого не знайдено. Спробуй інший запит.");return}$(t),l+=t.length,l<u?M():(n(),l>0&&(console.log("We're sorry, but you've reached the end of search results."),alert("We're sorry, but you've reached the end of search results."))),a&&smoothScrollAfterAppend()}catch(e){console.error(e),alert("Сталася помилка під час завантаження зображень."),n()}finally{B(),c=!1}}
//# sourceMappingURL=index.js.map
