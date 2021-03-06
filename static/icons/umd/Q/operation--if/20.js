(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QOperationIf20 = factory());
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
            'M12 13h2v10h-2zm0-4h2v2h-2zm11 2V9h-3a2 2 0 0 0-2 2v2h-2v2h2v8h2v-8h3v-2h-3v-2z',
        },
      },
    ],
    name: 'operation--if',
    size: 20,
  };

  return _20;

})));
