var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),r=document.querySelector("tbody");e.addEventListener("click",function(){if(r.children.length<10){for(var l=document.querySelectorAll("tr"),n=document.createElement("tr"),d=0;d<l[0].children.length;d++){var c=document.createElement("td");n.appendChild(c)}r.appendChild(n)}10===r.children.length&&(e.disabled=!0),r.children.length>2&&t.removeAttribute("disabled")}),t.addEventListener("click",function(){r.children.length>2&&r.removeChild(r.lastElementChild),2===r.children.length&&(t.disabled=!0),r.children.length<10&&e.removeAttribute("disabled")}),l.addEventListener("click",function(){var e=document.querySelectorAll("tr");if(e[0].children.length<10)for(var t=0;t<e.length;t++){var r=document.createElement("td");e[t].appendChild(r)}10===e[0].children.length&&(l.disabled=!0),e[0].children.length>2&&n.removeAttribute("disabled")}),n.addEventListener("click",function(){var e=document.querySelectorAll("tr");if(e[0].children.length>2)for(var t=0;t<e.length;t++)e[t].removeChild(e[t].lastElementChild);2===e[0].children.length&&(n.disabled=!0),e[0].children.length<10&&l.removeAttribute("disabled")});
//# sourceMappingURL=index.17ba7fe9.js.map
