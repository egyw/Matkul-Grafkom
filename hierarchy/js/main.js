// js/main.js
import { initSceneAndCamera, initRenderer } from './sceneSetup.js';
import { createCube, createSphere } from './objects.js'; // Impor dari objects.js
import { startAnimationLoop } from './animation.js';
import { setupResizeHandler } from './resize.js';

function main() {
    const container = document.getElementById('scene-container');
    if (!container) {
        console.error("Container #scene-container tidak ditemukan!");
        return;
    }

    const { scene, camera } = initSceneAndCamera();
    // Posisikan kamera agar lebih mirip sudut pandang di gambar
    camera.position.set(1.5, 1.5, 3);
    camera.lookAt(0, 0, 0); // Pastikan kamera melihat ke pusat

    const renderer = initRenderer(container);

    // 1. Buat Kubus Utama
    const mainCube = createCube();
    scene.add(mainCube); // Tambahkan kubus utama ke scene

    // 2. Buat Bola-bola
    // Bola Biru (posisi berdasarkan interpretasi gambar)
    // Ukuran kubus adalah 1x1x1, pusatnya di (0,0,0) lokal.
    // Maka sisi atas ada di y=0.5, sisi depan di z=0.5, sisi kanan di x=0.5
    const blueSphere = createSphere(0x0000ff, 0.20); // Biru
    // Perkiraan posisi: agak di atas, sedikit ke kiri-depan dari pusat kubus
    blueSphere.position.set(-0.1, 0.55, 0.3); // x, y, z relatif terhadap parent (mainCube)

    // Bola Merah Marun (posisi berdasarkan interpretasi gambar)
    const maroonColor = 0x800000;
    const maroonSphere = createSphere(maroonColor, 0.22); // Merah marun
    // Perkiraan posisi: agak di kanan, sedikit di depan dari pusat kubus, sedikit di bawah tengah vertikal
    maroonSphere.position.set(0.55, -0.1, 0.25);

    // 3. Atur Hierarki: Jadikan bola sebagai child dari kubus
    mainCube.add(blueSphere);
    mainCube.add(maroonSphere);

    setupResizeHandler(camera, renderer);

    // Hanya mainCube yang perlu dianimasikan secara eksplisit.
    // Anak-anaknya (bola) akan ikut berputar karena hierarki.
    startAnimationLoop(renderer, scene, camera, [mainCube]);
}

main();