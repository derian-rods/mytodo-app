import React from 'react';
import ToolBar from './components/ToolBar';
import Todo from './components/Todo';
import Footer from './components/Footer';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <nav>
        <ToolBar />
      </nav>
      <main>
        <Todo />
        <ToastContainer />
      </main>
        <Footer />
    </>

  );
}

export default App;
