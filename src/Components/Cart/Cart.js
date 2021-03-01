import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let totalBudget = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalBudget = totalBudget + player.salary;   
    }


    return (
        <div  className='card rounded bg-info text-center text-white'>
               <div className='card-body'>
                   <h4 className='card-title'>Number of selected players:{cart.length} </h4>                   
                   {
                       cart.map(player => <h4 className='card-text'>Name: {player.name} {<br></br>} Salary: ${player.salary}</h4>)
                   }
                   <h4 className='card-text'>Total Budget : ${totalBudget}</h4>
               </div>
               
        </div>
    );
};

export default Cart;