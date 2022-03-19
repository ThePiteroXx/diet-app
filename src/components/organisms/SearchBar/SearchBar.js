import { useState, useEffect } from 'react';
import { Wrapper, SearchBarInput, SearchBarWrapper, ButtonFilter, FilterWrapper, ButtonsWrapper } from './SearchBar.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { theme } from 'assets/styles/theme';
import Radio from 'components/atoms/Radio/Radio';
import { Button } from 'components/atoms/Button/Button';

import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';
import { useDispatch } from 'react-redux';
import { addFilter } from 'store';
import { filter } from 'lodash';

const SearchBar = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [filterValue, setFilterValue] = useState({ search: 'title', type: 'any', value: '' });
  const dispatch = useDispatch();

  // Submit changes in filter
  const handleSubmit = () => {
    handleCloseModal();
    dispatch(addFilter(filterValue));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterValue({
      ...filterValue,
      [name]: value,
    });
  };

  // set delay after typing
  useEffect(() => {
    if (isOpen) return;
    const delaySearch = setTimeout(() => dispatch(addFilter(filterValue)), 500);

    return () => clearTimeout(delaySearch);
  }, [filterValue, dispatch, isOpen]);

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBarInput placeholder="Search" name="value" type="text" value={filter.value} onChange={handleChange} />
        <SearchIcon />
      </SearchBarWrapper>
      <ButtonFilter onClick={handleOpenModal} data-testid="button-filter">
        <FilterIcon />
      </ButtonFilter>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <FilterWrapper>
          <h5 className="title">Add filter</h5>
          <p>Search By</p>
          <div className="inputWrapper" onChange={handleChange}>
            <Radio id="anySearch" name={'search'} value={'title'} checked={filterValue.search === 'title'} readOnly />
            <Radio id="caloricSearch" name={'search'} value={'caloric'} checked={filterValue.search === 'caloric'} readOnly />
            <Radio id="ingredientSearch" name={'search'} value={'ingredient'} checked={filterValue.search === 'ingredient'} readOnly />
          </div>
          <p>Diet Type</p>
          <div className="inputWrapper" onChange={handleChange}>
            <Radio id="anyType" name={'type'} value={'any'} checked={filterValue.type === 'any'} readOnly />
            <Radio id="ketoType" name={'type'} value={'keto'} checked={filterValue.type === 'keto'} readOnly />
            <Radio id="vegeType" name={'type'} value={'vege'} checked={filterValue.type === 'vege'} readOnly />
            <Radio id="vegantType" name={'type'} value={'vegan'} checked={filterValue.type === 'vegan'} readOnly />
            <Radio id="glutenType" name={'type'} value={'glutenFree'} checked={filterValue.type === 'glutenFree'} readOnly />
          </div>
          <ButtonsWrapper>
            <Button onClick={handleSubmit} color={theme.colors.primary.white} background={theme.colors.secondary.gradientGreen}>
              Done
            </Button>
          </ButtonsWrapper>
        </FilterWrapper>
      </Modal>
    </Wrapper>
  );
};

export default SearchBar;
