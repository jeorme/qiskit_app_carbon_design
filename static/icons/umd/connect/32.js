(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Connect32 = factory());
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
            'M23 16.01a7 7 0 0 0-4.18 1.39l-4.22-4.22A6.86 6.86 0 0 0 16 9.01a7 7 0 1 0-2.81 5.59l4.21 4.22a7 7 0 1 0 5.6-2.81zm-19-7a5 5 0 1 1 5 5 5 5 0 0 1-5-5z',
        },
      },
    ],
    name: 'connect',
    size: 32,
  };

  return _32;

})));
