import { toPairs, pick, map } from 'ramda';
import { connect } from 'react-redux';
import { createElement as el } from 'react';
import { Drawer, MenuItem, Avatar } from 'material-ui'
import * as mapDispatchToProps from '../core/actions';

const hydrateMenuItem = pickFrank => ([slug, frank]) => 
  el(MenuItem, {
    key: frank.title,
    primaryText: frank.title,
    leftIcon: el(Avatar, {src: frank.image}),
    onTouchTap: () => pickFrank(frank)
  })

const FrankPicker = ({drawer, toggleDrawer, pickFrank, frankscriptions}) => {
  return el(Drawer, {
    open: drawer.open, docked: false,
    onRequestChange:  () => toggleDrawer()
  }, map(hydrateMenuItem(pickFrank), toPairs(frankscriptions)));
}

export default connect(
  pick(['drawer', 'frankscriptions']),
  mapDispatchToProps
)(FrankPicker);