

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  
  return (
    <Button selected type={type} {...otherProps}>
      {children}
    </Button>
  );
};
