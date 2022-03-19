export const countCaloric = (...props) => {
  const dataPerson = Object.assign({}, ...props);
  const { gender, age, activity, weight, height } = dataPerson;
  const formulaMen = 10 * parseInt(weight) + 6.25 * parseInt(height) - 5 * parseInt(age) + 5;
  const formulaWomen = 10 * parseInt(weight) + 6.25 * parseInt(height) - 5 * parseInt(age) - 161;
  const info = {};

  const averangeActivity = categoryActivity(activity);
  if (gender === 'male') {
    info.demandKcal = Math.floor(formulaMen * averangeActivity);
  } else {
    info.demandKcal = Math.floor(formulaWomen * averangeActivity);
  }

  info.minProtein = Math.floor(parseInt(weight) * 1.5);
  info.maxProtein = Math.floor(parseInt(weight) * 2);

  info.minFat = Math.floor((info.demandKcal * 0.2) / 9);
  info.maxFat = Math.floor((info.demandKcal * 0.3) / 9);

  info.minCarbs = Math.floor((info.demandKcal - (parseInt(weight) * 2 * 4 + info.demandKcal * 0.3)) / 4);
  info.maxCarbs = Math.floor((info.demandKcal - (parseInt(weight) * 1.5 * 4 + info.demandKcal * 0.2)) / 4);

  return info;
};
const categoryActivity = (activity) => {
  // eslint-disable-next-line default-case
  switch (activity) {
    case 'none':
      return 1.2;
    case 'little':
      return 1.375;
    case 'averange':
      return 1.55;
    case 'large':
      return 1.725;
    case 'very':
      return 1.9;
  }
};
