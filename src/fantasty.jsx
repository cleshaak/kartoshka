import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button } from "reactstrap"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const fantasty=()=>{
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jk-tv.netlify.app/fantasy_movies_jsx/get_all').then((d) => setData(d.data));
  },[])
    const arr=[
                1,2,2,2,2,2,2,
    ]
    return(

        <div className="section">
{
    data.map(d=>(
        <Card className="card"
  style={{
    width: '18rem'
  }}
>

  <img
    alt="Sample"
    src={d.posterPath}
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>q
      Button
    </Button>
  </CardBody>
</Card>
    )) 
}


        </div>
    )

    
    
}
export default fantasty