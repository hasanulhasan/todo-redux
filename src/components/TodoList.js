import React from 'react';
import { useDispatch } from 'react-redux';
import { colorselected, deleted, toggled } from '../redux/todos/ations';
import updateColor from '../redux/todos/Thank/updateColor';
import updateStatus from '../redux/todos/Thank/updateStatus';
import cancelImg from './../assets/images/cancel.png'

const TodoList = ({ todo }) => {
  const { text, id, completed, color } = todo
  const dispatch = useDispatch();
  const handleStatusChange = (doId) => {
    dispatch(updateStatus(doId, completed))
  }
  const handleColorChange = (doId, color) => {
    dispatch(updateColor(doId, color))
  }
  const handleDelete = (doId) => {
    dispatch(deleted(doId))
  }

  return (
    <div
      class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
    >

      <div
        class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
      >
        <div
          class={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed &&
            'border-green-500 focus-within:border-green-500'}`}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleStatusChange(id)}
            class="opacity-0 absolute rounded-full"
          />
          {
            completed && <svg
              class="fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          }
        </div>

        <div class="select-none flex-1 line-through">
          {text}
        </div>

        <div
          onClick={() => handleColorChange(id, 'green')}
          class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === 'green' && 'border-green-500 hover:bg-green-500 bg-green-500'}`}
        ></div>

        <div
          onClick={() => handleColorChange(id, 'yellow')}
          class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === 'yellow' && 'border-yellow-500 hover:bg-yellow-500 bg-yellow-500'}`}
        ></div>

        <div
          onClick={() => handleColorChange(id, 'red')}
          class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === 'red' && 'border-red-500 hover:bg-red-500 bg-red-500'}`}
        ></div>

        <img
          onClick={() => handleDelete(id)}
          src={cancelImg}
          class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
        />
      </div>
    </div >
  );
};

export default TodoList;