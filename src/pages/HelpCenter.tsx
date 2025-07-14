
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MessageCircle, Phone } from "lucide-react";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I access my courses after enrollment?",
      answer: "Once enrolled, you'll receive an email with login credentials. Simply log in to your dashboard to access all your course materials, progress tracking, and certificates."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are industry-recognized and accepted by major companies. Each certificate includes verification codes that employers can validate."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely! All courses are self-paced with lifetime access. You can start, pause, and resume your learning journey whenever it suits your schedule."
    },
    {
      question: "What if I need help during a course?",
      answer: "We offer multiple support channels including community forums, direct instructor feedback, and our technical support team available 24/7."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your course, contact us within 30 days for a full refund."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to Gradway's Help Center. Need help? Explore answers to common questions or reach out to our team.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Separator className="my-16" />

        {/* Course Access & Certification */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Course Access & Certification</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              All Gradway courses include lifetime access to course materials, downloadable resources, and community support. 
              Upon completion, you'll receive a verified certificate that can be shared on LinkedIn and with potential employers.
            </p>
            <p>
              Certificates include unique verification codes and are backed by our industry partnerships, ensuring they're 
              recognized by leading companies in tech, finance, and consulting.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Technical Support */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Technical Support</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Having technical issues? Our support team is here to help with platform navigation, video playback, 
              download problems, or any other technical difficulties.
            </p>
            <p>
              Most technical issues are resolved within 2-4 hours during business hours. For urgent matters, 
              please use our priority support channel.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get help via email</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  hello@gradway.com
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat with our team</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Call us directly</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
