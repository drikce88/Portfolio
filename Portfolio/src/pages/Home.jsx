import Nav from "../components/Nav/Nav.jsx";
import About from "../components/About/About.jsx";
import LoaderMatrix from "../components/Loader/LoaderMatrix.jsx";



const Home = () => {

    return (
        <>
        <LoaderMatrix />
        <Nav />
        <About />
        </>
    )
}
export default Home;