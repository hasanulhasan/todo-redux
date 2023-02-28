import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../redux/todos/Thank/FetchApi';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import TodoList from './TodoList';

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch();
  // const { status, colors } = filters
  // console.log(status)

  useEffect(() => {
    dispatch(fetchTodos)
  }, [dispatch])

  return (
    <div
      class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr class="mt-4" />
        {
          todos.filter(todo => {
            const { status } = filters;
            // console.log(status)
            switch (status) {
              case 'Completed':
                return todo.completed;
              case 'Incompleted':
                return !todo.completed;
              default:
                return true;
            }
          }).filter(todo => {
            const { colors } = filters;
            if (colors.length > 0) {
              return colors.include(todo?.color)
            }
            else {
              return true
            }
          })
            .map(todo => <TodoList todo={todo} key={todo.id} />)
        }

        <hr class="mt-4" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;