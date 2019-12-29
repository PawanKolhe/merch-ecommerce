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
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Directory;