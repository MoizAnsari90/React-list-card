
import Detail from "./page/Detail"
import Home from "./page/Home"
import { Routes , Route } from "react-router-dom"


const App = () => {
  return (
    <div>
        {
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element="Error" />

        </Routes>
        }
        
    </div>
  )
}

export default App
