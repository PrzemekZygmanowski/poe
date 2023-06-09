import "./App.css";

import { Layout } from "./vievs/Layout";
import { invoke } from "@tauri-apps/api";

function App() {
  invoke("greet", { name: "World" })
    // `invoke` returns a Promise
    .then(response => console.log(response));

  return (
    <div className='bg-darkSlate_900  h-screen min-h-fit	 flex flex-col items-center'>
      <Layout />
    </div>
  );
}

export default App;
