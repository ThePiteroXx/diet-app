import { theme } from 'assets/styles/theme';
import FormField from 'components/molecules/FormField/FormField';
import Radio from 'components/atoms/Radio/Radio';
import { Button } from 'components/atoms/Button/Button';
import { Label } from 'components/atoms/Label/Label';
import { GenderWrapper, Gender } from './Form.styles';
import { useDispatch } from 'react-redux';
import { addData } from 'store';
import { useForm } from 'react-hook-form';
import { countCaloric } from 'helpers/countCalories';

const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(addData(countCaloric(data)));
    localStorage.setItem('data_person', JSON.stringify(countCaloric(data)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GenderWrapper>
        <Label>Gender</Label>
        <Gender>
          <Radio id={'male'} name={'gender'} value={'male'} isChecked={true} {...register('gender')} />
          <Radio id={'female'} name={'gender'} value={'female'} {...register('gender')} />
        </Gender>
      </GenderWrapper>
      <FormField label="Age" type="number" max="100" id="inputAge" name="inputAge" data-testid="age" {...register('age')} />
      <FormField label="Height" id="inpuHeight" type="number" placeHolder="cm" max="300" name="inpuHeight" {...register('height')} />
      <FormField label="Weight" type="number" max="300" id="inputWeight" placeHolder="kg" name="inputWeight" {...register('weight')} />
      <FormField label="Activity" id="activity" name="activity" isSelect {...register('activity')}>
        <option value="none">None Activity</option>
        <option value="little">Little Activity</option>
        <option value="averange">Averange Activity</option>
        <option value="large">Large Activity</option>
        <option value="very">Very Activity</option>
      </FormField>
      <Button background={theme.colors.secondary.gradientGreen} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
