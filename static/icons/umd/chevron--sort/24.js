(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChevronSort24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M16 28l-7-7 1.41-1.41L16 25.17l5.59-5.58L23 21l-7 7zm0-24l7 7-1.41 1.41L16 6.83l-5.59 5.58L9 11l7-7z',
        },
      },
    ],
    name: 'chevron--sort',
    size: 24,
  };

  return _24;

})));
