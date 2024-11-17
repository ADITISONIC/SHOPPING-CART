import './suggestion.css'

export default function Suggestions({ data, onClick }) {
  return (
    <ul>
      {data && data.length > 0
        ? data.map((item, index) => (
            <li onClick={() => onClick(item)} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
