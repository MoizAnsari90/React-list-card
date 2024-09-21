import Card from "../Componend/Card/Card"
import { CardInput } from "../utils/constant/Card"
import "./Home.css"

function Home() {
  return (
    <div>
        <div className="card-set">
        {
            CardInput.map((item , index)=>{
                return(
                    <Card key={index} data={item}/>
                )
            })
        }       
        </div>
        
       
    </div>
  )
}

export default Home
