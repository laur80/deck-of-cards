import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Deck.css";
import axios from "axios";
const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

function Deck(props){
 
  //  const [state, setState] = useState({ deck: null, drawn: [] })
   const [deck, setDeck] = useState(null);
    const [drawn, setdDrawn] = useState([]);
 
  useEffect(()=>{
    async function getData(){
      let res = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(res.data);
    }
    getData();
  },[])

  async function getCard() {
    let deck_id = deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("No card remaining!");
      }
      let card = cardRes.data.cards[0];
      console.log(cardRes.data);
      setdDrawn(st=>[...st,
        {
        id: card.code,
        image: card.image,
        name: `${card.value} of ${card.suit}`
      }])
    }catch (err) {
      alert(err)
    }
  }

 
    const cards = drawn.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className='Deck'>
        <h1 className='Deck-title'>♦ Card Dealer ♦</h1>
        <h2 className='Deck-title subtitle'>
          ♦ A little demo made with React ♦
        </h2>
        <button className='Deck-btn' onClick={getCard}>
          Get Card!
        </button>
        <div className='Deck-cardarea'>{cards}</div>
      </div>
    );
  
}
export default Deck;
