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

// SEO Metadata
export const metadata: Metadata = {
  title: 'Sukanto - Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing web development projects, skills, and experience in React, Next.js, and modern web technologies.',
  keywords: ['web developer', 'full stack', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Sukanto - Portfolio',
    description: 'Professional web developer portfolio',
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
