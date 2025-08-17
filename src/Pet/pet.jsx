import { useState } from 'react';
import './Pet.css'

const Pet = ({pet,handleMark}) => {
    const {category, breed, image} = pet;
    const [addopt, setPet] = useState(false);
    const handleAddopt = () =>{
        setPet(!addopt);
    }
    return (
        <div className={addopt? 'img-toggle': 'img-card'}>
            <img className='img' src={image} alt="" />
            <h3>Name : {category}</h3>
            <h5>Breed : {breed}</h5>
            <button style={{
                margin: '12px'
            }} onClick={handleAddopt}>{addopt?'Addopted': 'Addopt'}</button>
            <br />
            <button onClick={()=>{handleMark()}}>Mark</button>
        </div>
    );
};

export default Pet;