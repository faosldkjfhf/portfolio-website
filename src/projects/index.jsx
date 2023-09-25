function Projects() {
    return (
        <>
            <div className="text-white text-4xl font-bold">Projects</div>
            <ul className="container mx-auto w-96">
                <li className="font-bold w-full shadow text-lg px-2 py-2 text-gray-400 mt-2 mb-2 rounded-lg bg-gray-800 hover:scale-110">
                    Simple Compute Shader Ray Tracer
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using OpenGL, SDL 2, GLSL, and C++</li>
                    </ul>
                </li>
                <li className="font-bold w-full shadow px-2 py-2 text-gray-400 mt-2 mb-2 rounded-lg bg-gray-800 hover:scale-110">
                    SymFolio
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using React.js, Node.js, and MongoDB</li>
                    </ul>
                </li>
                <li className="font-bold w-full shadow px-2 py-2 text-gray-400 mt-2 mb-2 rounded-lg bg-gray-800 hover:scale-110">
                    Gnome.ttv
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using Unity and C#</li>
                    </ul>
                </li>
                <li className="font-bold w-full shadow px-2 py-2 text-gray-400 mt-2 mb-2 rounded-lg bg-gray-800 hover:scale-110">
                    Just Another Mineday
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using Unity and C#</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Projects;
