(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AppSwitcher16 = factory());
}(this, (function () { 'use strict';

  var _16 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: 16,
      height: 16,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M12 12h2v2h-2zm-5 0h2v2H7zm-5 0h2v2H2zm10-5h2v2h-2zM7 7h2v2H7zM2 7h2v2H2zm10-5h2v2h-2zM7 2h2v2H7zM2 2h2v2H2z',
        },
      },
    ],
    name: 'app-switcher',
    size: 16,
  };

  return _16;

})));
