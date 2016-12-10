import { random, image } from 'faker';
import { pick, times, map } from 'ramda';
import { connect } from 'react-redux';
import { createElement as el } from 'react';
import { Drawer, MenuItem, Avatar } from 'material-ui'
import * as mapDispatchToProps from '../core/actions';

const frankData = times(() => ({
  image: image.business(),
  title: random.word()
}), 5);

const hydrateMenuItem = ({image, title}) => 
  el(MenuItem, {
    key: title,
    primaryText: title,
    leftIcon: el(Avatar, {src: image}),
    onTouchTap: () => focusFrank(title)
  })

const FrankPicker = ({drawer, toggleDrawer}) => {
  return el(Drawer, {
    open: drawer.open, docked: false,
    onRequestChange:  () => toggleDrawer()
  }, map(hydrateMenuItem, frankData));
}

export default connect(pick(['drawer']), mapDispatchToProps)(FrankPicker);