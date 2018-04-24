import React from 'react'
import PropTypes from 'prop-types'

const rowName = ({enableEdit, name}) => {
  const enableEditName = () => {
    enableEdit()
  }

  return <h1 onClick={enableEditName.bind(this)}>{name}</h1>
}

rowName.propTypes = {
  enableEdit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default rowName
