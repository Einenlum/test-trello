import React from 'react'
import PropTypes from 'prop-types'
import RowItem from '../RowItem/RowItem'
import RowNameEdit from '../RowNameEdit/RowNameEdit'
import RowName from '../RowName/RowName'
import RowItemAdd from '../RowItemAdd/RowItemAdd'
import './Row.css'

const row = ({row, updateName, enableEdit, addItem, removeItem, editing}) => {
  const renderTitle = () => {
    if (editing) {
      return <RowNameEdit rowName={row.name} updateName={updateName} />
    }

    return <RowName enableEdit={enableEdit} name={row.name} />
  }

  return (
    <div className="row">
      {renderTitle()}
      <div className="items-list">
        {row.items.map(item => {
          return <RowItem removeItem={removeItem} item={item} key={item.id} />
        })}
        <RowItemAdd addItem={addItem} />
      </div>
    </div>
  )
}

row.propTypes = {
  row: PropTypes.object.isRequired,
  updateName: PropTypes.func.isRequired,
  enableEdit: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
}

export default row
