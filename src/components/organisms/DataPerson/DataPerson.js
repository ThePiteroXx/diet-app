import { CaloricInfoWrapper, CaloricInfo, ChartWrapper, Wrapper, Legend } from './DataPerson.styles';
import PizzaIcon from 'assets/icons/icon-pizza.svg';
import HamburgerIcon from 'assets/icons/icon-hamburger.svg';
import FireIcon from 'assets/icons/icon-fire.svg';
import Icon from 'components/atoms/Icon/Icon';
import LineBar from 'components/atoms/LineBar/LineBar';
import { Title } from 'components/atoms/Title/Title';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { theme } from 'assets/styles/theme';

import { useMeals } from 'hooks/useMeals';
import { useExampleMealsMacros } from 'hooks/useExampleMealsMacros';
import { useWindowSize } from 'hooks/useWindowSize';

ChartJS.register(ArcElement, Tooltip);

const desktopSizeXL = parseInt(theme.viewportSize.xl.slice(0, -2));

const DataPerson = () => {
  const dietInfo = useMeals(); // main information about diet
  const exampleMealsMacros = useExampleMealsMacros();
  const windowSize = useWindowSize();

  return (
    <Wrapper>
      <Title>Your diet information</Title>
      <CaloricInfoWrapper>
        <CaloricInfo>
          <div>
            <p className="caloric-title">Caloric Demand:</p>
            <p>{dietInfo.demandKcal}kcal</p>
          </div>
          <Icon src={HamburgerIcon} alt="meat icon" />
        </CaloricInfo>
        <CaloricInfo>
          <div>
            <p className="caloric-title">Caloric Deficit:</p>
            <p>{dietInfo.demandKcal - 400}kcal</p>
          </div>
          <Icon src={FireIcon} alt="hamburger icon" />
        </CaloricInfo>
        <CaloricInfo>
          <div>
            <p className="caloric-title">Caloric Surplus:</p>
            <p>{dietInfo.demandKcal + 400}kcal</p>
          </div>
          <Icon src={PizzaIcon} alt="fire icon" />
        </CaloricInfo>
      </CaloricInfoWrapper>
      <ChartWrapper>
        <Doughnut
          data={{
            labels: ['Carbohydrates (kcal)', 'Protein (kcal)', 'Fat (kcal)', 'Needed (kcal)'],
            datasets: [
              {
                label: 'Macros',
                data: [
                  exampleMealsMacros.carbo * 4,
                  exampleMealsMacros.protein * 4,
                  exampleMealsMacros.fat * 9,
                  dietInfo.demandKcal - exampleMealsMacros.calories < 0 ? 0 : dietInfo.demandKcal - exampleMealsMacros.calories,
                ],
                backgroundColor: ['rgb(187, 224, 108)', 'rgb(86, 11, 173)', 'rgb(226, 18, 105)', 'rgb(244, 245, 247)'],
                hoverOffset: 3,
              },
            ],
          }}
          options={{
            layout: {
              padding: 2,
            },
            animations: {
              colors: false,
            },
          }}
        />
        <p>{((exampleMealsMacros.calories / dietInfo.demandKcal) * 100).toFixed()}%</p>
      </ChartWrapper>
      {windowSize.width > desktopSizeXL && (
        <Legend>
          <div className="container">
            <div className="circle carbo"></div>
            <p>
              Carbohydrates <span>( kcal )</span>
            </p>
          </div>
          <div className="container">
            <div className="circle fat"></div>
            <p>
              Fat <span>( kcal )</span>
            </p>
          </div>
          <div className="container">
            <div className="circle protein"></div>
            <p>
              Protein <span>( kcal )</span>
            </p>
          </div>
        </Legend>
      )}
      <LineBar
        color={theme.colors.carbo}
        percent={Math.min((exampleMealsMacros.carbo / dietInfo.minCarbs) * 100, 100)}
        minValue={dietInfo.minCarbs}
        maxValue={dietInfo.maxCarbs}
        describe={'Carbohydrates:'}
      />
      <LineBar
        color={theme.colors.fat}
        percent={Math.min((exampleMealsMacros.fat / dietInfo.minFat) * 100, 100)}
        minValue={dietInfo.minFat}
        maxValue={dietInfo.maxFat}
        describe={'Fat:'}
      />
      <LineBar
        color={theme.colors.protein}
        percent={Math.min((exampleMealsMacros.protein / dietInfo.minProtein) * 100, 100)}
        minValue={dietInfo.minProtein}
        maxValue={dietInfo.maxProtein}
        describe={'Protein:'}
      />
    </Wrapper>
  );
};

export default DataPerson;
