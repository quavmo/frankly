import { connect } from 'react-redux';
import { createElement as el } from 'react';
import { AppBar, Avatar } from 'material-ui';
import { image } from 'faker';
import { pick } from 'ramda';
import * as mapDispatchToProps from '../../core/actions';

const Header = ({toggleDrawer, currentFrank}) => 
  el(AppBar, {
    title: currentFrank.title,
    iconElementRight: el(Avatar, {src: image.avatar()}),
    onLeftIconButtonTouchTap: () => toggleDrawer()
  });

export default connect(pick(['currentFrank']), mapDispatchToProps)(Header);
