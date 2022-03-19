import { forwardRef } from 'react';
import { LabelRadio, Wrapper } from './Radio.styles';

const Radio = forwardRef(({ name, id, value, checked, isChecked, ...props }, ref) => {
  return (
    <Wrapper>
      <input
        id={id}
        name={name}
        value={value}
        type="radio"
        checked={checked}
        defaultChecked={isChecked}
        style={{ display: 'none' }}
        {...props}
        ref={ref}
      />
      <LabelRadio htmlFor={id}>{value}</LabelRadio>
    </Wrapper>
  );
});

export default Radio;
