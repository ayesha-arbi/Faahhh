import Destination from "../Components/Destination";
import Hero from "../Components/hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip"
import Footer from "../Components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero"
      heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4GZFOzRtd5sPiv_sEGJitzpFB0F8bvLKvUBVTrVlcg&s"
      title="Your Journey your Story"
      text="Choose your Favourite Destination"
      buttonText="Travel PLan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;