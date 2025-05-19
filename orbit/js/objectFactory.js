import * as THREE from 'three';
import { getScene } from './sceneSetup.js';
import { getBoxMaterial, getSphereMaterial, getPyramidMaterial, getFloorMaterial } from './materialManager.js';
import { getBoxGeometry, getSphereGeometry, getPyramidGeometry, getFloorGeometry, getObjectDimensions } from './geometryProvider.js';

let box, sphere, pyramid, floor;

function createObjects() {
    const scene = getScene();
    const dims = getObjectDimensions();

    // Box
    box = new THREE.Mesh(getBoxGeometry(), getBoxMaterial());
    box.position.set(-dims.CUBE_SIZE * 1.8, dims.CUBE_SIZE / 2, 0);
    box.castShadow = true; // Box melemparkan bayangan
    // box.receiveShadow = true; // Jika box bisa menerima bayangan dari objek lain
    scene.add(box);

    // Sphere
    sphere = new THREE.Mesh(getSphereGeometry(), getSphereMaterial());
    sphere.position.set(0, dims.SPHERE_RADIUS, 0);
    sphere.castShadow = true; // Sphere melemparkan bayangan
    // sphere.receiveShadow = true;
    scene.add(sphere);

    // Pyramid
    const pyramidGeom = getPyramidGeometry();
    const pyramidMat = getPyramidMaterial();
    pyramid = new THREE.Mesh(pyramidGeom, pyramidMat);
    const pyramidX = dims.PYRAMID_RADIUS * 2.2;
    const pyramidY = dims.PYRAMID_HEIGHT / 2 + 0.01;
    const pyramidZ = 0;
    pyramid.position.set(pyramidX, pyramidY, pyramidZ);
    pyramid.rotation.y = Math.PI / 4;
    pyramid.castShadow = true; // Pyramid melemparkan bayangan
    // pyramid.receiveShadow = true;
    scene.add(pyramid);

    // Floor
    floor = new THREE.Mesh(getFloorGeometry(), getFloorMaterial());
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true; // Lantai menerima bayangan
    scene.add(floor);

    console.log("Objects created with shadow properties set.");
}

function getBox() { return box; }
function getSphere() { return sphere; }
function getPyramid() { return pyramid; }

export { createObjects, getBox, getSphere, getPyramid };