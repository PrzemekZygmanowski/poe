import "./App.css";
import { Avatar } from "./components/Avatar";
import { invoke } from "@tauri-apps/api";

function App() {
  invoke("greet", { name: "World" })
    // `invoke` returns a Promise
    .then(response => console.log(response));

  return (
    <div className='bg-darkBlue h-screen'>
      {" "}
      <Avatar />
    </div>
  );
}

export default App;
