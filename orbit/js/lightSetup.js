import * as THREE from 'three';
import { getScene } from './sceneSetup.js';

function setupLights() {
    const scene = getScene();

    // Ambient light untuk menerangi seluruh scene secara merata
    const ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);

    // Directional light utama, akan menghasilkan bayangan
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5); // Atur posisi untuk arah bayangan yang baik
    
    // --- Konfigurasi Bayangan untuk DirectionalLight ---
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024; // Resolusi shadow map (power of 2)
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -15; // Area yang dicakup shadow camera
    directionalLight.shadow.camera.right = 15;
    directionalLight.shadow.camera.top = 15;
    directionalLight.shadow.camera.bottom = -15;
    // directionalLight.shadow.bias = -0.001; // Untuk mengatasi shadow acne, jika perlu

    scene.add(directionalLight);

    // Point light untuk highlight tambahan (tidak akan cast shadow di setup ini)
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 50);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // --- Untuk Debugging Shadow Camera (opsional) ---
    // const shadowCamHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(shadowCamHelper);
    // ------------------------------------------------

    console.log("Lights setup with shadows enabled for DirectionalLight.");
}

export { setupLights };