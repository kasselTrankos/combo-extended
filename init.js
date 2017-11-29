(function() {
  if ('registerElement' in document
      && 'import' in document.createElement('link')
      && 'content' in document.createElement('template')) {
    // platform is good!
  } else {
    document.body.style.opacity = 0;
    window.addEventListener('HTMLImportsLoaded', function(e) {
      console.log(' mama need sleep');
      // document.body.style.opacity = 1;
    });
    window.onload = function() {
      // polyfill the platform!
      var e = document.createElement('script');
      e.src = '/bower_components/webcomponentsjs/webcomponents-lite.js';
      document.head.appendChild(e);
      var _e = document.createElement('script');
      _e.src = '/bower_components/webcomponentsjs/custom-elements-es5-adapter.js';
      document.head.appendChild(_e);

    }
    
  }
})();
