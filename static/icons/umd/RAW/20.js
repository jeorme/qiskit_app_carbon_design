(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Raw20 = factory());
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
            'M29.2 9l-.34 8-.26 4.54-.41-3.54-.68-5.46h-2.02L24.81 18l-.41 3.54-.26-4.54-.34-8H22l1 14h2.27l.76-4.93.46-4.07.01-.03.01.03.46 4.07.76 4.93H30l1-14h-1.8zM18 9h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2zm-4 7v-5h4v5zm-4-1v-4a2 2 0 0 0-2-2H2v14h2v-6h1.48l2.34 6H10l-2.37-6H8a2 2 0 0 0 2-2zm-6-4h4v4H4z',
        },
      },
    ],
    name: 'RAW',
    size: 20,
  };

  return _20;

})));
