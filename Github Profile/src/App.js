
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Repos from './components/Repos';
import Sp_repo from './components/Sp_repo'

function App() {
  return (
    <div className="App">
      <Header/>
     <div className="con">
     <Profile/>
     <Sp_repo/>
     </div>
  
    </div>
  );
}

export default App;



  