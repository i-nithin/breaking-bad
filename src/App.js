import { Routes, Route } from "react-router"
import Characters from "./components/characters/Characters"
import Landingpage from "./components/landingpage/Landingpage"
import Singlecharacter from "./components/singlecharacter/Singlecharacter"

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/"  exact element = {<Landingpage />}/>
        <Route path="/characters"  exact element = {<Characters />}/>
        <Route path="/characters/:id"  exact element = {<Singlecharacter />}/>
      </Routes>
    </div>
  )
}

export default App