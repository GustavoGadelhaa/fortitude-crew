import { lazy } from 'react';
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const ProblemsSolutions = lazy(() => import('./components/ProblemsSolutions'));
const Services = lazy(() => import('./components/Services'));
const StepByStep = lazy(() => import('./components/StepByStep'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

import './App.css';

function App() {
  return (
    <>
      <a href="#main" style={{ position: 'absolute', left: '-9999px' }}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TeamSection />
        <ProblemsSolutions />
        <Services />
        <StepByStep />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
