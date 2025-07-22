
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Users, Briefcase, Send, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwl7ijwbADgl8-fsGKc-8-t6TmfUYVkbhuKZP20T2JdxwGRmdpPWL-wIq67VEkPe39F/exec';
    
    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      toast({
        title: "Thanks! Your message was sent.",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch(() => {
      toast({
        title: "Oops! Something went wrong.",
        description: "Please try again later.",
        variant: "destructive"
      });
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactOptions = [
    {
      title: "General Support",
      description: "Questions about courses, accounts, or technical issues",
      icon: <MessageSquare className="w-8 h-8" />,
      email: "support@gradway.com"
    },
    {
      title: "Partnership Inquiries",
      description: "Interested in partnering with Gradway or content collaboration",
      icon: <Users className="w-8 h-8" />,
      email: "partnerships@gradway.com"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom learning solutions for your organization",
      icon: <Briefcase className="w-8 h-8" />,
      email: "enterprise@gradway.com"
    },
    {
      title: "Media & Press",
      description: "Press inquiries and media requests",
      icon: <Mail className="w-8 h-8" />,
      email: "press@gradway.com"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "123 Learning Street, Education District, San Francisco, CA 94105"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Monday - Friday, 9:00 AM - 6:00 PM PST"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#CCFF66] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-black/70">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#CCFF66] rounded-full flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <a 
                    href={`mailto:${option.email}`}
                    className="text-sm text-black hover:underline font-medium"
                  >
                    {option.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-black font-medium">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-black font-medium">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-black font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-black font-medium">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-black">Visit Our Office</h2>
              
              <div className="space-y-6 mb-8">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-[#CCFF66] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">{info.label}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Interactive map coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-0 shadow-lg mt-6 bg-[#CCFF66]">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-black mx-auto mb-3" />
                  <h3 className="font-bold text-black mb-2">Quick Response Guarantee</h3>
                  <p className="text-black/70">
                    We respond to all inquiries within 24 hours during business days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Looking for Quick Answers?
          </h2>
          <p className="text-gray-600 mb-8">
            Check out our frequently asked questions or browse our help center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Visit Help Center
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
