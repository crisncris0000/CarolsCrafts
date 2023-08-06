import './css/App.css';
import './css/index.css';
import './css/shopping.css';
import './css/add-form.css';
import './css/login.css';
import './css/register.css';
import './css/transaction.css';
import './css/dashboard.css';
import './css/portfolio.css';
import './css/my-cart.css';
import './css/messages.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
