import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, Users, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Programming", "Data Science", "Web Development", "AI/ML", "Marketing", "Design"];

  const courses = [
    {
      title: "Python for Data Science",
      category: "Programming",
      duration: { short: "5 mins", medium: "5 hrs", long: "5 days" },
      outcome: "Build data analysis skills for entry-level positions",
      level: "Beginner",
      rating: 4.8,
      students: 1250,
      tags: ["Python", "Data Analysis", "Pandas"],
      link: "/course/python"
    },
    {
      title: "React Development Mastery",
      category: "Web Development",
      duration: { short: "10 mins", medium: "8 hrs", long: "3 weeks" },
      outcome: "Create modern web applications and land frontend jobs",
      level: "Intermediate",
      rating: 4.9,
      students: 980,
      tags: ["React", "JavaScript", "Frontend"],
      link: "/courses"
    },
    {
      title: "Machine Learning Foundations",
      category: "AI/ML",
      duration: { short: "15 mins", medium: "12 hrs", long: "6 weeks" },
      outcome: "Understand ML concepts for data scientist roles",
      level: "Beginner",
      rating: 4.7,
      students: 750,
      tags: ["Machine Learning", "Python", "Statistics"],
      link: "/course/machine-learning"
    },
    {
      title: "Digital Marketing Strategy",
      category: "Marketing",
      duration: { short: "8 mins", medium: "6 hrs", long: "2 weeks" },
      outcome: "Plan and execute marketing campaigns effectively",
      level: "Beginner",
      rating: 4.6,
      students: 1100,
      tags: ["Marketing", "Strategy", "Analytics"],
      link: "/courses"
    },
    {
      title: "Data Science Fundamentals",
      category: "Data Science",
      duration: { short: "5 mins", medium: "4 hrs", long: "10 days" },
      outcome: "Query databases confidently for analyst positions",
      level: "Beginner",
      rating: 4.8,
      students: 890,
      tags: ["Data Science", "Statistics", "Analysis"],
      link: "/course/data-science"
    },
    {
      title: "Excel Mastery",
      category: "Design",
      duration: { short: "12 mins", medium: "7 hrs", long: "3 weeks" },
      outcome: "Master advanced Excel for business analysis",
      level: "Intermediate",
      rating: 4.5,
      students: 650,
      tags: ["Excel", "Analysis", "Business"],
      link: "/course/excel"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#CCFF66] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Learning Paths
          </h1>
          <p className="text-xl text-black/70 mb-8">
            Curated courses designed to get you job-ready in record time
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search courses, skills, or topics..."
                className="pl-10 py-3 bg-white border-0 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="bg-white border-black text-black hover:bg-black hover:text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === category 
                    ? "bg-black text-white" 
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Link key={index} to={course.link}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-[#CCFF66] text-black">
                        {course.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {course.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-black">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.outcome}</p>
                    
                    {/* Duration Options */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Choose your time:</p>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-gray-100 rounded">{course.duration.short}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">{course.duration.medium}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">{course.duration.long}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students} students
                      </div>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {course.level}
                      </span>
                    </div>
                    
                    <Button className="w-full bg-black text-white hover:bg-black/90">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
