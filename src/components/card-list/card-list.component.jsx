import { Component } from 'react'
import "./card-list.styles.css"
import Card from "../card/card.component"

class CardList extends Component {
  render() {
  console.log("CardList");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map(monster => {
          return (
            <Card monster={monster} key={monster.id}/>
          )
        })}
      </div>
    )
  }
}

export default CardList;
