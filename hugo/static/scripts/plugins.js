// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// We want to disable Barba on any link that contains a dot and extension
Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;

Barba.Pjax.preventCheck = function(evt, element) {
  if (!Barba.Pjax.originalPreventCheck(evt, element)) {
    return false;
  }

  // No need to check for element.href - originalPreventCheck does this
  if (/\.(\w*)$/.test(element.href.toLowerCase())) {
    return false;
  }

  return true;
};