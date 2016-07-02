function addCylinder(){
    
    var material = new THREE.MeshLambertMaterial({color: 0x656565});
    material.transparent = true;
    
    var geometry = new THREE.CylinderGeometry(5, 5, 9, 32);
    
    var cylinder = new THREE.Mesh(geometry, material);
    
    var wireframe = new THREE.WireframeHelper(cylinder, 0x000000);
    
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    
    objects.push(cylinder);
    
    scene.add(cylinder);
    
    //scene.add(wireframe);
    
}