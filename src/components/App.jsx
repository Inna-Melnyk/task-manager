import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { TaskManager } from 'pages/TaskManager';
import { Weather } from 'pages/Weather';
import { NotFound } from 'pages/NotFound';
import { TaskDetails } from 'pages/TaskDetails';
import { SharedLayout } from './SharedLayout';
import { GlobalStyle } from 'globalStyles/GlobalStyle.styled';

export const App = () => {
  return (
    <div>
       <GlobalStyle/>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/tasks/:tasktId" element={<TaskDetails />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
};
