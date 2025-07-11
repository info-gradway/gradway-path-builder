
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Users, BookOpen, Award, Play } from "lucide-react";
import { Link } from "react-router-dom";

const MachineLearningCourse = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="py-4 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <Link to="/courses" className="flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#CCFF66] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Machine Learning Foundations
          </h1>
          <p className="text-xl text-black/70">
            Build intelligent systems and predictive models from scratch
          </p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You'll Learn */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#CCFF66] rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-black">What You'll Learn</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Supervised and unsupervised learning algorithms
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Neural networks and deep learning basics
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Model evaluation and performance metrics
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feature engineering and selection
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Deploying ML models to production
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Who It's For */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#CCFF66] rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-black">Who It's For</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data scientists wanting to expand their skills
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Software engineers entering AI/ML roles
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Product managers working with AI products
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Students pursuing careers in artificial intelligence
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Program Structure */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Program Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Foundations</h3>
                  <p className="text-gray-600 mb-4">ML concepts, algorithms, and mathematics</p>
                  <p className="text-sm text-gray-500">Week 1-3</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Implementation</h3>
                  <p className="text-gray-600 mb-4">Building models with Python and scikit-learn</p>
                  <p className="text-sm text-gray-500">Week 4-6</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Advanced Topics</h3>
                  <p className="text-gray-600 mb-4">Deep learning and model deployment</p>
                  <p className="text-sm text-gray-500">Week 7-8</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-black">Get Certified</h2>
                <p className="text-gray-600 mb-6">
                  Complete the program to earn your Machine Learning Foundations certificate. 
                  Build a portfolio of ML projects that showcase your ability to solve real business problems.
                </p>
                <Button className="bg-black text-white hover:bg-black/90 px-8 py-3">
                  <Play className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningCourse;
