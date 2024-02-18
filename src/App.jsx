import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Slider from "./Components/Slider";
import Product from "./Components/Product";
import SaleBanner from "./Components/SaleBanner";
import './styles/responsive.sass';
import BestSellers from "./Components/BestSellers";
import Footer from "./Components/Footer";
// import LatestNews from "./Components/LatestNews";


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Slider/>
      <Product/>
      <SaleBanner/>
      <BestSellers/>
      {/* <LatestNews/> */}
      <Footer/>
    </>
  );
}

export default App;
