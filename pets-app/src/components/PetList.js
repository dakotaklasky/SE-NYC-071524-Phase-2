
import Pet from "./Pet"

function PetList({id,image,name}){

    const liElements = pets.map(pet => {
        return (<Pet key= {id} className='pet' image={image} name ={name}/>)
    })

    return(
        <ul className ="pet-list">
            {liElements}
        </ul>
        
    )
}

export default PetList;