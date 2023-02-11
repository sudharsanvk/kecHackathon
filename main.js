const gate6 = new PANOLENS.ImagePanorama("images/g6.jpg");
const fcin = new PANOLENS.ImagePanorama("images/FC_in.jpg");
const fc = new PANOLENS.ImagePanorama("images/fc.jpg");
const ramanujam = new PANOLENS.ImagePanorama("images/ramanujam.jpg");
const depts = new PANOLENS.ImagePanorama("images/dept.jpg");
const chem = new PANOLENS.ImagePanorama("images/chemfc.jpg");
const ft = new PANOLENS.ImagePanorama("images/ft.jpg");

const maharaja = new PANOLENS.ImagePanorama("images/maharaja.jpg");
const lib = new PANOLENS.ImagePanorama("images/lib.jpg");
// const ft = new PANOLENS.ImagePanorama("images/ft.jpg");
const busstand = new PANOLENS.ImagePanorama("images/busstand.jpg");
const itin = new PANOLENS.ImagePanorama("images/itin.jpg");

function myfunc()
{
  
  document.getElementById('video').style.display = "none";
  document.getElementById('main').style.display = "inline";
  viewer.add(gate6,fc,busstand,ft,chem,maharaja,itin,ramanujam,fcin,depts,lib);
  document.getElementById('move').style.display = "block";
}

var lookAtPositions = [
  new THREE.Vector3(1700, 0, 9000 ),
  new THREE.Vector3(8000, 500, 1500 ),
  new THREE.Vector3(-4350, -2460, -26 ),
  new THREE.Vector3(4000, -9999, 0 ),
  new THREE.Vector3(-5000, 1000, 9000 )
  ];



const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});


// viewer.add(gate6,fc,ramanujam,depts);
// viewer.add(fc,,depts,ramanujam,fcin,);
viewer.add(gate6,fc,busstand,ft,chem,maharaja,itin,ramanujam,fcin,depts,lib);
// viewer.add( panorama, panorama2 );



var a = "<h1>Way to ECE</h1>"
// var infospot = new PANOLENS.Infospot( 300, "images/up-arrow.png" );
var eceroute = new PANOLENS.Infospot( 600,"images/eceroute.png"  );
var maharaj = new PANOLENS.Infospot( 900,"images/maharaj.png"  );
var infospot = new PANOLENS.Infospot( 500, a );
var g6_depts = new PANOLENS.Infospot( 5000, "images/g6-dept.png" );
var infodept = new PANOLENS.Infospot( 3000, "images/it-admin.png" );
var infofc = new PANOLENS.Infospot( 3000, "images/food.png" );
var fcout = new PANOLENS.Infospot( 1000, "images/fc.png" );
var businfo = new PANOLENS.Infospot( 2000, "images/bstand.png" );
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
var beverage=new PANOLENS.Infospot( 600, "images/beverages.png" );

var ftb = new PANOLENS.Infospot( 600, "images/ftb.png" );
var cb = new PANOLENS.Infospot( 600, "images/cb.png" );
var busadmin = new PANOLENS.Infospot( 4000, "images/bus-admin.png" );
var busleft = new PANOLENS.Infospot( 1500, "images/bus-left.png" );
var busright = new PANOLENS.Infospot( 1800, "images/bus-right.png" );

var juncExit = new PANOLENS.Infospot( 1800, "images/exit.png" );


var exit_it=new PANOLENS.Infospot(500,"images/exit_1.png");
var exit_fc=new PANOLENS.Infospot(500,"images/exit_2.png");
var exit_chem=new PANOLENS.Infospot(500,"images/exit_3.png");
var exit_ft=new PANOLENS.Infospot(500,"images/exit_4.png")



document.getElementById("loc").innerHTML="near Gate 9"



eceroute.position.set( 7000, 10, 10); 
maharaj.position.set( 7000, 10, 3000); 

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





juncExit.position.set(4000, -9999, 0 );


beverage.position.set(400,110,-1700);
busadmin.position.set(-3000, 1200, -9000);
busright.position.set(-7000, 700, -8000);
busleft.position.set(1000, 250, -8000);
ftb.position.set(-9000, 1000, 500)
cb.position.set(-7000, 1000, 500)

exit_it.position.set(4000,-9000,0);
exit_fc.position.set(4000,-9000,0);
exit_chem.position.set(4000,-9000,0);
exit_ft.position.set(4000,-9000,0);

// var fcin_info = new PANOLENS.Infospot( 1900, "images/stationary.png" );
// var fcin_info1 = new PANOLENS.Infospot( 1700, "images/snack.png" );

// ram.position.set(-5000, 300, 500)
// it.position.set(-5000, 300, 500)

// var content = document.createElement( 'div' );

// content.innerHTML = 'Go to FC';

// infospot.addHoverText( content.innerHTML,40 );

// infospot.setContainer("hi");


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


fcin_info.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
  msg.text="stationary";
  window.speechSynthesis.speak(msg);});
  fcin_info1.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
    msg.text="snacks";
    window.speechSynthesis.speak(msg);});
  fcin_bill.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
    msg.text="bill counter";
    window.speechSynthesis.speak(msg);});
  fcin_food.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
    msg.text="food";
    window.speechSynthesis.speak(msg);});
  beverage.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
   msg.text="beverages";
   window.speechSynthesis.speak(msg);});

   


cb.addEventListener( 'click', function(){ viewer.setPanorama( chem ); });

ftb.addEventListener( 'click', function(){ viewer.setPanorama( ft ); });

businfo.addEventListener( 'click', function(){ viewer.setPanorama( busstand ); });

juncExit.addEventListener( 'click', function(){ viewer.setPanorama( gate6 ); });





gate6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

depts.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );

fc.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[4], 0 );
} );









// Add the infospot to the viewer
gate6.add( infospot);
gate6.add( g6_depts);
depts.add( infodept,infofc,home,juncExit);
fc.add(ftb,fcout,businfo,cb,fcout );
// fc.add(ftb,ftchem,,businfo,home);
ramanujam.add(ram,ct,admin_it,w2fc,home);
fcin.add(fcin_exit,fcin_info,fcin_info1,fcin_bill,fcin_food,beverage);

busstand.add(busadmin,busright,busleft);

it_in.add(exit_it);
fcin.add(exit_fc);
chem.add(exit_chem);
ft.add(exit_ft);

gate6.add( maharaj,eceroute);

busstand.add(busadmin,busright,busleft);

// const control = viewer.getControl();
// control.panRight(1);
// gate6.add(hi);
