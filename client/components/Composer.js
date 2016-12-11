import { createElement as el } from 'react';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { fab } from './style.css';

const Composer = ({toggleComposition, composition}) => 
{
  return el(FloatingActionButton, {
    className: fab, secondary: true,
    onTouchTap: () => toggleComposition()
  }, composition.open ? null : el(ContentAdd))
}
export default Composer;