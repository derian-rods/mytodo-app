import React from 'react';
import ToolBar from './components/ToolBar';
import Todo from './components/Todo';
import Footer from './components/Footer';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <>
      <nav>
        <ToolBar />
      </nav>
      <main>
        <NewTodo />
        <Todo />
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
