// js/resize.js
export function setupResizeHandler(camera, renderer) {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}