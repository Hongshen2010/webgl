function addCube(){
    
    var cubeSkinUrl = "Photo/1.jpg";
    var cubeSkin = THREE.ImageUtils.loadTexture(cubeSkinUrl);
    
    var material = new THREE.MeshPhongMaterial( {map: cubeSkin} );
    
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    
    cube = new THREE.Mesh(geometry, material);
    
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5
    
    scene.add(cube);
    
    //renderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);
    //renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);
    //renderer.domElement.addEventListener('mouseup', onDocumentMouseUp, false);
    
    run();
}
    
function run(){
    
    //stats.begin();
    
    renderer.render(scene, camera);
    
    //stats.end();
    
    window.requestAnimationFrame(run);
}