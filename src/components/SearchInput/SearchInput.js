import { useState } from "react";
import { getSuggestionsFromApi } from "./dataloader";
import './SearchInput.scss';



function SearchInput() {
  const [sugerencias, setSugerencias] = useState([]);

  const search = async (event) => {
    const value = event.target.value;
    const results = await getSuggestionsFromApi(value);
    setSugerencias(results);
  };

  const listaSugerencias = sugerencias.map((sugerencia, idx) => (
    <li className="SearchInput-suggestion" key={idx}>{sugerencia}</li>
  ));
  return (
    <div className="SearchInput">
      <div className="SearchInput-wrapper">
        <input
          className="SearchInput-input"
          type="text"
          placeholder="Search your gif"
          onChange={search}
        />
      </div>
      { sugerencias.length > 0 ?
        <div className="SearchInput-suggestionsWrapper">
          <ul className="SearchInput-suggestions">
            {listaSugerencias}
          </ul>
        </div>
        :
        null
      }
    </div>
  );
}

export default SearchInput;



function myUseState(valorInicial) {
  // crea un proxy
  const target = {
    value: valorInicial
  };
  const handler = {
    get(target, name) {
      console.log('Pidieron el dato', name);
      return target[name];
    },
    set (target, name, value) {
      console.log('Cambiaron el dato', name, 'por', value);
      return target[name] = value;
    }
  };
  const p = new Proxy(target, handler)
  const setValue = (value) => {
    p.value = value;
  }
  return [p, setValue]
}

// Simpler useState

function anotherUseState(initialValue) {
  const store = {
    _value: initialValue,
    get value() {
      return this._value;
    }
  };
  const setValue = (newValue) => store.value = newValue;
  return [store.value, setValue];
}
