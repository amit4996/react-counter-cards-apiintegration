import './style.css';
import Data from './Data'
import Card from './Card'
import Counter from './Counter'
import Todo from './Todo'
import Log from './Log'
import Api from './Api'

function App() {
     const NewData =Data.map((e) => {
      return <Card DataCollection={e}/>
    })
    
    return (
      <div className="mypractise">
        <h1>Cards</h1>
        <div className="card-container">
        {NewData}
      </div>
        <h1>Counter</h1>
      <div><Counter /></div>


      <h1>LOGIN-LOGOUT</h1>
      <div><Log/></div>

      {/* <h1>To-Do List</h1>
      <div><Todo /></div> */}

      <h1>API CALL</h1>
      <div><Api /></div>
      </div>
      
    )
}

export default App;
