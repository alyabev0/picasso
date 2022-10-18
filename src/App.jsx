import { useState } from 'react';
import axios from "axios"

import FormField from './components/FormField';
import Input from './components/Input';

import './styles/reset.css'
import './styles/App.css';
import './styles/FormField.css'
import './styles/Input.css'
import './styles/SliceContainer.css'
import './styles/Slice.css'


function App() {
  
  return (
    <div className="app">

      <FormField>
        <Input></Input>
      </FormField>

    </div>
  );
}

export default App;