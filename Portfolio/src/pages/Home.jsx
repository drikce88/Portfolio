import Nav from "../components/Nav/Nav.jsx";
import About from "../components/About/About.jsx";
import LoaderMatrix from "../components/Loader/LoaderMatrix.jsx";
import Skills from "../components/Skills/Skills.jsx";


const Home = () => {

    return (
        <>
        <LoaderMatrix />
        <Nav />
        <About />
        <Skills />
        </>
    )
}
export default Home;