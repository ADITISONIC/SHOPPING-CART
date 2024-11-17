function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Tictactoe() {
  return (
    <div className="tictactoe">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
