import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row/Row'
import CreateRow from '../CreateRow/CreateRow'
import './List.css'

const list = ({
  rows,
  addItemToRow,
  removeItemToRow,
  updateRowName,
  enableEdit,
  createRow,
}) => {
  const renderRows = rows => {
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

  return (
    <div id="list">
      {renderRows(rows)}
      <CreateRow createRow={createRow} />
    </div>
  )
}

list.propTypes = {
  rows: PropTypes.array.isRequired,
  addItemToRow: PropTypes.func.isRequired,
  removeItemToRow: PropTypes.func.isRequired,
  updateRowName: PropTypes.func.isRequired,
  enableEdit: PropTypes.func.isRequired,
  createRow: PropTypes.func.isRequired,
}

export default list
