import { createElement as el } from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Feed from '../../components/Feed'

const Timeline = props =>
  el(Layout, {}, el(Feed, {}));

export default Timeline;