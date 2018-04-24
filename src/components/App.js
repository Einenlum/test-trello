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
        items: [
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
        items: [
          {id: uuid.v4(), position: 0, name: 'nurpsteu nirestu ie'},
          {id: uuid.v4(), position: 1, name: 'uie uie'},
          {id: uuid.v4(), position: 2, name: 'ntuap rpte upe'},
        ],
      },
      {
        id: uuid.v4(),
        name: 'WIP',
        items: [
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
      items: [],
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
        rows: this.state.rows.map(rowItem => {
          if (rowItem.id !== row.id) {
            return rowItem
          }

          return {
            ...rowItem,
            name: name,
          }
        }),
      }

      this.setState(newState)
    }
  }

  removeItemToRow = row => {
    return itemToRemove => {
      const state = cloneDeep(this.state)

      state.rows = state.rows.map(rowItem => {
        if (row.id !== rowItem.id) {
          return rowItem
        }

        return {
          ...rowItem,
          items: rowItem.items
            .filter(item => {
              return item.id !== itemToRemove.id
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

  addItemToRow = row => {
    return itemName => {
      const item = {
        id: uuid.v4(),
        position: row.items.length,
        name: itemName,
      }

      const state = cloneDeep(this.state)
      state.rows = state.rows.map(rowItem => {
        if (row.id === rowItem.id) {
          rowItem.items.push(item)
        }

        return rowItem
      })

      this.setState(state)
    }
  }

  render() {
    return (
      <List
        addItemToRow={this.addItemToRow.bind(this)}
        removeItemToRow={this.removeItemToRow.bind(this)}
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
