// js/main.js
import { initSceneAndCamera, initRenderer } from './sceneSetup.js';
import { createCube } from './cube.js';
import { startAnimationLoop } from './animation.js';
import { setupResizeHandler } from './resize.js';

function main() {
    const container = document.getElementById('scene-container');
    if (!container) {
        console.error("Container #scene-container tidak ditemukan!");
        return;
    }

    // 1. Inisialisasi Scene dan Kamera
    const { scene, camera } = initSceneAndCamera();

    // 2. Inisialisasi Renderer
    const renderer = initRenderer(container);

    // 3. Buat objek Kubus
    const cube = createCube();
    scene.add(cube); // Tambahkan kubus ke scene

    // Kubus sudah ditaruh di (0,0,0) secara default,
    // dan kamera melihat ke (0,0,0) secara default, jadi sudah di tengah.

    // 4. Atur handler untuk window resize
    setupResizeHandler(camera, renderer);

    // 5. Mulai loop animasi
    // Kita akan menganimasikan kubus, jadi kita masukkan ke array
    startAnimationLoop(renderer, scene, camera, [cube]);
}

// Jalankan fungsi main saat script dimuat
main();