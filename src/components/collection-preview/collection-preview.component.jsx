import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <div className='collection-preview'>
    <h2 className='title' onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h2>
    <div className='preview'>
      {
        items
        .filter((item, index) => index < 4)
        .map(({ id, ...OtherItemProps }) => (
          <CollectionItem key={id} {...OtherItemProps} />
        ))
      }
    </div>
  </div>
);

export default withRouter(CollectionPreview);