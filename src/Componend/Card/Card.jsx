


import  "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({data}) => {
    const{id , name , profession, description ,profileImage , background } = data;
    const navigate = useNavigate();
  return (
    <div>
        {
            <div className="card-Wrapper">
              <div className="cards-Wrapper">
                <img src={background} alt="" />
              </div>
              <div className="Card-Profile-img">
                <img src={profileImage} alt="" />
              </div>
                <h1>{profession}</h1>
                <p>{description}</p>
                <button onClick={() => navigate(`/detail/${id}`)}>Details</button>
                
            </div>
        }
    </div>
    
  )
}

export default Card
