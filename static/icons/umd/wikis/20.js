(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Wikis20 = factory());
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
            'M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm12 13h-6a24.26 24.26 0 0 0-2.79-10.55A12 12 0 0 1 28 15zM16 28a5 5 0 0 1-.67 0A21.85 21.85 0 0 1 12 17h8a21.85 21.85 0 0 1-3.3 11 5 5 0 0 1-.7 0zm-4-13a21.85 21.85 0 0 1 3.3-11 6 6 0 0 1 1.34 0A21.85 21.85 0 0 1 20 15zm.76-10.55A24.26 24.26 0 0 0 10 15H4a12 12 0 0 1 8.79-10.55zM4.05 17h6a24.26 24.26 0 0 0 2.75 10.55A12 12 0 0 1 4.05 17zm15.16 10.55A24.26 24.26 0 0 0 22 17h6a12 12 0 0 1-8.79 10.55z',
        },
      },
    ],
    name: 'wikis',
    size: 20,
  };

  return _20;

})));
