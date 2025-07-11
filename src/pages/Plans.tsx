
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle, Award, Users, Video, FileText, Briefcase, Target } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹1,499",
      period: "one-time",
      subtitle: "Just enough to get started",
      description: "Perfect for exploring your first program with professional support",
      icon: <Target className="w-8 h-8" />,
      popular: false,
      features: [
        "Access to 1 program of your choice",
        "Industry-recognized certificates",
        "WhatsApp community support",
        "Downloadable resources",
        "Mobile app access",
        "Lifetime access to chosen program"
      ]
    },
    {
      name: "Core",
      price: "₹2,499",
      period: "one-time",
      subtitle: "Everything you need to grow",
      description: "Complete access to all programs with mentor guidance",
      icon: <Award className="w-8 h-8" />,
      popular: true,
      features: [
        "Access to all 4 programs",
        "1-on-1 mentor support sessions",
        "Industry-recognized certificates",
        "WhatsApp community support",
        "Priority support response",
        "Advanced progress tracking",
        "Downloadable resources",
        "Mobile app access"
      ]
    },
    {
      name: "Accelerate",
      price: "₹2,999",
      period: "one-time",
      subtitle: "Launch your career with full support",
      description: "Everything in Core plus career acceleration tools and services",
      icon: <Briefcase className="w-8 h-8" />,
      popular: false,
      features: [
        "Everything in Core plan",
        "Live mentorship sessions",
        "LinkedIn optimization bootcamp",
        "Professional CV/resume support",
        "Internship application toolkit",
        "Mock interview practice sessions",
        "Job placement assistance",
        "Career guidance consultations"
      ]
    }
  ];

  const comparisonFeatures = [
    { feature: "Program Access", starter: "1 Program", core: "All 4 Programs", accelerate: "All 4 Programs" },
    { feature: "Certificates", starter: "✓", core: "✓", accelerate: "✓" },
    { feature: "Community Support", starter: "WhatsApp", core: "WhatsApp + Priority", accelerate: "WhatsApp + Priority" },
    { feature: "Mentor Sessions", starter: "✗", core: "1-on-1 Support", accelerate: "Live + 1-on-1" },
    { feature: "Career Services", starter: "✗", core: "✗", accelerate: "Full Package" },
    { feature: "LinkedIn Bootcamp", starter: "✗", core: "✗", accelerate: "✓" },
    { feature: "Interview Practice", starter: "✗", core: "✗", accelerate: "✓" },
    { feature: "Job Placement", starter: "✗", core: "✗", accelerate: "✓" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#CCFF66] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Choose Your Learning Journey
          </h1>
          <p className="text-xl text-black/70">
            Invest in your future with programs designed to get you job-ready
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg ${
                  plan.popular 
                    ? 'ring-2 ring-black transform scale-105' 
                    : 'shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-black text-white' : 'bg-[#CCFF66] text-black'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-black">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500 mb-2">{plan.subtitle}</p>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-black text-white hover:bg-black/90' 
                        : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Compare Plans
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 border-b">
              <div className="p-4 font-medium text-black">Features</div>
              <div className="p-4 text-center font-medium text-black">Starter</div>
              <div className="p-4 text-center font-medium text-black bg-black text-white">Core</div>
              <div className="p-4 text-center font-medium text-black">Accelerate</div>
            </div>
            
            {comparisonFeatures.map((row, index) => (
              <div key={index} className={`grid grid-cols-4 border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="p-4 font-medium text-gray-900">{row.feature}</div>
                <div className="p-4 text-center text-gray-600">{row.starter}</div>
                <div className="p-4 text-center text-gray-900 font-medium">{row.core}</div>
                <div className="p-4 text-center text-gray-600">{row.accelerate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2 text-black">What's included in the programs?</h3>
              <p className="text-gray-600">
                Each program includes structured learning modules, real-world projects, industry-recognized 
                certificates, and access to our supportive community.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2 text-black">How does mentor support work?</h3>
              <p className="text-gray-600">
                Core and Accelerate plans include 1-on-1 mentor sessions where you can get personalized 
                guidance, career advice, and technical support from industry experts.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2 text-black">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade from Starter to Core or Accelerate at any time. We'll credit your 
                previous payment toward the new plan.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Do you offer job placement guarantees?</h3>
              <p className="text-gray-600">
                Our Accelerate plan includes job placement assistance, interview practice, and career 
                guidance. While we can't guarantee placement, we provide comprehensive support to maximize your success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
