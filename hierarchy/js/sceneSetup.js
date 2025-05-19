// js/sceneSetup.js
export function initSceneAndCamera() {
    const scene = new THREE.Scene();

    const fov = 75; // Field of View
    const aspect = window.innerWidth / window.innerHeight; // Aspect ratio
    const near = 0.1; // Near clipping plane
    const far = 100; // Far clipping plane
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // Posisi kamera default, akan di-override di main.js jika perlu
    camera.position.z = 3;

    return { scene, camera };
}

export function initRenderer(container) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    return renderer;
}