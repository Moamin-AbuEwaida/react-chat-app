import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import './App.css';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
        height="100vh"
        projectID="0d144208-ee3d-4e38-9595-2f0dc8575367"
        userName="Mog"
        userSecret="123456"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
