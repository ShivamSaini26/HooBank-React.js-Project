
import './index.css';
// import './script/script';
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Billing from './components/Billing';
import BottomLinks from './components/BottomLinks';
import Business from './components/Business';
import CardDeals from './components/CardDeals';
import Footer from './components/Footer';
import MainBanner from "./components/MainBanner";
import Partners from './components/Partners';
import Testimonials from './components/Testimonial';

// className="ss:w-full sm:max-w-4xl mx-auto" 



function App() {
  return (
    <>
      <div className="">
        <main className=" mygradient2 box-border h-full mx-auto ">
          <Navbar />
          <MainBanner />
          <Analytics />
          <Business />
          <Billing />
          <CardDeals />
          <Testimonials />
          <Partners />
          <BottomLinks />
           <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
