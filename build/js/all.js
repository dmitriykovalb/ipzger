!function(){"use strict";for(var t,e,i=function(t){return"#"===t.charAt(0)?document.querySelector(t):document.querySelectorAll(t)},n=i("#viewer"),a=i("#equals"),o=i(".num"),r=i(".ops"),c="",s="",u=function(){t?(c=this.getAttribute("data-num"),t=""):c+=this.getAttribute("data-num"),n.innerHTML=c},l=function(){s=c,c="",e=this.getAttribute("data-ops"),a.setAttribute("data-result","")},d=0,b=o.length;d<b;d++)o[d].onclick=u;for(d=0,b=r.length;d<b;d++)r[d].onclick=l;a.onclick=function(){switch(s=parseFloat(s),c=parseFloat(c),e){case"plus":t=s+c;break;case"minus":t=s-c;break;case"times":t=s*c;break;case"divided by":t=s/c;break;default:t=c}isFinite(t)||(isNaN(t)?t="You broke it!":(t="Look at what you've done",i("#calculator").classList.add("broken"),i("#reset").classList.add("show"))),n.innerHTML=t,a.setAttribute("data-result",t),s=0,c=t},i("#clear").onclick=function(){s="",c="",n.innerHTML="0",a.setAttribute("data-result",t)},i("#reset").onclick=function(){window.location=window.location}}();