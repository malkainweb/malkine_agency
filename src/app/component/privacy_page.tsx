import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">MALKAIN</h1>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

        {/* 1. Introduction */}
        <h3 className="text-xl font-bold mt-6 mb-2">1. Introduction</h3>
        <p>
          Malkain (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
          committed to protecting the privacy of our clients, prospective
          clients, and website visitors. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your personal information when
          you interact with our services, website, or communications.
        </p>
        <p className="mt-3">
          By providing your information to us or consenting to receive
          communications from us, you agree to the terms of this Privacy Policy.
        </p>

        {/* 2. Information We Collect */}
        <h3 className="text-xl font-bold mt-6 mb-2">
          2. Information We Collect
        </h3>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            Name and contact information (email address, phone number, business
            name)
          </li>
          <li>
            Project details and service inquiries submitted through our forms
          </li>
          <li>Appointment and scheduling information</li>
          <li>Communication preferences</li>
          <li>Website usage data (IP address, browser type, pages visited)</li>
        </ul>

        {/* 3. How We Use Your Information */}
        <h3 className="text-xl font-bold mt-6 mb-2">
          3. How We Use Your Information
        </h3>
        <p>We use your personal information for the following purposes:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            To respond to inquiries and provide information about our web design
            services
          </li>
          <li>To schedule and confirm appointments and consultations</li>
          <li>To send appointment reminders and follow-up communications</li>
          <li>To deliver services and manage client projects</li>
          <li>To improve our services and customer experience</li>
          <li>To comply with applicable laws and regulations</li>
        </ul>

        {/* 4. SMS and Text Message Communications */}
        <h3 className="text-xl font-bold mt-6 mb-2">
          4. SMS and Text Message Communications
        </h3>
        <p>
          By providing your mobile phone number and consenting to receive SMS
          communications from Malkain, you agree to receive text messages
          related to appointment confirmations, reminders, project updates, and
          follow-up communications regarding our services.
        </p>
        <p className="mt-3">
          <strong>Opt-In:</strong> You will only receive SMS messages from us if
          you have expressly opted in by submitting your phone number and
          consenting to receive text communications through our intake forms or
          other consent mechanisms.
        </p>
        <p className="mt-3">
          <strong>Opt-Out:</strong> You may opt out of receiving SMS messages at
          any time by replying STOP to any message you receive from us. After
          opting out, you will no longer receive SMS communications unless you
          re-subscribe.
        </p>
        <p className="mt-3">
          <strong>Message Frequency:</strong> Message frequency may vary
          depending on your interaction with our services. Standard message and
          data rates may apply.
        </p>
        <p className="mt-3 font-semibold">
          Text messaging originator opt-in data and consent will not be shared
          with any third parties, excluding aggregators and providers of the
          Text Message services.
        </p>

        {/* 5. How We Share Your Information */}
        <h3 className="text-xl font-bold mt-6 mb-2">
          5. How We Share Your Information
        </h3>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties. We may share your information only in the following
          circumstances:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            With service providers who assist us in operating our business (such
            as email and SMS delivery platforms, scheduling tools, and CRM
            software), solely for the purpose of providing services on our
            behalf
          </li>
          <li>When required by law, regulation, or legal process</li>
          <li>
            To protect the rights, property, or safety of Malkain, our clients,
            or others
          </li>
        </ul>

        {/* 6. Data Retention */}
        <h3 className="text-xl font-bold mt-6 mb-2">6. Data Retention</h3>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, maintain our
          business records, and comply with applicable legal obligations. When
          your information is no longer needed, we will securely delete or
          anonymize it.
        </p>

        {/* 7. Data Security */}
        <h3 className="text-xl font-bold mt-6 mb-2">7. Data Security</h3>
        <p>
          We implement reasonable administrative, technical, and physical
          safeguards to protect your personal information from unauthorized
          access, disclosure, alteration, or destruction. However, no method of
          transmission over the internet or electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>

        {/* 8. Your Rights */}
        <h3 className="text-xl font-bold mt-6 mb-2">8. Your Rights</h3>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            The right to access the personal information we hold about you
          </li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your personal information</li>
          <li>
            The right to opt out of SMS communications at any time by replying
            STOP
          </li>
          <li>
            The right to withdraw consent where processing is based on consent
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us using the
          information provided below.
        </p>

        {/* 9. Cookies and Tracking Technologies */}
        <h3 className="text-xl font-bold mt-6 mb-2">
          9. Cookies and Tracking Technologies
        </h3>
        <p>
          Our website may use cookies and similar tracking technologies to
          enhance your browsing experience, analyze site traffic, and understand
          user behavior. You may disable cookies through your browser settings;
          however, doing so may affect the functionality of certain features on
          our website.
        </p>

        {/* 10. Third-Party Links */}
        <h3 className="text-xl font-bold mt-6 mb-2">10. Third-Party Links</h3>
        <p>
          Our website or communications may contain links to third-party
          websites. We are not responsible for the privacy practices or content
          of those websites. We encourage you to review the privacy policies of
          any third-party sites you visit.
        </p>

        {/* 11. Changes to This Privacy Policy */}
        <h3 className="text-xl font-bold mt-6 mb-2">
          11. Changes to This Privacy Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We will notify you of any
          material changes by updating the effective date at the top of this
          policy. Your continued use of our services after any changes
          constitutes your acceptance of the updated policy.
        </p>

        {/* 12. Contact Us */}
        <h3 className="text-xl font-bold mt-6 mb-2">12. Contact Us</h3>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the handling of your personal information, please
          contact us:
        </p>
        <div className="mt-3 ml-4">
          <p className="font-semibold">Malkain</p>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@malkain.com"
              className="text-blue-600 underline"
            >
              hello@malkain.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.malkain.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.malkain.com
            </a>
          </p>
        </div>

        <hr className="my-8" />
        <p className="text-sm text-gray-500 text-center">
          © 2026 Malkain. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
