import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initialPortfolioData } from './data/portfolioData';

function App() {
  const data = initialPortfolioData;

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Top Clean Navbar */}
      <Navbar
        personalInfo={data.personalInfo}
        hasProjects={data.projects && data.projects.length > 0}
        hasExperience={data.experience && data.experience.length > 0}
        hasSkills={Boolean(data.skills)}
        hasEducation={data.education && data.education.length > 0}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero
          personalInfo={data.personalInfo}
          stats={data.stats}
        />

        <About
          personalInfo={data.personalInfo}
        />

        <Skills
          skills={data.skills}
        />

        <Projects
          projects={data.projects}
        />

        <Experience
          experience={data.experience}
        />

        <Education
          education={data.education}
          achievements={data.achievements}
          areasOfInterest={data.areasOfInterest}
        />

        <Contact
          personalInfo={data.personalInfo}
        />
      </main>

      {/* Footer */}
      <Footer personalInfo={data.personalInfo} />
    </div>
  );
}

export default App;
