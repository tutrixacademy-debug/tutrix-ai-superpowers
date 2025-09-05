import { Button } from "@/components/ui/button";
import { CheckCircle, X, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Learning AI Shouldn't Be{" "}
            <span className="text-gradient-secondary">Boring or Lonely</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most AI courses are just endless videos with no interaction. 
            You watch, you forget, you give up. That's not learning—that's just wasting time.
          </p>
        </div>

        {/* Problem vs Solution Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-4">
                <X className="h-4 w-4" />
                <span className="font-medium">The Old Way</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Why Most AI Learning Fails</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Watch endless boring videos alone",
                "No one to ask when you get stuck",
                "Learn theory but never build anything real",
                "Give up when it gets too hard",
                "Waste months with nothing to show"
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
                <CheckCircle className="h-4 w-4" />
                <span className="font-medium">The Tutrix Way</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">How We Make AI Learning Amazing</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Learn live with expert instructors and peers",
                "Get instant help with our 24/7 support system",
                "Build impressive projects you can show off",
                "Never get stuck—we guide you every step",
                "Create a portfolio that opens doors"
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-card rounded-lg shadow-card glow-on-hover">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Something{" "}
              <span className="text-gradient-primary">Amazing?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of students who've already started their AI journey.
              Your first workshop is just ₹199—less than a movie ticket!
            </p>
            <Button variant="cta" size="xl" className="group">
              Start Building Today
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;