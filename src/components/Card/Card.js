import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const card = ({card, removeCard, enableCardEdit}) => {
  const remove = () => {
    removeCard(card)
  }

  const enableEdit = () => {
    enableCardEdit(card)
  }

  return (
    <div className="card" onClick={enableEdit.bind(this)}>
      <p>
        ({card.position}) {card.name}{' '}
        <button type="button" onClick={remove.bind(this)}>
          X
        </button>
      </p>
    </div>
  )
}

card.propTypes = {
  card: PropTypes.object.isRequired,
  removeCard: PropTypes.func.isRequired,
  enableCardEdit: PropTypes.func.isRequired,
}

export default card
