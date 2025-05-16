import React from "react";

const About = () => {
  return (
    <>
      <main className="relative min-h-[78vh] w-full bg-slate-900 z-2 mx-auto flex p-10">
        <div className="mx-auto bg-slate-900 max-w-5xl w-full text-white z-10 px-10 py-2 flex flex-col items-center gap-4 rounded-xl">
          <header>
            <h1
              id="about-us-heading"
              className="text-3xl font-bold underline mt-8"
               aria-label="About Trimify section"
            >
              About Trimify
            </h1>
          </header>
          <section>
            <p className="italic text-xl text-gray-200 font-semibold">
              <b>
                
                <b>Trimify </b>
              </b>
              is a modern URL shortener built with the latest Next.js 15
              framework, combining performance with innovation. We've also
              integrated Vibe Coding, powered by ChatGPT, to streamline and
              enhance the development experience.
            </p>
            <p className="italic text-xl text-gray-200 font-semibold">
              Designed for simplicity and ease of use, <b>Trimify </b> ensures a
              comfortable user interface for everyone. For registered users, we
              offer a personalized dashboard where they can manage their links
              and track detailed analytics.
            </p>
            <p className="italic text-xl text-gray-200 font-semibold">
              <b>Trimify </b> is also fully functional for users without an
              account, making it flexible and accessible. Proudly developed in
              Pakistan, this tool is constantly evolving—with new features being
              added over time to make your experience even better.
            </p>
            <p className="italic text-xl text-gray-200 font-semibold">
              Whether you're a casual user or a digital professional,{" "}
              <b>Trimify </b> is your go-to platform for efficient link
              management and tracking
            </p>
          </section>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </main>
    </>
  );
};

export default About;
