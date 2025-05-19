import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getCamera, getRenderer } from './sceneSetup.js';

let controls;

function setupControls() {
    const camera = getCamera();
    const renderer = getRenderer();
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1.5, 0);

    // --- Aktifkan Auto Rotate ---
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5; // Kecepatan rotasi. Nilai positif berputar ke kiri, negatif ke kanan.
                                     // Defaultnya adalah 2.0. Kita buat lebih lambat.
    // -----------------------------

    controls.update(); // Panggil update sekali setelah konfigurasi awal
    return controls;
}

function updateControls() {
    if (controls) {
        controls.update(); // update() harus dipanggil di loop animasi agar autoRotate dan damping bekerja.
    }
}

export { setupControls, updateControls };