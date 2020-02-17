import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contents/ThemeContext';
import AuthContextProvider from './contents/AuthContext';
import BookContextProvider from './contents/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider viber="parent_message">
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>

          <ThemeToggle />
        </AuthContextProvider>

      </ThemeContextProvider>

    </div>
  );
}

export default App;
