import { useState, useEffect } from 'react'
import UserForm from './components/userform.jsx'
import { createStore } from './formbuilder.jsx'
import './App.css'

function App() {
  const reset = userFormStore((state) => state.resetFormData)
  const resetSchema = createStore((state) => state.resetFormSchema)

  useEffect(() => {
    reset()
    resetSchema() 
  }, [reset, resetSchema])

  return (
    <>
      <div className="App">
        <UserForm /> 
      </div>
    </>
  )
}

export default App