/**
 * Change api token after reloading the page or revisiting the page cause each token has daily limits
 */

export const setToken = () => {
  const apiTokens = [process.env.REACT_APP_SPOONCULAR_TOKEN, process.env.REACT_APP_SPOONCULAR2_TOKEN, process.env.REACT_APP_SPOONCULAR3_TOKEN];

  let tokenNumber = localStorage.getItem('token_number');

  if (!tokenNumber) {
    localStorage.setItem('token_number', 1);
    tokenNumber = 1;
  } else if (tokenNumber < apiTokens.length) {
    tokenNumber++;
    localStorage.setItem('token_number', tokenNumber);
  } else {
    localStorage.setItem('token_number', 1);
    tokenNumber = 1;
  }

  const finalToken = apiTokens.find((_, index) => {
    return index + 1 === tokenNumber;
  });

  return finalToken;
};
