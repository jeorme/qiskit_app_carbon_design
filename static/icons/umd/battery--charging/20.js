(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.BatteryCharging20 = factory());
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
            'M27 11h-1v-1a2 2 0 0 0-2-2h-4v2h4v3h3v6h-3v3h-5v2h5a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM11 22H6V10h6V8H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M14.81 23.58l-1.62-1.16L17.06 17H9.37l6.85-8.62 1.56 1.24L13.51 15h7.43l-6.13 8.58z',
        },
      },
    ],
    name: 'battery--charging',
    size: 20,
  };

  return _20;

})));
