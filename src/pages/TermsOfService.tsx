
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern the use of Gradway. Please review before accessing the platform.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                By accessing and using Gradway's platform, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
              <p>
                These Terms of Service constitute a legal agreement between you and Gradway. 
                We reserve the right to update these terms at any time, and continued use of 
                the platform constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">User Responsibilities</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>As a user of Gradway, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Maintain the security of your password and account</li>
                <li>Use the platform only for lawful purposes</li>
                <li>Respect the intellectual property rights of course creators and Gradway</li>
                <li>Not share your account credentials with others</li>
                <li>Not attempt to reverse engineer or hack the platform</li>
                <li>Engage respectfully with other learners and instructors</li>
              </ul>
              <p>
                You are responsible for all activities that occur under your account and 
                agree to notify us immediately of any unauthorized use.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Course Access and Limitations</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Upon successful enrollment and payment, you will receive access to the purchased 
                course(s) for the duration specified in your plan. Course access includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Streaming access to video content</li>
                <li>Downloadable resources and materials</li>
                <li>Access to course forums and community</li>
                <li>Progress tracking and certificates upon completion</li>
              </ul>
              <p>
                Course content is for your personal, non-commercial use only. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Share, distribute, or resell course content</li>
                <li>Download videos for offline distribution</li>
                <li>Use course materials for commercial training without permission</li>
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Intellectual Property</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                All content on Gradway, including but not limited to text, graphics, logos, 
                images, videos, audio clips, and software, is the property of Gradway or 
                its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not modify, copy, distribute, transmit, display, reproduce, or create 
                derivative works from any content on our platform without explicit written permission.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Termination of Accounts</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We reserve the right to suspend or terminate your account at any time for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violation of these Terms of Service</li>
                <li>Fraudulent or suspicious activity</li>
                <li>Non-payment of fees</li>
                <li>Abuse of the platform or other users</li>
              </ul>
              <p>
                Upon termination, your right to use the platform will cease immediately. 
                You may terminate your account at any time by contacting our support team.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Disclaimers and Legal Limitations</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Gradway provides educational content "as is" without any warranties, express or implied. 
                We do not guarantee that our courses will lead to specific career outcomes or salary increases.
              </p>
              <p>
                To the fullest extent permitted by law, Gradway disclaims all warranties and 
                shall not be liable for any damages arising from the use of our platform, 
                including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
              <p>
                Our total liability to you for any claims arising from these terms or your 
                use of the platform shall not exceed the amount you paid to Gradway in the 
                12 months preceding the claim.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Email: legal@gradway.com<br />
                Address: 123 Learning Street, Education City, EC 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
