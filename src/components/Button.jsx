/* eslint-disable react/prop-types */
export default function Button({ onClick, children, btnName }) {
  return (
    <button onClick={onClick} className={`btn ${btnName}`}>
      {children}
    </button>
  );
}
