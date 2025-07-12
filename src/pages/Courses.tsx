
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, BarChart3, Brain, Table } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#CCFF66] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Learning Programs
          </h1>
          <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto">
            Curated courses designed to get you job-ready in record time
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
                      Explore Course
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
