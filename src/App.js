
import './App.css';
import ButtonComponent from "./ButtonComponent";
import ClassExampleComponent from "./ClassComponent";
import HeaderComponent from "./HeaderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent text="Chose the one you prefer" />
        <ClassExampleComponent
          url="http://placekitten.com/250"
          description="cat"
          borderRadius="circle"
          display="changeDisplay"
        />
        <ClassExampleComponent
          url="https://placedog.net/350"
          description="dog"
          borderRadius="circle"
          display="changeDisplay"
        />
        <ButtonComponent text="cat" />
        <ButtonComponent text="dog" />
      </header>
    </div>
  );
}

export default App;
