import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const card = ({card, enableCardEdit}) => {
  const enableEdit = () => {
    enableCardEdit(card)
  }

  return (
    <div className="card" onClick={enableEdit.bind(this)}>
      <p>
        ({card.position}) {card.name}{' '}
      </p>
    </div>
  )
}

card.propTypes = {
  card: PropTypes.object.isRequired,
  enableCardEdit: PropTypes.func.isRequired,
}

export default card
