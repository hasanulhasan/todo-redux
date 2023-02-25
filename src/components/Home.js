import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import TodoList from './TodoList';

const Home = () => {
  return (
    <div
      class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr class="mt-4" />
        <TodoList />
        <hr class="mt-4" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;