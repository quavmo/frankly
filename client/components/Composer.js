import { createElement as el } from 'react';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { fab } from './style.css';

const Composer = props => 
  el(FloatingActionButton, {className: fab, secondary: true}, el(ContentAdd))

export default Composer;