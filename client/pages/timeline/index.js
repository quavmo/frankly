import { createElement as el } from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Stream from '../../components/Stream'

const Timeline = props =>
  el(Layout, {}, el(Stream, {}));

export default Timeline;