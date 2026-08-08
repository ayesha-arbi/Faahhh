import Hero from "../Components/hero";
import Navbar from "../Components/Navbar";
import ContactImg from "../assets/4.jpg"
import Footer from "../Components/Footer"
import ContactForm from "../Components/ContactForm";
function Contact(){
    return(
        <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={ContactImg}
      title="Contact"
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
    )

}

export default Contact;