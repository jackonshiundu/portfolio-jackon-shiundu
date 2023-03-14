import React from 'react';
import BaseCard from './BaseCard';
import dataanalytics from '../../../assets/dataanalytics.png';
import jaguargraphics from '../../../assets/jaguargraphics.png';
import sambaportfolio from '../../../assets/sambaportfolio.png';
import Teslaclone from '../../../assets/Teslaclone.png';
import education from '../../../assets/education.png';
import Hulu from '../../../assets/hulu.png';
import realtor from '../../../assets/realtor.png';
import crypto from '../../../assets/cryptoverse.png';
const Projects = () => {
  return (
    <div className="flex justify-center">
      <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 w-1/8 gap-7">
        <BaseCard
          type="Web"
          name="Real Estate"
          backgroundImage={realtor}
          code="https://github.com/jackonshiundu/real-estate-app-chakra-ui-nextjs"
          bgcolor="bg-yellow-300"
          link="https://real-estate-app-chakra-ui-nextjs.vercel.app"
        />
        <BaseCard
          type="Web"
          name="Crypto verse"
          backgroundImage={crypto}
          code="https://github.com/jackonshiundu/cryptoverse-react-antd-design"
          bgcolor="bg-slate-600"
          link="https://cryptoverse-react-antd-design.vercel.app"
        />
        <BaseCard
          type="Web"
          name="Tesla Clone"
          backgroundImage={Teslaclone}
          code="https://github.com/jackonshiundu/tesla-clone-reactjs-styledcomponents-"
          arrowhover="bg-blue-300"
          bgcolor="bg-blue-300"
          link="https://tesla-clone-reactjs-styledcomponents.vercel.app"
        />
        <BaseCard
          type="Web"
          name="Portfolio Website"
          backgroundImage={sambaportfolio}
          code="https://github.com/jackonshiundu/portfoliowebsite-html5-sass-css-javascript"
          bgcolor="bg-purple-300"
          link="https://portfoliowebsite-html5-sass-css-javascript.vercel.app"
        />
        <BaseCard
          type="Web"
          name="Data Analytics Website"
          backgroundImage={dataanalytics}
          code="https://github.com/jackonshiundu/datacompanylandingpagewebsite-reactjs-tailwindcss"
          bgcolor="bg-white"
          link="https://datacompanylandingpagewebsite-reactjs-tailwindcss.vercel.app"
        />
        <BaseCard
          type="Web"
          name="Hulu Clone"
          backgroundImage={Hulu}
          code="https://github.com/jackonshiundu/hulu-2.0-clone-tailwind-nextjs-reactjs"
          bgcolor="bg-red-500"
          link=""
        />
        <BaseCard
          type="Web"
          name="Jaguar Graphics"
          backgroundImage={jaguargraphics}
          code="https://github.com/jackonshiundu/Graphicscompanylandingpage-log-in-form"
          bgcolor="bg-orange-300"
          link="https://graphicscompanylandingpage-log-in-form.vercel.app"
        />
        <BaseCard
          type="Web"
          name="Education Website"
          backgroundImage={education}
          code="https://github.com/jackonshiundu/educationwebsite-html-css-javascript"
          bgcolor="bg-green-300"
          link="https://magenta-biscochitos-c210d4.netlify.app"
        />
      </div>
    </div>
  );
};

export default Projects;
