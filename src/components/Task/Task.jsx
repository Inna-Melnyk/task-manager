import { Wrapper, Checkbox, Text, Button } from "./Task.styled";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasks/action";

export const Task = ({ task }) => {

  const dispatch = useDispatch();

  const handleDelete = ()=>dispatch(deleteTask(task.id))
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <Button onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};