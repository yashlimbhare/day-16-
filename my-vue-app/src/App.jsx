// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/navbar.jsx'
// import Textform from './components/textform.jsx' 
// import About from './components/About.jsx'
// import Alert from './components/Alert.jsx'
// import { use } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// function App() {
    
//   const [mode, setMode] = useState('light')  // whether dark mode is enabled or not

// const [alert , setAlert ] = useState(null)

// const showAlert = (message , type) =>{
//   setAlert({
//     msg: message,
//     type: type  
//   })

//   setTimeout(() => {
//     setAlert(null);
//   }, 1500);

// }

// const red = () =>{
//   showAlert("red color is selected", "success");
//   document.body.style.backgroundColor ='red';
  
// } 


// const togglemode =()=>{
//   if(mode === "light"){
//     setMode('dark');
//     document.body.style.backgroundColor = 'rgb(0 46 77)';
//     showAlert("dark mode is enabled", "success");
//     document.title = "Text Utile - Dark mode"
    
//     // setInterval(() => {
//     //   document.title = "Text Utile - amazing application"  
//     // }, 2000);
//     // setInterval(() => {
//     //   document.title = "Install Text Utile now "  
//     // }, 1500);


//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor = 'white';
//     showAlert("light mode is enabled", "success");
//         document.title = "Text Utile - Light mode"
//   }
// }


//   return (
//     <>
//     <Router>
// <Navbar  title = "2"  about ="text about" mode={mode}  red={red}  togglemode={togglemode} />
// {/* <Navbar   /> */}
// <Alert  alert ={alert} />

// <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
         
//           <Route path="/">
//           <Textform   showAlert= {showAlert} heading = "Text to anylise"   mode={mode}/>
           
//           </Route>
//         </Switch>


        


//  {/* <About/>  */}
//  </Router>
//    </>
//   ) 
// }

// export default App


import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Textform from './components/textform.jsx' 
import About from './components/About.jsx'
import Alert from './components/Alert.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const red = () => {
    showAlert("Red color is selected", "success");
    document.body.style.backgroundColor = 'red';
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0 46 77)';
      showAlert("Dark mode is enabled", "success");
      document.title = "Text Utile - Dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "Text Utile - Light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text utile" about="text about" mode={mode} red={red} togglemode={togglemode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Text to analyse" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
