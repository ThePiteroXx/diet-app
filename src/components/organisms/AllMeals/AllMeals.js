import { useRef, useEffect, useState, useCallback } from 'react';
import { ImgWrapper, WrapperLoader } from './AllMeals.styles';
import { Title } from 'components/atoms/Title/Title';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Meal from 'components/molecules/Meal/Meal';
import Loader from 'components/atoms/Loader/Loader';

import { useGetAllMealsQuery } from 'store';
import { useSelector } from 'react-redux';

const AllMeals = () => {
  const [numberElement, setNumberElement] = useState(10);
  const filter = useSelector((state) => state.filter);
  const { data, isLoading, isFetching } = useGetAllMealsQuery({
    number: numberElement,
    search: filter.search,
    type: filter.type,
    value: filter.value,
  });
  const lastItemRef = useRef(null);
  const observer = useRef(null);

  const getMoreMeals = useCallback(() => {
    if (numberElement >= 100 || isFetching || numberElement > data.totalResults) return;
    setNumberElement((i) => i + 10);
  }, [numberElement, isFetching, data]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) getMoreMeals();
      },
      {
        root: document,
        threshold: 1,
      }
    );

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      observer.current.disconnect();
    };
  }, [getMoreMeals]);

  return (
    <>
      <Title>All meals</Title>
      <SearchBar />
      <ImgWrapper>
        {!isLoading &&
          data.results.map((item, index) => {
            if (index === data.results.length - 1) return <Meal key={item.id} item={item} ref={lastItemRef} />;
            return <Meal key={item.id} item={item} />;
          })}
      </ImgWrapper>
      {isFetching && (
        <WrapperLoader>
          <Loader speed={5} customText={'Loading...'} isAbsolute />
        </WrapperLoader>
      )}
      {!isFetching && !data.results.length && <p style={{ textAlign: 'center' }}>No results...</p>}
    </>
  );
};

export default AllMeals;
