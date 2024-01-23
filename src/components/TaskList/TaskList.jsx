import { useSelector } from 'react-redux';
import { selectVisibleTasks } from '../../redux/selectors';
import { List } from './TaskList.styled';
import { ListItem } from './TaskList.styled';
import { Task } from 'components/Task/Task';



export const TaskList = () => {
  
  const tasks = useSelector(selectVisibleTasks);

  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
