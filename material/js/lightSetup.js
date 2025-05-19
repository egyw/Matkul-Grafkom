import * as THREE from 'three';
import { getScene } from './sceneSetup.js';

function setupLights() {
    const scene = getScene();

    // HemisphereLight: Untuk pencahayaan dasar yang lembut
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x888888, 0.7); // Sedikit lebih lembut
    scene.add(hemisphereLight);

    // DirectionalLight utama: Memberikan arah utama cahaya dan bisa menghasilkan specular
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6); // Intensitas utama
    directionalLight.position.set(5, 10, 7); // Posisi dari atas-depan-kanan
    scene.add(directionalLight);

    // PointLight untuk specular highlight yang lebih terfokus:
    // Ini akan menjadi sumber utama untuk melihat efek shininess
    const pointLight = new THREE.PointLight(0xffffff, 0.9, 100); // Intensitas kuat
    // Posisikan agar cahaya ini memantul dari objek ke arah kamera default
    // Kamera: (0, 6, 12), melihat (0, 1.5, 0)
    // Objek di sekitar y=1.5
    // Coba posisikan cahaya sedikit di depan dan di atas objek, agak menyamping
    pointLight.position.set(4, 5, 8); // Eksperimen dengan posisi ini
    scene.add(pointLight);

    // PointLight pengisi dari sisi lain, intensitas lebih rendah
    const fillLight = new THREE.PointLight(0xffffff, 0.3, 50);
    fillLight.position.set(-4, 4, 4);
    scene.add(fillLight);


    // --- Untuk Debugging Posisi Cahaya (opsional, bisa di-uncomment) ---
    // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0xff0000);
    // scene.add(dLightHelper);
    // const pLightHelper = new THREE.PointLightHelper(pointLight, 0.5, 0x00ff00);
    // scene.add(pLightHelper);
    // const fLightHelper = new THREE.PointLightHelper(fillLight, 0.5, 0x0000ff);
    // scene.add(fLightHelper);
    // -----------------------------------------------------------------

    console.log("Lights setup complete with emphasis on specular highlights.");
}

export { setupLights };