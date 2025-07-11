
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Target, Crown } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Free Forever",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with outcome-focused learning",
      icon: <Target className="w-8 h-8" />,
      popular: false,
      features: [
        "Access to 20+ free learning paths",
        "Basic progress tracking",
        "Community support",
        "5-minute daily lessons",
        "Mobile app access",
        "Certificate of completion"
      ]
    },
    {
      name: "Pro Learner",
      price: "$29",
      period: "per month",
      description: "Accelerate your career with unlimited access and premium features",
      icon: <Zap className="w-8 h-8" />,
      popular: true,
      features: [
        "Unlimited access to all paths",
        "Personalized learning recommendations",
        "1-on-1 mentor sessions (2 per month)",
        "Advanced progress analytics",
        "Priority community support",
        "Industry-recognized certificates",
        "Offline course downloads",
        "Job placement assistance"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per team",
      description: "Scale learning across your organization with advanced tools",
      icon: <Crown className="w-8 h-8" />,
      popular: false,
      features: [
        "Everything in Pro Learner",
        "Team management dashboard",
        "Custom learning paths",
        "Advanced analytics & reporting",
        "Dedicated customer success manager",
        "SSO integration",
        "API access",
        "White-label options"
      ]
    }
  ];

  const comparisonFeatures = [
    { feature: "Learning Paths", free: "20+", pro: "Unlimited", enterprise: "Custom" },
    { feature: "Progress Tracking", free: "Basic", pro: "Advanced", enterprise: "Enterprise" },
    { feature: "Mentor Sessions", free: "0", pro: "2/month", enterprise: "Unlimited" },
    { feature: "Certificates", free: "Basic", pro: "Industry-recognized", enterprise: "Custom branded" },
    { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated manager" },
    { feature: "Mobile App", free: "✓", pro: "✓", enterprise: "✓" },
    { feature: "Offline Access", free: "✗", pro: "✓", enterprise: "✓" },
    { feature: "Job Placement", free: "✗", pro: "✓", enterprise: "✓" }
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
            Start free forever, upgrade when you're ready to accelerate your career
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
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    {plan.period !== "forever" && (
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
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
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
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
              <div className="p-4 text-center font-medium text-black">Free</div>
              <div className="p-4 text-center font-medium text-black bg-black text-white">Pro</div>
              <div className="p-4 text-center font-medium text-black">Enterprise</div>
            </div>
            
            {comparisonFeatures.map((row, index) => (
              <div key={index} className={`grid grid-cols-4 border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="p-4 font-medium text-gray-900">{row.feature}</div>
                <div className="p-4 text-center text-gray-600">{row.free}</div>
                <div className="p-4 text-center text-gray-900 font-medium">{row.pro}</div>
                <div className="p-4 text-center text-gray-600">{row.enterprise}</div>
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
              <h3 className="text-xl font-bold mb-2 text-black">Is the free plan really free forever?</h3>
              <p className="text-gray-600">
                Yes! Our free plan gives you access to 20+ curated learning paths with no time limits. 
                You can learn at your own pace without any hidden costs.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2 text-black">What makes Gradway different from other platforms?</h3>
              <p className="text-gray-600">
                We focus on outcome-first learning with clear job outcomes for every path. Our content is 
                curated for real-world application, not just theoretical knowledge.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2 text-black">Can I switch plans anytime?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect 
                immediately, and we'll prorate any payments.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, 
                we'll refund your payment, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
