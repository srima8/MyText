import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{ useState } from 'react';
import Alert from './components/Alert';


import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';



function App() {
  const [mode ,setMode] = useState('light');
  const [alert ,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03153b';
      showAlert("Dark Mode ON !!","success");
        
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode ON !!","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="MyText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <Switch >
          <Route exact path="/about">
            <About/>
            
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Here Write Something" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    
  
    {/*<div className='container'><About  heading = "About Us"/></div>*/}
    </>
  );
}

export default App;
