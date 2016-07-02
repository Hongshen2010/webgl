function onDocumentMouseUp( event ) {

    event.preventDefault();

    controls.enabled = true;

    if ( INTERSECTED ) {

        SELECTED = null;

    }
    
    scene.remove(wireframe);
    //SELECTED.material.opacity = objectOpacity;

    container.style.cursor = 'auto';

}