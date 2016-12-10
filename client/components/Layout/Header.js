import { connect } from 'react-redux';
import { createElement as el } from 'react';
import { AppBar, Avatar } from 'material-ui';
import { image } from 'faker';
import * as mapDispatchToProps from '../../core/actions';

const Header = ({toggleDrawer}) => 
  el(AppBar, {
    title: 'Sex & Politics',
    iconElementRight: el(Avatar, {src: image.avatar()}),
    onLeftIconButtonTouchTap: () => toggleDrawer()
  });

export default connect(state => state, mapDispatchToProps)(Header);
