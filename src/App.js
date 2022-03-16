import logo from './logo.svg';
import '../src/styles/App.scss';
import NavBar from './components/navBar/navBar';
import { Contador } from './Contador';
import ItemListContainer from './components/itemListContainer';
import RootContainer from './components/rootContainer';


function App() {
  return (
    <div>

      <RootContainer>
        <NavBar />
        <ItemListContainer></ItemListContainer>
      {/*     <Contador value={0} date = {Date()}></Contador> */}
      </RootContainer>
    
    </div>
  );
}

export default App;
