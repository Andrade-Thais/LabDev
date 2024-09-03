
import './App.css'
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    {id: 1001, name: "Thais", idade: 29, profissao: "Product Owner"},
    {id: 1002, name: "Henrique", idade: 17, profissao: "DevFront"},
    {id: 1003, name: "Ricardo", idade: 32, profissao: "Chefe"},
    {id: 1004, name: "Wanderson", idade: 35, profissao: "DevBack"}
  ]

  
  
  return (
    <div className='App'>
      {/* <ShowUserName name="Thais"/> */}
      {users.map((user) =>(
        <UserDetails key={user.id} nome={user.name} idade={user.idade} profissao={user.profissao}/>
      ))}
      </div>
  )
}

export default App
