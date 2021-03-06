(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Password20 = factory());
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
            'M21 2a9 9 0 0 0-9 9 8.87 8.87 0 0 0 .39 2.61L2 24v6h6l10.39-10.39A9 9 0 0 0 30 11.74a8.77 8.77 0 0 0-1.65-6A9 9 0 0 0 21 2zm0 16a7 7 0 0 1-2-.3l-1.15-.35-.85.85-3.18 3.18L12.41 20 11 21.41l1.38 1.38-1.59 1.59L9.41 23 8 24.41l1.38 1.38L7.17 28H4v-3.17L13.8 15l.85-.85-.29-.95a7.14 7.14 0 0 1 3.4-8.44 7 7 0 0 1 10.24 6 6.69 6.69 0 0 1-1.09 4A7 7 0 0 1 21 18z',
        },
      },
      { elem: 'circle', attrs: { cx: '22', cy: '10', r: '2' } },
    ],
    name: 'password',
    size: 20,
  };

  return _20;

})));
