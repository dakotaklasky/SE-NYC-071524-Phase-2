
import Pet from "./Pet"

function PetList({pets}){

    const liElements = pets.map(pet => {
        return (<Pet key= {pet.id} className='pet' image={pet.image} name ={pet.name}/>)
    })

    return(
        <ul className ="pet-list">
            {liElements}
        </ul>
        
    )
}

export default PetList;