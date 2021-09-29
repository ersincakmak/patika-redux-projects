import CreateForm from "./components/CreateForm";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen pt-10">
      <Header />
      <Search />
      <CreateForm />
      <Notes />
    </div>
  );
}

export default App;
