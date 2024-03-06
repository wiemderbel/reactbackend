import React, { useState } from 'react'

const Fournisseur = () => {
    const [codefrs,setCodefrs]=useState("100") //nom l esm , setnom esm l methode
    return (
    <div>
        {codefrs}
        <button onClick={()=>setCodefrs("universite")}>modifier</button>

    </div>
    )
}

export default Fournisseur
