import react from "react";

function InputBox({ cityName, onCityChange }) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-full">
        <label
          htmlFor="city"
          className="text-black/40 mb-2 inline-block"
        ></label>
        <input
          className="outline-none w-full bg-transparent py-3"
          id="city"
          type="text"
          placeholder="City Name"
          value={cityName}
          onChange={(e) => {
            onCityChange && onCityChange(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default InputBox;
