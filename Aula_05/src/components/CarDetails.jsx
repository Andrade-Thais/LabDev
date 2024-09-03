import React from 'react'

function CarDetails({marca, km, cor, ano}) {
  
    return (
        <div>
           <h2>Carros</h2>
           <ul>
            <li>Marca: {marca}</li>
            <li>Km: {km}</li>
            <li>Cor: {cor}</li>
            <li>Ano: {ano}</li>
           </ul>

           {km >= 1 ? (<p>Carro Usado</p>) : (<p>Carro Novo</p>)}
        </div>
  )
}

export default CarDetails