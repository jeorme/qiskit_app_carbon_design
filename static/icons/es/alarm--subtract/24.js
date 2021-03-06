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
          'M16 28a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9zM4 7.592l3.582-3.589 1.416 1.413-3.582 3.589zm19-2.184l1.415-1.413 3.581 3.589-1.415 1.413z',
      },
    },
    { elem: 'path', attrs: { d: 'M11 16h10v2H11z' } },
  ],
  name: 'alarm--subtract',
  size: 24,
};
