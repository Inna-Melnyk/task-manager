import { CommonContainer } from "globalStyles/CommonContainer.styled";
import taskGif from "../images/tasks manager.gif"

export const Home = () => {
  return (
    <CommonContainer>
      <div>Home template</div>
      <img src={taskGif} alt="task manager gif" loading="lazy" />
    </CommonContainer>
  );
};
