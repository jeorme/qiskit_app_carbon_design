(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Draggable20 = factory());
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
            'M10 5h4v4h-4zm8 0h4v4h-4zm-8 9h4v4h-4zm8 0h4v4h-4zm-8 9h4v4h-4zm8 0h4v4h-4z',
        },
      },
    ],
    name: 'draggable',
    size: 20,
  };

  return _20;

})));
