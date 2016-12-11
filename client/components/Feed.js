import { map, times, isEmpty } from 'ramda';
import { createElement as el } from 'react';
import { List, ListItem, Avatar, Paper } from 'material-ui';
import { internet, company, image } from 'faker';

const hydrateListItem = ({author, title}) =>  {
  return el(Paper, {key: title}, el(ListItem, {
    leftAvatar: el(Avatar, {src: author.image}),
    primaryText: title,
    secondaryText: author.handle
  }));
}

const Feed = ({currentFrank}) => {
  return el(List, {className: 'stream'},
    el('div', {},
      isEmpty(currentFrank.stories) ?
        "Pick a Lens to See Stories" :
        map(hydrateListItem, currentFrank.stories)
    )
  )
}
export default Feed;