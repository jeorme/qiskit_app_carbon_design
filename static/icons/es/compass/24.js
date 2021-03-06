export default {
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
          'M16 4A12 12 0 1 1 4 16 12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z',
      },
    },
    {
      elem: 'path',
      attrs: {
        d:
          'M23 10.41L21.59 9l-4.3 4.3a3 3 0 0 0-4 4L9 21.59 10.41 23l4.3-4.3a3 3 0 0 0 4-4zM17 16a1 1 0 1 1-1-1 1 1 0 0 1 1 1z',
      },
    },
    { elem: 'circle', attrs: { cx: '16', cy: '7.5', r: '1.5' } },
  ],
  name: 'compass',
  size: 24,
};
