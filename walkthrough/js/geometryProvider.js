import * as THREE from 'three';

// Ukuran objek
const CUBE_SIZE = 2.5;
const SPHERE_RADIUS = 1.5;
const PYRAMID_RADIUS = 1.8; // Pastikan ini positif
const PYRAMID_HEIGHT = 3.0; // Pastikan ini positif
const FLOOR_SIZE = 25;

let boxGeometry, sphereGeometry, pyramidGeometry, floorGeometry;

function createGeometries() {
    console.log("Creating geometries...");
    boxGeometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
    sphereGeometry = new THREE.SphereGeometry(SPHERE_RADIUS, 32, 32);

    // Pastikan PYRAMID_RADIUS dan PYRAMID_HEIGHT adalah angka positif
    if (PYRAMID_RADIUS <= 0 || PYRAMID_HEIGHT <= 0) {
        console.error("PYRAMID_RADIUS or PYRAMID_HEIGHT is not positive!", PYRAMID_RADIUS, PYRAMID_HEIGHT);
        // Fallback ke box kecil jika dimensi piramida tidak valid
        pyramidGeometry = new THREE.BoxGeometry(1, 1, 1);
    } else {
        pyramidGeometry = new THREE.ConeGeometry(PYRAMID_RADIUS, PYRAMID_HEIGHT, 4); // 4 segmen radial untuk piramida
    }
    
    floorGeometry = new THREE.PlaneGeometry(FLOOR_SIZE, FLOOR_SIZE);
    console.log("Geometries created. Pyramid geometry:", pyramidGeometry);
}

function getBoxGeometry() { return boxGeometry; }
function getSphereGeometry() { return sphereGeometry; }
function getPyramidGeometry() { return pyramidGeometry; }
function getFloorGeometry() { return floorGeometry; }
function getObjectDimensions() {
    return { CUBE_SIZE, SPHERE_RADIUS, PYRAMID_HEIGHT, PYRAMID_RADIUS }; // tambahkan PYRAMID_RADIUS
}

export { createGeometries, getBoxGeometry, getSphereGeometry, getPyramidGeometry, getFloorGeometry, getObjectDimensions };