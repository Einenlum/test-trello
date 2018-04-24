import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row/Row'

const list = ({
  rows,
  addItemToRow,
  removeItemToRow,
  updateRowName,
  enableEdit,
}) => {
  return rows.map(row => {
    return (
      <Row
        addItem={addItemToRow(row)}
        removeItem={removeItemToRow(row)}
        updateName={updateRowName(row)}
        enableEdit={enableEdit(row)}
        key={row.id}
        row={row}
      />
    )
  })
}

list.propTypes = {
  rows: PropTypes.array.isRequired,
  addItemToRow: PropTypes.func.isRequired,
  removeItemToRow: PropTypes.func.isRequired,
  updateRowName: PropTypes.func.isRequired,
  enableEdit: PropTypes.func.isRequired,
}

export default list
