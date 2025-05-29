import React from 'react';
export const metadata = {
  title: "Contact - Trimify", 
  description: "Get in touch with Trimify for feedback and support. Contact us via email or phone.We will response you as soon as possible. We are always waiting for your feedback! ", 
  keywords: [
    "contact Trimify",
    "support URL shortener",
    "customer service Trimify",
    "URL shortener help",
    "contact link shortener"
  ],
    alternates:{
    canonicals:"/contact"
  },
   openGraph: {
   title: "Contact - Trimify",
   description:
      "Get in touch with Trimify for feedback and support. Contact us via email or phone.We will response you as soon as possible. We are always waiting for your feedback!",
    url: "/contact",
    siteName: "Trimify",
    images: [
      {
        url: "/og-image.png", // Recommended: 1200x630 og-image instead of favicon
        width: 800,
        height: 600,
        alt: "Trimify logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
    twitter: {
    card: "summary_large_image",
    title: "Contact - Trimify",
    description: "Get in touch with Trimify for feedback and support. Contact us via email or phone.We will response you as soon as possible. We are always waiting for your feedback!",
    images: ["/og-image.png"],
  },
};
const Contact = () => {
  return (
    <main
      className="relative  w-full bg-slate-900 z-2 mx-auto flex p-10"
      aria-label="Main contact section"
      style={{ minHeight: "calc(100vh - 142px)" ,height:"full"}}
    >
      <section
        className="mx-auto bg-slate-900 max-w-4xl w-full text-white z-10 px-10 py-2 flex flex-col items-center gap-4 rounded-xl"
        aria-labelledby="contact-heading"
      >
        <header>
          <h1 id="contact-heading" className="text-3xl font-bold underline mt-8">
            Contact Us
          </h1>
          <p className="font-semibold mt-5 text-xl italic">
            Here are some options through which you can contact us and submit your feedback regarding your
            experience with this URL shortener. We would be happy to hear from you and try to enhance our
            website based on your suggestions.
          </p>
        </header>

        <address className="flex flex-col justify-center items-center gap-4 not-italic">
          <section aria-labelledby="email-heading">
            <h2 id="email-heading" className="text-2xl font-bold text-center underline italic">
              Email
            </h2>
            <p className="text-center text-xl font-bold">
              <a href="mailto:trimify4u@gmail.com" className="hover:underline">
                trimify4u@gmail.com
              </a>
            </p>
          </section>

          <section aria-labelledby="phone-heading">
            <h2 id="phone-heading" className="text-2xl font-bold text-center underline italic">
              Contact Number
            </h2>
            <p className="text-center text-xl font-bold">
              <a href="tel:+923001090277" className="hover:underline">
                +92 300 1090277
              </a>
            </p>
          </section>
        </address>

        <p className="text-xl font-extrabold text-center">
          We are always waiting for your feedback!
        </p>
      </section>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
    </main>
  );
};

export default Contact;
