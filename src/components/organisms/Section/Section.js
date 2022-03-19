import { Title } from 'components/atoms/Title/Title';
import headerBgc from 'assets/images/headerBgc.svg';
import Form from 'components/organisms/Form/Form';
import formIlustration from 'assets/images/form_ilustration.svg';
import { SectionWrapper, Wrapper, FlexWrapper } from './Section.styles';

const Section = () => {
  return (
    <SectionWrapper id="data">
      <img src={headerBgc} alt="wave" className="wave-mobile" />
      <Wrapper>
        <Title>Your Data</Title>
        <p>Please provide your correct data in form to know what is your caloric demand and we will find meals compatible with your caloric.</p>
        <FlexWrapper>
          <Form />
          <img src={formIlustration} alt="Data ilustartion" className="form-ilustration" />
        </FlexWrapper>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Section;
