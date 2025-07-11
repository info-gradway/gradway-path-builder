
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Rocket, Award, Globe } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Problem",
      description: "Recognizing that traditional education doesn't prepare learners for real-world jobs",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "The Vision",
      description: "Developing outcome-first learning methodology focused on job readiness",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "First Launch",
      description: "Beta launch with 10 carefully curated learning paths",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Growing Impact",
      description: "Over 10,000 learners successfully transitioned to new careers",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Recognition",
      description: "Industry partnerships and recognition for innovative approach to education",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "Future",
      title: "Global Reach",
      description: "Expanding to serve learners worldwide with localized content",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: "Outcome-First",
      description: "Every learning path is designed with clear job outcomes in mind. We don't just teach theory—we prepare you for real-world success.",
      icon: <Target className="w-12 h-12" />
    },
    {
      title: "Time-Conscious",
      description: "We respect your time. Whether you have 5 minutes or 5 months, we'll create a path that fits your schedule and lifestyle.",
      icon: <Users className="w-12 h-12" />
    },
    {
      title: "Practical Focus",
      description: "Learn by doing, not just watching. Our content emphasizes hands-on experience and real-world application over theoretical knowledge.",
      icon: <Lightbulb className="w-12 h-12" />
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Learners" },
    { number: "200+", label: "Learning Paths" },
    { number: "85%", label: "Job Success Rate" },
    { number: "150+", label: "Partner Companies" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#CCFF66] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Redefining How People Learn
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            At Gradway, we believe learning should be outcome-driven, time-flexible, and 
            directly connected to your career goals. We're on a mission to bridge the gap 
            between education and employment.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To transform the way people learn by creating personalized, outcome-focused 
            educational experiences that directly lead to career success. We're building 
            a world where anyone can go from "What should I learn?" to "I got the job" 
            in the shortest time possible.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mr-6">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-black mr-4">{item.year}</span>
                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Built by Learners, for Learners
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Our team consists of career changers, self-taught professionals, and 
            education innovators who understand the challenges of learning new skills 
            while managing life's demands.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We've experienced the frustration of unclear learning paths, irrelevant content, 
            and the gap between education and employment. That's why we built Gradway—to 
            solve the problems we faced ourselves.
          </p>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            The Future of Learning
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We envision a world where career transitions are seamless, where learning 
            is personalized to your life, and where every educational journey has a 
            clear, achievable outcome. Join us in building this future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
