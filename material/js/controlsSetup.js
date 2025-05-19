import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getCamera, getRenderer } from './sceneSetup.js';

let controls;

function setupControls() {
    const camera = getCamera();
    const renderer = getRenderer();
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Efek pergerakan yang lebih halus
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1.5, 0); // Target orbit di sekitar pusat objek
    controls.update();
    return controls; // Kembalikan instance controls
}

function updateControls() {
    if (controls) {
        controls.update();
    }
}

export { setupControls, updateControls };