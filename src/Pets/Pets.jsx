import { useEffect, useState } from "react";
import Pet from "../Pet/Pet";
import './Pets.css'

const Pets = () => {
    const [pets, setPets] = useState([]);
    const [marks, setMark] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => setPets(data.pets))
    },[])
    const handleMark = (pet) => {
        const newMark = [...marks, pet];
        setMark(newMark)
    }
    return (
        <div>
            <h3>Pets : {pets.length}</h3>
            <div className="card">
                {
                    pets.map((pet,idx) => <Pet key={idx} pet={pet}></Pet>)
                }
            </div>
            <div>
                { 
                    marks.map(mark => <img handleMark={handleMark} src={mark}></img>)
                }
            </div>
        </div>
    );
};

export default Pets;