(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Analytics32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      { elem: 'path', attrs: { d: 'M4 2H2v26a2 2 0 0 0 2 2h26v-2H4z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59 7.41 23 14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2z',
        },
      },
    ],
    name: 'analytics',
    size: 32,
  };

  return _32;

})));
