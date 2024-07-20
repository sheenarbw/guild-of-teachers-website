import { title, tagLine } from "./common";

export default function Home() {
  return (
    <div className="space-y-10">
      <h1 className="text-6xl font-bold text-center">
        Welcome to <span>{title}</span>
      </h1>

      <p className="mt-4 text-4xl text-center">
        {tagLine}
      </p>

      <div className="flex flex-wrap max-w-4xl mt-6 sm:w-full gap-4 text-2xl">
        <p>
          We are a friendly and curious community dedicated to spreading evidence-based education techniques and best practices. Our mission is to empower individuals who are passionate about teaching.
        </p>
        <p>
          Our mission is to amplify the effects of teachers. To empower those who empower others.
        </p>
        <p>
          Our initial focus will be on software development training in Python. Initially we will work to amplify the impact of existing community-run Python training.
        </p>
      </div>

      <div className="text-center">

        <a
          href="/about"
          className="text-2xl font-bold underline hover:text-gray-600 focus:text-gray-600 "
        >
          Find out more
        </a>
      </div>
    </div>
  );
}
