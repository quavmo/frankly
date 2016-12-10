import { createElement as el } from 'react';
import { AppBar, Avatar } from 'material-ui';
import { image } from 'faker';

const Header = props => 
el(AppBar, {
  title: 'Sex & Politics',
  iconElementRight: el(Avatar, {src: image.avatar()})
})

export default Header;
