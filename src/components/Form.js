import React, {useState} from 'react'

function InputForm() {
    const [tache, setTache] = React.useState("")
    const [tacheList, setTacheList] = React.useState([])
    const Change = (e) => {
        setTache(e.target.value);
    }

    const AddTache = () => {
        if(tache !== ""){
            const DetailsDesTaches = {
                id: Math.floor(Math.random()*1000),
                value: tache,
                isCompleted: false,
            }
            setTacheList(prev => [...tacheList, DetailsDesTaches]);
        }
        console.log("tasklist", tacheList);
    }
  return (
    <div>
        <input 
        type="text" 
        name='text' 
        id='text' 
        onChange={(e) => Change} 
        placeholder='Placez votre tache à faire'
        />
        <button className='Add' onClick={AddTache}>Ajouter</button>
        {tacheList !== [] ? 
            <ul>
                {tacheList.map(t => 
                <li className='item'>{t.value}</li>
                )}
            </ul>
        : null}
    </div>
  )
}

export default InputForm