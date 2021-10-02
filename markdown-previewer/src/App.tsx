import ExampleButton from "./components/ExampleButton";
import "./app.scss";
import Header from "./components/Header";
import Previewer from "./components/Previewer";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <ThemeSwitcher />
        <ExampleButton />
      </div>
      <Header />
      <Previewer />
    </div>
  );
}

export default App;
