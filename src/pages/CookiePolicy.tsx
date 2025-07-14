
import { Separator } from "@/components/ui/separator";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gradway uses cookies to enhance your learning experience.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">What Are Cookies?</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Cookies are small text files that are stored on your computer or mobile device 
                when you visit a website. They help websites remember information about your 
                visit, which can make your next visit easier and the site more useful to you.
              </p>
              <p>
                Cookies are widely used to make websites work more efficiently, provide 
                information to the owners of the site, and enhance the user experience.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function and cannot be switched 
                  off in our systems. They are usually only set in response to actions made by 
                  you which amount to a request for services, such as setting your privacy 
                  preferences, logging in, or filling in forms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Performance Cookies</h3>
                <p>
                  These cookies allow us to count visits and traffic sources so we can measure 
                  and improve the performance of our site. They help us to know which pages are 
                  the most and least popular and see how visitors move around the site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Functional Cookies</h3>
                <p>
                  These cookies enable the website to provide enhanced functionality and 
                  personalization. They may be set by us or by third-party providers whose 
                  services we have added to our pages. If you do not allow these cookies, 
                  some or all of these services may not function properly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how visitors interact with our website. 
                  This helps us improve our content and user experience. These cookies collect 
                  information about how you use our site, such as which pages you visit most often.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">How We Use Cookies</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To keep you logged in between sessions</li>
                <li>To remember your course progress and preferences</li>
                <li>To personalize your learning experience</li>
                <li>To analyze website traffic and optimize our platform</li>
                <li>To prevent fraud and improve security</li>
                <li>To deliver relevant content and recommendations</li>
                <li>To support our marketing and advertising efforts</li>
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Managing Cookies</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                You have the right to decide whether to accept or reject cookies. You can 
                exercise your cookie preferences by clicking on the appropriate opt-out links provided below.
              </p>
              
              <h3 className="text-lg font-semibold text-black mb-3">Browser Settings</h3>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. 
                If you choose to reject cookies, you may still use our website, though your 
                access to some functionality and areas may be restricted.
              </p>

              <h3 className="text-lg font-semibold text-black mb-3">Third-Party Cookies</h3>
              <p>
                Some cookies are placed by third-party services that appear on our pages. 
                You can manage these cookies through the third-party's privacy settings:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Opt-out</a></li>
                <li>YouTube: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Privacy Settings</a></li>
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section>
            <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us at:
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

export default CookiePolicy;
