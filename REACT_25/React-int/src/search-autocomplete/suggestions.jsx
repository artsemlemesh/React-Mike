export default function Sug({handleClick, data }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => <li onClick={handleClick} key={index}> {item}</li>)
        : null}
    </ul>
  );
}
