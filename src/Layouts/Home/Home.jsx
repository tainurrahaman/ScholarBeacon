import Banner from "./Banner";
import FAQ from "./FAQ";
import KeyFeatures from "./KeyFeatures";
import Process from "./Process";
import Testimonals from "./Testimonals";
import TopScholarship from "./TopScholarship";
import TypesScholarship from "./TypesScholarship";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Process></Process>
      <KeyFeatures></KeyFeatures>
      <TypesScholarship></TypesScholarship>
      <TopScholarship></TopScholarship>
      <Testimonals></Testimonals>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
