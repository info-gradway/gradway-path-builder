import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Send, X, Phone, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text?: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'buttons' | 'form' | 'contact';
  buttons?: Array<{ text: string; action: string }>;
  component?: React.ReactNode;
}

interface LeadData {
  name: string;
  email: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: "👋 Hi there! I'm here to help you explore our courses and career support. What interests you most?",
          isUser: false,
          timestamp: new Date(),
          type: 'buttons',
          buttons: [
            { text: "🎓 Explore Courses", action: "explore_courses" },
            { text: "💼 Career Support", action: "career_support" },
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" }
          ]
        };
        setMessages([welcomeMessage]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleButtonClick = (action: string) => {
    // Add user selection as message
    const actionTexts: { [key: string]: string } = {
      explore_courses: "🎓 Explore Courses",
      career_support: "💼 Career Support", 
      talk_to_human: "👨‍💻 Talk to a Human",
      python_course: "🐍 Python Course",
      data_science: "📊 Data Science",
      excel_course: "📈 Excel Course",
      machine_learning: "🤖 Machine Learning",
      mentorship: "👨‍🏫 Mentorship",
      cv_review: "📄 CV Review",
      mock_interviews: "🗣️ Mock Interviews",
      more_help: "Need More Help"
    };

    if (actionTexts[action]) {
      addMessage({
        text: actionTexts[action],
        isUser: true,
        type: 'text'
      });
    }

    // Generate bot response based on action
    simulateTyping(() => {
      getBotResponse(action);
    });
  };

  const getBotResponse = (action: string) => {
    switch (action) {
      case 'explore_courses':
        addMessage({
          text: "Great choice! 🚀 We offer comprehensive courses in these tech areas. Which one catches your interest?",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "🐍 Python Course", action: "python_course" },
            { text: "📊 Data Science", action: "data_science" },
            { text: "📈 Excel Course", action: "excel_course" },
            { text: "🤖 Machine Learning", action: "machine_learning" }
          ]
        });
        break;

      case 'python_course':
        addMessage({
          text: "🐍 Excellent! Our Python course covers everything from basics to advanced programming, including web development with Django/Flask, automation, and data analysis. Perfect for beginners and those looking to advance their skills!\n\n💰 Course fee: ₹15,000\n⏱️ Duration: 8 weeks\n📚 Includes: Live sessions, projects, and career support",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Courses", action: "explore_courses" }
          ]
        });
        break;

      case 'data_science':
        addMessage({
          text: "📊 Fantastic choice! Our Data Science course includes Python, statistics, machine learning, data visualization, and real-world projects. You'll learn to analyze data and build predictive models!\n\n💰 Course fee: ₹25,000\n⏱️ Duration: 12 weeks\n📚 Includes: Python, SQL, Tableau, ML algorithms, and portfolio projects",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Courses", action: "explore_courses" }
          ]
        });
        break;

      case 'excel_course':
        addMessage({
          text: "📈 Smart pick! Our Excel course covers advanced formulas, pivot tables, data analysis, automation with VBA, and dashboard creation. Essential for any professional!\n\n💰 Course fee: ₹8,000\n⏱️ Duration: 4 weeks\n📚 Includes: Basic to advanced Excel, automation, and real business scenarios",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Courses", action: "explore_courses" }
          ]
        });
        break;

      case 'machine_learning':
        addMessage({
          text: "🤖 Amazing! Our Machine Learning course dives deep into algorithms, neural networks, deep learning, and AI applications. You'll build real ML models!\n\n💰 Course fee: ₹30,000\n⏱️ Duration: 16 weeks\n📚 Includes: Python, TensorFlow, scikit-learn, and industry projects",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Courses", action: "explore_courses" }
          ]
        });
        break;

      case 'career_support':
        addMessage({
          text: "💼 Wonderful! We provide comprehensive career support to help you land your dream job. What specific help do you need?",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍🏫 Mentorship", action: "mentorship" },
            { text: "📄 CV Review", action: "cv_review" },
            { text: "🗣️ Mock Interviews", action: "mock_interviews" },
            { text: "Need More Help", action: "more_help" }
          ]
        });
        break;

      case 'mentorship':
        addMessage({
          text: "👨‍🏫 Our mentorship program pairs you with industry experts who guide you through your career journey, help with technical skills, and provide insider tips for job hunting. Sessions are 1-on-1 and tailored to your goals!",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Career Support", action: "career_support" }
          ]
        });
        break;

      case 'cv_review':
        addMessage({
          text: "📄 Our CV review service includes detailed feedback on content, formatting, ATS optimization, and industry-specific improvements. We'll help your resume stand out to recruiters!",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Career Support", action: "career_support" }
          ]
        });
        break;

      case 'mock_interviews':
        addMessage({
          text: "🗣️ Practice makes perfect! Our mock interviews simulate real job interviews with technical and behavioral questions, followed by detailed feedback to improve your performance.",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Career Support", action: "career_support" }
          ]
        });
        break;

      case 'more_help':
        addMessage({
          text: "We also offer job placement assistance, LinkedIn profile optimization, salary negotiation tips, and industry networking opportunities. Let's discuss your specific needs!",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" },
            { text: "🔙 Back to Career Support", action: "career_support" }
          ]
        });
        break;

      case 'talk_to_human':
        setShowLeadForm(true);
        addMessage({
          text: "Perfect! 👨‍💻 I'd love to connect you with one of our experts. Please share your details below and we'll get back to you within 24 hours:",
          isUser: false,
          type: 'form'
        });
        break;

      default:
        // Handle free text input or unknown actions
        addMessage({
          text: "Thanks for your message! 😊 I'd be happy to help you with information about our courses or career support. You can also speak directly with our team:",
          isUser: false,
          type: 'buttons',
          buttons: [
            { text: "🎓 Explore Courses", action: "explore_courses" },
            { text: "💼 Career Support", action: "career_support" },
            { text: "👨‍💻 Talk to a Human", action: "talk_to_human" }
          ]
        });
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addMessage({
      text: inputValue,
      isUser: true,
      type: 'text'
    });

    const userMessage = inputValue.toLowerCase();
    setInputValue('');

    // Simple keyword-based responses for free text
    simulateTyping(() => {
      if (userMessage.includes('course') || userMessage.includes('learn')) {
        getBotResponse('explore_courses');
      } else if (userMessage.includes('career') || userMessage.includes('job') || userMessage.includes('interview')) {
        getBotResponse('career_support');
      } else if (userMessage.includes('human') || userMessage.includes('talk') || userMessage.includes('speak')) {
        getBotResponse('talk_to_human');
      } else if (userMessage.includes('python')) {
        getBotResponse('python_course');
      } else if (userMessage.includes('data science') || userMessage.includes('data')) {
        getBotResponse('data_science');
      } else if (userMessage.includes('excel')) {
        getBotResponse('excel_course');
      } else if (userMessage.includes('machine learning') || userMessage.includes('ml') || userMessage.includes('ai')) {
        getBotResponse('machine_learning');
      } else {
        getBotResponse('default');
      }
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const leadData: LeadData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };

    console.log('Lead submitted:', leadData);
    
    setShowLeadForm(false);
    
    addMessage({
      text: `Thank you, ${leadData.name}! 🎉 We've received your details and our team will contact you at ${leadData.email} within 24 hours. In the meantime, feel free to explore our website!`,
      isUser: false,
      type: 'contact'
    });

    toast({
      title: "Thank you!",
      description: "We'll be in touch soon!",
    });
  };

  const LeadForm = () => (
    <Card className="w-full max-w-sm mx-auto mt-4">
      <CardContent className="p-4">
        <form onSubmit={handleLeadSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full">
            Connect with Our Team
          </Button>
        </form>
      </CardContent>
    </Card>
  );

  const ContactOptions = () => (
    <div className="space-y-2 mt-4">
      <p className="text-sm text-muted-foreground mb-3">Or reach out directly:</p>
      <div className="flex flex-col gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('https://wa.me/919876543210', '_blank')}
          className="w-full justify-start"
        >
          <Phone className="w-4 h-4 mr-2" />
          WhatsApp: +91 98765 43210
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('https://calendly.com/yourcompany', '_blank')}
          className="w-full justify-start"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book a Call
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('mailto:info@yourcompany.com', '_blank')}
          className="w-full justify-start"
        >
          <Mail className="w-4 h-4 mr-2" />
          info@yourcompany.com
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-background border border-border rounded-lg shadow-lg flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Chat Support</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.text && <p className="text-sm whitespace-pre-line">{message.text}</p>}
                  
                  {message.type === 'buttons' && message.buttons && (
                    <div className="flex flex-col gap-2 mt-3">
                      {message.buttons.map((button, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleButtonClick(button.action)}
                          className="justify-start text-left h-auto py-2 px-3 whitespace-normal"
                        >
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  {message.type === 'form' && showLeadForm && <LeadForm />}
                  {message.type === 'contact' && <ContactOptions />}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full shadow-lg z-40"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </>
  );
};

export default Chatbot;