import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import WorkPage from '../pages/WorkPage';
import ProfilePage from '../pages/ProfilePage';
import Header from '../components/Common/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
