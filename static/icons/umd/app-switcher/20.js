(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AppSwitcher20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      width: 20,
      height: 20,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M15.5 15.5H18V18h-2.5zm-6.75 0h2.5V18h-2.5zM2 15.5h2.5V18H2zm13.5-6.75H18v2.5h-2.5zm-6.75 0h2.5v2.5h-2.5zM2 8.75h2.5v2.5H2zM15.5 2H18v2.5h-2.5zM8.75 2h2.5v2.5h-2.5zM2 2h2.5v2.5H2z',
        },
      },
    ],
    name: 'app-switcher',
    size: 20,
  };

  return _20;

})));
