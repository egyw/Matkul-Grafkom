import * as THREE from 'three';

// Warna dasar untuk setiap objek
const BOX_COLOR = 0xff0000; // Merah
const SPHERE_COLOR = 0x00ff00; // Hijau
const PYRAMID_COLOR = 0x0000ff; // Biru
const FLOOR_COLOR = 0x888888; // Abu-abu untuk lantai

// Warna saat hover
const HOVER_COLOR = 0xffff00; // Kuning

let boxMaterial, sphereMaterial, pyramidMaterial, floorMaterial;

function createMaterials() {
    // Box: Emissive (MeshBasicMaterial agar tidak terpengaruh bayangan pada dirinya sendiri, tapi bisa cast shadow)
    boxMaterial = new THREE.MeshStandardMaterial({
        color: BOX_COLOR,
        roughness: 0.7, // Sedikit tidak mengkilap
        metalness: 0.1
    });

    // Sphere: Mengkilap
    sphereMaterial = new THREE.MeshStandardMaterial({
        color: SPHERE_COLOR,
        roughness: 0.1, // Lebih mengkilap
        metalness: 0.5,
        // shininess tidak ada di MeshStandardMaterial, dikontrol oleh roughness/metalness
    });

    // Pyramid: Sedikit mengkilap
    pyramidMaterial = new THREE.MeshStandardMaterial({
        color: PYRAMID_COLOR,
        roughness: 0.4,
        metalness: 0.2,
    });

    // Floor: Tidak mengkilap
    floorMaterial = new THREE.MeshStandardMaterial({
        color: FLOOR_COLOR,
        roughness: 0.9,
        metalness: 0.0
    });

    console.log("Materials created with solid colors.");
}

function getBoxMaterial() { return boxMaterial; }
function getSphereMaterial() { return sphereMaterial; }
function getPyramidMaterial() { return pyramidMaterial; }
function getFloorMaterial() { return floorMaterial; }
function getHoverColor() { return HOVER_COLOR; }
function getOriginalColors() {
    return {
        box: BOX_COLOR,
        sphere: SPHERE_COLOR,
        pyramid: PYRAMID_COLOR
    };
}


export {
    createMaterials,
    getBoxMaterial, getSphereMaterial, getPyramidMaterial, getFloorMaterial,
    getHoverColor, getOriginalColors
};