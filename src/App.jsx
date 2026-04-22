import { useEffect, useState } from 'react';
import Abilities from './components/Abilities';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Expirience from './components/Expirience';
import Footer from './components/Footer';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ThemeButton from './components/ThemeButton';
import FeedbackModal from './components/FeedbackModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    const hour = new Date().getHours();
    return hour < 7 || hour >= 21;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  function toggleTheme () {
    setIsDark(cur => !cur)
  }

  return (
    <div className="min-h-screen transition-colors duration-500 bg-main-bg p-4 md:p-8 mb-30">

      <FeedbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <ThemeButton isDark={isDark} onToggleTheme={toggleTheme}/>

      <div className="max-w-3xl mx-auto bg-card-bg shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        
        <aside className="bg-primary-navy dark:bg-black text-white p-8 flex flex-col space-y-12">
          <Header />
          <Contacts />
          <Abilities />
        </aside>

        <main className="md:col-span-2 p-8 md:p-12 space-y-10 text-text-base">
          <AboutMe />
          <Education />
          <Expirience />
        </main>
      </div>

      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
