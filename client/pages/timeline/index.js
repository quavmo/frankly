import { connect } from 'react-redux';
import { createElement as el } from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Feed from '../../components/Feed';
import Composer from '../../components/Composer';
import * as mapDispatchToProps from '../../core/actions';

const Timeline = ({currentFrank, toggleComposition, composition}) => {
  return el(Layout, {},
    el(Feed, {currentFrank}),
    el(Composer, {toggleComposition, composition}),
  );
};
  

export default connect(s=>s, mapDispatchToProps)(Timeline);