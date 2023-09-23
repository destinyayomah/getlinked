import Navbar from "../components/Navbar"
import Introduction from "../components/Introduction"
import Hero from "../components/Hero"
import Rules from "../components/Rules"
import Judge from "../components/Judge"
import Faq from "../components/Faq"


const Home = () => {
    return <>
        <Navbar />
        <Hero />
        <Introduction />
        <Rules />
        <Judge />
        <Faq />
    </>
}

export default Home