import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const card = ({card, removeCard}) => {
  const remove = () => {
    removeCard(card)
  }

  return (
    <div className="card">
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
}

export default card
