function addCube(){
    
    var cubeSkinUrl = "Photo/1.jpg";
    var cubeSkin = THREE.ImageUtils.loadTexture(cubeSkinUrl);
    
    var material = new THREE.MeshPhongMaterial( {map: cubeSkin} );
    
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    
    cube = new THREE.Mesh(geometry, material);
    
    objects.push(cube);
    
    scene.add(cube);
    
}