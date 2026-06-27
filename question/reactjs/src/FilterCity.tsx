import { useState } from "react";

const FilterCity = () => {
  const countries = [
    {
      country: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      country: "Pakistan",
      value: "PK",
      cities: ["Islamabad", "Karachi"],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  return (
    <>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => (
          <option key={index} value={item.value}>
            {item.country}
          </option>
        ))}
      </select>
      <select name="" id="">
        {countries
          .filter((item) => item.value === selectedCountry)[0]
          ?.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select>
    </>
  );
};

export default FilterCity;
