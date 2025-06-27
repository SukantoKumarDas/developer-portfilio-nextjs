import Footer from './components/_templates/Footer';
import Header from './components/_templates/Header';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import TopPage from './components/TopPage';
import ViewCV from './components/ViewCV';

export default function HomePage() {
    return (
        <main>
            <Header></Header>
            <TopPage></TopPage>
            <Education></Education>
            <ViewCV></ViewCV>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </main>
    );
}
