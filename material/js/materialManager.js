import * as THREE from 'three';
import { getSharedTexture, getFloorTexture } from './textureLoader.js';

let boxMaterial, sphereMaterial, pyramidMaterial, floorMaterial;

function createMaterials() {
    const sharedTex = getSharedTexture();
    const floorTex = getFloorTexture();

    boxMaterial = new THREE.MeshBasicMaterial({ map: sharedTex });

    sphereMaterial = new THREE.MeshPhongMaterial({
        map: sharedTex,
        shininess: 120,
        specular: 0xffffff
    });

    pyramidMaterial = new THREE.MeshPhongMaterial({
        map: sharedTex,
        shininess: 45,        // Biarkan shininess agak rendah agar highlight lebih lebar
        specular: 0x777777   // Naikkan dari 0x444444 atau 0x666666, lebih terang
    });

    floorMaterial = new THREE.MeshLambertMaterial({ map: floorTex });

    console.log("Pyramid material shininess:", pyramidMaterial.shininess, "specular:", pyramidMaterial.specular.getHexString());
}

function getBoxMaterial() { return boxMaterial; }
function getSphereMaterial() { return sphereMaterial; }
function getPyramidMaterial() { return pyramidMaterial; }
function getFloorMaterial() { return floorMaterial; }

export { createMaterials, getBoxMaterial, getSphereMaterial, getPyramidMaterial, getFloorMaterial };