import { forwardRef } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { Select } from 'components/atoms/Select/Select';
import { Wrapper } from './FormField.styles';

const FormField = forwardRef(({ value, label, max, name, id, type = 'text', placeHolder, isSelect, children, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isSelect ? (
        <Select id={id} name={name} value={value} {...props} ref={ref}>
          {children}
        </Select>
      ) : (
        <Input name={name} id={id} type={type} value={value} max={max} placeholder={placeHolder} {...props} ref={ref} required />
      )}
    </Wrapper>
  );
});

export default FormField;
