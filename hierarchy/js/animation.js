// js/animation.js
export function startAnimationLoop(renderer, scene, camera, objectsToAnimate) {
    function animate() {
        requestAnimationFrame(animate);

        objectsToAnimate.forEach(obj => {
            if (obj) {
                obj.rotation.x += 0.005;
                obj.rotation.y += 0.005;
            }
        });

        renderer.render(scene, camera);
    }
    animate();
}