import * as THREE from "three";
import { useRef, useEffect } from "react";

function Visual() {
    const refContainer = useRef(null);
    useEffect(() => {
        // === THREE.JS CODE START ===
        var height = 600;
        var width = 600;
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0); // the default
        renderer.setSize(width, height);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current &&
            refContainer.current.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return (
        <div
            className="hidden lg:block fixed bg-transparent -z-10"
            ref={refContainer}
        ></div>
    );
}

export default Visual;
