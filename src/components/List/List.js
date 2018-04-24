import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row/Row'
import CreateRow from '../CreateRow/CreateRow'
import CardEdit from '../CardEdit/CardEdit'
import './List.css'

const list = ({
  rows,
  addCardToRow,
  removeCardToRow,
  updateRowName,
  enableEdit,
  editingRow,
  createRow,
  enableCardEdit,
  editingCard,
  editCard,
}) => {
  const renderRows = rows => {
    return rows.map(row => {
      return (
        <Row
          addCard={addCardToRow(row)}
          removeCard={removeCardToRow(row)}
          updateName={updateRowName(row)}
          enableEdit={enableEdit(row)}
          editing={editingRow === row}
          enableCardEdit={enableCardEdit}
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
      {editingCard && (
        <CardEdit card={editingCard} editCard={editCard(editingCard)} />
      )}
    </div>
  )
}

list.propTypes = {
  rows: PropTypes.array.isRequired,
  addCardToRow: PropTypes.func.isRequired,
  removeCardToRow: PropTypes.func.isRequired,
  updateRowName: PropTypes.func.isRequired,
  enableEdit: PropTypes.func.isRequired,
  createRow: PropTypes.func.isRequired,
  enableCardEdit: PropTypes.func.isRequired,
}

export default list
