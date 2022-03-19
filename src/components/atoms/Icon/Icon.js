import { IconWrapper } from './Icon.styles';

const Icon = ({ src, alt }) => {
  return (
    <IconWrapper>
      <img src={src} alt={alt} />
    </IconWrapper>
  );
};

export default Icon;
