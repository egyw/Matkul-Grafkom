import * as THREE from 'three';
import { initScene, getScene, getCamera, getRenderer } from './sceneSetup.js';
// Hapus import textureLoader jika tidak digunakan lagi
// import { loadTextures } from './textureLoader.js';
import { createMaterials, getHoverColor, getOriginalColors } from './materialManager.js';
import { createGeometries } from './geometryProvider.js';
import { createObjects, getBox, getSphere, getPyramid } from './objectFactory.js';
import { setupLights } from './lightSetup.js';
import { setupControls, updateControls } from './controlsSetup.js';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let intersectedObject = null; // Objek yang sedang di-hover
let originalColors; // Akan diisi setelah material dibuat

const interactiveObjects = []; // Array untuk menyimpan objek yang bisa di-hover

function onMouseMove(event) {
    // Normalisasi koordinat mouse dari -1 sampai +1
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function checkIntersections() {
    const camera = getCamera();
    raycaster.setFromCamera(mouse, camera);

    // Hanya cek intersect dengan objek di array interactiveObjects
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
        const firstIntersected = intersects[0].object;
        if (intersectedObject !== firstIntersected) {
            // Jika ada objek lain yang di-hover sebelumnya, kembalikan warnanya
            if (intersectedObject) {
                intersectedObject.material.color.set(originalColors[intersectedObject.name]);
            }
            intersectedObject = firstIntersected;
            intersectedObject.material.color.set(getHoverColor());
        }
    } else {
        // Jika tidak ada objek yang di-hover
        if (intersectedObject) {
            intersectedObject.material.color.set(originalColors[intersectedObject.name]);
        }
        intersectedObject = null;
    }
}


function animate() {
    requestAnimationFrame(animate);
    updateControls();
    checkIntersections(); // Panggil pengecekan intersect setiap frame
    getRenderer().render(getScene(), getCamera());
}

// Initialize
initScene();

// Karena tidak ada loadTextures, kita bisa langsung lanjut
createMaterials();
originalColors = getOriginalColors(); // Simpan warna asli setelah material dibuat
createGeometries();
createObjects(); // objectFactory akan menambahkan objek ke scene

// Isi array interactiveObjects setelah objek dibuat
const box = getBox();
const sphere = getSphere();
const pyramid = getPyramid();

if (box) {
    box.name = "box"; // Beri nama untuk identifikasi warna asli
    interactiveObjects.push(box);
}
if (sphere) {
    sphere.name = "sphere";
    interactiveObjects.push(sphere);
}
if (pyramid) {
    pyramid.name = "pyramid";
    interactiveObjects.push(pyramid);
}
// Jangan tambahkan lantai ke interactiveObjects jika tidak ingin lantai berubah warna saat dihover

setupLights();
setupControls();

window.addEventListener('mousemove', onMouseMove, false);

animate();