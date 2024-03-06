import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'

const Facture = () => {
    const [fact,setFact]=useState(
        {
            numFact:100,
            dateFact:"2021-01-01",
            mtFact:1000,
        }
    )
    const handleChange=()=>{
        setFact({ ... fact,mtFact:565 })
    }
    return (
    <div>
        <div className='im'>
            facture num : {fact.numFact}
            date facture : {fact.dateFact}
            montant facture : {fact.mtFact}
        </div>
        <Button variant="danger" onClick={()=>handleChange()} > modifier </Button>
    </div>
)
}

export default Facture
