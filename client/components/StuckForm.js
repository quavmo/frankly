import { createElement as el } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Send from 'material-ui/svg-icons/content/send';
import {
  Paper,
  TextField,
  RaisedButton
} from 'material-ui';
import { stuckForm as className } from './style.css';

const StuckForm = ({updateComposition, submitComposition, composition, muiTheme}) => 
el(Paper, {
  className,
  zDepth: 3,
  style: { backgroundColor: muiTheme.palette.primary1Color } 
},
  el(TextField, {
    multiLine: true,
    rows: 6,
    name: 'composition'
  }), 
  el(RaisedButton, { icon: el(Send), secondary: true })
);

export default muiThemeable()(StuckForm);
