import { useEffect } from "react";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log("hi");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

function Projects() {
  useEffect(() => {
    const hiddenElementsLeft = document.querySelectorAll(".hiddenLeft");
    const hiddenElementsRight = document.querySelectorAll(".hiddenRight");
    hiddenElementsLeft.forEach((el) => observer.observe(el));
    hiddenElementsRight.forEach((el) => observer.observe(el));
  });

  return (
    <div>
      <div className="text-white text-4xl font-bold">Projects</div>
      <ul className="justify-between block mx-auto md:mx-0 md:flex md:flex-col md:items-center md:flex-wrap">
        <li className="mt-3 hiddenLeft grid grid-cols-12 grid-rows-6 list-group-item">
          <div className="col-span-3 row-span-full text-sm">
            October 2023 - Current
          </div>
          <span className="col-span-9 text-white">Portfolio Website</span>
          <ul className="col-span-9 row-span-6 list-inside list-disc text-sm font-medium">
            <li>Built using React, Vite, and Tailwind</li>
          </ul>
        </li>
        <li className="mt-3 hiddenRight grid grid-cols-12 grid-rows-6 list-group-item">
          <div className="col-span-3 row-span-full text-sm">July 2023</div>
          <span className="col-span-9 text-white">
            Simple Compute Shader Ray Tracer
          </span>
          <ul className="col-span-9 row-span-6 list-inside list-disc text-sm font-medium">
            <li>Built using OpenGL, SDL 2, GLSL, and C++</li>
          </ul>
        </li>
        <li className="mt-3 hiddenLeft grid grid-cols-12 grid-rows-6 list-group-item">
          <div className="col-span-3 row-span-full text-sm">April 2023</div>
          <span className="col-span-9 text-white">SymFolio</span>
          <ul className="col-span-9 row-span-6 list-inside list-disc text-sm font-medium">
            <div>
              Social media app that uses the Spotify API to fetch albums and
              tracks for users to rate and post about
            </div>
            <li>Built using React.js, Node.js, and MongoDB</li>
          </ul>
        </li>
        <li className="mt-3 hiddenRight grid grid-cols-12 grid-rows-6 list-group-item">
          <div className="col-span-3 row-span-full text-sm">April 2023</div>
          <span className="col-span-9 text-white">Gnome.ttv</span>
          <ul className="col-span-9 row-span-6 list-inside list-disc text-sm font-medium">
            <li>Built using Unity and C#</li>
          </ul>
        </li>
        <li className="mt-3 hiddenLeft grid grid-cols-12 grid-rows-6 list-group-item">
          <div className="col-span-3 row-span-full text-sm">April 2023</div>
          <span className="col-span-9 text-white">Just Another Mineday</span>
          <ul className="col-span-9 row-span-6 list-inside list-disc text-sm font-medium">
            <li>Built using Unity and C#</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
