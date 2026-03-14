const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffcc33 });
const saturn = new THREE.Mesh(geometry, material);
scene.add(saturn);
const texture = new THREE.TextureLoader().load('https://i.pinimg.com/736x/d8/97/c6/d897c671713a0b18ca89d310dcf1a091.jpg');
for (let i = 0; i < 400; i++) {const photoGeo = new THREE.PlaneGeometry(0.5, 0.5);
const photoMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
 const photo = new THREE.Mesh(photoGeo, photoMat);
 const angle = Math.random() * Math.PI * 2;    
 const radius = 8 + Math.random() * 4;
 photo.position.set(Math.cos(angle)*radius, (Math.random()-0.5), Math.sin(angle)*radius);
 photo.lookAt(0,0,0);
 scene.add(photo);}
 camera.position.z = 20;                          
 function animate() {requestAnimationFrame(animate);scene.rotation.y += 0.002; renderer.render(scene, camera);}
animate();