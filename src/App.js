import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./Components/page404";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/Create">
             <Create></Create>
           </Route>
           <Route path="/Blogs/:id">
             <BlogDetails></BlogDetails>
           </Route>
           <Route path="/*">
             <Page404></Page404>
           </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
