import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { getCamera } from './sceneSetup.js';

let controls;
const moveSpeed = 5.0; // Kecepatan bergerak (unit per detik)
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

// Status tombol keyboard
const moveState = {
    forward: false,
    backward: false,
    left: false,
    right: false
};

function setupControls() {
    const camera = getCamera();
    controls = new PointerLockControls(camera, document.body);

    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {
        controls.lock();
    });

    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });

    controls.addEventListener('unlock', function () {
        blocker.style.display = 'flex'; // Ubah kembali ke flex untuk menengahkan
        instructions.style.display = '';
    });

    // Tambahkan controls ke scene agar bisa di-update jika perlu (opsional, tidak selalu)
    // getScene().add(controls.getObject()); // getObject() mengembalikan objek kamera yang dikontrol

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return controls;
}

function onKeyDown(event) {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            moveState.forward = true;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            moveState.left = true;
            break;
        case 'ArrowDown':
        case 'KeyS':
            moveState.backward = true;
            break;
        case 'ArrowRight':
        case 'KeyD':
            moveState.right = true;
            break;
    }
}

function onKeyUp(event) {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            moveState.forward = false;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            moveState.left = false;
            break;
        case 'ArrowDown':
        case 'KeyS':
            moveState.backward = false;
            break;
        case 'ArrowRight':
        case 'KeyD':
            moveState.right = false;
            break;
    }
}

function updateControls(deltaTime) {
    if (controls.isLocked === true) {
        // Menghentikan pergerakan gradual (efek friction/damping sederhana)
        velocity.x -= velocity.x * 10.0 * deltaTime;
        velocity.z -= velocity.z * 10.0 * deltaTime;
        // velocity.y -= 9.8 * 100.0 * deltaTime; // Gravitasi sederhana, jika diperlukan

        direction.z = Number(moveState.forward) - Number(moveState.backward);
        direction.x = Number(moveState.right) - Number(moveState.left);
        direction.normalize(); // Memastikan kecepatan konsisten saat bergerak diagonal

        if (moveState.forward || moveState.backward) velocity.z -= direction.z * moveSpeed * deltaTime * 20; // Dikalikan agar lebih responsif
        if (moveState.left || moveState.right) velocity.x -= direction.x * moveSpeed * deltaTime * 20;

        controls.moveRight(-velocity.x * deltaTime); // moveRight menggunakan sumbu lokal X kamera
        controls.moveForward(-velocity.z * deltaTime); // moveForward menggunakan sumbu lokal Z kamera
    }
}

export { setupControls, updateControls, controls as getPointerLockControls }; // Ekspor juga instance controls jika diperlukan