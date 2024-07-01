import React from "react";
import Feed from '@/components/Feed';

const page = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover AI Prompt
          <br className="mx-md:hidden" />
          <span className="orange_gradient">AI-Powered Prompts</span>
        </h1>

        <p className="desc text-center">
          PromptHead is a modern open-source AI prompting tool for making the
          prompting journey easier
        </p>

        <Feed />
      </section>
    </div>
  );
};

export default page;
