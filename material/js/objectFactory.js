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
    scene.add(box);

    // Sphere
    sphere = new THREE.Mesh(getSphereGeometry(), getSphereMaterial());
    sphere.position.set(0, dims.SPHERE_RADIUS, 0);
    scene.add(sphere);

    // Pyramid
    const pyramidGeom = getPyramidGeometry();
    const pyramidMat = getPyramidMaterial();
    pyramid = new THREE.Mesh(pyramidGeom, pyramidMat);
    
    const pyramidX = dims.PYRAMID_RADIUS * 2.2; // sekitar 3.96 jika radius 1.8
    const pyramidY = dims.PYRAMID_HEIGHT / 2 + 0.01; // sekitar 1.51 jika height 3
    const pyramidZ = 0;
    pyramid.position.set(pyramidX, pyramidY, pyramidZ);
    pyramid.rotation.y = Math.PI / 4; // 45 derajat, sisi menghadap kuadran +X, +Z
    scene.add(pyramid);


    // Floor
    floor = new THREE.Mesh(getFloorGeometry(), getFloorMaterial());
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    scene.add(floor);
}

function getBox() { return box; }
function getSphere() { return sphere; }
function getPyramid() { return pyramid; }

export { createObjects, getBox, getSphere, getPyramid };