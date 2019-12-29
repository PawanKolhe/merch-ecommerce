import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import section from './directory.data'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        ...section
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, title, imageUrl, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        }
      </div>
    );
  }
}

export default Directory;