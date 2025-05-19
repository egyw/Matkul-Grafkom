import * as THREE from 'three';
import { initScene, getScene, getCamera, getRenderer } from './sceneSetup.js';
import { loadTextures } from './textureLoader.js';
import { createMaterials } from './materialManager.js';
import { createGeometries } from './geometryProvider.js';
import { createObjects } from './objectFactory.js'; // getBox, getSphere, getPyramid tidak perlu diimport lagi jika tidak dianimasikan
import { setupLights } from './lightSetup.js';
import { setupControls, updateControls } from './controlsSetup.js';

function animate() {
    requestAnimationFrame(animate);

    // Tidak ada rotasi objek di sini lagi
    // const box = getBox();
    // const sphere = getSphere();
    // const pyramid = getPyramid();
    // if (box) box.rotation.y += 0.005;
    // if (sphere) sphere.rotation.y -= 0.003;
    // if (pyramid) pyramid.rotation.y += 0.004;

    updateControls(); // Penting jika enableDamping true
    getRenderer().render(getScene(), getCamera());
}

// Initialize
initScene();

// Muat tekstur dulu, baru buat material dan objek
loadTextures(() => {
    createMaterials();
    createGeometries();
    createObjects(); // Fungsi ini akan membuat dan menambahkan semua objek
    setupLights();
    setupControls();
    animate();
});