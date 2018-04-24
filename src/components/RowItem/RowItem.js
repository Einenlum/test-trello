import React from 'react'
import PropTypes from 'prop-types'
import './RowItem.css'

const rowItem = ({item, removeItem}) => {
  const remove = () => {
    removeItem(item)
  }

  return (
    <div className="row-item">
      <p>
        ({item.position}) {item.name}{' '}
        <button type="button" onClick={remove.bind(this)}>
          X
        </button>
      </p>
    </div>
  )
}

rowItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default rowItem
