import * as THREE from 'three';

let scene, camera, renderer;

function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Posisi awal kamera untuk OrbitControls
    camera.position.set(0, 6, 12);
    camera.lookAt(0, 1.5, 0); // Pastikan target orbit controls sinkron dengan ini

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function getScene() { return scene; }
function getCamera() { return camera; }
function getRenderer() { return renderer; }

export { initScene, getScene, getCamera, getRenderer };