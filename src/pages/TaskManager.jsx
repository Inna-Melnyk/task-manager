import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/tasks/taskOperations';
import { selectError, selectIsLoading } from '../redux/selectors';
import { CommonContainer } from 'globalStyles/CommonContainer.styled';
import { TasksBar } from 'components/TasksBar/TasksBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const TaskManager = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main>
      <CommonContainer>
        <TasksBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </CommonContainer>
    </main>
  );
};
