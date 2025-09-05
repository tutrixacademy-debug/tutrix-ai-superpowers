import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Differentiators from "@/components/Differentiators";
import ProjectShowcase from "@/components/ProjectShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Differentiators />
      <ProjectShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
