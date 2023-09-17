
import me from './assets/image/me.jpg';
import './App.css';
import './assets/css/form.css';
import './assets/css/innertabs.css';
import './assets/css/table.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "./component/mainNavbar";
import Login from "./component/login";
import Contactme from "./component/contactme";
import Register from "./component/register";
import 'react-bootstrap/dist/react-bootstrap.min';
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import Home from "./component/home";
import Footermenu from "./component/footermenu";
import Education from "./component/education";
import Myskills from "./component/myskills";
import Blogs from "./component/blogs";
import Projects from "./component/projects";
import Pagenotfound from "./component/pagenotfound";
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Experience from "./component/experience";

function App() {
  return (
      <BrowserRouter basename="/webportfolioui">
          <div className="App">
              <MainNavbar/>
              <Switch>
                  <Route exact  path="/" component={Home}></Route>
                  <Route exact  path="/home" component={Home}></Route>
                  <Route exact  path="/education" component={Education}></Route>
                  <Route exact  path="/experience" component={Experience}></Route>
                  <Route exact  path="/myskills" component={Myskills}></Route>
                  <Route exact  path="/blogs" component={Blogs}></Route>
                  <Route exact  path="/projects" component={Projects}></Route>
                  <Route exact  path="/contactme" component={Contactme}></Route>
                  <Route exact  path="/register" component={Register}></Route>
                  <Route exact  path="/login" component={Login}></Route>
                  <Route component={Pagenotfound} />
              </Switch>
              <Footermenu/>
          </div>
      </BrowserRouter>
  );
}

export default App;
