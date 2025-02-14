import './App.css';
import SingleLinkedListComponent from './components/SingleLinkedListNthElement';
import DoublyLinkedListComponent from './components/DoubleLinkedList';
import QueueComponent from './components/QueueComponent';
import StackComponent from './components/StackComponenet';
import HeapImplmentation from './components/HeapImplementation';

function App() {
  return (
    <div className="App">

      <h3> React DS Challenge  </h3>
      <header className="App-header">
        <SingleLinkedListComponent />
        <DoublyLinkedListComponent />
        <QueueComponent/>
        <StackComponent/>
        <HeapImplmentation/>
      </header>
    </div>
  );
}

export default App;
