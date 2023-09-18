import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import Chatpage from "./Pages/Chatpage.js";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </ChatProvider>
    </div>
  );
}

export default App;
