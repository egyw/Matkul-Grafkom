// js/cube.js
export function createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Ukuran kubus 1x1x1
    // MeshBasicMaterial tidak terpengaruh oleh lighting
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Warna hijau
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}