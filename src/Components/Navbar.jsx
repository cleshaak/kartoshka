import { Link } from "react-router-dom";
import styled from "styled-components";

const Text = styled("div")`
  display: flex;
  

`
const PText = styled("p")`
  margin: 20px;
`
const Linkp =styled(Link)`
  margin: 20px;
`
function Navbar() { 
    return ( 
      <div className="navbar"> 
        <Text> 
            <PText>Films</PText> 
            <PText>Serial</PText> 
            <PText>Cartoons</PText> 
            <Linkp to="/cartoon">Cartoon</Linkp>
            <PText>Roman</PText>
            <Linkp to="/war">War</Linkp> 
        </Text> 
     
      </div> 
       
    ); 
  } 
   
  export default Navbar;

 
