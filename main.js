
const gate6 = new PANOLENS.ImagePanorama("images/g6.jpg");
const fcin = new PANOLENS.ImagePanorama("images/FC_in.jpg");
const fc = new PANOLENS.ImagePanorama("images/fc.jpg");
const ramanujam = new PANOLENS.ImagePanorama("images/ramanujam.jpg");
const depts = new PANOLENS.ImagePanorama("images/depts.jpg");




const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});


// viewer.add(gate6,fc,ramanujam,depts);
viewer.add(gate6,fc,ramanujam,fcin,depts);
// viewer.add( panorama, panorama2 );




// var infospot = new PANOLENS.Infospot( 300, "images/up-arrow.png" );
var infospot = new PANOLENS.Infospot( 500, "images/ece.png" );
var g6_depts = new PANOLENS.Infospot( 5000, "images/g6-dept.jpg" );
var infodept = new PANOLENS.Infospot( 5000, "images/it-admin.png" );
var infofc = new PANOLENS.Infospot( 6000, "images/food.png" );
var fcout = new PANOLENS.Infospot( 500, "images/fc.png" );



// var ctug = new PANOLENS.Infospot( 500, "images/ctug.png" );

// Set the position of the infospot 
// infospot.position.set( -10000, 100, -4000 );
// infospot.position.set( 1700, 0, 10000);   reverse backside

infospot.position.set( 7000, 10, 10);  
g6_depts.position.set( 1700, 0, 10000);  
infodept.position.set(3000, 0, 5000)
infofc.position.set(9000, 1000, 0)
fcout.position.set(-7000, 500, 1500)

var content = document.createElement( 'div' );

content.innerHTML = 'Go to FC';

infospot.addHoverText( content.innerHTML,40 );

infospot.setContainer("hi");


infospot.addEventListener( 'click', function(){ viewer.setPanorama( fc ); });

g6_depts.addEventListener( 'click', function(){ viewer.setPanorama( depts ); });

infodept.addEventListener( 'click', function(){ viewer.setPanorama( ramanujam ); });

infofc.addEventListener( 'click', function(){ viewer.setPanorama( fc ); });

// Add the infospot to the viewer
gate6.add( infospot );
gate6.add( g6_depts );
depts.add( infodept,infofc );
fc.add(fcout);
// gate6.add( ctug );

// gate6.add(hi);
