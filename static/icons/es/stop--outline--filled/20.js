export default {
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
          'M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm6 18a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z',
      },
    },
    { elem: 'path', attrs: { d: 'M12 12h8v8h-8z' } },
  ],
  name: 'stop--outline--filled',
  size: 20,
};
