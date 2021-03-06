(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.WatsonHealthCircleMeasurement32 = factory());
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
            'M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z',
        },
      },
      {
        elem: 'path',
        attrs: { d: 'M21 12.41V16h2V9h-7v2h3.59L11 19.59V16H9v7h7v-2h-3.59z' },
      },
    ],
    name: 'circle-measurement',
    size: 32,
  };

  return _32;

})));
