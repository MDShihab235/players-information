import React, { useEffect, useState,  }  from 'react';
import './App.css';
import Players from './Components/Players/Players';
import playersData from './fakeData/data.json';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
    // console.log(playersData);   
  },[])

  const handleAddPlayers = (player) =>{
    const newCart = [...cart, player];
    setCart(newCart);
    // console.log('player added', player);
  }


  return (
    <div >
      <h2 className='text-center text-white bg-dark'>TOTAL PLAYERS :{players.length}</h2>
      <Cart cart={cart} key={cart.id}></Cart>
      {
        players.map(player => <Players player={player} key={player.id} handleAddPlayers={handleAddPlayers}></Players>)
      }
      
    </div>
  );
}

export default App;
