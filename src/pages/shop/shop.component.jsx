import React from 'react';

import './shop.styles.scss';
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className='shop-page'>
        <h1>SHOP Page</h1>
        <div className='collection-preview-container'>
          {
            this.state.collections.map(({ id, ...CollectionProps }) => (
              <CollectionPreview key={id} {...CollectionProps} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default ShopPage;