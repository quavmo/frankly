import { createElement as el } from 'react';
import { MuiThemeProvider, Drawer } from 'material-ui'
import Header from './Header';
import Footer from '../Footer';
import FrankPicker from '../FrankPicker';

const Layout = props => 
  el(MuiThemeProvider, {},
    el('div', {},
      el(FrankPicker),
      el(Header),
      el('main', {...props}),
      el(Footer)
    )
  );

export default Layout;
