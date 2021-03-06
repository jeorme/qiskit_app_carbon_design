(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.NotebookReference20 = factory());
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
            'M4 20v2h3.586L2 27.586 3.414 29 9 23.414V27h2v-7H4zm15-10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M28 5H4a2.002 2.002 0 0 0-2 2v10h2V7h11v20h13a2.002 2.002 0 0 0 2-2V7a2.002 2.002 0 0 0-2-2zM17 25V7h11l.002 18z',
        },
      },
    ],
    name: 'notebook--reference',
    size: 20,
  };

  return _20;

})));
