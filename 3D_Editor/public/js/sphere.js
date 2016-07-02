function addSphere(){
    
    var material = new THREE.MeshLambertMaterial({color: 0x567893});
    material.transparent = true;
    
    var geometry = new THREE.SphereGeometry(5, 32, 32);
    
    sphere = new THREE.Mesh(geometry, material);
    
    var wireframe = new THREE.WireframeHelper(sphere, 0x000000);
    
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    
    objects.push(sphere);
    
    scene.add(sphere);
    
    //scene.add(wireframe);
    
}