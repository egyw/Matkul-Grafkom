// js/resize.js
export function setupResizeHandler(camera, renderer) {
    window.addEventListener('resize', () => {
        // Update ukuran renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Update aspect ratio kamera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix(); // Penting setelah mengubah properti kamera
    });
}