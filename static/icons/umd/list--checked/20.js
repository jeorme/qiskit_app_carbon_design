(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ListChecked20 = factory());
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
            'M16 8h14v2H16zM6 10.59L3.41 8 2 9.41l4 4 8-8L12.59 4 6 10.59zM16 22h14v2H16zM6 24.59L3.41 22 2 23.41l4 4 8-8L12.59 18 6 24.59z',
        },
      },
    ],
    name: 'list--checked',
    size: 20,
  };

  return _20;

})));
