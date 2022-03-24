import { Fragment } from 'react';
import { MealInfoWrapper, MealInfoHeader, MealInfoBody, MealInfoWrapperDesktop } from './MealInfo.styles';
import { ReactComponent as TimeIcon } from 'assets/icons/time-green.svg';
import { ReactComponent as LikeIcon } from 'assets/icons/like-green.svg';
import { theme } from 'assets/styles/theme';
import { useGetMealIngredientsQuery } from 'store';
import Loader from 'components/atoms/Loader/Loader';
import { useWindowSize } from 'hooks/useWindowSize';
import { v4 as uuidv4 } from 'uuid';

const desktopSize = parseInt(theme.viewportSize.l.slice(0, -2));

const MealInfo = ({ item }) => {
  const { data, isLoading } = useGetMealIngredientsQuery(item.id);
  const { width } = useWindowSize();

  return (
    <>
      {isLoading ? (
        <Loader speed={5} customText={'Loading...'} />
      ) : width < desktopSize ? (
        // Mobile view
        <MealInfoWrapper>
          <MealInfoHeader>
            <img src={item.image} alt={item.title} />
          </MealInfoHeader>
          <MealInfoBody>
            <div className="info">
              <div className="icon left">{item.diets.length ? item.diets[0] : 'Delicious'}</div>
              <div className="icon">
                <LikeIcon />
                {item.aggregateLikes}
              </div>
              <div className="icon">
                <TimeIcon />
                {item.readyInMinutes} min
              </div>
            </div>
            <h4 className="title">{item.title}</h4>
            <div className="ingredients">
              <p>Ingredients:</p>
              <ul>
                {data.ingredients.map((e) => (
                  <li key={uuidv4()}>
                    {e.name}{' '}
                    <span>
                      {e.amount.metric.value} {e.amount.metric.unit}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Servings: <span>{item.servings}</span>
              </p>
            </div>

            <div className="steps">
              {item.analyzedInstructions.map((element) => (
                <Fragment key={uuidv4()}>
                  <p className="title-step">{element.name}</p>
                  {element.steps.map(({ number, step }) => (
                    <div key={uuidv4()} className="step">
                      <p>Step {number}</p>
                      <span>{step}</span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </MealInfoBody>
        </MealInfoWrapper>
      ) : (
        // Desktop view
        <MealInfoWrapperDesktop>
          <h4 className="title">{item.title}</h4>
          <img src={item.image} alt={item.title} className="main-img" />
          <div className="infoWrapper">
            <div className="info">
              <div className="icon left">{item.diets.length ? item.diets[0] : 'Delicious'}</div>
              <div className="icon">
                <LikeIcon />
                {item.aggregateLikes}
              </div>
              <div className="icon">
                <TimeIcon />
                {item.readyInMinutes} min
              </div>
            </div>
            <div className="ingredients">
              <p>Ingredients:</p>
              <ul>
                {data.ingredients.map((e) => (
                  <li key={uuidv4()}>
                    {e.name}{' '}
                    <span>
                      {e.amount.metric.value} {e.amount.metric.unit}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                Servings: <span>{item.servings}</span>
              </p>
            </div>
          </div>

          <div className="steps">
            {item.analyzedInstructions.map((element) => (
              <Fragment key={uuidv4()}>
                <p className="title-step">{element.name}</p>
                {element.steps.map(({ number, step }) => (
                  <div key={uuidv4()} className="step">
                    <p>Step {number}</p>
                    <span>{step}</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </MealInfoWrapperDesktop>
      )}
    </>
  );
};

export default MealInfo;
