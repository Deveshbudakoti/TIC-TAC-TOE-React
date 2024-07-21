export function Square({ value, onsquareclick }) {
    return (
      <button onClick={onsquareclick} className="square">
        {value}
      </button>
    );
  }

