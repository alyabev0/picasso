import { useState } from 'react';
import axios from "axios"
import SliceContainer from './SliceContainer';


function Input() {
  const [searchResult, setSearchResult] = useState('')

  const inputChangeHandler = (event) => {
    const requestedWord = event.target.value
    if (requestedWord === "") {
      setSearchResult('')
      return
    }

    axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${requestedWord}`).then(res => {
      setSearchResult(res.data)
      console.log(searchResult)
    })
  }

  return (
    <div className="input-container">
      <input className="input" type='text' onChange={inputChangeHandler} placeholder="Ввод..."></input>
      {searchResult.length > 0
        ? <SliceContainer searchResult={searchResult}></SliceContainer>
        : <></>
      }

    </div>
  );
}

export default Input;