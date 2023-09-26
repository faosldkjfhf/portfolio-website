function Projects() {
    return (
        <>
            <div className="text-white text-4xl font-bold">Projects</div>
            <ul className="justify-between block mx-auto md:mx-0 md:flex md:flex-wrap">
                <li className="list-group-item">
                    <span className="text-white">
                        Simple Compute Shader Ray Tracer
                    </span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using OpenGL, SDL 2, GLSL, and C++</li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <span className="text-white">SymFolio</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using React.js, Node.js, and MongoDB</li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <span className="text-white">Gnome.ttv</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using Unity and C#</li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <span className="text-white">Just Another Mineday</span>
                    <ul className="list-inside list-disc text-sm font-medium">
                        <li>Built using Unity and C#</li>
                    </ul>
                </li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
            </ul>
        </>
    );
}

export default Projects;
