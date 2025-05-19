import * as THREE from 'three';

let sharedTexture;
const textureLoader = new THREE.TextureLoader();

function loadTextures(callback) {
    sharedTexture = textureLoader.load(
        'texture.jpg',
        () => {
            console.log('Texture loaded successfully.');
            if (callback) callback();
        },
        undefined,
        (err) => {
            console.error('An error occurred loading the texture:', err);
            // Fallback: create a simple red texture
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d');
            context.fillStyle = 'red';
            context.fillRect(0, 0, 64, 64);
            sharedTexture = new THREE.CanvasTexture(canvas);
            if (callback) callback();
        }
    );
}

function getSharedTexture() {
    return sharedTexture;
}

function getFloorTexture() {
    const floorTex = sharedTexture.clone(); // Clone agar bisa di-repeat independen
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(10, 10); // Sesuaikan repeat untuk lantai
    floorTex.needsUpdate = true; // Penting setelah cloning dan modifikasi
    return floorTex;
}


export { loadTextures, getSharedTexture, getFloorTexture };