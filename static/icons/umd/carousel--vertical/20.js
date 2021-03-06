(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CarouselVertical20 = factory());
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
            'M26 10v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM8 22h16V10H8zm16 6v4h-2v-4H10v4H8v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0-28v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V0h2v4h12V0z',
        },
      },
    ],
    name: 'carousel--vertical',
    size: 20,
  };

  return _20;

})));
