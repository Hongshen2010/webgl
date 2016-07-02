function topView() {
    camera.position.set(0, 50, 0);
}

function bottomView() {
    camera.position.set(0, -50, 0);
}

function leftView() {
    camera.position.set(-50, 0, 0);
}

function rightView() {
    camera.position.set(50, 0, 0);
}

function frontView() {
    camera.position.set(0, 0, 50);
}

function rearView() {
    camera.position.set(0, 0, -50);
}

function resetView() {
    camera.position.set(100, 100, 100);
}