(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.WatsonHealthArrowAnnotation32 = factory());
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
            'M13.71 12.29L7.42 6H14V4H4v9.99l2 .02v-6.6l6.29 6.29 1.42-1.41zM28 10H18v2h10v16H12V18h-2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z',
        },
      },
      { elem: 'path', attrs: { d: 'M19 25h2v-7h3v-2h-8v2h3v7z' } },
    ],
    name: 'arrow-annotation',
    size: 32,
  };

  return _32;

})));
