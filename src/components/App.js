import React, {PureComponent} from 'react'
import List from './List/List'
import uuid from 'uuid'
import cloneDeep from 'clone-deep'

class App extends PureComponent {
  state = {
    editingRow: null,
    rows: [
      {
        id: uuid.v4(),
        name: 'Backlog',
        cards: [
          {id: uuid.v4(), position: 0, name: 'nurpsteu et ie'},
          {id: uuid.v4(), position: 1, name: 'nautpearupet unirestuaie'},
          {id: uuid.v4(), position: 2, name: 'nrpuset nupard puarestu en'},
          {id: uuid.v4(), position: 3, name: 'nurpstenurpetu nrsutia enru'},
          {
            id: uuid.v4(),
            position: 4,
            name: 'nauristenurist puloduv ersuite nuriest',
          },
          {id: uuid.v4(), position: 5, name: 'inret puresut pnrute ulidetuap'},
        ],
      },
      {
        id: uuid.v4(),
        name: 'Todo',
        cards: [
          {id: uuid.v4(), position: 0, name: 'nurpsteu nirestu ie'},
          {id: uuid.v4(), position: 1, name: 'uie uie'},
          {id: uuid.v4(), position: 2, name: 'ntuap rpte upe'},
        ],
      },
      {
        id: uuid.v4(),
        name: 'WIP',
        cards: [
          {id: uuid.v4(), position: 0, name: 'auinrestu uie ie'},
          {
            id: uuid.v4(),
            position: 2,
            name: 'aiue nuparaiued aiueaaiuea uiaeueiuiepuarestu en',
          },
          {
            id: uuid.v4(),
            position: 3,
            name: 'nruaset naprset uanrpest ualed ienrute',
          },
          {id: uuid.v4(), position: 4, name: 'narui tenruaiest nlpudet plu'},
          {id: uuid.v4(), position: 5, name: 'bjéot upneuatienruiset'},
        ],
      },
    ],
  }

  createRow = rowName => {
    const row = {
      name: rowName,
      id: uuid.v4(),
      cards: [],
    }

    this.setState({
      rows: [...this.state.rows, row],
    })
  }

  enableEdit = row => {
    return () => {
      this.setState({
        editingRow: row,
      })
    }
  }

  updateRowName = row => {
    return name => {
      const newState = {
        editingRow: null,
        rows: this.state.rows.map(rowElem => {
          if (rowElem.id !== row.id) {
            return rowElem
          }

          return {
            ...rowElem,
            name: name,
          }
        }),
      }

      this.setState(newState)
    }
  }

  removeCardToRow = row => {
    return cardToRemove => {
      const state = cloneDeep(this.state)

      state.rows = state.rows.map(rowElem => {
        if (row.id !== rowElem.id) {
          return rowElem
        }

        return {
          ...rowElem,
          cards: rowElem.cards
            .filter(card => {
              return card.id !== cardToRemove.id
            })
            .map((value, index) => {
              return {
                ...value,
                position: index,
              }
            }),
        }
      })

      this.setState(state)
    }
  }

  addCardToRow = row => {
    return cardName => {
      const card = {
        id: uuid.v4(),
        position: row.cards.length,
        name: cardName,
      }

      const state = cloneDeep(this.state)
      state.rows = state.rows.map(rowElem => {
        if (row.id === rowElem.id) {
          rowElem.cards.push(card)
        }

        return rowElem
      })

      this.setState(state)
    }
  }

  render() {
    return (
      <List
        addCardToRow={this.addCardToRow.bind(this)}
        removeCardToRow={this.removeCardToRow.bind(this)}
        updateRowName={this.updateRowName.bind(this)}
        enableEdit={this.enableEdit.bind(this)}
        createRow={this.createRow.bind(this)}
        rows={this.state.rows}
        editingRow={this.state.editingRow}
      />
    )
  }
}

export default App
