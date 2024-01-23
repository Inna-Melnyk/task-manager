import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';
import { Text } from './TaskCounter.styled';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);


  return (
    <div>
      <Text>Total: {count.length} </Text>
      <Text>Active: {count.active} </Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};
