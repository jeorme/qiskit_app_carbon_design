(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Humidity20 = factory());
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
            'M23.5 30h-15a6.494 6.494 0 0 1-1.3-12.858 8.994 8.994 0 0 1 17.6 0A6.495 6.495 0 0 1 23.5 30zM16 12.005a6.999 6.999 0 0 0-6.941 6.143l-.099.812-.816.064A4.495 4.495 0 0 0 8.5 28h15a4.495 4.495 0 0 0 .356-8.976l-.815-.064-.099-.812A7.001 7.001 0 0 0 16 12.005zm10.044-.017h-.088A3.968 3.968 0 0 1 22 8.091a3.876 3.876 0 0 1 .806-2.373l2.381-3.336a1.035 1.035 0 0 1 1.626 0l2.384 3.337A3.867 3.867 0 0 1 30 8.074a3.972 3.972 0 0 1-3.956 3.914zM26 4.688l-1.57 2.198A1.923 1.923 0 0 0 24 8.074a1.946 1.946 0 0 0 1.985 1.909h.03A1.974 1.974 0 0 0 28 8.056a1.837 1.837 0 0 0-.385-1.109 2.422 2.422 0 0 1-.06-.082z',
        },
      },
    ],
    name: 'humidity',
    size: 20,
  };

  return _20;

})));
