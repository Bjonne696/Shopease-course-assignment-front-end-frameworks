import styled from "styled-components";


export const Form = styled.form`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #FFFA72;
  margin-top: 60px; 
  margin-bottom: 60px; 

  // Responsive design
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
    margin-top: 50 px; 
    margin-bottom: 50 px; 
  }
`;

export const FormField = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;