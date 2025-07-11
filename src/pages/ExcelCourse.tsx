
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Table, Users, BookOpen, Award, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ExcelCourse = () => {
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
            <Table className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Excel Mastery
          </h1>
          <p className="text-xl text-black/70">
            Master advanced Excel functions, pivot tables, and data analysis
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
                    Advanced formulas and functions (VLOOKUP, INDEX/MATCH, etc.)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pivot tables and pivot charts for data analysis
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data visualization with charts and graphs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Macros and VBA for automation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Financial modeling and business analytics
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
                    Business analysts and financial professionals
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Project managers handling data and reporting
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Students preparing for business roles
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Anyone wanting to become an Excel power user
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Program Structure */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Program Structure</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Functions</h3>
                  <p className="text-gray-600 text-sm">Advanced formulas and lookups</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Analysis</h3>
                  <p className="text-gray-600 text-sm">Pivot tables and data analysis</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Automation</h3>
                  <p className="text-gray-600 text-sm">Macros and VBA programming</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Modeling</h3>
                  <p className="text-gray-600 text-sm">Financial and business models</p>
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
                  Earn your Excel Mastery certificate and demonstrate your advanced spreadsheet 
                  skills with a portfolio of real business analysis projects.
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

export default ExcelCourse;
