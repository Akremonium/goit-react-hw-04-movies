import styles from "./Search.module.scss";

const Search = ({ query, onSubmit, onChange }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={onChange}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
