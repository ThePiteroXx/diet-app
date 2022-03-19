import { Navigate } from 'react-router-dom';

import { DashboardSection, ErrorWrapper } from './Dashboard.styles';

import { useMeals } from 'hooks/useMeals';
import AllMeals from 'components/organisms/AllMeals/AllMeals';
import DataPerson from 'components/organisms/DataPerson/DataPerson';
import ExampleDiet from 'components/organisms/ExampleDiet/ExampleDiet';
import { Link } from 'react-router-dom';

import DashboardTemplate from 'components/templates/DashboardTemplate';
import Loader from 'components/atoms/Loader/Loader';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';

const Dashboard = () => {
  const dietInfo = useMeals(); // main information about diet
  const { error } = useError();

  if (!dietInfo) return <Navigate to="/" />; // if dietInfo is empty redirect to home page
  if (dietInfo.isError)
    return (
      <ErrorWrapper>
        <h2>
          Opps!
          <br /> Something gone wrong. Please try later again.
        </h2>
        <Link to="/">Back to home page</Link>
      </ErrorWrapper>
    );

  return (
    <DashboardTemplate>
      {dietInfo.isLoading ? (
        <Loader speed={5} customText={'Loading...'} isAbsolute />
      ) : (
        <>
          <DashboardSection>
            <DataPerson />
          </DashboardSection>

          <DashboardSection>
            <ExampleDiet />
          </DashboardSection>

          <DashboardSection>
            <AllMeals />
          </DashboardSection>

          {error && <ErrorMessage message={error} />}
        </>
      )}
    </DashboardTemplate>
  );
};

export default Dashboard;
