(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.WatsonHealthMagnify24 = factory());
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
            'M12 21H4V4h18v8h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h8z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M30 28.58l-3.11-3.11a6 6 0 1 0-1.42 1.42L28.58 30zM22 26a4 4 0 1 1 4-4 4 4 0 0 1-4 4z',
        },
      },
    ],
    name: 'magnify',
    size: 24,
  };

  return _24;

})));
