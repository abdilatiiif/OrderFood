/* eslint-disable react/prop-types */
export default function Button({ onClick, children, btnName }) {
  return <button className={`btn ${btnName}`}>{children}</button>;
}
