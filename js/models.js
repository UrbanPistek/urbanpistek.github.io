function display_noise_sphere(container, len, height, speed, scale, sr, sw, sh, zoom){
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, len / height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( len, height);
  
    var sphere_geometry = new THREE.SphereGeometry(sr, sw, sh);
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);
  
    camera.position.z = zoom;
  
    var update = function() {
        for (var i = 0; i < sphere.geometry.vertices.length; i++) {
            var p = sphere.geometry.vertices[i];
            var time = performance.now() * speed;
            p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * scale + time, p.y * scale, p.z * scale));
        }
        sphere.geometry.computeVertexNormals();
        sphere.geometry.verticesNeedUpdate = true; //must be set or vertices will not update 
    }
  
    container.appendChild(renderer.domElement);
  
    function animate() {
      requestAnimationFrame( animate );
      update()
      renderer.render( scene, camera );
    }
    animate();
}

function create_noise_sphere(container, len, height, scale, sr, sw, sh, zoom){
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, len / height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( len, height);
  
    var sphere_geometry = new THREE.SphereGeometry(sr, sw, sh);
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);
  
    camera.position.z = zoom;
  
    var update = function() {
        for (var i = 0; i < sphere.geometry.vertices.length; i++) {
            var p = sphere.geometry.vertices[i];
            p.add(p.clone().normalize().multiplyScalar(0.1 * noise.perlin3(p.x * scale, p.y * scale, p.z * scale)));
        }
        sphere.geometry.computeVertexNormals();
        sphere.geometry.verticesNeedUpdate = true; //must be set or vertices will not update 
    }
  
    container.appendChild(renderer.domElement);
  
    function animate() {
      requestAnimationFrame( animate );
      update()
      renderer.render( scene, camera );
    }
    animate();
}
