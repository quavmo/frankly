import { createElement as el } from 'react';
import { Subheader, IconButton, GridList, GridTile } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { map, times } from 'ramda';
import { internet, company, image } from 'faker';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tileData = times(() => ({
  src: image.imageUrl(),
  title: company.catchPhrase(),
  author: internet.userName()
}), 12);

const hydrateTile = ({src, title, author}) => el(GridTile, {
  key: title, title,
  subtitle: el('span', {}, `by ${author}`)
}, el('img', {src}))

const Grid = props => 
el('div', { style: styles.root }, 
  el(GridList, 
    { cellHeight: 180, style: styles.gridList },
    el('div', {}, map(hydrateTile, tileData))
  )
);

export default Grid;