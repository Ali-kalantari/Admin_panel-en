import './App.css';
import { Route,Switch,BrowserRouter  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import UserList from './Pages/Users/UserList';
import Singleuser from './Pages/SingleUser/Singleuser';
import Newuser from './Pages/NewUser/Newuser';
import Productlist from './Pages/Productlist/Productlist';
import Singleproduct from './Pages/SingleProduct/Singleproduct';
import Newproduct from './Pages/Newproduct/Newproduct';
import Reports from './Pages/Reoprts/Reports';
import Notfound from './Pages/Notfound/Notfound';
import financial_report from './Pages/financial_report/financial_report';
import Analytics from './Pages/Analytics/Analytics';
import Sales from './Pages/Sales/Sales';
import Transications from './Pages/Transications/Transications';
import Manage from './Pages/Manage/Manage'
import Mail from './Pages/Mail/Mail';
import Messages from './Pages/Messages/Messages';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    
    <div className='container'>
      <Sidebar />
      <Switch>
        <Route exact path='/'component={Home} />
        <Route exact path='/users' component={UserList}/>
        <Route path='/users/:id' component={Singleuser}/>
        <Route path='/newuser' component={Newuser}/>
        <Route exact path='/productlist' component={Productlist}/>
        <Route path='/productlist/:id' component={Singleproduct}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/financial_report' component={financial_report}/>
        <Route path='/new_product' component={Newproduct}/>
        <Route path='/Transications' component={Transications}/>
        <Route path='/sales' component={Sales}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/mail' component={Mail}/>
        <Route path='/analytics' component={Analytics}/>
        <Route path='/manage' component={Manage}/>
        <Route  component={Notfound}/>
    </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
