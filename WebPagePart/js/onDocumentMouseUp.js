function onDocumentMouseUp( event ) {

    event.preventDefault();

    controls.enabled = true;

    if ( INTERSECTED ) {

        SELECTED = null;

    }

    container.style.cursor = 'auto';

}