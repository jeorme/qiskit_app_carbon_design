(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MobileDownload20 = factory());
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
            'M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2v2H8V4zm0 4v16H8V8zM8 28v-2h16v2z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d: 'M21 17l-1.41-1.41L17 18.17V10h-2v8.17l-2.59-2.58L11 17l5 5 5-5z',
        },
      },
    ],
    name: 'mobile--download',
    size: 20,
  };

  return _20;

})));
