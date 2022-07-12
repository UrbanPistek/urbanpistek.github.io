function display_sphere(container){
    let len = 300; 
    let height = 300; 
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, len / height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( len, height);
  
    var sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);
  
    camera.position.z = 5;
  
    var update = function() {
      for (var i = 0; i < sphere.geometry.vertices.length; i++) {
      var p = sphere.geometry.vertices[i];
    }
    sphere.geometry.verticesNeedUpdate = true; //must be set or vertices will not update 
    }
  
    container.appendChild(renderer.domElement);
  
    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
    animate();
}
