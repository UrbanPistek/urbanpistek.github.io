//shapes stored in separate js files in models directory
let shapes = [
    shape(dodecahedronVertices, dodecahedronEdges, 1, -1)
];

let currentShape = 0;

let vertices = [];
let edges = [];
let lines = [];

// var distance = 2.75;
let defaultAngle = 0.5;

let defaultRotation = "yz";

let paused = false;

let scene;
let camera;

let renderer;
let material;

let showControls = false;

function init(container, len, height, distance){
    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(
        len / - 300, len / 300,
        height / - 300, height / 300, 1, 1000);

    camera.position.copy(new THREE.Vector3(2, 2, 2));

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(len, height);
    container.appendChild(renderer.domElement);

    material = new THREE.LineBasicMaterial({color: 0xffffff});

    addShape(shapes[currentShape][0], shapes[currentShape][1], distance);
}

function render_hypermesh(container, len, height, defaultRotation, distance, defaultAngle){

    console.log("Hypermesh", len, height, defaultRotation, distance, defaultAngle);

    init(container, len, height, distance);

    function animate(){
        requestAnimationFrame( animate );
        
        switch (defaultRotation) {
            case "xy":
                rotateXY(defaultAngle);
                break;
            case "-xy":
                rotateXY(-defaultAngle);
                break;
            case "yz":
                rotateYZ(defaultAngle);
                break;
            case "-yz":
                rotateYZ(-defaultAngle);
                break;
            case "xz":
                rotateXZ(defaultAngle);
                break;
            case "-xz":
                rotateXZ(-defaultAngle);
                break;
            case "xw":
                rotateXW(defaultAngle);
                break;
            case "-xw":
                rotateXW(-defaultAngle);
                break;
            case "yw":
                rotateYW(defaultAngle);
                break;
            case "-yw":
                rotateYW(-defaultAngle);
                break;
            case "zw":
                rotateZW(defaultAngle);
                break;
            case "-zw":
                rotateZW(-defaultAngle);
                break;

            case "xy zw":
                rotateXY(defaultAngle);
                rotateZW(defaultAngle);
                break;
            case "-xy -zw":
                rotateXY(-defaultAngle);
                rotateZW(-defaultAngle);
                break;
            case "-xy zw":
                rotateXY(-defaultAngle);
                rotateZW(defaultAngle);
                break;
            case "xy -zw":
                rotateXY(defaultAngle);
                rotateZW(-defaultAngle);
                break;
            case "yz xw":
                rotateYZ(defaultAngle);
                rotateXW(defaultAngle);
                break;
            case "-yz -xw":
                rotateYZ(-defaultAngle);
                rotateXW(-defaultAngle);
                break;
            case "-yz xw":
                rotateYZ(-defaultAngle);
                rotateXW(defaultAngle);
                break;
            case "yz -xw":
                rotateYZ(defaultAngle);
                rotateXW(-defaultAngle);
                break;

        }

        updateGeometry(distance);
        renderer.render(scene, camera);
    }

    animate();
}

function rotateYZ(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        1, 0, 0, 0,
        0, Math.cos(rad(angle)), -Math.sin(rad(angle)), 0,
        0, Math.sin(rad(angle)), Math.cos(rad(angle)), 0,
        0, 0, 0, 1
    );

    for(let i = 0; i < vertices.length; i++){
        vertices[i] = vertices[i].applyMatrix4(rotation);
    }
}

function rotateXY(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        Math.cos(rad(angle)), -Math.sin(rad(angle)), 0, 0,
        Math.sin(rad(angle)), Math.cos(rad(angle)), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );

    for(let i = 0; i < vertices.length; i++){
        vertices[i] = vertices[i].applyMatrix4(rotation);
    }
}

function rotateZW(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, Math.cos(rad(angle)), -Math.sin(rad(angle)),
        0, 0, Math.sin(rad(angle)), Math.cos(rad(angle))
    );

    for(let i = 0; i < vertices.length; i++){
        vertices[i] = vertices[i].applyMatrix4(rotation);
    }
}

