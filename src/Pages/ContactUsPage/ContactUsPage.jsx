import { useEffect } from "react";
import ContactUsForm from "../../Components/ContactUsForm/ContactUsForm";
import Footer from "../../Components/Footer/Footer";
import MiniSlider from "../../Components/MiniSlider/MiniSlider";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 75);
  }, []);

  return (
    <div className="max-width contact-us-container">
      <ContactUsForm />
      <MiniSlider />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
