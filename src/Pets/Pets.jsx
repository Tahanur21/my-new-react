import { useEffect, useState } from "react";


const Pets = () => {
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => setPets(data.pets))
    },[])
    return (
        <div>
            <h3>Pets : {pets.length}</h3>
        </div>
    );
};

export default Pets;