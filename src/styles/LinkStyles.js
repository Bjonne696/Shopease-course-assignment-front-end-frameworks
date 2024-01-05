import styled from "styled-components";
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
text-decoration: none; 
background-color: #007bff; 
color: white; 
padding: 10px 15px; 
border-radius: 5px; 
border: none; 
cursor: pointer; 
display: inline-block; 
margin-top: 10px; 

&:hover {
  background-color: #0056b3; 
}
`;