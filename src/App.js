import './App.css';
import Header from './components/Header';
import AddTask from './components/taskComponents/AddTask';
import HomeScreen from './components/home/HomeScreen';
import TeamScreen from './components/team/TeamScreen';
import Details from './components/home/Details'
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path="tasks" element={<AddTask />} />
        <Route index element={<HomeScreen/>}/>
        <Route path="team/*" element={<TeamScreen />}/>
        <Route path="details/:pokemon" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
