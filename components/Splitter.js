export const Splitter = ({ children }) => {
  return (
    <div>
      {children.split('').map((char, i) => {
        return (
          <span
            key={i}
            className={/\s/.test(char) ? 'whitespace' : 'char'}
            style={{ ['--char-index']: i }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};
