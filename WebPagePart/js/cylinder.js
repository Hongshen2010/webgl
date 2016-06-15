function addCylinder(){
    
    var material = new THREE.MeshPhongMaterial( {color: 0x656565} );
    
    var geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    
    var cylinder = new THREE.Mesh(geometry, material);
    
    var wireframe = new THREE.WireframeHelper(cylinder, 0x000000);
    
    objects.push(cylinder);
    
    scene.add(cylinder);
    
    scene.add(wireframe);
    
}