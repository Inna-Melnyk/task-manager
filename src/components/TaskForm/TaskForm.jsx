import { Form, Input} from "./TaskForm.styled";
// import { SearchBox } from "components/SearchBox/SearchBox";
import { Button } from "components/Button/Button.styled";
// import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addTask } from "../../redux/tasks/taskOperations";


export const TaskForm = () => {
  
// const [searchParams, setSearchParams] = useSearchParams();

// const taskId = searchParams.get('name') ?? '';

// const updateQueryString = name => {
//   const nextParams = name !== '' ? { name } : {};
//   setSearchParams(nextParams);
//   };

  
    const dispatch = useDispatch();

   

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </Form>
    );
  }