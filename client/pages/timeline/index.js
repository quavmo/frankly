import { connect } from 'react-redux';
import { createElement as el } from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Feed from '../../components/Feed';
import Composer from '../../components/Composer';

const Timeline = ({currentFrank}) => {
  return el(Layout, {},
    el(Feed, {currentFrank}),
    el(Composer),
  );
};
  

export default connect(s=>s)(Timeline);