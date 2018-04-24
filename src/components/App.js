import React, {PureComponent} from 'react'
import List from './List/List'
import uuid from 'uuid'
import cloneDeep from 'clone-deep'

class App extends PureComponent {
  state = {
    editingRow: null,
    editingCard: null,
    rows: [
      {
        id: uuid.v4(),
        name: 'Backlog',
        cards: [
          {
            id: uuid.v4(),
            position: 0,
            name: 'nurpsteu et ie',
            content: 'nuprset uanprest iuanertuai enrausit enaurestuanreit',
          },
          {
            id: uuid.v4(),
            position: 1,
            name: 'nautpearupet unirestuaie',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
          {
            id: uuid.v4(),
            position: 2,
            name: 'nrpuset nupard puarestu en',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
          {
            id: uuid.v4(),
            position: 3,
            name: 'nurpstenurpetu nrsutia enru',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
          {
            id: uuid.v4(),
            position: 4,
            name: 'nauristenurist puloduv ersuite nuriest',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
          {
            id: uuid.v4(),
            position: 5,
            name: 'inret puresut pnrute ulidetuap',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'Todo',
        cards: [
          {
            id: uuid.v4(),
            position: 0,
            name: 'nurpsteu nirestu ie',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
          {
            id: uuid.v4(),
            position: 1,
            name: 'uie uie',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
          {
            id: uuid.v4(),
            position: 2,
            name: 'ntuap rpte upe',
            content:
              'nariute niurset uanirsetaunretanireta einrasu earstiuce arsiuet cuarsietcua reistua cersuaitce arsiute cuarsite cuaei',
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'WIP',
        cards: [
          {
            id: uuid.v4(),
            position: 0,
            name: 'auinrestu uie ie',
            content: 'naurstenuei uraste nrusetunreist',
          },
          {
            id: uuid.v4(),
            position: 2,
            name: 'aiue nuparaiued aiueaaiuea uiaeueiuiepuarestu en',
            content:
              'aniurest pnrut enrsuaite nsteruasitenruaiseta unirestup nreusptenrauistenriuaset',
          },
          {
            id: uuid.v4(),
            position: 3,
            name: 'nruaset naprset uanrpest ualed ienrute',
            content:
              'aniurest pnrut enrsuaite nsteruasitenruaiseta unirestup nreusptenrauistenriuaset',
          },
          {
            id: uuid.v4(),
            position: 4,
            name: 'narui tenruaiest nlpudet plu',
            content:
              'aniurest pnrut enrsuaite nsteruasitenruaiseta unirestup nreusptenrauistenriuaset',
          },
          {
            id: uuid.v4(),
            position: 5,
            name: 'bjéot upneuatienruiset',
            content:
              'aniurest pnrut enrsuaite nsteruasitenruaiseta unirestup nreusptenrauistenriuaset',
          },
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

  closeCardEdit = () => {
    this.setState({
      editingCard: null,
    })
  }

  enableCardEdit = card => {
    this.setState({
      editingCard: card,
    })
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

  removeCard = cardToRemove => {
    const rows = this.state.rows.map(rowElem => {
      const found = rowElem.cards.filter(cardElem => {
        return cardElem.id === cardToRemove.id
      })

      if (!found.length) {
        return rowElem
      }

      return {
        ...rowElem,
        cards: rowElem.cards
          .filter(cardElem => {
            return cardElem.id !== found[0].id
          })
          .map((cardElem, index) => {
            return {
              ...cardElem,
              position: index,
            }
          }),
      }
    })

    this.setState({
      ...this.state,
      editingCard: null,
      rows: rows,
    })
  }

  editCard = card => {
    return newCardName => {
      const rows = this.state.rows.map(row => {
        return {
          ...row,
          cards: row.cards.map(cardElem => {
            if (card.id !== cardElem.id) {
              return cardElem
            }

            return {
              ...cardElem,
              name: newCardName,
            }
          }),
        }
      })

      this.setState({
        editingCard: null,
        rows: rows,
      })
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
        updateRowName={this.updateRowName.bind(this)}
        enableEdit={this.enableEdit.bind(this)}
        createRow={this.createRow.bind(this)}
        rows={this.state.rows}
        editingRow={this.state.editingRow}
        enableCardEdit={this.enableCardEdit.bind(this)}
        closeCardEdit={this.closeCardEdit.bind(this)}
        editingCard={this.state.editingCard}
        editCard={this.editCard.bind(this)}
        removeCard={this.removeCard.bind(this)}
      />
    )
  }
}

export default App
