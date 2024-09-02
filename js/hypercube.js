let cubeVertices = [
    [-1, -1, -1],
    [1, -1, -1],
    [1, 1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, 1],
    [-1, 1, 1]
];

let cubeEdges = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7]
];

//hc_shapes stored in separate js files in models directory
let hc_shapes = [
    hc_shape(cubeVertices, cubeEdges, 1, -1)
];

let hc_currentShape = 0;

let hc_vertices = [];
let hc_edges = [];
let hc_lines = [];

// var distance = 2.75;
let hc_defaultAngle = 0.5;

let hc_defaultRotation = "yz";

let hc_paused = false;

let hc_scene;
let hc_camera;

let hc_renderer;
let hc_material;

let hc_showControls = false;

function hc_init(container, len, height, distance){
    hc_scene = new THREE.Scene();

    hc_camera = new THREE.OrthographicCamera(
        len / - 300, len / 300,
        height / - 300, height / 300, 1, 1000);

    hc_camera.position.copy(new THREE.Vector3(2, 2, 2));

    hc_camera.lookAt(new THREE.Vector3(0, 0, 0));

    hc_renderer = new THREE.WebGLRenderer({alpha: true, precision: "lowp"});
    
    hc_renderer.setSize(len, height);
    container.appendChild(hc_renderer.domElement);

    hc_material = new THREE.LineBasicMaterial({color: 0xffffff});

    hc_addShape(hc_shapes[hc_currentShape][0], hc_shapes[hc_currentShape][1], distance);
}

function render_hypercube(container, len, height, hc_defaultRotation, distance, hc_defaultAngle){

    console.log("Hypercube", len, height, hc_defaultRotation, distance, hc_defaultAngle);

    const fps = 60;
    hc_init(container, len, height, distance);

    function animate(){

        // Animate at a specific frame rate
        setTimeout(() => {
            requestAnimationFrame( animate );
        }, 1000 / fps);
        
        switch (hc_defaultRotation) {
            case "xy":
                hc_rotateXY(hc_defaultAngle);
                break;
            case "-xy":
                hc_rotateXY(-hc_defaultAngle);
                break;
            case "yz":
                hc_rotateYZ(hc_defaultAngle);
                break;
            case "-yz":
                hc_rotateYZ(-hc_defaultAngle);
                break;
            case "xz":
                hc_rotateXZ(hc_defaultAngle);
                break;
            case "-xz":
                hc_rotateXZ(-hc_defaultAngle);
                break;
            case "xw":
                hc_rotateXW(hc_defaultAngle);
                break;
            case "-xw":
                hc_rotateXW(-hc_defaultAngle);
                break;
            case "yw":
                hc_rotateYW(hc_defaultAngle);
                break;
            case "-yw":
                hc_rotateYW(-hc_defaultAngle);
                break;
            case "zw":
                hc_rotateZW(hc_defaultAngle);
                break;
            case "-zw":
                hc_rotateZW(-hc_defaultAngle);
                break;

            case "xy zw":
                hc_rotateXY(hc_defaultAngle);
                hc_rotateZW(hc_defaultAngle);
                break;
            case "-xy -zw":
                hc_rotateXY(-hc_defaultAngle);
                hc_rotateZW(-hc_defaultAngle);
                break;
            case "-xy zw":
                hc_rotateXY(-hc_defaultAngle);
                hc_rotateZW(hc_defaultAngle);
                break;
            case "xy -zw":
                hc_rotateXY(hc_defaultAngle);
                hc_rotateZW(-hc_defaultAngle);
                break;
            case "yz xw":
                hc_rotateYZ(hc_defaultAngle);
                hc_rotateXW(hc_defaultAngle);
                break;
            case "-yz -xw":
                hc_rotateYZ(-hc_defaultAngle);
                hc_rotateXW(-hc_defaultAngle);
                break;
            case "-yz xw":
                hc_rotateYZ(-hc_defaultAngle);
                hc_rotateXW(hc_defaultAngle);
                break;
            case "yz -xw":
                hc_rotateYZ(hc_defaultAngle);
                hc_rotateXW(-hc_defaultAngle);
                break;

        }

        hc_updateGeometry(distance);
        hc_renderer.render(hc_scene, hc_camera);
    }

    animate();
}

