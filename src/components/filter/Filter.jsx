// Filter
import PropTypes from 'prop-types';
import css from 'components/filter/filter.module.css';

const Filter = ({ filter, handleInputFilter }) => (
  <>
    <p className={css['subtitle']}>Find contacts by name</p>
    <input
      className={css['inputSearchName']}
      type="text"
      name="filter"
      // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={filter}
      onChange={handleInputFilter}
    />
  </>
);

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInputFilter: PropTypes.func.isRequired,
};
