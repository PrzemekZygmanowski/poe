import "./App.css";

import { Layout } from "./vievs/Layout";
import { invoke } from "@tauri-apps/api";

function App() {
  invoke("greet", { name: "World" })
    // `invoke` returns a Promise
    .then(response => console.log(response));

  console.warn(`POE is running on ${import.meta.env.VITE_ENV_NAME} mode`);

  return (
    <div className='bg-darkSlate_900  h-screen flex flex-col items-center'>
      <Layout />
    </div>
  );
}

export default App;
