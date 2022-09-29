const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load(
    '/FondoRubi.jpg',function(texture){
        scene.background = texture;
    }
);   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const gltfLoader = new THREE.GLTFLoader();

const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
scene.add( directionalLight );

const light = new THREE.AmbientLight( 0xffffff, 0.8); 
scene.add( light );

gltfLoader.load('../3d/robo_shiba/scene.gltf',
(gltf) =>{
    var LoaderObjeto = gltf.scene;
    LoaderObjeto.scale.set(1,1,1);
    LoaderObjeto.position.x = -150;
    LoaderObjeto.position.y = -150;
    LoaderObjeto.position.z = 1;
    console.log('carga completa');
    scene.add(LoaderObjeto);

    const controls = new THREE.DragControls( [LoaderObjeto], camera, renderer.domElement);
    
}, ()=>{

    console.log('cargando');
}, ()=>{
    console.log('error');
}
);



gltfLoader.load('../3d/cyborg/scene.gltf',
(gltf) =>{
    var LoaderObjeto = gltf.scene;
    LoaderObjeto.scale.set(20,20,20);
    LoaderObjeto.position.x = 2;
    LoaderObjeto.position.y = 2;
    LoaderObjeto.position.z = 1;
    console.log('carga completa');
    scene.add(LoaderObjeto);

    const controls = new THREE.DragControls( [LoaderObjeto], camera, renderer.domElement);
    const light1 = new THREE.AmbientLight( 0xffffff, 5); 
scene.add( light1 );
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error');
}

);


camera.position.z = 250;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

