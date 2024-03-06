import { useState } from "react"
import Fournisseur from "./Fournisseur"

const Client=()=>{

    const [nom,setNom]=useState("ESPS") //nom l esm , setnom esm l methode
    const [ville,setVille]=useState("sfax")
    const [email,setEmail]=useState("derbel@gmail.com")
    const [adresse,setAdresse]=useState("route ain")

    return (
        <>
            <h2>page client: </h2>
            <h3>voter ville est : {ville } adresse : { adresse} </h3>
            <h3>votre nom est : {nom} et votre email est : {email} </h3>
            {/* <button onClick={()=>setNom("universite")}>modifier</button> */}
            <button onClick={()=>setEmail("universite@gmail.com")}>modifier email</button>
            <button className="btn btn-success" onClick={()=>setNom("ESPSsfax")}>Modifier</button>
            <Fournisseur/>
        </>
    )
}

export default Client