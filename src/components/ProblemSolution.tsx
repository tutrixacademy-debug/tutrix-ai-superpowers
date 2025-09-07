import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Globe, BookOpen } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            The World is Changing Fast.{" "}
            <span className="text-gradient-secondary">Are You Ready?</span>
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            <p>
              We're living in the age of AI revolution. By 2030, artificial intelligence will transform every industry - from healthcare and finance to entertainment and space exploration. The jobs your parents had? Many won't exist. The careers you'll have? Most haven't been invented yet.
            </p>
            <p>
              Here's the reality: Traditional education isn't keeping up. While you're memorizing facts for tests, the world outside is demanding creativity, problem-solving, and AI literacy. Students who graduate without understanding technology and AI will be left behind.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">The gap is growing every day:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                stat: "85%",
                description: "of jobs in 2030 will require digital and AI skills"
              },
              {
                icon: Target,
                stat: "40%",
                description: "more earnings for students with AI knowledge in their first jobs"
              },
              {
                icon: Globe,
                stat: "Global",
                description: "competition means you're not just competing locally anymore"
              },
              {
                icon: BookOpen,
                stat: "Traditional",
                description: "tutoring focuses on memorization, not future skills"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-card text-center glow-on-hover">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-gradient-primary mb-2">{item.stat}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold mb-6">But here's the good news: You don't have to figure this out alone.</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                What if you could learn from AI experts who understand both today's curriculum AND tomorrow's world? What if your tutor didn't just help you pass exams, but prepared you to thrive in an AI-powered future?
              </p>
              <p className="text-xl font-semibold text-foreground">
                The question isn't whether AI will shape your future. It's whether you'll be ready to shape it back.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Ready to bridge the gap between where you are and{" "}
              <span className="text-gradient-primary">where you need to be?</span>
            </h3>
            <Button variant="cta" size="xl" className="group">
              Start Your AI Journey Today
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;