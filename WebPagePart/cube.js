var cube = null;

function addCube(){
    var container = document.getElementById("container");
    //var stats = new Stats();
    //stats.showPanel(0);
    //document.body.appendChild(stats.dom);
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 3);
    
    var light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0, 1);
    scene.add(light);
    
    var cubeSkinUrl = "Photo/1.jpg";
    var cubeSkin = THREE.ImageUtils.loadTexture(cubeSkinUrl);
    
    var material = new THREE.MeshPhongMaterial( {map: cubeSkin} );
    
    var geometry = new THREE.CubeGeometry(1, 1, 1);
    
    cube = new THREE.Mesh(geometry, material);
    
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;
    
    scene.add(cube);
    
    addMouseHandler();
    
    run();
}
    
function run(){
    
    //stats.begin();
    
    renderer.render(scene, camera);
    
    if(animating){
        
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
    
    }
    
    //stats.end();
    
    requestAnimationFrame(run);
}
    
function addMouseHandler(){
    var dom = renderer.domElement;
    
    dom.addEventListener('mouseup', onMouseUp, false);
}
    
function onMouseUp(event){
    event.preventDefault();
    animating = !animating;
}
