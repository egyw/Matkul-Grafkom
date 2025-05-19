// js/sceneSetup.js
export function initSceneAndCamera() {
    const scene = new THREE.Scene();

    const fov = 75; // Field of View
    const aspect = window.innerWidth / window.innerHeight; // Aspect ratio
    const near = 0.1; // Near clipping plane
    const far = 100; // Far clipping plane
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3; // Posisikan kamera sedikit ke belakang agar kubus terlihat

    return { scene, camera };
}

export function initRenderer(container) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Untuk display retina/high-DPI
    container.appendChild(renderer.domElement);
    return renderer;
}