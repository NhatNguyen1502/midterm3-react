import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Hello from React</h1>
      </div>
      <Search />
    </div>
  );
}
export default App;

