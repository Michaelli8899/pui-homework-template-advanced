import Navbar from '../partials/NavBar';

import LandingPage from './LandingPage';
import TimeLine from './TimeLine';
function HomePage() {
  return (
    <div>
      <Navbar />
        <main>
            <LandingPage />
            <TimeLine />
        </main>
        
    </div>
  );
}

export default HomePage;