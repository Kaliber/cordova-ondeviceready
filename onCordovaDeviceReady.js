document.onCordovaDeviceReady = 
  (function() {
    var callbacks = [];
    var deviceIsReady = false;

    document.addEventListener('deviceready', onDeviceReady);

    function onDeviceReady() {
      deviceIsReady = true;

      document.removeEventListener('deviceready');

      for (var i in callbacks) callbacks[i]();

      callbacks = null;
    }

    return function onCordovaDeviceReady(callback) {
      if (deviceIsReady) callback();
      else callbacks.push(callback);
    };
  })();

