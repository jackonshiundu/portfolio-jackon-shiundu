import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './components/Body/projects/Projects';
import Links from './components/Body/Routes/Links';
import Skills from './components/Body/Skills/Skills';
import useDarkMode from './components/darkmode/useDarkMode';
import Footer from './components/footer/Footer';
import Haeder from './components/Heading/Header'
function App() {
  useDarkMode()
  return (
    <div  className=' bg-slate-200 dark:bg-slate-900 h-fit'>
    <BrowserRouter>
    <Haeder/>
    <Links/>
       <Routes>
        <Route path="/" exact element={<Projects/>} />
        <Route path="skills" exact element={<Skills />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
