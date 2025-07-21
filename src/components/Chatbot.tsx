import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses: Record<string, string> = {
    courses: "We offer 4 comprehensive courses: Python Programming, Data Science, Machine Learning, and Excel Mastery. Each course is designed to help you build practical skills for your career! 🚀",
    enroll: "Enrolling is easy! Browse our courses, choose your plan, and get instant access. You can start learning immediately with our flexible monthly or annual subscriptions. 📚",
    certificate: "Yes! You'll receive a certificate of completion for each course you finish. Our certificates are recognized by industry professionals and can boost your career prospects. 🏆",
    career: "Absolutely! We provide career support including resume tips, interview preparation, and job search guidance. Our courses are designed with real-world applications to make you job-ready. 💼",
    price: "We offer flexible pricing plans starting from $29/month. Check out our Plans page for detailed pricing and features. All plans include unlimited access to our course library! 💰",
    support: "Our support team is here to help! You can reach us through this chat, email us, or visit our Help Center for immediate assistance. We typically respond within 24 hours. 🛟"
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('course') || lowerInput.includes('what do you offer')) {
      return predefinedResponses.courses;
    }
    if (lowerInput.includes('enroll') || lowerInput.includes('sign up') || lowerInput.includes('join')) {
      return predefinedResponses.enroll;
    }
    if (lowerInput.includes('certificate') || lowerInput.includes('certification')) {
      return predefinedResponses.certificate;
    }
    if (lowerInput.includes('career') || lowerInput.includes('job') || lowerInput.includes('support')) {
      return predefinedResponses.career;
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('plan')) {
      return predefinedResponses.price;
    }
    if (lowerInput.includes('help') || lowerInput.includes('contact')) {
      return predefinedResponses.support;
    }
    
    return "I'm still learning. Can you ask that differently? You can try asking about our courses, enrollment, certificates, or career support! 🤖";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat first opens
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hi there! 👋 I'm GradBot — Ask me anything about our courses or how we can help you unlock your future!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

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
              <div
                key={message.id}
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