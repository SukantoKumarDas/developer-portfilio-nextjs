import { Metadata } from 'next';
import Footer from './components/_templates/Footer';
import Header from './components/_templates/Header';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TopPage from './components/TopPage';
import ViewCV from './components/ViewCV';
import Divider from './components/_templates/Divider';
import { Profile } from '@/lib/data';

// SEO Metadata
export const metadata: Metadata = {
  title: Profile.name + ' - Portfolio',
  description: Profile.description,
  keywords: Profile.keywords.join(', '),
  authors: [{ name: Profile.name }],
  openGraph: {
    title: Profile.name + ' - Portfolio',
    description: Profile.description,
    type: 'website',
  },
};

export default function HomePage() {
    return (
        <main>
            <Header/>
            <div className='w-full mt-[46px] lg:mt-[68px]'>
                <TopPage/>
                <Skills/>
                <Divider/>
                <Experience/>
                <Divider/>
                <Projects/>
                <Divider/>
                <Education/>
                <Divider/>
                <ViewCV/>
                <Divider/>
                <ContactMe/>
                <Footer/>
            </div>
        </main>
    );
}
