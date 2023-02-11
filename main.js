const gate6 = new PANOLENS.ImagePanorama("images/g6.jpg");
const fcin = new PANOLENS.ImagePanorama("images/FC_in.jpg");
const fc = new PANOLENS.ImagePanorama("images/fc.jpg");
const ramanujam = new PANOLENS.ImagePanorama("images/ramanujam.jpg");
const depts = new PANOLENS.ImagePanorama("images/dept.jpg");

function myfunc()
{
  document.getElementById('video').style.display = "none";
  document.getElementById('main').style.display = "inline";
  viewer.add(gate6,depts,fc,ramanujam,fcin,);
}


const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});


// viewer.add(gate6,fc,ramanujam,depts);
viewer.add(gate6,depts,fc,ramanujam,fcin,);
// viewer.add( panorama, panorama2 );



var a = "<h1>Way to ECE</h1>"
// var infospot = new PANOLENS.Infospot( 300, "images/up-arrow.png" );
var infospot = new PANOLENS.Infospot( 500, a );
var g6_depts = new PANOLENS.Infospot( 5000, "images/g6-dept.png" );
var infodept = new PANOLENS.Infospot( 3000, "images/it-admin.png" );
var infofc = new PANOLENS.Infospot( 3000, "images/food.png" );
var fcout = new PANOLENS.Infospot( 1000, "images/fc.png" );
var businfo = new PANOLENS.Infospot( 2000, "images/bus.png" );
var ftchem = new PANOLENS.Infospot( 400, "images/ft-chem.png" );
var ram = new PANOLENS.Infospot( 600, "images/ramanujam.png" );
var ct = new PANOLENS.Infospot( 1500, "images/ctug.png" );
var admin_it = new PANOLENS.Infospot( 2000, "images/admin-it.png" );
var w2fc = new PANOLENS.Infospot( 400, "images/w2fc.png" );
var fcin_info = new PANOLENS.Infospot( 1900, "images/stationary.png" );
var fcin_info1 = new PANOLENS.Infospot( 1700, "images/snack.png" );
var fcin_bill=new PANOLENS.Infospot( 100, "images/bill.png" );
var fcin_food=new PANOLENS.Infospot( 130, "images/food_fc.png" );
var fcin_exit=new PANOLENS.Infospot( 150, "images/exit.png" );
var home=new PANOLENS.Infospot( 150, "images/home.png" );


document.getElementById("loc").innerHTML="near Gate 9"
// var ctug = new PANOLENS.Infospot( 500, "images/ctug.png" );

// Set the position of the infospot 
// infospot.position.set( -10000, 100, -4000 );
// infospot.position.set( 1700, 0, 10000);   reverse backside

infospot.position.set( 7000, 10, 10);  
g6_depts.position.set( 1700, 0, 9000);  
infodept.position.set(7000, 200, 9000)
infofc.position.set(9000, 1000, 0)
fcout.position.set(-5000, 500, 3000)
businfo.position.set(-9000, -500, -360)
ftchem.position.set(-8000, 1000, 500)
ram.position.set(-5000, 300, -100)
ct.position.set(4000, 1000, -9000)
admin_it.position.set(-4000, 1000, -7000)
w2fc.position.set(-5000, 100, 4000);
fcin_info.position.set(900, 180, -9000);
fcin_info1.position.set(100, 0, -8000);
fcin_bill.position.set(100,20,400);
fcin_food.position.set(100,10,600)
fcin_exit.position.set(500,-40,-20)
home.position.set(500,-40,-20)

// var fcin_info = new PANOLENS.Infospot( 1900, "images/stationary.png" );
// var fcin_info1 = new PANOLENS.Infospot( 1700, "images/snack.png" );

// ram.position.set(-5000, 300, 500)
// it.position.set(-5000, 300, 500)

var content = document.createElement( 'div' );

content.innerHTML = 'Go to FC';

infospot.addHoverText( content.innerHTML,40 );

infospot.setContainer("hi");


// infospot.addEventListener( 'click', function(){ viewer.setPanorama( fc ); document.getElementById("loc").innerHTML="near by Food court" });
g6_depts.addEventListener( 'click', function(){ viewer.setPanorama( depts ); document.getElementById("loc").innerHTML="at the Junction of Fc,IT park and maharaja";var msg = new SpeechSynthesisUtterance();
msg.text = "at the Junction of Fc,IT park and maharaja";
window.speechSynthesis.speak(msg);});
infodept.addEventListener( 'click', function(){ viewer.setPanorama( ramanujam );document.getElementById("loc").innerHTML="near Ramanujam seminar hall";var msg = new SpeechSynthesisUtterance();
msg.text = "near Ramanujam seminar hall";
window.speechSynthesis.speak(msg); });
infofc.addEventListener( 'click', function(){ viewer.setPanorama( fc ); document.getElementById("loc").innerHTML="near by Food court";var msg = new SpeechSynthesisUtterance();
msg.text = "near by Food court";
window.speechSynthesis.speak(msg);});
fcout.addEventListener( 'click', function(){ viewer.setPanorama( fcin ); document.getElementById("loc").innerHTML="inside FC";var msg = new SpeechSynthesisUtterance();
msg.text = "inside FC";
window.speechSynthesis.speak(msg);});

// Add the infospot to the viewer
gate6.add( infospot,home);
gate6.add( g6_depts,home);
depts.add( infodept,infofc,home);
fc.add(ftchem,fcout,businfo,home);
ramanujam.add(ram,ct,admin_it,w2fc,home);
fcin.add(fcin_info);
fcin.add(fcin_info1);
fcin.add(fcin_bill);
fcin.add(fcin_food);
fcin.add(fcin_exit,home);


// gate6.add(hi);
