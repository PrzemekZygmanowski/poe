import "./App.css";
import { Avatar } from "./components/Avatar";
import { ChatForm } from "./components/ChatForm";
import { ChatContent } from "./components/ChatContent";
import { invoke } from "@tauri-apps/api";

function App() {
  invoke("greet", { name: "World" })
    // `invoke` returns a Promise
    .then(response => console.log(response));

  return (
    <div className='bg-darkBlue h-screen flex flex-col items-center'>
      {" "}
      <Avatar />
      <ChatContent />
      <ChatForm />
    </div>
  );
}

export default App;
