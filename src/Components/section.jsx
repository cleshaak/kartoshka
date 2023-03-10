import React,{useState,useEffect} from "react"; 
import axios from "axios" 
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap"; 
import styled from "styled-components";

const SectionClass = styled("div")`
  display :flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Cardm = styled(Card)`
  height: 210px;
  margin: 15px;
`

const Section = () => { 
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,] 
    const [data,setData] = useState([]) 
    useEffect(() => { 
      axios.get("https://jk-tv.netlify.app/cartoons/get_all").then(d => setData(d?.data)) 
    },[]) 
    console.log(data) 
    return (
      <SectionClass>
        {data.map((d) => (
          <Cardm
            className="card"
            style={{
              width: "18rem",
            }}
          >
            <img alt="Card cap" src={d.backdropPath} width="100%" />
            <CardBody>
              <CardText>{d.title}</CardText>
              <p>{d.owerview}</p>
            </CardBody>
          </Cardm>
        ))}
      </SectionClass>
    ); 
} 
 
export default Section