import React from 'react'
import Row from '../Row/Row'

const list = ({rows, addItemToRow, removeItemToRow, updateRowName, enableEdit}) => {
    return (
        rows.map((row) => {
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
    )
}

export default list