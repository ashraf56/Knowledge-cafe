import './App.css'
import Navbar from './component/Navbar/Navbar'
import Main from './component/Main/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <div className="App">
<div className='container'>
    <Navbar></Navbar>
<Main></Main>
    <ToastContainer 
    ></ToastContainer>
</div>

 
    </div>
  )
}

export default App