function hc_rotateYZ(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        1, 0, 0, 0,
        0, Math.cos(hc_rad(angle)), -Math.sin(hc_rad(angle)), 0,
        0, Math.sin(hc_rad(angle)), Math.cos(hc_rad(angle)), 0,
        0, 0, 0, 1
    );

    for(let i = 0; i < hc_vertices.length; i++){
        hc_vertices[i] = hc_vertices[i].applyMatrix4(rotation);
    }
}

function hc_rotateXY(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        Math.cos(hc_rad(angle)), -Math.sin(hc_rad(angle)), 0, 0,
        Math.sin(hc_rad(angle)), Math.cos(hc_rad(angle)), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );

    for(let i = 0; i < hc_vertices.length; i++){
        hc_vertices[i] = hc_vertices[i].applyMatrix4(rotation);
    }
}

function hc_rotateZW(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, Math.cos(hc_rad(angle)), -Math.sin(hc_rad(angle)),
        0, 0, Math.sin(hc_rad(angle)), Math.cos(hc_rad(angle))
    );

    for(let i = 0; i < hc_vertices.length; i++){
        hc_vertices[i] = hc_vertices[i].applyMatrix4(rotation);
    }
}

function hc_rotateXZ(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        Math.cos(hc_rad(angle)), 0, -Math.sin(hc_rad(angle)), 0,
        0, 1, 0, 0,
        Math.sin(hc_rad(angle)), 0, Math.cos(hc_rad(angle)), 0,
        0, 0, 0, 1
    );

    for(let i = 0; i < hc_vertices.length; i++){
        hc_vertices[i] = hc_vertices[i].applyMatrix4(rotation);
    }
}

function hc_rotateXW(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        Math.cos(hc_rad(angle)), 0, 0, -Math.sin(hc_rad(angle)),
        0, 1, 0, 0,
        0, 0, 1, 0,
        Math.sin(hc_rad(angle)), 0, 0, Math.cos(hc_rad(angle))
    );

    for(let i = 0; i < hc_vertices.length; i++){
        hc_vertices[i] = hc_vertices[i].applyMatrix4(rotation);
    }
}

function hc_rotateYW(angle){
    let rotation = new THREE.Matrix4();

    rotation.set(
        1, 0, 0, 0,
        0, Math.cos(hc_rad(angle)), 0, -Math.sin(hc_rad(angle)),
        0, 0, 1, 0,
        0, Math.sin(hc_rad(angle)), 0, Math.cos(hc_rad(angle))
    );

    for(let i = 0; i < hc_vertices.length; i++){
        hc_vertices[i] = hc_vertices[i].applyMatrix4(rotation);
    }
}

function hc_updateGeometry(distance){
    for(let i = 0; i < hc_lines.length; i++){
        hc_lines[i].geometry.vertices[0] = hc_get3dProjection(hc_vertices[hc_edges[i][0]], distance);
        hc_lines[i].geometry.vertices[1] = hc_get3dProjection(hc_vertices[hc_edges[i][1]], distance);
        hc_lines[i].geometry.verticesNeedUpdate = true;
    }
}

function hc_get3dProjection(v, distance){
    let w = 1 / (distance - v.w);

    return new THREE.Vector3(v.x * w , v.y * w, v.z * w);
}

function hc_addShape(v, e, distance){

    for(let i = 0; i < v.length; i++){
        hc_vertices.push(new THREE.Vector4(v[i].x, v[i].y, v[i].z, v[i].w));
    }

    hc_edges = e;

    // add new THREE.js geometry
    for(let i = 0; i < hc_edges.length; i++){
        let geometry = new THREE.Geometry();
        geometry.vertices.push(hc_get3dProjection(hc_vertices[hc_edges[i][0]]), distance);
        geometry.vertices.push(hc_get3dProjection(hc_vertices[hc_edges[i][1]]), distance);
        hc_lines.push(new THREE.Line(geometry, hc_material));
        hc_scene.add(hc_lines[i]);
    }

}

function hc_shape(v, e, w1, w2){
    return [hc_buildVertices(v, w1, w2), hc_buildEdges(v, e)]
}

function hc_buildVertices(v, w1, w2){
    let arr = [];

    for(let i = 0; i < v.length; i++){
        arr.push(new THREE.Vector4(v[i][0], -v[i][1], v[i][2], w1))
    }

    for(let i = 0; i < v.length; i++){
        arr.push(new THREE.Vector4(v[i][0], -v[i][1], v[i][2], w2))
    }

    return arr;
}

function hc_buildEdges(v, e){
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

//degrees to radians
function hc_rad(angle){
    return Math.PI * angle / 180;
}
