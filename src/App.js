import logo from './logo.svg';
import './App.css';
import videoList from './data/video-details.json'
import Header from './components/Header/Header';
import HeroPlayer from './components/HeroPlayer/HeroPlayer';


function App() {
  return (
    <>
    <Header />
    <HeroPlayer videoList= {videoList}/>
    </>
  );
}

export default App;
