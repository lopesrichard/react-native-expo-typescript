export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { number: action.id, flag: action.text }];
    case 'REMOVE':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export enum UserActions {
  'ADD',
  'REMOVE'
}
