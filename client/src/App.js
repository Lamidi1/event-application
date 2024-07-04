
import './App.css';
import Admin from './components/Admin';
import SignUp from './components/SignUp';
 import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Venue from './components/Venue';
import Venue2 from './components/Venue2';
import Upcoming from './components/Upcoming';
import Upcoming2 from './components/Upcoming2';
import Services from './components/Services';
import Entertainment from './components/Entertainment';
import Dj from './components/Dj';
import Dj2 from './components/Dj2';
import Mc from './components/Mc';
import Mc2 from './components/Mc2';
import Comedian from './components/Comedian';
import Comedian2 from './components/Comedian2';
import Dancer from './components/Dancer';
import Dancer2 from './components/Dancer2';
import Music from './components/Music';
import Music2 from './components/Music2';
import Sound from './components/Sound';
import Sound2 from './components/Sound2';
import Evt from './components/Evt';
import Evt2 from './components/Evt2';
import All from './components/All';
import All2 from './components/All2';
import Profile from './components/Profile';
import User from './components/User';
import Discovervenue from './components/Discovervenue';
import Discovervenue2 from './components/Discovervenue2';

  import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div >
       <Router>
       <Routes>

        <Route  path='/signup'element={<SignUp/>}/>
        <Route  path='/signin'element={<SignIn/>}/>
       <Route  path='/admin'element={<Admin/>}/>
       <Route  path='/navbar'element={<Navbar/>}/>

       <Route  path='/venue'element={<Venue/>}/>
       <Route  path='/venue2'element={<Venue2/>}/>
       <Route  path='/upcoming'element={<Upcoming/>}/>
       <Route  path='/services'element={<Services/>}/>
         <Route  path='/upcoming2'element={<Upcoming2/>}/>  
       <Route  path='/entertainment'element={<Entertainment/>}/>
       <Route  path='/dj'element={<Dj/>}/>
       <Route  path='/dj2'element={<Dj2/>}/>
       <Route  path='/mc'element={<Mc/>}/>
       <Route  path='/mc2'element={<Mc2/>}/>
       <Route  path='/comedian'element={<Comedian/>}/>
       <Route  path='/comedian2'element={<Comedian2/>}/>
       <Route  path='/dancer'element={<Dancer/>}/>
       <Route  path='/dancer2'element={<Dancer2/>}/>
       <Route  path='/music'element={<Music/>}/>
       <Route  path='/music2'element={<Music2/>}/>
       <Route  path='/sound'element={<Sound/>}/>
       <Route  path='/sound2'element={<Sound2/>}/>
       <Route  path='/evt'element={<Evt/>}/>
       <Route  path='/evt2'element={<Evt2/>}/>
       <Route  path='/all'element={<All/>}/>
       <Route  path='/profile'element={<Profile/>}/>
       <Route  path='/all2'element={<All2/>}/>
       <Route  path='/user'element={<User/>}/>
       <Route  path='/discovervenue'element={<Discovervenue/>}/>
        <Route  path='/discovervenue2'element={<Discovervenue2/>}/> 
       <Route  path='/home'element={<Home/>}/>
       </Routes>
       </Router>     
    
 
     {/* <Admin/>
     <Signup/>
      <Nav/>   */}
       
    </div>

  );
}

export default App;
