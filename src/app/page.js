
import HeroSection from './component/heroSection';
import Process from './component/process';
import Projects from './component/projects';
import Services from './component/services';
import Testimonial from './component/testimonal';
import Contacts from './component/contacts';
import Nav from './component/navbar';



const Home = () => {

  return (
    <div>
       
      <HeroSection  />
      <Process  />
      <Projects />
      <Services  />
      <Testimonial  />
      <Contacts  />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
