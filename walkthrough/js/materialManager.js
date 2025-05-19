import * as THREE from 'three';
import { getSharedTexture, getFloorTexture } from './textureLoader.js';

let boxMaterial, sphereMaterial, pyramidMaterial, floorMaterial;

function createMaterials() {
    const sharedTex = getSharedTexture();
    const floorTex = getFloorTexture();

    // Box: Emissive (MeshBasicMaterial untuk tidak terpengaruh cahaya)
    boxMaterial = new THREE.MeshBasicMaterial({ map: sharedTex });

    // Sphere: Phong, shininess tinggi
    sphereMaterial = new THREE.MeshPhongMaterial({
        map: sharedTex,
        shininess: 120,       // Dari iterasi sebelumnya
        specular: 0xffffff   // Dari iterasi sebelumnya
    });

    // Pyramid: Phong, shininess 45
    pyramidMaterial = new THREE.MeshPhongMaterial({
        map: sharedTex,
        shininess: 45,        // Sesuai permintaan
        specular: 0x666666   // Bisa disesuaikan, misal 0x666666 atau 0x777777
    });

    // Floor: No shiny (Lambert material)
    floorMaterial = new THREE.MeshLambertMaterial({ map: floorTex });
    console.log("Pyramid material shininess:", pyramidMaterial.shininess);
}

function getBoxMaterial() { return boxMaterial; }
function getSphereMaterial() { return sphereMaterial; }
function getPyramidMaterial() { return pyramidMaterial; }
function getFloorMaterial() { return floorMaterial; }

export { createMaterials, getBoxMaterial, getSphereMaterial, getPyramidMaterial, getFloorMaterial };    