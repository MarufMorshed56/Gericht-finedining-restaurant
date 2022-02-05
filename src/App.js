import React,{useState} from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

export const urlIdContext = React.createContext()

const App = () => {

  const [url, setUrl] = useState('home')

  return (
    <urlIdContext.Provider value={url}>
  <div>
    <Navbar />
    <Header setUrl={setUrl}/>
    <AboutUs setUrl={setUrl} />
    <SpecialMenu setUrl={setUrl} />
    <Chef setUrl={setUrl} />
    <Intro setUrl={setUrl} />
    <Laurels setUrl={setUrl} />
    <Gallery setUrl={setUrl} />
    <FindUs  setUrl={setUrl}/>
    <Footer setUrl={setUrl} />
  </div>
  </urlIdContext.Provider>
  )
};

export default App;
