

import { CardInput } from "../utils/constant/Card";
import { useParams } from "react-router-dom";


import "./Detail.css";


const Detail = () => {
  const{id} = useParams();

 const SingleData = CardInput.find((item)=>{
      return item.id == id;
  })
  console.log(SingleData);
  const{profileImage ,name ,profession,description} = SingleData
  return (
    <div>
        <div className="detailPage-Wrapper">
            <div className="detail-Page-Img">
                <img src={profileImage} alt="" />
            </div>
            <div className="detailPage-Content">
                <h1>{name}</h1>
                <h2>{profession}</h2>
                <p>{description}</p>
                  <button>Profile</button>
            </div>
        </div>
        
    </div>
  )
}

export default Detail;