// js/objects.js

/**
 * Membuat mesh kubus.
 * @returns {THREE.Mesh} Mesh kubus.
 */
export function createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Ukuran kubus 1x1x1
    // Menggunakan wireframe agar bola di dalamnya/luarnya terlihat jelas
    const material = new THREE.MeshBasicMaterial({
        color: 0x228B22, // Warna hijau tua seperti outline di gambar
        wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

/**
 * Membuat mesh bola.
 * @param {number} color - Warna bola dalam format heksadesimal (misal: 0x0000ff).
 * @param {number} [radius=0.25] - Radius bola.
 * @returns {THREE.Mesh} Mesh bola.
 */
export function createSphere(color, radius = 0.25) {
    const geometry = new THREE.SphereGeometry(radius, 16, 16); // Radius, widthSegments, heightSegments
    const material = new THREE.MeshBasicMaterial({ color: color });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
}