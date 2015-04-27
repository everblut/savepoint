!function(t){function n(t,n,e){if((t[n]||t[e])&&t[n]===t[e])throw Error("(Link) '"+n+"' can't match '"+e+"'.'")}function e(e){if(void 0===e&&(e={}),"object"!=typeof e)throw Error("(Format) 'format' option must be an object.");var i={};t(o).each(function(t,n){if(void 0===e[n])i[n]=r[t];else{if(typeof e[n]!=typeof r[t])throw Error("(Format) 'format."+n+"' must be a "+typeof r[t]+".");if("decimals"===n&&(0>e[n]||7<e[n]))throw Error("(Format) 'format.decimals' option must be between 0 and 7.");i[n]=e[n]}}),n(i,"mark","thousand"),n(i,"prefix","negative"),n(i,"prefix","negativeBefore"),this.r=i}function i(n,e){return"object"!=typeof n&&t.error("(Link) Initialize with an object."),new i.prototype.p(n.target||function(){},n.method,n.format||{},e)}var o="decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "),r=[2,".","","","",function(t){return t},function(t){return t},"-","",function(t){return t},function(t){return t}];e.prototype.a=function(t){return this.r[t]},e.prototype.L=function(t){function n(t){return t.split("").reverse().join("")}t=this.a("encoder")(t);var e=this.a("decimals"),i="",o="",r="",a="";return 0===parseFloat(t.toFixed(e))&&(t="0"),0>t&&(i=this.a("negative"),o=this.a("negativeBefore")),t=Math.abs(t).toFixed(e).toString(),t=t.split("."),this.a("thousand")?(r=n(t[0]).match(/.{1,3}/g),r=n(r.join(n(this.a("thousand"))))):r=t[0],this.a("mark")&&1<t.length&&(a=this.a("mark")+t[1]),this.a("to")(o+this.a("prefix")+i+r+a+this.a("postfix"))},e.prototype.w=function(t){function n(t){return t.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g,"\\$&")}var e;return null===t||void 0===t?!1:(t=this.a("from")(t),t=t.toString(),e=t.replace(RegExp("^"+n(this.a("negativeBefore"))),""),t!==e?(t=e,e="-"):e="",t=t.replace(RegExp("^"+n(this.a("prefix"))),""),this.a("negative")&&(e="",t=t.replace(RegExp("^"+n(this.a("negative"))),"-")),t=t.replace(RegExp(n(this.a("postfix"))+"$"),"").replace(RegExp(n(this.a("thousand")),"g"),"").replace(this.a("mark"),"."),t=this.a("decoder")(parseFloat(e+t)),isNaN(t)?!1:t)},i.prototype.K=function(n,e){this.method=e||"html",this.j=t(n.replace("-tooltip-","")||"<div/>")[0]},i.prototype.H=function(t){this.method="val",this.j=document.createElement("input"),this.j.name=t,this.j.type="hidden"},i.prototype.G=function(n){function e(t,n){return[n?null:t,n?t:null]}var i=this;this.method="val",this.target=n.on("change",function(n){i.B.val(e(t(n.target).val(),i.t),{link:i,set:!0})})},i.prototype.p=function(n,e,i,o){if(this.g=i,this.update=!o,"string"==typeof n&&0===n.indexOf("-tooltip-"))this.K(n,e);else if("string"==typeof n&&0!==n.indexOf("-"))this.H(n);else{if("function"!=typeof n){if(n instanceof t||t.zepto&&t.zepto.isZ(n)){if(!e){if(n.is("input, select, textarea"))return void this.G(n);e="html"}if("function"==typeof e||"string"==typeof e&&n[e])return this.method=e,void(this.target=n)}throw new RangeError("(Link) Invalid Link.")}this.target=!1,this.method=n}},i.prototype.write=function(t,n,e,i){this.update&&!1===i||(this.u=t,this.F=t=this.format(t),"function"==typeof this.method?this.method.call(this.target[0]||e[0],t,n,e):this.target[this.method](t,n,e))},i.prototype.q=function(n){this.g=new e(t.extend({},n,this.g instanceof e?this.g.r:this.g))},i.prototype.J=function(t){this.B=t},i.prototype.I=function(t){this.t=t},i.prototype.format=function(t){return this.g.L(t)},i.prototype.A=function(t){return this.g.w(t)},i.prototype.p.prototype=i.prototype,t.Link=i}(window.jQuery||window.Zepto),function(t){function n(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function e(n){return t.isArray(n)?n:[n]}function i(t,n){t.addClass(n),setTimeout(function(){t.removeClass(n)},300)}function o(t,n){return 100*n/(t[1]-t[0])}function r(t,n){if(n>=t.d.slice(-1)[0])return 100;for(var e,i,r,a=1;n>=t.d[a];)a++;return e=t.d[a-1],i=t.d[a],r=t.c[a-1],e=[e,i],r+o(e,0>e[0]?n+Math.abs(e[0]):n-e[0])/(100/(t.c[a]-r))}function a(t,n){if(n>=100)return t.d.slice(-1)[0];for(var e,i,o,r=1;n>=t.c[r];)r++;return e=t.d[r-1],i=t.d[r],o=t.c[r-1],e=[e,i],100/(t.c[r]-o)*(n-o)*(e[1]-e[0])/100+e[0]}function s(t,n){for(var e,i=1;(t.dir?100-n:n)>=t.c[i];)i++;return t.m?(e=t.c[i-1],i=t.c[i],n-e>(i-e)/2?i:e):(t.h[i-1]?(e=t.h[i-1],i=t.c[i-1]+Math.round((n-t.c[i-1])/e)*e):i=n,i)}function c(t,e){if(!n(e))throw Error("noUiSlider: 'step' is not numeric.");t.h[0]=e}function l(e,i){if("object"!=typeof i||t.isArray(i))throw Error("noUiSlider: 'range' is not an object.");if(void 0===i.min||void 0===i.max)throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.each(i,function(i,o){var r;if("number"==typeof o&&(o=[o]),!t.isArray(o))throw Error("noUiSlider: 'range' contains invalid value.");if(r="min"===i?0:"max"===i?100:parseFloat(i),!n(r)||!n(o[0]))throw Error("noUiSlider: 'range' value isn't numeric.");e.c.push(r),e.d.push(o[0]),r?e.h.push(isNaN(o[1])?!1:o[1]):isNaN(o[1])||(e.h[0]=o[1])}),t.each(e.h,function(t,n){return n?void(e.h[t]=o([e.d[t],e.d[t+1]],n)/(100/(e.c[t+1]-e.c[t]))):!0})}function u(n,e){if("number"==typeof e&&(e=[e]),!t.isArray(e)||!e.length||2<e.length)throw Error("noUiSlider: 'start' option is incorrect.");n.b=e.length,n.start=e}function p(t,n){if(t.m=n,"boolean"!=typeof n)throw Error("noUiSlider: 'snap' option must be a boolean.")}function h(t,n){if("lower"===n&&1===t.b)t.i=1;else if("upper"===n&&1===t.b)t.i=2;else if(!0===n&&2===t.b)t.i=3;else{if(!1!==n)throw Error("noUiSlider: 'connect' option doesn't match handle count.");t.i=0}}function d(t,n){switch(n){case"horizontal":t.k=0;break;case"vertical":t.k=1;break;default:throw Error("noUiSlider: 'orientation' option is invalid.")}}function f(t,e){if(2<t.c.length)throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");if(t.margin=o(t.d,e),!n(e))throw Error("noUiSlider: 'margin' option must be numeric.")}function m(t,n){switch(n){case"ltr":t.dir=0;break;case"rtl":t.dir=1,t.i=[0,2,1,3][t.i];break;default:throw Error("noUiSlider: 'direction' option was not recognized.")}}function g(t,n){if("string"!=typeof n)throw Error("noUiSlider: 'behaviour' must be a string containing options.");var e=0<=n.indexOf("snap");t.n={s:0<=n.indexOf("tap")||e,extend:0<=n.indexOf("extend"),v:0<=n.indexOf("drag"),fixed:0<=n.indexOf("fixed"),m:e}}function v(n,e,i){n.o=[e.lower,e.upper],n.g=e.format,t.each(n.o,function(n,o){if(!t.isArray(o))throw Error("noUiSlider: 'serialization."+(n?"upper":"lower")+"' must be an array.");t.each(o,function(){if(!(this instanceof t.Link))throw Error("noUiSlider: 'serialization."+(n?"upper":"lower")+"' can only contain Link instances.");this.I(n),this.J(i),this.q(e.format)})}),n.dir&&1<n.b&&n.o.reverse()}function b(n,e){var i,o={c:[],d:[],h:[!1],margin:0};return i={step:{e:!1,f:c},start:{e:!0,f:u},connect:{e:!0,f:h},direction:{e:!0,f:m},range:{e:!0,f:l},snap:{e:!1,f:p},orientation:{e:!1,f:d},margin:{e:!1,f:f},behaviour:{e:!0,f:g},serialization:{e:!0,f:v}},n=t.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},n),n.serialization=t.extend({lower:[],upper:[],format:{}},n.serialization),t.each(i,function(t,i){if(void 0===n[t]){if(i.e)throw Error("noUiSlider: '"+t+"' is required.");return!0}i.f(o,n[t],e)}),o.style=o.k?"top":"left",o}function y(n,e){var i=t("<div><div/></div>").addClass(A[2]),o=["-lower","-upper"];return n.dir&&o.reverse(),i.children().addClass(A[3]+" "+A[3]+o[e]),i}function w(n,e){return e.j&&(e=new t.Link({target:t(e.j).clone().appendTo(n),method:e.method,format:e.g},!0)),e}function k(n,e){var i,o=[];for(i=0;i<n.b;i++){var r=o,a=i,s=n.o[i],c=e[i].children(),l=n.g,u=void 0,p=[],u=new t.Link({},!0);for(u.q(l),p.push(u),u=0;u<s.length;u++)p.push(w(c,s[u]));r[a]=p}return o}function x(t,n,e){switch(t){case 1:n.addClass(A[7]),e[0].addClass(A[6]);break;case 3:e[1].addClass(A[6]);case 2:e[0].addClass(A[7]);case 0:n.addClass(A[6])}}function E(t,n){var e,i=[];for(e=0;e<t.b;e++)i.push(y(t,e).appendTo(n));return i}function C(n,e){return e.addClass([A[0],A[8+n.dir],A[4+n.k]].join(" ")),t("<div/>").appendTo(e).addClass(A[1])}function S(n,o,c){function l(){return y[["width","height"][o.k]]()}function u(t){var n,e=[U.val()];for(n=0;n<t.length;n++)U.trigger(t[n],e)}function p(n,e,i){var r=n[0]!==S[0][0]?1:0,c=M[0]+o.margin,l=M[1]-o.margin;return i&&1<S.length&&(e=r?Math.max(e,c):Math.min(e,l)),100>e&&(e=s(o,e)),e=Math.max(Math.min(parseFloat(e.toFixed(7)),100),0),e===M[r]?1===S.length?!1:e===c||e===l?0:!1:(n.css(o.style,e+"%"),n.is(":first-child")&&n.toggleClass(A[17],e>50),M[r]=e,o.dir&&(e=100-e),t(w[r]).each(function(){this.write(a(o,e),n.children(),U)}),!0)}function h(t,n,e){e||i(U,A[14]),p(t,n,!1),u(["slide","set","change"])}function d(t,n,e,i){t=t.replace(/\s/g,".nui ")+".nui",n.on(t,function(t){var n=U.attr("disabled");if(U.hasClass(A[14])||void 0!==n&&null!==n)return!1;t.preventDefault();var r,a,n=0===t.type.indexOf("touch"),s=0===t.type.indexOf("mouse"),c=0===t.type.indexOf("pointer"),l=t;0===t.type.indexOf("MSPointer")&&(c=!0),t.originalEvent&&(t=t.originalEvent),n&&(r=t.changedTouches[0].pageX,a=t.changedTouches[0].pageY),(s||c)&&(c||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),r=t.clientX+window.pageXOffset,a=t.clientY+window.pageYOffset),l.C=[r,a],l.cursor=s,t=l,t.l=t.C[o.k],e(t,i)})}function f(t,n){var e,i=n.b||S,o=!1,o=100*(t.l-n.start)/l(),r=i[0][0]!==S[0][0]?1:0,a=n.D;e=o+a[0],o+=a[1],1<i.length?(0>e&&(o+=Math.abs(e)),o>100&&(e-=o-100),e=[Math.max(Math.min(e,100),0),Math.max(Math.min(o,100),0)]):e=[e,o],o=p(i[0],e[r],1===i.length),1<i.length&&(o=p(i[1],e[r?0:1],!1)||o),o&&u(["slide"])}function m(n){t("."+A[15]).removeClass(A[15]),n.cursor&&t("body").css("cursor","").off(".nui"),T.off(".nui"),U.removeClass(A[12]),u(["set","change"])}function g(n,e){1===e.b.length&&e.b[0].children().addClass(A[15]),n.stopPropagation(),d(z.move,T,f,{start:n.l,b:e.b,D:[M[0],M[S.length-1]]}),d(z.end,T,m,null),n.cursor&&(t("body").css("cursor",t(n.target).css("cursor")),1<S.length&&U.addClass(A[12]),t("body").on("selectstart.nui",!1))}function v(n){var e=n.l,i=0;n.stopPropagation(),t.each(S,function(){i+=this.offset()[o.style]}),i=i/2>e||1===S.length?0:1,e-=y.offset()[o.style],e=100*e/l(),h(S[i],e,o.n.m),o.n.m&&g(n,{b:[S[i]]})}function b(t){var n=(t=t.l<y.offset()[o.style])?0:100;t=t?0:S.length-1,h(S[t],n,!1)}var y,w,S,U=t(n),M=[-1,-1];if(U.hasClass(A[0]))throw Error("Slider was already initialized.");y=C(o,U),S=E(o,y),w=k(o,S),x(o.i,U,S),function(t){var n;if(!t.fixed)for(n=0;n<S.length;n++)d(z.start,S[n].children(),g,{b:[S[n]]});t.s&&d(z.start,y,v,{b:S}),t.extend&&(U.addClass(A[16]),t.s&&d(z.start,U,b,{b:S})),t.v&&(n=y.find("."+A[7]).addClass(A[10]),t.fixed&&(n=n.add(y.children().not(n).children())),d(z.start,n,g,{b:S}))}(o.n),n.vSet=function(){var n,a,s,c,l,h,d=Array.prototype.slice.call(arguments,0),f=e(d[0]);for("object"==typeof d[1]?(n=d[1].set,a=d[1].link,s=d[1].update,c=d[1].animate):!0===d[1]&&(n=!0),o.dir&&1<o.b&&f.reverse(),c&&i(U,A[14]),d=1<S.length?3:1,1===f.length&&(d=1),l=0;d>l;l++)c=a||w[l%2][0],c=c.A(f[l%2]),!1!==c&&(c=r(o,c),o.dir&&(c=100-c),!0!==p(S[l%2],c,!0)&&t(w[l%2]).each(function(t){return t?void this.write(h,S[l%2].children(),U,s):(h=this.u,!0)}));return!0===n&&u(["set"]),this},n.vGet=function(){var t,n=[];for(t=0;t<o.b;t++)n[t]=w[t][0].F;return 1===n.length?n[0]:o.dir?n.reverse():n},n.destroy=function(){return t.each(w,function(){t.each(this,function(){this.target&&this.target.off(".nui")})}),t(this).off(".nui").removeClass(A.join(" ")).empty(),c},U.val(o.start)}function U(t){if(!this.length)throw Error("noUiSlider: Can't initialize slider on empty selection.");var n=b(t,this);return this.each(function(){S(this,n,t)})}function M(n){return this.each(function(){var e=t(this).val(),i=this.destroy(),o=t.extend({},i,n);t(this).noUiSlider(o),i.start===o.start&&t(this).val(e)})}function j(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var T=t(document),O=t.fn.val,z=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},A="noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");t.fn.val=function(){var n=arguments,e=t(this[0]);return arguments.length?this.each(function(){(t(this).hasClass(A[0])?j:O).apply(t(this),n)}):(e.hasClass(A[0])?j:O).call(e)},t.noUiSlider={Link:t.Link},t.fn.noUiSlider=function(t,n){return(n?M:U).call(this,t)}}(window.jQuery||window.Zepto),function(t){function n(t){return"undefined"==typeof t.which?!0:"number"==typeof t.which&&t.which>0?!t.ctrlKey&&!t.metaKey&&!t.altKey&&8!=t.which&&9!=t.which:!1}t.expr[":"].notmdproc=function(n){return t(n).data("mdproc")?!1:!0},t.material={options:{input:!0,ripples:!0,checkbox:!0,togglebutton:!0,radio:!0,arrive:!0,autofill:!1,withRipples:[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".withripple"].join(","),inputElements:"input.form-control, textarea.form-control, select.form-control",checkboxElements:".checkbox > label > input[type=checkbox]",togglebuttonElements:".togglebutton > label > input[type=checkbox]",radioElements:".radio > label > input[type=radio]"},checkbox:function(n){t(n?n:this.options.checkboxElements).filter(":notmdproc").data("mdproc",!0).after("<span class=checkbox-material><span class=check></span></span>")},togglebutton:function(n){t(n?n:this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",!0).after("<span class=toggle></span>")},radio:function(n){t(n?n:this.options.radioElements).filter(":notmdproc").data("mdproc",!0).after("<span class=circle></span><span class=check></span>")},input:function(e){t(e?e:this.options.inputElements).filter(":notmdproc").data("mdproc",!0).each(function(){var n=t(this);if(t(this).attr("data-hint")||n.hasClass("floating-label")){if(n.wrap("<div class=form-control-wrapper></div>"),n.after("<span class=material-input></span>"),n.hasClass("floating-label")){var e=n.attr("placeholder");n.attr("placeholder",null).removeClass("floating-label"),n.after("<div class=floating-label>"+e+"</div>")}if(n.attr("data-hint")&&n.after("<div class=hint>"+n.attr("data-hint")+"</div>"),(null===n.val()||"undefined"==n.val()||""===n.val())&&n.addClass("empty"),n.parent().next().is("[type=file]")){n.parent().addClass("fileinput");var i=n.parent().next().detach();n.after(i)}}}),t(document).on("change",".checkbox input[type=checkbox]",function(){t(this).blur()}).on("keydown paste",".form-control",function(e){n(e)&&t(this).removeClass("empty")}).on("keyup change",".form-control",function(){var n=t(this);""===n.val()&&"undefined"!=typeof n[0].checkValidity&&n[0].checkValidity()?n.addClass("empty"):n.removeClass("empty")}).on("focus",".form-control-wrapper.fileinput",function(){t(this).find("input").addClass("focus")}).on("blur",".form-control-wrapper.fileinput",function(){t(this).find("input").removeClass("focus")}).on("change",".form-control-wrapper.fileinput [type=file]",function(){var n="";t.each(t(this)[0].files,function(t,e){n+=e.name+", "}),n=n.substring(0,n.length-2),n?t(this).prev().removeClass("empty"):t(this).prev().addClass("empty"),t(this).prev().val(n)})},ripples:function(n){t(n?n:this.options.withRipples).ripples()},autofill:function(){var n=setInterval(function(){t("input[type!=checkbox]").each(function(){t(this).val()&&t(this).val()!==t(this).attr("value")&&t(this).trigger("change")})},100);setTimeout(function(){clearInterval(n)},1e4);var e;t(document).on("focus","input",function(){var n=t(this).parents("form").find("input").not("[type=file]");e=setInterval(function(){n.each(function(){t(this).val()!==t(this).attr("value")&&t(this).trigger("change")})},100)}).on("blur","input",function(){clearInterval(e)})},init:function(){t.fn.ripples&&this.options.ripples&&this.ripples(),this.options.input&&this.input(),this.options.checkbox&&this.checkbox(),this.options.togglebutton&&this.togglebutton(),this.options.radio&&this.radio(),this.options.autofill&&this.autofill(),document.arrive&&this.options.arrive&&(t.fn.ripples&&this.options.ripples&&t(document).arrive(this.options.withRipples,function(){t.material.ripples(t(this))}),this.options.input&&t(document).arrive(this.options.inputElements,function(){t.material.input(t(this))}),this.options.checkbox&&t(document).arrive(this.options.checkboxElements,function(){t.material.checkbox(t(this))}),this.options.radio&&t(document).arrive(this.options.radioElements,function(){t.material.radio(t(this))}),this.options.togglebutton&&t(document).arrive(this.options.togglebuttonElements,function(){t.material.togglebutton(t(this))}))}}}(jQuery),function(t,n,e,i){"use strict";function o(n,e){a=this,this.element=t(n),this.options=t.extend({},s,e),this._defaults=s,this._name=r,this.init()}var r="ripples",a=null,s={};o.prototype.init=function(){var e=this.element;e.on("mousedown touchstart",function(i){if(!a.isTouch()||"mousedown"!==i.type){e.find(".ripple-wrapper").length||e.append('<div class="ripple-wrapper"></div>');var o=e.children(".ripple-wrapper"),r=a.getRelY(o,i),s=a.getRelX(o,i);if(r||s){var c=a.getRipplesColor(e),l=t("<div></div>");l.addClass("ripple").css({left:s,top:r,"background-color":c}),o.append(l),function(){return n.getComputedStyle(l[0]).opacity}(),a.rippleOn(e,l),setTimeout(function(){a.rippleEnd(l)},500),e.on("mouseup mouseleave touchend",function(){l.data("mousedown","off"),"off"===l.data("animating")&&a.rippleOut(l)})}}})},o.prototype.getNewSize=function(t,n){return Math.max(t.outerWidth(),t.outerHeight())/n.outerWidth()*2.5},o.prototype.getRelX=function(t,n){var e=t.offset();return a.isTouch()?(n=n.originalEvent,1!==n.touches.length?n.touches[0].pageX-e.left:!1):n.pageX-e.left},o.prototype.getRelY=function(t,n){var e=t.offset();return a.isTouch()?(n=n.originalEvent,1!==n.touches.length?n.touches[0].pageY-e.top:!1):n.pageY-e.top},o.prototype.getRipplesColor=function(t){var e=t.data("ripple-color")?t.data("ripple-color"):n.getComputedStyle(t[0]).color;return e},o.prototype.hasTransitionSupport=function(){var t=e.body||e.documentElement,n=t.style,o=n.transition!==i||n.WebkitTransition!==i||n.MozTransition!==i||n.MsTransition!==i||n.OTransition!==i;return o},o.prototype.isTouch=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},o.prototype.rippleEnd=function(t){t.data("animating","off"),"off"===t.data("mousedown")&&a.rippleOut(t)},o.prototype.rippleOut=function(t){t.off(),a.hasTransitionSupport()?t.addClass("ripple-out"):t.animate({opacity:0},100,function(){t.trigger("transitionend")}),t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t.remove()})},o.prototype.rippleOn=function(t,n){var e=a.getNewSize(t,n);a.hasTransitionSupport()?n.css({"-ms-transform":"scale("+e+")","-moz-transform":"scale("+e+")","-webkit-transform":"scale("+e+")",transform:"scale("+e+")"}).addClass("ripple-on").data("animating","on").data("mousedown","on"):n.animate({width:2*Math.max(t.outerWidth(),t.outerHeight()),height:2*Math.max(t.outerWidth(),t.outerHeight()),"margin-left":-1*Math.max(t.outerWidth(),t.outerHeight()),"margin-top":-1*Math.max(t.outerWidth(),t.outerHeight()),opacity:.2},500,function(){n.trigger("transitionend")})},t.fn.ripples=function(n){return this.each(function(){t.data(this,"plugin_"+r)||t.data(this,"plugin_"+r,new o(this,n))})}}(jQuery,window,document),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){function n(t){return"undefined"!=typeof t&&null!==t?!0:!1}t(document).ready(function(){t("body").append("<div id=snackbar-container/>")}),t(document).on("click","[data-toggle=snackbar]",function(){t(this).snackbar("toggle")}).on("click","#snackbar-container .snackbar",function(){t(this).snackbar("hide")}),t.snackbar=function(e){if(n(e)&&e===Object(e)){var i;i=n(e.id)?t("#"+e.id):t("<div/>").attr("id","snackbar"+Date.now()).attr("class","snackbar");var o=i.hasClass("snackbar-opened");n(e.style)?i.attr("class","snackbar "+e.style):i.attr("class","snackbar"),e.htmlAllowed=n(e.htmlAllowed)?e.htmlAllowed:!1,e.timeout=n(e.timeout)?e.timeout:3e3,e.content=e.htmlAllowed?e.content:t("<p>"+e.content+"</p>").text(),n(e.content)&&(i.find(".snackbar-content").length?i.find(".snackbar-content").html(e.content):i.prepend("<span class=snackbar-content>"+e.content+"</span>")),n(e.id)?i.insertAfter("#snackbar-container .snackbar:last-child"):i.appendTo("#snackbar-container"),n(e.action)&&"toggle"==e.action&&(e.action=o?"hide":"show");var r=Date.now();i.data("animationId1",r),setTimeout(function(){i.data("animationId1")===r&&(n(e.action)&&"show"!=e.action?n(e.action)&&"hide"==e.action&&i.removeClass("snackbar-opened"):i.addClass("snackbar-opened"))},50);var a=Date.now();return i.data("animationId2",a),0!==e.timeout&&setTimeout(function(){i.data("animationId2")===a&&i.removeClass("snackbar-opened")},e.timeout),i}return!1},t.fn.snackbar=function(e){var i={};if(this.hasClass("snackbar"))return i.id=this.attr("id"),("show"===e||"hide"===e||"toggle"==e)&&(i.action=e),t.snackbar(i);n(e)&&"show"!==e&&"hide"!==e&&"toggle"!=e||(i={content:t(this).attr("data-content"),style:t(this).attr("data-style"),timeout:t(this).attr("data-timeout"),htmlAllowed:t(this).attr("data-html-allowed")}),n(e)&&(i.id=this.attr("data-snackbar-id"),("show"===e||"hide"===e||"toggle"==e)&&(i.action=e));var o=t.snackbar(i);return this.attr("data-snackbar-id",o.attr("id")),o}});