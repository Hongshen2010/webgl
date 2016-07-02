function addCube(){
    
    var material = new THREE.MeshLambertMaterial( {color: 0x456789} );
    material.transparent = true;
    
    var geometry = new THREE.CubeGeometry(10, 10, 10);
    
    cube = new THREE.Mesh(geometry, material);
    
    var wireframe = new THREE.WireframeHelper(cube, 0x000000);
    
    cube.castShadow = true;
    cube.receiveShadow = true;
    
    objects.push(cube);
    
    scene.add(cube);
    
    //scene.add(wireframe);
    
}