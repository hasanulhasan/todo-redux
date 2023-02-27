import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filter/actions';

const numberOfToDos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return 'no task'
    case 1:
      return '1 task'
    default:
      return `${no_of_todos} tasks`
  }

}

const Footer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const remainingToDos = todos.filter(todo => !todo.completed).length
  const filters = useSelector(state => state.filters)
  const { status, colors } = filters;

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status))
  }
  const handleColorChanged = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'remove'))
      console.log('remove called')
    }
    else {
      dispatch(colorChanged(color, 'added'))
      console.log('added called')
    }
  }
  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfToDos(remainingToDos)} left</p>
      <ul class="flex space-x-1 items-center text-xs">
        <li onClick={() => handleStatusChanged('All')} class={`cursor-pointer ${status === 'All' && 'font-bold'} `}>All</li>
        <li>|</li>
        <li onClick={() => handleStatusChanged('Incomplete')} class={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
        <li>|</li>
        <li onClick={() => handleStatusChanged('Complete')} class={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}>Complete</li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChanged('green')}
          class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${colors.includes('green') && 'bg-green-500'}`}
        ></li>
        <li
          onClick={() => handleColorChanged('red')}
          class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
        ></li>
        <li
          onClick={() => handleColorChanged('yellow')}
          class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;