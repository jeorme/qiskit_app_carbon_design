(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.RepeatOne32 = factory());
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
      {
        elem: 'path',
        attrs: {
          d:
            'M26 6H5.83l3.58-3.59L8 1 2 7l6 6 1.41-1.41L5.83 8H26v7h2V8a2 2 0 0 0-2-2zm-3.41 14.41L26.17 24H6v-7H4v7a2 2 0 0 0 2 2h20.17l-3.58 3.59L24 31l6-6-6-6z',
        },
      },
      { elem: 'path', attrs: { d: 'M17 19v-8h-2v1h-2v2h2v5h-2v2h6v-2h-2z' } },
    ],
    name: 'repeat--one',
    size: 32,
  };

  return _32;

})));
