import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Philosophy } from './components/sections/Philosophy';
import { Social } from './components/sections/Social';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Philosophy />
        <Social />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
