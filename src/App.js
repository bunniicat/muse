import './style.css';
import './App.css';
import TopBar from './components/TopBar';
import Weather from './components/Weather';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <TopBar />
      <div className='Apps'>
        <Weather />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
