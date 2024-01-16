import { useState, useEffect } from 'react';
import axios from 'axios';

const CountryInfo = ({ country }) => {
  if (!country) {
    return null;
  }
  
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ maxWidth: '200px' }} />
    </div>
  );
};

const CountriesList = ({ countries, selectedCountry }) => {
  if (countries.length < 2 || selectedCountry !== null) {
    return null;
  }

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

const Filter = ({ searchTerm, handleSearchChange }) => (
  <div>
    find countries <input value={searchTerm} onChange={handleSearchChange} />
  </div>
);

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div>
      {message}
    </div>
  )
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [notification, setNotification] = useState(null)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setCountries([]);
      setSelectedCountry(null);
      setNotification(null);
      return;
    }

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        const matches = response.data.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
        if (matches.length > 10) {
          setCountries([]);
          setSelectedCountry(null);
          setNotification("Too many matches, specify another filter");
        } else if (matches.length > 1) {
          setCountries(matches);
          setSelectedCountry(null);
          setNotification(null);
        } else if (matches.length === 1) {
          setCountries([]);
          setSelectedCountry(matches[0]);
          setNotification(null);
        } else {
          setCountries([]);
          setSelectedCountry(null);
          setNotification("No matches found");
        }
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, [searchTerm]);

  return (
    <div>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <CountriesList countries={countries} selectedCountry={selectedCountry} />
      <Notification message={notification} />
      <CountryInfo country={selectedCountry}/>
    </div>
  );
};

export default App;