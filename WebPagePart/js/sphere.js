function addSphere(){
    
    var material = new THREE.MeshPhongMaterial();
    
    var geometry = new THREE.SphereGeometry(0.6, 32, 32);
    
    sphere = new THREE.Mesh(geometry, material);
    
    objects.push(sphere);
    
    scene.add(sphere);
    
}