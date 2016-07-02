function onDocumentMouseMove( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / container.width ) * 2 - 1;
    mouse.y = - ( (event.clientY - 36) / container.height ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    if ( SELECTED ) {

        if ( raycaster.ray.intersectPlane( plane, intersection ) ) {

            SELECTED.position.copy( intersection.sub( offset ) );

        }

        return;

    }

    var intersects = raycaster.intersectObjects( objects );

    if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

            if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.color.getHex();

            plane.setFromNormalAndCoplanarPoint(
                camera.getWorldDirection( plane.normal ),
                INTERSECTED.position );

        }

        container.style.cursor = 'pointer';

    } else {

        if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

        INTERSECTED = null;

        container.style.cursor = 'auto';

    }

}