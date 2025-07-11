
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Code, Users, BookOpen, Award, Play } from "lucide-react";
import { Link } from "react-router-dom";

const PythonCourse = () => {
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
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Python for Data Science
          </h1>
          <p className="text-xl text-black/70">
            Master Python programming and build data analysis skills for entry-level positions
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
                    Python fundamentals and data structures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data manipulation with Pandas and NumPy
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data visualization with Matplotlib and Seaborn
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Statistical analysis and hypothesis testing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Real-world project portfolio development
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
                    Complete beginners to programming
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Professionals looking to transition to data roles
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Students preparing for data science careers
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Anyone wanting to automate tasks with Python
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
                  <h3 className="text-xl font-bold mb-2 text-black">Foundation</h3>
                  <p className="text-gray-600 mb-4">Python basics, variables, and control structures</p>
                  <p className="text-sm text-gray-500">Week 1-2</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Data Analysis</h3>
                  <p className="text-gray-600 mb-4">Pandas, NumPy, and data manipulation</p>
                  <p className="text-sm text-gray-500">Week 3-4</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">Projects</h3>
                  <p className="text-gray-600 mb-4">Real-world data analysis projects</p>
                  <p className="text-sm text-gray-500">Week 5-6</p>
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
                  Complete all modules and projects to earn your Python for Data Science certificate. 
                  Industry-recognized credentials that showcase your skills to employers.
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

export default PythonCourse;
