import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Differentiators from "@/components/Differentiators";
import ProjectShowcase from "@/components/ProjectShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed header */}
        <Hero />
        <ProblemSolution />
        <Differentiators />
        <ProjectShowcase />
        <Pricing />
        <Footer />
      <FloatingButton />
    </div>
    </div>
  );
};

export default Index;
