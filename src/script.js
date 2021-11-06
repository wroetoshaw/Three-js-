import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".webgl");

//scene
const scene = new THREE.Scene();
const sizes = {
  width: 800,
  height: 600,
};

//constrcution
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff000,
});
const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(mesh);

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
