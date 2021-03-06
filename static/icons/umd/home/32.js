(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Home32 = factory());
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
            'M16.61 2.21a1 1 0 0 0-1.24 0L1 13.42 2.24 15 4 13.62V26a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.63L29.76 15 31 13.43zM18 26h-4v-8h4zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.06l10-7.79 10 7.8V26z',
        },
      },
    ],
    name: 'home',
    size: 32,
  };

  return _32;

})));
