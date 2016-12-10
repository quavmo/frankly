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

const generateStory = () => ({
  author: {
    image: image.avatar(),
    handle: internet.userName()
  },
  title: company.catchPhrase(),
});
const generateStories = () => times(generateStory, 12);

export const currentFrank = (state={stories: []}, {type, payload}) => {
  switch (type) {
    case "PICK_FRANK":
      console.log(type, payload)
      return { ...payload, stories: generateStories() }
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