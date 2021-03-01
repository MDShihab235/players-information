import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Players = (props) => {
    // console.log(props)

    const { name, salary, picture } = props.player;

    const handleAddPlayers = props.handleAddPlayers;

    return (
        
    
        <div className='d-flex justify-content-center'>
            <div  className='card rounded' style={{width: '250px'}}>
            <img className='rounded'  src={picture} alt=""/>
            
                <div  className='card-body'>
                    <h5 className='card-title'>Player: {name}</h5>               
                    <p className='card-text'>Salary: ${salary}</p>           
                    <button className='btn btn-primary' onClick={() => handleAddPlayers(props.player)}><FontAwesomeIcon icon={faUserPlus} /></button>
        
                </div>

            </div>
        </div>
        
        
    );
};

export default Players;