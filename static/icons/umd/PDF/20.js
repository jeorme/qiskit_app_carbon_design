(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Pdf20 = factory());
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
            'M30 11V9h-8v14h2v-6h5v-2h-5v-4h6zM8 9H2v14h2v-5h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm0 7H4v-5h4zm8 7h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4zm-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2z',
        },
      },
    ],
    name: 'PDF',
    size: 20,
  };

  return _20;

})));
