// js/animation.js
export function startAnimationLoop(renderer, scene, camera, objectsToAnimate) {
    function animate() {
        requestAnimationFrame(animate);

        // Animasi sederhana: putar kubus
        objectsToAnimate.forEach(obj => {
            if (obj) { // Pastikan objek ada
                obj.rotation.x += 0.005;
                obj.rotation.y += 0.005;
            }
        });

        renderer.render(scene, camera);
    }
    animate(); // Mulai loop animasi
}