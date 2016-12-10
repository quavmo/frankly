import { connect } from 'react-redux';
import { createElement as el } from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Feed from '../../components/Feed'

const Timeline = ({currentFrank}) =>{
  return el(Layout, {}, el(Feed, {currentFrank}));
}
  

export default connect(s=>s)(Timeline);