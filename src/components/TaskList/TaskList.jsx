import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/filters/constants';
import { selectTasks, selectStatusFilter } from '../../redux/selectors';
import { List } from './TaskList.styled';
import { ListItem } from './TaskList.styled';
import { Task } from 'components/Task/Task';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const statusFilter = useSelector(selectStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
