import { Input } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter task text..."
      />
    </>
  );
};