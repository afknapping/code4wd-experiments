
// ***********************
// notes: persist to localstoreage

window.onload = function () {
  data = read ( "c4wd" );
  document.getElementById("notes-area").innerHTML = data;
}

function keyWasPressed(event) {
  console.log(event.keyCode);
  data = document.getElementById("notes-area").value;
  // console.log(data);
  debug(data);
  persist ( "c4wd", data );
}




// **********************************
// event handler for :target changes

window.addEventListener('hashchange', function() {
    debug(location.hash.substr(1));
    document.getElementById("nav-trigger").checked = false;
});




// **********************************
// debug to #debug-console
// <div id="debug-console" style="position: fixed; right: 1em; bottom: 5em;"></div>

function debug (val) {
  document.getElementById("debug-console").innerHTML = '<div style="padding: 1em; background-color: yellow; border: 3px dotted black"><code>' + val + '</code></div>';
  console.log(val);
}



// **********************************
// apply randomized keyframe animation
// TODO: apply random transform first?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


  var markdownP = document.querySelectorAll('.c4wd-markdown > *');
  console.log(markdownP);

  markdownP.forEach(function(element, index) {
    console.log(element);
    console.log(index);
    // element.style.animationName = "wobbling"+getRandomInt(0, 30);
  });




// **********************************
// TELL USER ABOUT UPDATES
// with appcache, reload needs to happen a second time
//  https://gregsramblings.com/2012/05/28/html5-application-cache-how-to/
// there is also appcache nanny, but it looks a bit large-ish for my use case so far

// see https://github.com/filtercake/ui-sketchbook/blob/master/_boilerplate/js/app.js

if (window.applicationCache) {
applicationCache.addEventListener('updateready', function() {
  if (confirm('An update is available. Fetch?')) {
    window.location.reload(); } });}





// *********************************
// LOCALSTORAGE: READ AND WRITE DATA

// see https://github.com/filtercake/ui-sketchbook/blob/master/_boilerplate/js/app.js

// TODO: download http://stackoverflow.com/questions/283956/is-there-any-way-to-specify-a-suggested-filename-when-using-data-uri/25715985#25715985

// http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage#2010948

function persist ( key, data ) {
  localStorage.setItem( key, JSON.stringify( data ));
};
function read ( key ) {
  return JSON.parse( localStorage.getItem( key ) );
};



    // ui-lang.com

    document.addEventListener("DOMContentLoaded",function(){function n(a){var b=a.charAt(0);a=a.split(b);this.clickSelector=a[1];this.classBehavior=a[2].trim().split(" ")[0];this.classValue=a[3];this.targetSelector=a[5]}function f(a,b,c,d){this.clickSelector=a;this.classBehavior="s"==b.charAt(b.length-1)?b.substring(0,b.length-1):b;this.classValue="."==c.charAt(0)?c.substring(1,c.length):c;this.targetSelector=d;this.createEventListener()}for(var g=document.getElementsByTagName("code"),h=g.length,e,k;h--;){var l=g[h],m=l.textContent.trim();if(0===m.lastIndexOf("clicking on",0)){e=l;k=m;break}}e&&(e.parentNode.removeChild(e),f.prototype.createEventListener=function(){function a(a){switch(b.targetSelector){case "target":case "this":case "it":case "itself":case void 0:a.target.classList[b.classBehavior](b.classValue);break;default:for(var c=document.querySelectorAll(b.targetSelector),d=c.length;d--;)c.item(d).classList[b.classBehavior](b.classValue)}"a"==a.target.nodeName.toLowerCase()&&a.preventDefault()}var b=this,c=document.querySelectorAll(b.clickSelector),d=c.length;if(1>d)throw Error("There's no element matching your \""+b.clickSelector+'" CSS selector.');for(;d--;)c.item(d).addEventListener("click",a)},k.split("clicking on").forEach(function(a){a&&(a=new n(a.trim()),new f(a.clickSelector,a.classBehavior,a.classValue,a.targetSelector))}))});

   // https://hammerjs.github.io/dist/hammer-time.min.js

   !function(){var a=window.MutationObserver||window.WebKitMutationObserver,b="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,c=void 0!==document.documentElement.style["touch-action"]||document.documentElement.style["-ms-touch-action"];if(!c&&b&&a){window.Hammer=window.Hammer||{};var d=/touch-action[:][\s]*(none)[^;'"]*/,e=/touch-action[:][\s]*(manipulation)[^;'"]*/,f=/touch-action/,g=navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1,h=function(){try{var a=document.createElement("canvas");return!(!window.WebGLRenderingContext||!a.getContext("webgl")&&!a.getContext("experimental-webgl"))}catch(b){return!1}}(),i=h&&g;window.Hammer.time={getTouchAction:function(a){return this.checkStyleString(a.getAttribute("style"))},checkStyleString:function(a){return f.test(a)?d.test(a)?"none":e.test(a)?"manipulation":!0:void 0},shouldHammer:function(a){var b=this.hasParent(a.target);return b&&(!i||Date.now()-a.target.lastStart<125)?b:!1},touchHandler:function(a){var b=a.target.getBoundingClientRect(),c=b.top!==this.pos.top||b.left!==this.pos.left,d=this.shouldHammer(a);("none"===d||c===!1&&"manipulation"===d)&&("touchend"===a.type&&(a.target.focus(),setTimeout(function(){a.target.click()},0)),a.preventDefault()),this.scrolled=!1,delete a.target.lastStart},touchStart:function(a){this.pos=a.target.getBoundingClientRect(),i&&this.hasParent(a.target)&&(a.target.lastStart=Date.now())},styleWatcher:function(a){a.forEach(this.styleUpdater,this)},styleUpdater:function(a){if(a.target.updateNext)return void(a.target.updateNext=!1);var b=this.getTouchAction(a.target);return b?void("none"!==b&&(a.target.hadTouchNone=!1)):void(!b&&(a.oldValue&&this.checkStyleString(a.oldValue)||a.target.hadTouchNone)&&(a.target.hadTouchNone=!0,a.target.updateNext=!1,a.target.setAttribute("style",a.target.getAttribute("style")+" touch-action: none;")))},hasParent:function(a){for(var b,c=a;c&&c.parentNode;c=c.parentNode)if(b=this.getTouchAction(c))return b;return!1},installStartEvents:function(){document.addEventListener("touchstart",this.touchStart.bind(this)),document.addEventListener("mousedown",this.touchStart.bind(this))},installEndEvents:function(){document.addEventListener("touchend",this.touchHandler.bind(this),!0),document.addEventListener("mouseup",this.touchHandler.bind(this),!0)},installObserver:function(){this.observer=new a(this.styleWatcher.bind(this)).observe(document,{subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["style"]})},install:function(){this.installEndEvents(),this.installStartEvents(),this.installObserver()}},window.Hammer.time.install()}}();