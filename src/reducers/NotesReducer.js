const initialState = {
  list: [
    {
      title: 'Test...',
      body: '123...',
    },
    {
      title: 'Segunda anotação...',
      body: '123...',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      break;
  }
  return state;
};
