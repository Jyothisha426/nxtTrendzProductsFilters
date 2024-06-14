import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    activeRatingId,
    changeRating,
    categoryOptions,
    changeCategory,
    activeCategoryId,
    enterSearchInput,
    changeSearchInput,
    searchInput,
    clearFilters,
  } = props

  const renderRatingFiltersList = () =>
    ratingsList.map(eachRating => {
      const onClickRatingItem = () => changeRating(eachRating.ratingId)
      const ratingClassName =
        eachRating.ratingId === activeRatingId
          ? 'and-up active-rating'
          : 'and-up'
      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })

  const renderRatingFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () =>
    categoryOptions.map(category => {
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'
      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        value={searchInput}
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
