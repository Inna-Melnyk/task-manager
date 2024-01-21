import { Section, Wrapper, Title } from "./TasksBar.styled";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { StatusFilter } from "components/StatusFilter/StatusFilter";

export const TasksBar = () => {
  return (
    <Wrapper>
      <Section>
        <Title >Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};