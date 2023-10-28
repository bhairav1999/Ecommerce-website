import HeroSection from "./pages/herosection/HeroSection";

const Home = () => {
  const data ={
    name:"Altra Store"
  }
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
