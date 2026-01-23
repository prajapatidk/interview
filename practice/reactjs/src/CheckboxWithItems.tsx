const CheckboxWithItems = () => {
  const items = ["Play Cricket", "Play game", "Play kabbadi"];
  return (
    <>
      {items.map((item, index) => (
        <>
          <input
            type="radio"
            name="game"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            value={item}
            key={index}
          />
          <label htmlFor="">{item}</label>
          <button>X</button>
          <br />
        </>
      ))}
    </>
  );
};

export default CheckboxWithItems;
