
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we handle your data, respectfully and transparently.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">What Data We Collect</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                enroll in courses, or contact our support team. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and email address</li>
                <li>Course progress and completion data</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
                <li>Technical information about your device and browser</li>
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our courses and platform</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Personalize your learning experience</li>
                <li>Monitor and analyze usage patterns to improve our services</li>
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Use of Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to track activity on our platform 
                and store certain information. Cookies help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Keep you logged in between sessions</li>
                <li>Analyze how you use our platform</li>
                <li>Provide personalized content recommendations</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies 
                may affect the functionality of our platform.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Third-Party Service Providers</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We work with trusted third-party service providers to deliver our services. 
                These providers have access to your personal information only to perform 
                specific tasks on our behalf and are obligated not to disclose or use it for other purposes.
              </p>
              <p>Our key service providers include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processors for secure transaction handling</li>
                <li>Email service providers for course communications</li>
                <li>Analytics platforms for usage monitoring</li>
                <li>Cloud storage providers for course content delivery</li>
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Your Rights & Data Control</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@gradway.com. 
                We will respond to your request within 30 days.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@gradway.com<br />
                Address: 123 Learning Street, Education City, EC 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
