(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Watch32 = factory());
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
            'M22 8h-1V2h-2v6h-6V2h-2v6h-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v6h2v-6h6v6h2v-6h1a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM10 22V10h12v12zm15-8h2v4h-2z',
        },
      },
    ],
    name: 'watch',
    size: 32,
  };

  return _32;

})));