function rotateXZ(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        Math.cos(rad(angle)), 0, -Math.sin(rad(angle)), 0,
        0, 1, 0, 0,
        Math.sin(rad(angle)), 0, Math.cos(rad(angle)), 0,
        0, 0, 0, 1
    );

    for(let i = 0; i < vertices.length; i++){
        vertices[i] = vertices[i].applyMatrix4(rotation);
    }
}

function rotateXW(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        Math.cos(rad(angle)), 0, 0, -Math.sin(rad(angle)),
        0, 1, 0, 0,
        0, 0, 1, 0,
        Math.sin(rad(angle)), 0, 0, Math.cos(rad(angle))
    );

    for(let i = 0; i < vertices.length; i++){
        vertices[i] = vertices[i].applyMatrix4(rotation);
    }
}

function rotateYW(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        1, 0, 0, 0,
        0, Math.cos(rad(angle)), 0, -Math.sin(rad(angle)),
        0, 0, 1, 0,
        0, Math.sin(rad(angle)), 0, Math.cos(rad(angle))
    );

    for(let i = 0; i < vertices.length; i++){
        vertices[i] = vertices[i].applyMatrix4(rotation);
    }
}

function updateGeometry(distance){
    for(let i = 0; i < lines.length; i++){
        lines[i].geometry.vertices[0] = get3dProjection(vertices[edges[i][0]], distance);
        lines[i].geometry.vertices[1] = get3dProjection(vertices[edges[i][1]], distance);
        lines[i].geometry.verticesNeedUpdate = true;
    }
}

function get3dProjection(v, distance){
    let w = 1 / (distance - v.w);

    return new THREE.Vector3(v.x * w , v.y * w, v.z * w);
}

function addShape(v, e, distance){

    for(let i = 0; i < v.length; i++){
        vertices.push(new THREE.Vector4(v[i].x, v[i].y, v[i].z, v[i].w));
    }

    edges = e;

    // add new THREE.js geometry
    for(let i = 0; i < edges.length; i++){
        let geometry = new THREE.Geometry();
        geometry.vertices.push(get3dProjection(vertices[edges[i][0]]), distance);
        geometry.vertices.push(get3dProjection(vertices[edges[i][1]]), distance);
        lines.push(new THREE.Line(geometry, material));
        scene.add(lines[i]);
    }

}

function removeCurrentShape(){
    for(let i = 0; i < lines.length; i++){
        scene.remove(lines[i]);
        lines[i].geometry.dispose();
    }
    vertices = [];
    edges = [];
    lines = [];
}

function setAutoRotation(r){
    paused = false;
    defaultRotation = r;
}

function shape(v, e, w1, w2){
    return [buildVertices(v, w1, w2), buildEdges(v, e)]
}

function buildVertices(v, w1, w2){
    let arr = [];

    for(let i = 0; i < v.length; i++){
        arr.push(new THREE.Vector4(v[i][0], -v[i][1], v[i][2], w1))
    }

    for(let i = 0; i < v.length; i++){
        arr.push(new THREE.Vector4(v[i][0], -v[i][1], v[i][2], w2))
    }

    return arr;
}

function buildEdges(v, e){
    let numV = v.length;
    let numE = e.length;
    let arr = [];

    for(let i = 0; i < e.length; i++){
        arr.push(e[i]);
    }

    for(let i = 0; i < numE; i++){
        arr.push([e[i][0] + numV, e[i][1] + numV]);
    }

    for(let i = 0; i < numV; i++){
        arr.push([i, i + numV]);
    }

    return arr;
}

function toggleControls(){
    document.getElementById("controls").style.display = showControls ? "none" : "block";
    showControls = !showControls;
}

// translate keypress events to strings
// from http://javascript.info/tutorial/keyboard-events
function getChar(event) {
    if (event.which == null) {
        return String.fromCharCode(event.keyCode) // IE
    } else if (event.which!=0 && event.charCode!=0) {
        return String.fromCharCode(event.which)   // the rest
    } else {
        return null // special key
    }
}

//degrees to radians
function rad(angle){
    return Math.PI * angle / 180;
}
