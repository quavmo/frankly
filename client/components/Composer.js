import { createElement as el } from 'react';
import { FloatingActionButton, } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StuckForm from './StuckForm';
import { fab } from './style.css';

const StuckButton = ({ toggleComposition }) => 
el(FloatingActionButton, {
  className: fab, secondary: true,
  onTouchTap: () => toggleComposition()
}, el(ContentAdd));

const Composer = ({toggleComposition, composition, updateComposition, submitComposition}) => 
  el('div', {},
    el(StuckButton, { toggleComposition }),
    el(StuckForm, { toggleComposition, updateComposition, submitComposition, composition }),
  )

export default Composer;