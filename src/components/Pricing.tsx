import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Crown, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      
      <div className="container mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your AI Journey for{" "}
            <span className="text-gradient-primary">Just ₹199</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Less than the cost of a video game, but this investment will change your future.
            Join thousands of students already building with AI.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card border-2 border-primary/20 rounded-3xl p-8 lg:p-12 shadow-float relative overflow-hidden">
            
            {/* Popular badge */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-bold text-primary-foreground flex items-center gap-2">
                <Crown className="h-4 w-4" />
                Most Popular Choice
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-secondary rounded-full opacity-60 animate-float" />
            <div className="absolute bottom-8 left-8 w-6 h-6 bg-gradient-primary rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Pricing Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    AI Workshop Starter
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl lg:text-6xl font-bold text-gradient-primary">₹199</span>
                    <span className="text-lg text-muted-foreground line-through">₹999</span>
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-bold">80% OFF</span>
                  </div>
                  <p className="text-muted-foreground">
                    First workshop only • Usually ₹999 • Limited time offer
                  </p>
                </div>

                {/* What's included */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">Everything You Need to Get Started:</h4>
                  <div className="space-y-3">
                    {[
                      "2-hour live interactive AI workshop",
                      "Build your first AI chatbot project", 
                      "Expert instructor + small group (max 15 students)",
                      "Complete project code and resources",
                      "24/7 support during the workshop week",
                      "Certificate of completion",
                      "Exclusive access to our student community"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Money back guarantee */}
                <div className="bg-muted/50 p-4 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-accent" />
                    <span className="font-bold">100% Satisfaction Guarantee</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you don't love the workshop, we'll refund every rupee. No questions asked.
                  </p>
                </div>
              </div>

              {/* Right: CTA and Social Proof */}
              <div className="space-y-8">
                
                {/* Main CTA */}
                <div className="space-y-6">
                  <Button variant="cta" size="hero" className="w-full group text-xl">
                    <Zap className="h-6 w-6" />
                    Secure Your Spot - ₹199
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>🔒 Secure payment • Instant access • No hidden fees</p>
                    <p className="mt-1">⏰ Only <span className="text-destructive font-bold">23 spots left</span> this week</p>
                  </div>
                </div>

                {/* Urgency section */}
                <div className="bg-gradient-secondary/10 p-6 rounded-xl border border-secondary/20">
                  <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Why Start Now?
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Next workshop isn't for 2 weeks</li>
                    <li>• Price goes back to ₹999 after this batch</li>
                    <li>• Small groups fill up fast</li>
                    <li>• The best AI projects start with a single step</li>
                  </ul>
                </div>

                {/* Testimonial preview */}
                <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      A
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-2">
                        "I built my first AI in just 2 hours! My friends think I'm some kind of genius now 😎"
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Arjun, Grade 7 • Built AI Chatbot
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternative CTA */}
                <div className="text-center">
                  <Button variant="ghost_glow" size="lg" className="group">
                    Have questions? Chat with us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Still have questions? We've got answers.
          </p>
          <Button variant="ghost" size="lg">
            View FAQ & Parent Info
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;