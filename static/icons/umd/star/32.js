(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Star32 = factory());
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
            'M16 6.52l2.76 5.58.46 1 1 .15 6.16.89-4.38 4.3-.75.73.18 1 1.05 6.13-5.51-2.89L16 23l-.93.49-5.51 2.85 1-6.13.18-1-.74-.77-4.42-4.35 6.16-.89 1-.15.46-1L16 6.52M16 2l-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48z',
        },
      },
    ],
    name: 'star',
    size: 32,
  };

  return _32;

})));
