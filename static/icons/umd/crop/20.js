(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Crop20 = factory());
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
      { elem: 'path', attrs: { d: 'M25 20h-2V9H12V7h11a2 2 0 0 1 2 2z' } },
      {
        elem: 'path',
        attrs: { d: 'M9 23V2H7v5H2v2h5v14a2 2 0 0 0 2 2h14v5h2v-5h5v-2z' },
      },
    ],
    name: 'crop',
    size: 20,
  };

  return _20;

})));
