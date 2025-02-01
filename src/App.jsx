import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import AddWord from './components/AddWord';
import NotFound from './components/NotFound';
import RandomWordSection from './components/RandomWordSection'

function App() {
  // State for dark mode in the App component
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark and light mode in App component
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Set theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <div className='flex flex-col min-h-screen'>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/randomword" element={<RandomWordSection/>} />
      <Route path="/addword" element={<AddWord />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      <Footer />
      </div>
  );
}

export default App;