(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.XAxis24 = factory());
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
      {
        elem: 'path',
        attrs: {
          d:
            'M23 20l-1.414 1.414L24.172 24H6V4H4v20a2.002 2.002 0 0 0 2 2h18.172l-2.586 2.586L23 30l5-5z',
        },
      },
    ],
    name: 'x-axis',
    size: 24,
  };

  return _24;

})));
