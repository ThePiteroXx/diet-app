import { Wrapper, LineBarWrapper } from './LineBar.styles';

const LineBar = ({ color, percent, minValue, maxValue, describe }) => {
  return (
    <Wrapper>
      <span>{describe}</span>
      <div className="flex-row">
        <LineBarWrapper color={color} percent={percent} />
        <p>
          {minValue}g-{maxValue}g
        </p>
      </div>
    </Wrapper>
  );
};

export default LineBar;
