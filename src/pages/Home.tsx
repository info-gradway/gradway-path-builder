
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Clock, Award, Search, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const learningPaths = [
    { title: "Python Fundamentals", duration: "5 hrs", category: "Programming", level: "Beginner" },
    { title: "Excel Data Analysis", duration: "3 hrs", category: "Data", level: "Intermediate" },
    { title: "Machine Learning Basics", duration: "8 hrs", category: "AI/ML", level: "Beginner" },
    { title: "React Development", duration: "12 hrs", category: "Web Dev", level: "Intermediate" },
    { title: "Digital Marketing", duration: "6 hrs", category: "Marketing", level: "Beginner" },
    { title: "SQL for Beginners", duration: "4 hrs", category: "Database", level: "Beginner" }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Outcome-First Learning",
      description: "Every path is designed with clear job outcomes in mind"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Flexible",
      description: "Choose paths that fit your schedule - 5 minutes to 5 months"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifiable Content",
      description: "Build credible skills with industry-recognized learning"
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
                <Search className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Search Topic</h3>
              <p className="text-gray-600">
                Tell us what you want to learn and we'll find the perfect path for you
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Choose Time</h3>
              <p className="text-gray-600">
                Select how much time you have - from quick 5-minute lessons to comprehensive courses
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Start Path</h3>
              <p className="text-gray-600">
                Follow your personalized learning journey with clear milestones and outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Learning Paths */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Popular Learning Paths
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#CCFF66] text-black text-sm font-medium rounded-full">
                      {path.category}
                    </span>
                    <span className="text-sm text-gray-500">{path.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{path.title}</h3>
                  <p className="text-gray-600 mb-4">Level: {path.level}</p>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                View All Courses
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
