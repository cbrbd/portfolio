import {HashRouter, Route, Routes} from 'react-router-dom';

import { Page } from './Components/Page/Page';
import { About } from './Components/Sections/About/About';
import { Experience } from './Components/Sections/Experience/Experience';
import { Skills } from './Components/Sections/Skills/Skills';
import { Projects } from './Components/Sections/Projects/Projects';
import {Test} from "./Components/Test";
import { Contact } from './Components/Sections/Contact/Contact';
import { NotFoundError } from './Components/NotFoundError/NotFoundError';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          <Route path="/test" element={<Test/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="experience" element={<Experience/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFoundError/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
