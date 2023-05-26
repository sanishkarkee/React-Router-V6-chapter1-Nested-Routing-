import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Layout from './components/Layout';
import PostLayout from './components/PostLayout';
import Home from './components/pages/Home';
import PostDetail from './components/pages/PostDetail';
import Post from './components/pages/Post';

//------ Nested Routing--------------Time: 1:04:45 /Video Link: https://www.youtube.com/watch?v=x25vdOsMaqY

// NOTE: 1) nested routing ko lagi parent route bhitra <Outlet/> use garnu parcha

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />

            <Route path='/post' element={<PostLayout />}>
              <Route path=':category' element={<PostDetail />} />
              <Route index element={<Post />} />
              {/* yo garda <Post/> ra <PostDetails both data show huncha/>*/}
            </Route>

            <Route index element={<Home />} />
            {/* Index le chai parent route ko path share garcha */}
          </Route>

          <Route
            path='*'
            element={<h1>Sorry the page was not found !!!</h1>}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
