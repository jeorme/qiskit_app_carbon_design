(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ZoomOut24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      { elem: 'path', attrs: { d: 'M9 13h10v2H9z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M22.45 21A10.87 10.87 0 0 0 25 14a11 11 0 1 0-11 11 10.87 10.87 0 0 0 7-2.55L28.59 30 30 28.59zM14 23a9 9 0 1 1 9-9 9 9 0 0 1-9 9z',
        },
      },
    ],
    name: 'zoom--out',
    size: 24,
  };

  return _24;

})));
