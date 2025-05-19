import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getCamera, getRenderer } from './sceneSetup.js';

let controls;

function setupControls() {
    const camera = getCamera();
    const renderer = getRenderer();
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1.5, 0); // Sesuaikan target jika perlu

    // Jika ingin auto rotate, uncomment baris berikut:
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;

    controls.update();
    return controls;
}

function updateControls() {
    if (controls) {
        controls.update();
    }
}

export { setupControls, updateControls };