// Item of contact
import PropTypes from 'prop-types';
import css from 'components/item/item.module.css';

const Item = ({ contact, handleContactDelete }) => (
  <>
    <li key={contact.id} className={css['contact-item']}>
      {contact.name} {contact.number}
      <button
        className={css['btnDelete']}
        type="button"
        onClick={() => handleContactDelete(contact.id)}
        name={contact.id}
      >
        Delete
      </button>
    </li>
  </>
);

export default Item;

Item.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleContactDelete: PropTypes.func.isRequired,
};
