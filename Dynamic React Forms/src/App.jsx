/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { useState } from 'react'

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  })

  const [prompts, setPrompts] = useState([{
    propmt: "",
    answer: "",
    timeStamp: new Date().getTime()
  }])


  const handleInput = (e) => {
    let { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
    console.log(userInfo);
  }

  const handlePrompt = (e, i) => {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = [value];
    setPrompts(newPrompts)
  }

  const handleAddPropmpt = () => {
    setPrompts([...prompts, {
      propmt: "",
      answer: "",
      timeStamp: new Date().getTime()
    }])
  }

  const handleDelete = (i) => {
    let newPrompts = [...prompts];
    newPrompts.splice(i,1);
    setPrompts(newPrompts)
  }

  return (
    <>
      <h1 className='text-3xl my-4 py-2 text-center '>React Forms</h1>

      <form className='w-5/6 max-w-md mx-auto'>
        <fieldset className='flex flex-col border py-3 px-4'>
          <legend className='text-3xl font-semibold text-gray-500'>About</legend>
          <div className='flex flex-col'>
            <label className='text-2xl font-semibold'> What's your name?</label>
            <input
              className='w-4/6 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200 '
              id="firstName" name='firstName' type='text'
              placeholder='First Name' onChange={handleInput} />
            <input
              className='w-4/6 border rounded text-lg leading-tight py-3 px-2 mt-2 mb-4 focus:outline-indigo-200 '
              id="lastName" name='lastName' type='text'
              placeholder='Last Name' onChange={handleInput} />
          </div>

          <div className='flex flex-col'>
            <label className='text-2xl font-semibold'> What's your email?</label>
            <input
              className='w-4/6 border rounded text-lg leading-tight py-3 px-2 mt-2 mb-4 focus:outline-indigo-200 '
              id="email" name='email' type='email'
              placeholder='Enter Your Email' onChange={handleInput} />
          </div>

          <div className='flex flex-col'>
            <label className='text-2xl font-semibold'> What's your date of birth?</label>
            <input
              className='w-4/6 border rounded text-lg leading-tight py-3 px-2 mt-2 mb-4 focus:outline-indigo-200 '
              id="dob" name='dob' type='date' max='2005-01-01'
              placeholder='Date of birth' onChange={handleInput} />
          </div>

          <div className='flex flex-col'>
            <label className='text-2xl font-semibold'> What's your gender</label>
            <select
              className='w-4/6 border rounded text-lg leading-tight py-3 px-2 mt-2 mb-4 focus:outline-indigo-200 '
              name="gender" id="gender" onChange={handleInput}>
              <option> Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

        </fieldset>

        <fieldset className='flex flex-col border mt-5 py-3 px-4'>
          <legend className='text-3xl font-semibold text-gray-500'>Prompts</legend>

          {prompts.map((prompt, i) => (
            <div key={prompt.timeStamp} className='flex flex-col'>
              <label className='text-2xl font-semibold'>Select a Propmt</label>
              <div className='flex flex-row items-center gap-4'>
                <select className='w-4/6 border rounded text-lg leading-tight py-3 px-2 mt-2 mb-4 focus:outline-indigo-200'
                  name='propmt1' id='propmt1' onChange={e => handlePrompt(e, i)}>
                  <option value="Dating me is like...">Dating me is like...</option>
                  <option value="Fact about me that surprises people:">Fact about me that surprises people:</option>
                  <option value="I want someone who...">I want someone who...</option>
                  <option value="I spend most of the money on:">I spend most of the money on:</option>
                  <option value="The most spontaneous thing I've done:">The most spontaneous thing I've done:</option>
                </select>
                <button
                  className='border bg-red-400 mb-1 py-2 px-5 rounded-lg text-white font-bold text-xl'
                  type='button' onClick={()=>handleDelete(i)}>
                  -
                </button>
              </div>
              <textarea
                className='border border-dashed py-3 px-2 mb-4 focus:outline-indigo-200'
                name="answer1" id="answer1" rows={5} placeholder='Let your true colors shine through'
                onChange={e => handlePrompt(e, i)}></textarea>
            </div>
          ))}

          <div className='w-full flex justify-center'>
            <button
              className='border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl'
              type='button' onClick={handleAddPropmpt}>
              Add Prompt</button>
          </div>

        </fieldset>
      </form>

    </>
  )
}

export default App
