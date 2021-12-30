import styled from "styled-components";

export const AddButton = styled.button`
  background: #FFC300;
  border: 1px solid #FFC300;
  height: 35px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  float: right;
  margin-right: 10px;
  border-radius: 5px;
  margin-top: 15px;
`;

export const SubmitButton = styled.button`
  background: #42ba96;
  border: 1px solid #42ba96;
  height: 35px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-right: 10px;
  margin-top: 16px;
  border-radius: 5px;
`;

export const Card = styled.div`
  width: 350px;
  background: white;
  border: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

export const ListCard = styled.div`
   display: flex;
   background: white;
   border: white;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
   transition: 0.3s;
   margin: 10px;
   padding: 10px;
   justify-content: space-between;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const TodoStatus = styled.p`
  text-align: start;
  margin: 0px;
`;

export const TodoTitle = styled.p`
   text-align: start;
   margin: 0px;
`;

export const Tododescription = styled.p`
  text-align: start;
  margin: 0px;
`;

export const ListHeading = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  padding-bottom: 3px;
`;
