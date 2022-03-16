import logo from './logo.svg';
import '../src/styles/App.scss';
import NavBar from './components/navBar/navBar';
import { Contador } from './Contador';
import ItemListContainer from './components/itemListContainer';
import RootContainer from './components/rootContainer';
import ItemCount from './components/itemCount';


function App() {
  return (
    <div>

      <RootContainer>
        <NavBar />
        <ItemListContainer></ItemListContainer>
        <ItemCount stock={5} initial={1}></ItemCount>
      {/*     <Contador value={0} date = {Date()}></Contador> */}
      </RootContainer>

    </div>
  );
}

export default App;
