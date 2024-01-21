import { useSelector } from 'react-redux';
import { selectTasks } from '../../redux/selectors';
import { Text } from './TaskCounter.styled';

export const TaskCounter = () => {
const tasks = useSelector(selectTasks)

  const count = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc.completed += 1;
    } else {
      acc.active += 1;
    }
    return acc
  }, { active: 0, completed: 0 })
  

  return (
    <div>
      <Text>Total: {tasks.length} </Text>
      <Text>Active: {count.active} </Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};
