import store from '~/store';

import CardConstants from '~/constants/cards';
import CardActions from '~/actions/cards';
import Storage from '~/services/storage';

import { Card } from '~/actions/cards';

export default (state = [], action) => {
  let cards: Card[] = [];
  switch (action.type) {
    case CardConstants.POPULATE:
      cards = action.cards;
      Storage.save('@cards', cards);
      return cards;
    case CardConstants.ADD:
      cards = [...state, action.card];
      Storage.save('@cards', cards);
      return cards;
    case CardConstants.REMOVE:
      cards = state.filter(card => card.number !== action.card.number);
      Storage.save('@cards', cards);
      return cards;
    default:
      return state;
  }
};

(async () => {
  const cards = await Storage.load('@cards');
  store.dispatch(CardActions.populate(cards));
})();
