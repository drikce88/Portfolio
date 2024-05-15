import Nav from "../components/Nav/Nav.jsx";
import About from "../components/About/About.jsx";
import LoaderMatrix from "../components/Loader/LoaderMatrix.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
const Home = () => {

    return (
        <>
        <LoaderMatrix />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
        
        </>
    )
}
export default Home;