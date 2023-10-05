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
        hiddenElementsLeft.forEach((el) => observer.observe(el));
    });

    return (
        <>
            <div className="text-white text-4xl font-bold">Projects</div>
            <ul className="justify-between block mx-auto md:mx-0 md:flex md:flex-col md:items-center md:flex-wrap">
                <li className="hiddenLeft list-group-item">
                    <span className="text-white">Portfolio Website</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using React, Vite, and Tailwind</li>
                    </ul>
                </li>
                <li className="hiddenLeft list-group-item">
                    <span className="text-white">
                        Simple Compute Shader Ray Tracer
                    </span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using OpenGL, SDL 2, GLSL, and C++</li>
                    </ul>
                </li>
                <li className="hiddenLeft list-group-item">
                    <span className="text-white">SymFolio</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using React.js, Node.js, and MongoDB</li>
                    </ul>
                </li>
                <li className="hiddenLeft list-group-item">
                    <span className="text-white">Gnome.ttv</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using Unity and C#</li>
                    </ul>
                </li>
                <li className="hiddenLeft list-group-item">
                    <span className="text-white">Just Another Mineday</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using Unity and C#</li>
                    </ul>
                </li>
                <li className="hiddenLeft list-group-item"></li>
            </ul>
        </>
    );
}

export default Projects;
