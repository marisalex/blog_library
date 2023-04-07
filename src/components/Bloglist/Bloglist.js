import React from 'react'
import kenya from "../../images/kargi.jpg"
import {BsFillTrashFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import norway from "../../images/northern-lights.jpg"
import dragon from "../../images/dragon-festival.jpg"
import jollof from "../../images/jollof-rice.jpg"
import "./Bloglist.css"

export default function Bloglist() {
  const [data, setData] = React.useState(null);
  const[test, setTest] =  React.useState(true)

  const getDetails = () => {
    const allDetails= JSON.parse(localStorage.getItem("details"));
    setData(allDetails);
  };

  React.useEffect(() => {
    getDetails();
  }, [test]);


  function confirmation(id){
   let decision = window.confirm("You are about to delete this item")
   if(decision){
    handleDelete(id)
    getDetails()
   }
  }


  function handleDelete(id){
    const allDetailsTest= JSON.parse(localStorage.getItem("details"));
    const newData = allDetailsTest.filter((items)=>{
     return items.id !== id
    })
    localStorage.setItem("details", JSON.stringify(newData));

    setTest(prev => !prev)
  }

  // function handleEdit(){
  //   setData(allDetails => allDetails.map(allDetail=>{
  //     return allDetail.id === detail.id
  //     ? {...allDetail, }
  //   }))
  // }

  
  return (
    <div className="top-stories">
      {data && data.map((detail) => {
          return(
            <div key={detail.id}>
            <img src={kenya} className="top-stories-img"/>
            <h4>{detail.location}</h4>
            <h6>{detail.title}</h6>
            <p>Added by {detail.fullname}</p>
            <p>11/03/2023</p>
            <BsFillTrashFill className="delete-blog" onClick={()=>{
              confirmation(detail.id)
            }}/>
            <AiFillEdit className="edit-blog" />
          </div>
          )
        })}
      
        {/* <div>
          <img src={norway}/>
          <h4>Norway</h4>
          <h6>Spirits Dancing in the sky(Nothern lights)</h6>
          <p>Added by Alexandra</p>
          <p>11/03/2023</p>
        </div>
        <div>
          <img src={dragon}/>
          <h4>Japan</h4>
          <h6>Dragon dance</h6>
          <p>Added by Alexandra</p>
          <p>11/03/2023</p>
        </div>
        <div>
          <img src={jollof}/>
          <h4>West Africa</h4>
          <h6>A tale of Jollof Rice</h6>
          <p>Added by Alexandra</p>
          <p>11/03/2023</p>
        </div> */}
      </div>
  )
}




