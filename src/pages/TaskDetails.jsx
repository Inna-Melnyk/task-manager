import { useParams, useLocation, Link } from 'react-router-dom';
import { useRef } from 'react';
import { CommonContainer } from 'globalStyles/CommonContainer.styled';



export const TaskDetails = () => {

  const { tasktId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/tasks');


  return (
    <CommonContainer>
      <Link to={backLinkLocation.current}>Back</Link>
      <p>TaskDetails template</p>
      <p> Now showing task with id - {tasktId}</p>
    </CommonContainer>
  );

};