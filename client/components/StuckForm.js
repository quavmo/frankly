import Send from 'material-ui/svg-icons/content/send';
import { 
  createElement as el
} from 'react';

import {
  TextField,
  RaisedButton,
  FlatButton,
  Dialog,
} from 'material-ui';

const contentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const actions = ({toggleComposition, submitComposition, composition}) => [
  el(FlatButton, {label: "Cancel", onTouchTap: toggleComposition}),
  el(FlatButton, {icon: el(Send), onTouchTap: () => submitComposition(composition)}),
];

const StuckForm = ({
  toggleComposition, updateComposition, submitComposition, composition
}) => 
  el(Dialog, {
      actions: actions({toggleComposition, submitComposition, composition}),
      modal: false,
      contentStyle,
      open: composition.open,
    },
    el(TextField, {
      name: "composition",
      autoFocus: true,
      multiLine: true,
      rows:4,
      rowsMax:6,
      onChange: ({target}) => updateComposition(target.value)
    })
  );

export default StuckForm;