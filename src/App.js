
import Header from './assets/components/header/Header.js';
import Home from './assets/pages/Home'
import { Routes, Route } from 'react-router-dom';
import "./assets/components/main_style/main.scss"
import Footer from './assets/components/footer/Footer.js';
import SearchPage from './assets/pages/SearchPage.js';
import LoginPage from './assets/pages/LoginPage';
import useTheme from "./assets/Hook/theme/UseTheme.js";
import DarkMode from "./assets/components/universal/dark-mode/DarkMode.js";
import TopMoviePage from "./assets/pages/TopMoviePage.js";
import PopularMovie from './assets/pages/PopularMoviePage.js';
import ComingMoviePage from './assets/pages/ComingMoviePage'
import MovieSinglePage from './assets/components/movie/movie-single-page/MovieSinglePage.js';
function App() {

  const { theme, toggleTheme } = useTheme();




  return (

      <div className={`main ${theme}`} id="main">

        <Header theme={theme}  />

        <Routes>
          <Route path='/' element={<Home theme={theme} />}></Route>
          <Route path='/search' element={<SearchPage theme={theme} />}></Route>
          <Route path='/login' element={<LoginPage theme={theme} />}></Route>
          <Route path='/movies'  exact={true} element={<TopMoviePage theme={theme} />}></Route>
          <Route path='/popular' element={<PopularMovie theme={theme} />}></Route>
          <Route path='/upcoming' element={<ComingMoviePage theme={theme} />}></Route>
          <Route path='/movies:id' element={<MovieSinglePage theme={theme} />}></Route>

        </Routes>
        <Footer theme={theme} />
        <DarkMode toggleTheme={toggleTheme} />
      </div>

  );
}

export default App;






