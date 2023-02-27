import React, { useState } from 'react';
import noteImg from './../assets/images/notes.png'
import tikImg from './../assets/images/double-tick.png'
import plusImg from './../assets/images/plus.png'
import { useDispatch } from 'react-redux';
import { added, allcompleted, clearcompleted } from '../redux/todos/ations';

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput('')
  }
  const completeAll = () => {
    dispatch(allcompleted())
  }
  const clearHandler = () => {
    dispatch(clearcompleted())
  }
  return (
    <div>
      <form
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img
          src={noteImg}
          class="w-6 h-6"
          alt="Add todo"
        />
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          class={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li class="flex space-x-1 cursor-pointer" onClick={completeAll}>
          <img
            class="w-4 h-4"
            src={tikImg}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li class="cursor-pointer" onClick={clearHandler}>Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;