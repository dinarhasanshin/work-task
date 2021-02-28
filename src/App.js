import './App.sass'
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";

function App() {
  return (
      <div className="container">
          <Sidebar/>
          <Messages/>
      </div>
  )
}

export default App
