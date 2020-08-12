<template>
  <div id="webgl"></div>
</template>
<script>
export default {
  name: "webgl",
  data() {
    return {
      scene: null,
      camera: null,
      render: null,
      count: 0
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      let refPane = document.getElementById("webgl");
      let scene = new THREE.Scene();
      this.scene = scene;
      let camera = new THREE.PerspectiveCamera(
        75,
        refPane.offsetWidth / refPane.offsetHeight,
        0.1,
        1000
      );
      this.camera = camera;
      let renderer = new THREE.WebGLRenderer();
      this.render = renderer;
      renderer.setSize(refPane.offsetWidth, refPane.offsetHeight);
      refPane.appendChild(renderer.domElement);
      this.addBox();
    },
    addBox() {
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      let material = new THREE.MeshBasicMaterial();
      let cube = new THREE.Mesh(geometry, material);
      let texture = new THREE.TextureLoader().load(
        "../static/images/author1.JPG"
      );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      material.map = texture;
      cube.name = "testCube";
      this.scene.add(cube);
      this.camera.position.z = 10;
    },
    animate() {
      let cube = this.scene.getObjectByName("testCube");
      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        if (this.count <= 0) {
          cube.position.x += 0.01;
          cube.position.y += 0.01;
          cube.position.z += 0.01;
          this.count+=1;
        } else if(this.count >100){
          cube.position.x -= 0.01;
          cube.position.y -= 0.01;
          cube.position.z -= 0.01;
          this.count-=1;
        }
      }
      this.render.render(this.scene, this.camera);
      requestAnimationFrame(this.animate.bind(this));
    }
  }
};
</script>
<style scoped>
#webgl {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
