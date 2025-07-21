import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  phone: string;
  interest: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({ name: '', email: '', phone: '', interest: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('gradbot-messages');
    if (savedMessages && isOpen) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: any) => ({ ...msg, timestamp: new Date(msg.timestamp) })));
      } catch (error) {
        console.error('Error loading saved messages:', error);
      }
    }
  }, [isOpen]);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('gradbot-messages', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message and quick options
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hi there! 👋 I'm GradBot — Ask me anything about our courses or how we can help you unlock your future!",
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      };
      
      const quickOptions: Message = {
        id: 'quick-options',
        text: "🎓 What brings you here today?",
        isUser: false,
        timestamp: new Date(),
        type: 'buttons',
        buttons: [
          { text: '📚 Explore Courses', action: 'courses' },
          { text: '🎯 Get Mentorship', action: 'mentorship' },
          { text: '💼 Find Jobs', action: 'jobs' }
        ]
      };
      
      setMessages([welcomeMessage, quickOptions]);
    }
  }, [isOpen, messages.length]);

  const handleButtonClick = (action: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: action === 'courses' ? 'Explore Courses' : action === 'mentorship' ? 'Get Mentorship' : 'Find Jobs',
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      let response = '';
      let followUpButtons: Array<{ text: string; action: string }> = [];

      switch (action) {
        case 'courses':
          response = "Great choice! 🚀 We offer 4 comprehensive courses: Python Programming, Data Science, Machine Learning, and Excel Mastery. What interests you most?";
          followUpButtons = [
            { text: 'Python Programming', action: 'python' },
            { text: 'Data Science', action: 'data-science' },
            { text: 'Machine Learning', action: 'ml' },
            { text: 'Excel Mastery', action: 'excel' }
          ];
          break;
        case 'mentorship':
          response = "Perfect! 💡 Our mentorship programs provide personalized guidance for your career growth. What area do you need support with?";
          followUpButtons = [
            { text: 'Career Guidance', action: 'career-guidance' },
            { text: 'Resume Building', action: 'resume' },
            { text: 'Interview Prep', action: 'interview' },
            { text: 'Skill Development', action: 'skills' }
          ];
          break;
        case 'jobs':
          response = "Excellent! 💼 We help connect our students with job opportunities. What's your current experience level?";
          followUpButtons = [
            { text: 'Fresh Graduate', action: 'fresh' },
            { text: '1-3 Years Experience', action: 'junior' },
            { text: '3+ Years Experience', action: 'senior' },
            { text: 'Career Change', action: 'change' }
          ];
          break;
        default:
          response = "I'd love to help you get started! Let me collect some details so our team can provide personalized assistance.";
          setShowLeadForm(true);
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
        type: followUpButtons.length > 0 ? 'buttons' : 'text',
        buttons: followUpButtons
      };

      setMessages(prev => [...prev, botResponse]);

      // Show lead form for specific actions
      if (['python', 'data-science', 'ml', 'excel', 'career-guidance', 'resume', 'interview', 'skills', 'fresh', 'junior', 'senior', 'change'].includes(action)) {
        setTimeout(() => {
          const leadFormMessage: Message = {
            id: (Date.now() + 2).toString(),
            text: "I'd love to connect you with our team! Please share your details:",
            isUser: false,
            timestamp: new Date(),
            type: 'form'
          };
          setMessages(prev => [...prev, leadFormMessage]);
        }, 1000);
      }

      setIsTyping(false);
    }, 1000);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!leadData.name || !leadData.email || !leadData.interest) {
      return;
    }

    // Here you can send data to webhook, Google Sheets, or database
    console.log('Lead data:', leadData);

    const confirmationMessage: Message = {
      id: Date.now().toString(),
      text: "✅ Thanks! Our team will contact you within 24 hours. In the meantime, feel free to explore our courses!",
      isUser: false,
      timestamp: new Date(),
      type: 'contact'
    };

    setMessages(prev => [...prev, confirmationMessage]);
    setShowLeadForm(false);
    setLeadData({ name: '', email: '', phone: '', interest: '' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const query = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let response = "I'm still learning. Can you ask that differently? You can try asking about our courses, enrollment, certificates, or career support! 🤖";
      
      const lowerInput = query.toLowerCase();
      
      if (lowerInput.includes('course') || lowerInput.includes('what do you offer')) {
        response = "We offer 4 comprehensive courses: Python Programming, Data Science, Machine Learning, and Excel Mastery. Each course is designed to help you build practical skills for your career! 🚀";
      } else if (lowerInput.includes('enroll') || lowerInput.includes('sign up') || lowerInput.includes('join')) {
        response = "Great! I'd love to help you get started. Let me collect some details first.";
        setTimeout(() => {
          const leadFormMessage: Message = {
            id: (Date.now() + 3).toString(),
            text: "Please share your details so we can guide you better:",
            isUser: false,
            timestamp: new Date(),
            type: 'form'
          };
          setMessages(prev => [...prev, leadFormMessage]);
        }, 1000);
      } else if (lowerInput.includes('certificate') || lowerInput.includes('certification')) {
        response = "Yes! You'll receive a certificate of completion for each course you finish. Our certificates are recognized by industry professionals and can boost your career prospects. 🏆";
      } else if (lowerInput.includes('career') || lowerInput.includes('job')) {
        response = "Absolutely! We provide comprehensive career support including resume tips, interview preparation, and job search guidance. Our courses are designed with real-world applications to make you job-ready. 💼";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('plan')) {
        response = "We offer flexible pricing plans starting from $29/month. Check out our Plans page for detailed pricing and features. All plans include unlimited access to our course library! 💰";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const LeadForm = () => (
    <div className="bg-muted/50 p-3 rounded-lg space-y-3">
      <form onSubmit={handleLeadSubmit} className="space-y-3">
        <div>
          <Label htmlFor="name" className="text-xs">Name *</Label>
          <Input
            id="name"
            value={leadData.name}
            onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Your full name"
            className="mt-1 h-8 text-xs"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs">Email *</Label>
          <Input
            id="email"
            type="email"
            value={leadData.email}
            onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your@email.com"
            className="mt-1 h-8 text-xs"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs">Phone</Label>
          <Input
            id="phone"
            value={leadData.phone}
            onChange={(e) => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="Your phone number"
            className="mt-1 h-8 text-xs"
          />
        </div>
        <div>
          <Label htmlFor="interest" className="text-xs">Area of Interest *</Label>
          <Select value={leadData.interest} onValueChange={(value) => setLeadData(prev => ({ ...prev, interest: value }))}>
            <SelectTrigger className="mt-1 h-8 text-xs">
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="python">Python Programming</SelectItem>
              <SelectItem value="excel">Excel Mastery</SelectItem>
              <SelectItem value="machine-learning">Machine Learning</SelectItem>
              <SelectItem value="career-guidance">Career Guidance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" size="sm" className="w-full h-8 text-xs">
          Submit
        </Button>
      </form>
    </div>
  );

  const ContactOptions = () => (
    <div className="bg-muted/50 p-3 rounded-lg space-y-2">
      <p className="text-xs font-medium">Need to talk to a human? 👇</p>
      <div className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start h-8 text-xs"
          onClick={() => window.open('https://wa.me/1234567890?text=Hi! I\'m interested in Gradway courses', '_blank')}
        >
          <MessageSquare className="w-3 h-3 mr-2" />
          WhatsApp Chat
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start h-8 text-xs"
          onClick={() => window.open('https://calendly.com/gradway-team/consultation', '_blank')}
        >
          <Calendar className="w-3 h-3 mr-2" />
          Book a Call
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start h-8 text-xs"
          onClick={() => window.location.href = 'mailto:hello@gradway.com?subject=Inquiry from Website'}
        >
          <Phone className="w-3 h-3 mr-2" />
          Send Email
        </Button>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-background border border-border rounded-lg shadow-lg animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-medium">
                GB
              </div>
              <div>
                <h3 className="font-medium text-sm">GradBot</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-foreground text-background'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
                
                {/* Render buttons for bot messages */}
                {!message.isUser && message.type === 'buttons' && message.buttons && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-2">
                    {message.buttons.map((button, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => handleButtonClick(button.action)}
                      >
                        {button.text}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Render lead form */}
                {!message.isUser && message.type === 'form' && (
                  <div className="mt-2 ml-2">
                    <LeadForm />
                  </div>
                )}

                {/* Render contact options */}
                {!message.isUser && message.type === 'contact' && (
                  <div className="mt-2 ml-2">
                    <ContactOptions />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Animation */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs px-3 py-2 rounded-lg text-sm bg-muted text-foreground">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="h-10 w-10 p-0"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default Chatbot;