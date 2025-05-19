import * as THREE from 'three';
import { getScene } from './sceneSetup.js';
import { getBoxMaterial, getSphereMaterial, getPyramidMaterial, getFloorMaterial } from './materialManager.js';
import { getBoxGeometry, getSphereGeometry, getPyramidGeometry, getFloorGeometry, getObjectDimensions } from './geometryProvider.js';

let box, sphere, pyramid, floor;
const interactiveObjects = []; // Array untuk menyimpan objek yang bisa di-hover

function createObjects() {
    interactiveObjects.length = 0; // Kosongkan array jika dipanggil ulang
    const scene = getScene();
    const dims = getObjectDimensions();

    // Box
    box = new THREE.Mesh(getBoxGeometry(), getBoxMaterial());
    box.name = "box"; // Beri nama untuk identifikasi
    box.position.set(-dims.CUBE_SIZE * 1.8, dims.CUBE_SIZE / 2, 0);
    box.castShadow = true;
    scene.add(box);
    interactiveObjects.push(box);

    // Sphere
    sphere = new THREE.Mesh(getSphereGeometry(), getSphereMaterial());
    sphere.name = "sphere";
    sphere.position.set(0, dims.SPHERE_RADIUS, 0);
    sphere.castShadow = true;
    scene.add(sphere);
    interactiveObjects.push(sphere);

    // Pyramid
    const pyramidGeom = getPyramidGeometry();
    const pyramidMat = getPyramidMaterial();
    pyramid = new THREE.Mesh(pyramidGeom, pyramidMat);
    pyramid.name = "pyramid";
    const pyramidX = dims.PYRAMID_RADIUS * 2.2;
    const pyramidY = dims.PYRAMID_HEIGHT / 2 + 0.01;
    const pyramidZ = 0;
    pyramid.position.set(pyramidX, pyramidY, pyramidZ);
    pyramid.rotation.y = Math.PI / 4;
    pyramid.castShadow = true;
    scene.add(pyramid);
    interactiveObjects.push(pyramid);

    // Floor
    floor = new THREE.Mesh(getFloorGeometry(), getFloorMaterial());
    floor.name = "floor"; // Meskipun tidak interaktif, beri nama untuk konsistensi
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);
    // Jangan tambahkan lantai ke interactiveObjects jika tidak mau di-hover

    console.log("Objects created. Interactive objects:", interactiveObjects.map(obj => obj.name));
}

function getInteractiveObjects() {
    return interactiveObjects;
}

// Getter untuk objek individual bisa tetap ada jika diperlukan di tempat lain
function getBox() { return box; }
function getSphere() { return sphere; }
function getPyramid() { return pyramid; }


export { createObjects, getInteractiveObjects, getBox, getSphere, getPyramid };