(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Pills20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M22 14a7.94 7.94 0 0 0-4 1.083V9A7 7 0 0 0 4 9v14a6.999 6.999 0 0 0 12.286 4.588A7.997 7.997 0 1 0 22 14zm0 2a6.005 6.005 0 0 1 5.91 5H16.09A6.005 6.005 0 0 1 22 16zM6 9a5 5 0 0 1 10 0v6H6zm5 19a5.006 5.006 0 0 1-5-5v-6h9.765a7.957 7.957 0 0 0-.724 8.931A4.989 4.989 0 0 1 11 28zm11 0a6.005 6.005 0 0 1-5.91-5h11.82A6.005 6.005 0 0 1 22 28z',
        },
      },
    ],
    name: 'pills',
    size: 20,
  };

  return _20;

})));
