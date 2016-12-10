import { map, times } from 'ramda';
import { createElement as el } from 'react';
import { List, ListItem, Avatar } from 'material-ui';
import { internet, company, image } from 'faker';

const data = times(() => ({
  author: {
    image: image.avatar(),
    handle: internet.userName()
  },
  title: company.catchPhrase(),
}), 12);

const hydrateListItem = ({author, title}) => 
  el(ListItem, {
    key: title,
    leftAvatar: el(Avatar, {src: author.image}),
    primaryText: title,
    secondaryText: author.handle
  });

const Feed = props =>
  el(List, {className: 'stream'}, el('div', {}, map(hydrateListItem, data)))

export default Feed;