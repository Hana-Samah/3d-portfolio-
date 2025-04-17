'use client';
import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-white">
      {/* Blur Layer */}
      <div className="absolute top-20 right-0 w-[30rem] h-0 rotate-[-30deg] z-[-1] shadow-[0_0_700px_15px_white]" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center lg:text-left py-10 lg:py-32">
        <p className="text-base sm:text-lg text-gray-600 mb-2 tracking-wide">
          Hi everyone, I’m
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow text-black">
          Hana Samah<br />
          <span className="text-purple-600">Tech-Savvy Developer</span>
        </h1>
        <p className="description-text text-sm sm:text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          I’m a passionate tech enthusiast and developer. Explore my work, skills,
          and the projects I’m proud of in this interactive portfolio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#" className="btn-gradient text-black hover:text-purple-900">
            Documentation &gt;
          </a>
          <a href="#" className="btn-gradient-secondary text-white hover:text-purple-600">
            Get Started &gt;
          </a>
        </div>
      </div>

      {/* 3D Robot */}
      
      <spline-viewer
        className="absolute top-10 right-[-24%] scale-[1.0] "
        url="https://prod.spline.design/ROmZnKMam2QI3ajZ/scene.splinecode"
      />
      

      <style jsx>{`
        .btn-gradient {
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.7rem 1.5rem;
          background: linear-gradient(
            to right,
            #656565,
            #7f42a7,
            #6600c5,
            #5300a0,
            #757575,
            #656565
          );
          background-size: 200%;
          animation: gradientAnimation 2.5s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-gradient-secondary {
          position: relative;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          background: linear-gradient(
            to right,
            #656565,
            #7f42a7,
            #6600c5,
            #5300a0,
            #757575,
            #656565
          );
          background-size: 200%;
          animation: gradientAnimation 2.5s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          font-size: 1.2rem;
          font-weight: 600;
          overflow: hidden;
          z-index: 1;
          text-align: center;
        }

        .btn-gradient-secondary::after {
          content: '';
          position: absolute;
          inset: 3px;
          background-color: black;
          border-radius: 50px;
          z-index: -1;
          transition: 0.3s ease;
        }

        @keyframes gradientAnimation {
          to {
            background-position: 200%;
          }
        }

        @media (max-width: 1024px) {
          .btn-gradient,
          .btn-gradient-secondary {
            font-size: 1rem;
            padding: 0.6rem 1rem;
          }
              .description-text {
    color: black !important;
    text-shadow: 0 0 4px white;
  }
        }

        @media (max-width: 768px) {
          .spline-viewer {
            display: block !important;
            position: relative !important;
            margin-top: 4rem;
            width: 100%;
            transform: scale(1);
            right: auto !important;
          }
              .description-text {
    color: black !important;
    text-shadow: 0 0 4px white;
  }
        }
      `}</style>
    </div>
  );
};

export default Header;
