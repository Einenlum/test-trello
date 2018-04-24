import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import RowNameEdit from '../RowNameEdit/RowNameEdit'
import RowName from '../RowName/RowName'
import CardAdd from '../CardAdd/CardAdd'
import './Row.css'

const row = ({
  row,
  updateName,
  enableEdit,
  addCard,
  removeCard,
  enableCardEdit,
  editing,
}) => {
  const renderTitle = () => {
    if (editing) {
      return <RowNameEdit rowName={row.name} updateName={updateName} />
    }

    return <RowName enableEdit={enableEdit} name={row.name} />
  }

  return (
    <div className="row">
      {renderTitle()}
      <div className="cards-list">
        {row.cards.map(card => {
          return (
            <Card
              removeCard={removeCard}
              card={card}
              key={card.id}
              enableCardEdit={enableCardEdit}
            />
          )
        })}
        <CardAdd addCard={addCard} />
      </div>
    </div>
  )
}

row.propTypes = {
  row: PropTypes.object.isRequired,
  updateName: PropTypes.func.isRequired,
  enableEdit: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  enableCardEdit: PropTypes.func.isRequired,
}

export default row
