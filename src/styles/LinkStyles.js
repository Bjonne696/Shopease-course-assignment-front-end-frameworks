import styled from "styled-components";
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
text-decoration: none; // Removes underline from the link
background-color: #007bff; // Background color for the button
color: white; // Text color
padding: 10px 15px; // Padding inside the button
border-radius: 5px; // Rounded corners
border: none; // No border
cursor: pointer; // Cursor changes to a pointer to indicate it's clickable
display: inline-block; // Allows setting margin and padding
margin-top: 10px; // Margin at the top

&:hover {
  background-color: #0056b3; // Changes background color on hover
}
`;