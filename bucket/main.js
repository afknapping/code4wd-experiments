


  window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });




// **********************************
// event handler for :target changes

/*
see [Reimagining Single-Page Applications With Progressive Enhancement – Smashing Magazine](https://www.smashingmagazine.com/2015/12/reimagining-single-page-applications-progressive-enhancement/)
*/


window.addEventListener('hashchange', function() {
    debug(location.hash.substr(1));
    document.getElementById("nav-trigger").checked = false;
});


