(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Tif20 = factory());
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
            'M30 11V9h-8v14h2v-6h5v-2h-5v-4h6zm-18 0h3v10h-3v2h8v-2h-3V11h3V9h-8v2zM2 11h3v12h2V11h3V9H2v2z',
        },
      },
    ],
    name: 'TIF',
    size: 20,
  };

  return _20;

})));
