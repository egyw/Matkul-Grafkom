import * as THREE from 'three';
import { initScene, getScene, getCamera, getRenderer } from './sceneSetup.js';
import { loadTextures } from './textureLoader.js';
import { createMaterials } from './materialManager.js';
import { createGeometries } from './geometryProvider.js';
import { createObjects } from './objectFactory.js';
import { setupLights } from './lightSetup.js';
import { setupControls, updateControls } from './controlsSetup.js'; // Nama fungsi tetap sama

const clock = new THREE.Clock(); // Untuk deltaTime

function animate() {
    requestAnimationFrame(animate);

    const deltaTime = clock.getDelta(); // Dapatkan waktu sejak frame terakhir

    // Update kontrol dengan deltaTime
    updateControls(deltaTime);

    getRenderer().render(getScene(), getCamera());
}

// Initialize
initScene();

loadTextures(() => {
    createMaterials();
    createGeometries();
    createObjects();
    setupLights();
    setupControls(); // Panggil setupControls baru
    animate();
});