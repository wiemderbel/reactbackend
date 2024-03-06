import React, { useState } from 'react'
import './style.css'

const Client1 = () => {

    const [nom,setNom]=useState("ESPS")
    const [ville,setVille]=useState("sfax")
    const [adresse,setAdresse]=useState("route ain")

    const modifier = () =>{
        setNom("hhh")
        setVille("sousse")
    }

    return (
    <div>
        <h2>Nom :{nom}</h2>
        <h2>Ville :{ville}</h2>
        <h2>Adresse :{adresse} </h2>
        <button className="btn btn-success" onClick={()=>modifier()}>Modifier</button>

    </div>
    )
}

export default Client1
