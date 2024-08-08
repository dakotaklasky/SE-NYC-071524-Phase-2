import {useState} from "react"

function Pet({pet}){

    //let numLikes = 0

    const [numberOfLikes, setNumberOfLikes] = useState(0)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        return setDisplayAnimalType(!displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className = {!displayAnimalType ? "": "display-animal-type"}>
                {!displayAnimalType? pet.name : pet.animal_type}
            </h4>
            <button onClick={() => setNumberOfLikes(numberOfLikes + 1)} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;