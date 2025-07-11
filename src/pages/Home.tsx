
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, MapPin, CheckCircle, Briefcase, TrendingUp, Compass, Code, BarChart3, Brain, Table } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const learningPrograms = [
    {
      title: "Python for Data Science",
      tagline: "Master Python from basics to job-ready data analysis",
      icon: <Code className="w-8 h-8" />,
      link: "/course/python",
      category: "Programming"
    },
    {
      title: "Data Science Fundamentals",
      tagline: "Learn statistical analysis and data visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/course/data-science",
      category: "Data Science"
    },
    {
      title: "Machine Learning Foundations",
      tagline: "Build intelligent systems and predictive models",
      icon: <Brain className="w-8 h-8" />,
      link: "/course/machine-learning",
      category: "AI/ML"
    },
    {
      title: "Excel Mastery",
      tagline: "Master advanced Excel for business analysis",
      icon: <Table className="w-8 h-8" />,
      link: "/course/excel",
      category: "Business"
    }
  ];

  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career-Focused",
      description: "Built with mentors to match real job needs"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Outcome-First",
      description: "Every module pushes you toward a real goal"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Structured & Supportive",
      description: "Clear paths. No fluff. Visible progress"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#CCFF66] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Learn what matters.<br />
            <span className="text-black/80">Grow your way.</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/70 mb-8 max-w-3xl mx-auto">
            Gradway guides you with structured learning paths personalized to your time and goals.
          </p>
          <Link to="/courses">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-4 text-lg rounded-full">
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Pick Your Program</h3>
              <p className="text-gray-600">
                Choose a role-aligned learning program (e.g., Data Analyst, Product Associate)
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Follow the Roadmap</h3>
              <p className="text-gray-600">
                Learn through real projects and guided sprints
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Prove Your Skills</h3>
              <p className="text-gray-600">
                Graduate with job-ready outcomes and a portfolio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Programs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {learningPrograms.map((program, index) => (
              <Link key={index} to={program.link}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                      {program.icon}
                    </div>
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {program.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-black">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.tagline}</p>
                    <Button className="w-full bg-black text-white hover:bg-black/90">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Gradway */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Why Gradway?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to transform your career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who've successfully transitioned to their dream jobs
          </p>
          <Link to="/courses">
            <Button size="lg" className="bg-[#CCFF66] text-black hover:bg-[#CCFF66]/90 px-8 py-4 text-lg rounded-full">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
