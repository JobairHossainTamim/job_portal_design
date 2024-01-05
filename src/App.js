import './App.css';
import JobPanel from './components/Job/JobPanel';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='w-[85%] m-auto bg-white '>
      <Navbar />
      <SearchBar />
      <JobPanel />
    </div>
  );
}

export default App;
