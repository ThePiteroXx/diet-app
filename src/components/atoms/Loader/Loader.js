import { Wrapper } from './Loader.styles';

const Loader = ({ speed, customText, isAbsolute }) => {
  return (
    <Wrapper isAbsolute={isAbsolute}>
      <svg width="100%" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="spinner">
          <circle className="bottom" cx="138" cy="138" r="114" stroke="#DBDBDB" strokeWidth="18" />
          <circle
            className="upper"
            cx="138"
            cy="138"
            r="123"
            stroke="#469B4C"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="373 100"
            style={{ animationDuration: speed + 's' }}
          />
        </g>
      </svg>
      <p>{customText}</p>
    </Wrapper>
  );
};

export default Loader;
