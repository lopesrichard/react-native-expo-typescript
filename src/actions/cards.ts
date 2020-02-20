import CardConstants from '~/constants/cards';

export type Card = {
  number: string;
};

type CardActionProps = {
  type: CardConstants;
  card: Card;
};

type CardsActionProps = {
  type: CardConstants;
  cards: Card[];
};

export const populate = (cards: Card[]): CardsActionProps => ({ type: CardConstants.POPULATE, cards });
export const add = (card: Card): CardActionProps => ({ type: CardConstants.ADD, card });
export const remove = (card: Card): CardActionProps => ({ type: CardConstants.REMOVE, card });

export default { add, remove, populate };
