function onWindowResize() {

    camera.aspect = container.width / container.height;
    camera.updateProjectionMatrix();

    renderer.setSize( container.width, container.height );

}