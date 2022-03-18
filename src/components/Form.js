import React, {useState} from 'react'

function InputForm() {
    const [tache, setTache] = React.useState("");
    const [items, setItems] = React.useState([]);

    function ajoutItems(){

        if(!tache){
            alert("entrez un élément")
            return;
        }

        const nouvelItem = {
            id: Math.floor(Math.random() * 1000),
            value: tache
        }
        
        setItems(ancienneListe => [...ancienneListe, nouvelItem]);
        setTache("");

    }

    function supprimerElements(id){
        const newArray = items.filter(nouvelItem => nouvelItem.id !== id);
        setItems(newArray);
    }

  return (
    <div className='container'>
        <input 
        type="text" 
        name='text' 
        id='text' 
        value={tache} 
        placeholder='Placez votre tache à faire'
        onChange={e => setTache(e.target.value)}
        />
        <button className='Add' onClick={() => ajoutItems()}>Ajouter</button> 
        <ul>
            {items.map(nouvelItem =>{
                return(
                <li key={nouvelItem.id}>{nouvelItem.value} <button onClick={() => supprimerElements(nouvelItem.id)} className="btnsuppr">X</button></li>
                )
            })}
        </ul>
    </div>
  )
}

export default InputForm