function loadFromJSON(){
    
    var objectLoader = new THREE.ObjectLoader();
    
    objectLoader.load("./examples/teapot.json", function ( obj ) {
        scene.add( obj );
    } );
    
}