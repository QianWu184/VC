<template>
  <div id="webgl" refs="webgl"></div>
</template>
<script>
export default {
  name: "webgl",
  data() {
    return {
      scene: null,
      camera: null,
      render: null,
      count: 0,
      left: false,
      smokeParticles: []
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        let refPane = document.getElementById("webgl");
        if (refPane) {
          this.camera.aspect = refPane.offsetWidth / refPane.offsetHeight;
          this.camera.updateProjectionMatrix();
          this.render.setSize(refPane.offsetWidth, refPane.offsetHeight);
        }
      },
      false
    );
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
      this.camera.position.z = 30;
      let renderer = new THREE.WebGLRenderer();
      this.render = renderer;
      renderer.setSize(refPane.offsetWidth, refPane.offsetHeight);
      refPane.appendChild(renderer.domElement);
      let light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(20, 20, 20);
      scene.add(light);

      this.addBox();
      this.addSmoke();
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
    },
    addSmoke() {
      // let smokeTexture = new THREE.TextureLoader().load(
      //   "../static/images/timg.jpg"
      // );
      // 初始化一个加载器
      var loader = new THREE.TextureLoader();

      // 加载一个资源
      loader.load(
        // 资源URL
         "../static/images/timg.jpg",

        // onLoad回调
        function(texture) {
           let smokeMaterial = new THREE.MeshLambertMaterial({
          color: 0x00dddd,
          map: texture,
          transparent: true
        });

        let smokeGeo = new THREE.PlaneGeometry(5, 5);
        for (let i = 0; i < 50; i++) {
          let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
          particle.position.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 100 - 50
          );
          particle.rotation.z = Math.random() * 10;
          this.scene.add(particle);
          this.smokeParticles.push(particle);
        }
        },

        // 目前暂不支持onProgress的回调
        undefined,

        // onError回调
        function(err) {
          console.log(err);
        }
      );

    
    },
    moveSmoke() {
      var sp = this.smokeParticles.length;
      while (sp--) {
        this.smokeParticles[sp].rotation.z += 0.01 * 0.2;
      }
    },
    animate() {
      let cube = this.scene.getObjectByName("testCube");
      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        if (this.left) {
          cube.position.x += 0.01;
          cube.position.z += 0.01;
        } else {
          cube.position.x -= 0.01;
          cube.position.z -= 0.01;
        }
        this.count++;
        if (this.count > 100) {
          this.count = 0;
          this.left = !this.left;
        }
      }
      this.render.render(this.scene, this.camera);
      this.moveSmoke();
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
