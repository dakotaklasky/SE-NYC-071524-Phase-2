function Pet({image,name}){
    return(
        <li className="pet">
            <img src={image} alt={name}></img>
            <h4>{name}</h4>
        </li>

    )
}

export default Pet;