import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import TodoList from './TodoList';

const Home = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos)
  return (
    <div
      class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr class="mt-4" />
        {
          todos.map(todo => <TodoList todo={todo} key={todo.id} />)
        }

        <hr class="mt-4" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;