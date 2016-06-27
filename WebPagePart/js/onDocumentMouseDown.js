function onDocumentMouseDown( event ) {

    event.preventDefault();

    raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( objects );

    if ( intersects.length > 0 ) {

        controls.enabled = false;

        SELECTED = intersects[ 0 ].object;

        if ( raycaster.ray.intersectPlane( plane, intersection ) ) {

            offset.copy( intersection ).sub( SELECTED.position );

        }
        
        objectOpacity = SELECTED.material.opacity;
        SELECTED.material.opacity = 0.5;
        
        wireframe = new THREE.WireframeHelper(SELECTED, 0xaaaaaa);
        scene.add(wireframe);

        container.style.cursor = 'move';

    }

}