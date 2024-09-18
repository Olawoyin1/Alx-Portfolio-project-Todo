import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './Header'
import Form from './Form'
import List from './List'

function App() {
  return (
    <div className="container">
      <div className="image-bg">
        <img src="../Images/bg-desktop-light.jpg" alt=""/>
      </div>
      <div className="main">
        <Header />
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
