
import './App.css'
import CarDetails from './components/CarDetails';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {

  // const users = [
  //   {id: 1001, name: "Thais", idade: 29, profissao: "Product Owner"},
  //   {id: 1002, name: "Henrique", idade: 17, profissao: "DevFront"},
  //   {id: 1003, name: "Ricardo", idade: 32, profissao: "Chefe"},
  //   {id: 1004, name: "Wanderson", idade: 35, profissao: "DevBack"}
  // ]

  const carros = [
    {id: 1, marca: "VW", km: 0, cor: "Preto", Ano: 2024},
    {id: 2, marca: "GM", km: 1000, cor: "Branco", Ano: 2022},
    {id: 3, marca: "Ford", km: 300, cor: "Azul", Ano: 2019},
    {id: 4, marca: "Fiat", km: 0, cor: "Verde", Ano: 2022}
  ]

  
  
  return (
    <div className='App'>
      {/* <ShowUserName name="Thais"/> */}
      {/* {users.map((user) =>(
        <UserDetails key={user.id} nome={user.name} idade={user.idade} profissao={user.profissao}/>
      ))} */}

      {carros.map ((carros) => (
        <CarDetails key={carros.id} marca={carros.marca} km={carros.km} cor={carros.cor}ano={carros.Ano}/>
      ))}
      </div>
  )
}

export default App
