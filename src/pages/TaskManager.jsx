import { CommonContainer } from 'globalStyles/CommonContainer.styled';
import { TasksBar } from 'components/TasksBar/TasksBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const TaskManager = () => {
  

  return (
    <main>
      <CommonContainer>
        <TasksBar />
        <TaskForm />
        <TaskList />
      </CommonContainer>
    </main>
  );
};
