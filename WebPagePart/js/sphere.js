function addSphere(){
    
    var material = new THREE.MeshPhongMaterial(  );
    
    var geometry = new THREE.SphereGeometry(0.6, 32, 32);
    
    sphere = new THREE.Mesh(geometry, material);
    
    sphere.rotation.x = Math.PI / 5;
    sphere.rotation.y = Math.PI / 5;
    
    scene.add(sphere);
    
    run();
}
    
function run(){
    
    //stats.begin();
    
    renderer.render(scene, camera);
    
    //stats.end();
    
    window.requestAnimationFrame(run);
}