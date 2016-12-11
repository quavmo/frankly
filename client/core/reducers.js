import { reduce, times } from 'ramda';
import { random, image, internet, company } from 'faker';

const defaultState = {
  open: false
}
export const drawer = (state=defaultState, {type, payload}) => {
  switch (type) {
    case "TOGGLE_DRAWER":
      return { ...state, open: !state.open }
    case "PICK_FRANK":
      return { ...state, open: false }
    default:
      return state;
  }
}

export const currentFrank = (state={stories: []}, {type, payload}) => {
  switch (type) {
    case "FRANK_FETCH_SUCCESS":
    
      return { ...payload }
    default:
      return state;
  }
};

const generateFrank = () => ({
  image: image.business(),
  title: random.word(),
  slug: internet.domainName(),
  stories: []
});
const mergeBySlug = (acc, value) => ({ ...acc, [value.slug]: value });
const defaultFrankscriptions = reduce(mergeBySlug, {}, times(generateFrank, 5));

export const frankscriptions = (state=defaultFrankscriptions, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};