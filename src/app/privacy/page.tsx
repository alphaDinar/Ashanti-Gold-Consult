import React from 'react';

const DataPrivacy = () => {
  return (
    <section className="px-4 py-10 md:px-16 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Data Privacy Policy</h2>

        <p className="mb-4">
          At <strong>Globyte Solutions</strong>, we are committed to protecting your personal data and privacy. This policy outlines how we collect, use, and safeguard your information when you interact with our website, applications, and services.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
        <p className="mb-4">
          We may collect information such as your name, email address, phone number, business details, and usage data when you contact us, request a service, or visit our platforms.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
        <p className="mb-4">
          Your data is used to provide and improve our services, communicate with you, and personalize your experience. We do not sell your data to third parties.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Your Rights</h3>
        <p className="mb-4">
          You have the right to access, modify, or delete your personal information at any time. Please contact us if you wish to exercise any of these rights.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
        <p className="mb-2">
          For any data privacy concerns or inquiries, reach out to us:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Phone:</strong> +233 55 842 0368</li>
          <li><strong>Email:</strong> info@globytesolutions</li>
        </ul>

        <p className="text-sm text-gray-600">
          This privacy policy may be updated periodically to reflect changes in our practices or legal requirements.
        </p>
      </div>
    </section>
  );
};

export default DataPrivacy;
