import { pick } from 'ramda';
import { connect } from 'react-redux';
import { createElement as el } from 'react';
import { Drawer } from 'material-ui'
import * as mapDispatchToProps from '../core/actions';

const FrankPicker = ({drawer, toggleDrawer}) => {
  return el(Drawer, {
    open: drawer.open, docked: false,
    onRequestChange:  () => toggleDrawer()
  });
}

export default connect(pick(['drawer']), mapDispatchToProps)(FrankPicker);