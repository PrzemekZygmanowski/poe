import "./App.css";

import { Layout } from "./vievs/Layout";
import { invoke } from "@tauri-apps/api";

function App() {
  invoke("greet", { name: "World" })
    // `invoke` returns a Promise
    .then(response => console.log(response));

  return (
    <div className='bg-darkBlue min-h-full flex flex-col items-center'>
      <Layout />
    </div>
  );
}

export default App;
