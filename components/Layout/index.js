import { createElement as el } from 'react';
import { MuiThemeProvider } from 'material-ui'
import Header from './Header';
import Footer from '../Footer';

const Layout = props => 
el(MuiThemeProvider, {},
  el('div', {},
    el(Header, {}),
    el('main', {...props}),
    el(Footer)
  )
);

export default Layout;
