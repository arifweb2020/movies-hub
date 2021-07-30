import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router,  Route } from 'react-router-dom'
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import MoviesDetails from './Pages/MoviesDetails/MoviesDetails';


function App() {

  return (
    <Router>
      <Nav />
      <div className="container all-page-view">
        
        <Route exact path="/" component={Trending} />
        <Route  path="/movies-list" component={Movies} />
        <Route  path="/tv-series-list" component={Series} />
        <Route  path="/search-list" component={Search} />
        <Route  path="/movies-detail/:id" component={MoviesDetails} />

      </div>
    </Router>
  );
}

export default App;
