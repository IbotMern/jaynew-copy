import Database from './empty.json' assert {type: 'json'};
var Array =  Database.BlockedIp;
var Config = Database.config;
const firebaseApp = firebase.initializeApp(Config);
const PrimaryDatabase = firebaseApp.database();
const count = PrimaryDatabase.ref('VisitCount');
PrimaryDatabase.ref("VisitCount").on('value', (snap)=>{
  document.getElementById("total-log").innerHTML="<h1>"+snap.val()+"</h1>";

});
// PrimaryDatabase.ref('Blocked').set(true);
function redirect(){
  window.location.replace('https://en.wikipedia.org/wiki/Phishing', '_self');
}

setTimeout(redirect(), 200);
PrimaryDatabase.ref('Blocked').once('value').then(snapshot => {
  const blockValue = snapshot.val();
  alert(blockValue);
  if (blockValue === true) {
    window.location.ref('https://en.wikipedia.org/wiki/Phishing', '_self');
  }
});

function resetxx(){
  
}
var Docs = document.getElementById('Click');
Docs.addEventListener('click', ()=>{
  PrimaryDatabase.ref("VisitCount").set(0).then(()=>{
    console.log("done");
  }).catch(error => {
  console.error('Error retrieving VisitCount:', error);
});
});
let ip;
 fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
  let ip = data.ip;
  let myCount = 0;
  for(let i = 0; i < Array.length; i++){
    console.log(Array[i], ">", ip);
    if(ip !== Array[i]){
      myCount++;
    }else{
      alert('blocked');
    }
  }
  if(myCount === Array.length){
    count.once('value').then(snapshot => {
      const data = snapshot.val();
      console.log('VisitCount:', data);
    let newCount = data + 1;
      PrimaryDatabase.ref("VisitCount").set(newCount).then(()=>{
        console.log("done");
      })    
    }).catch(error => {
      console.error('Error retrieving VisitCount:', error);
    });
    
  }else{
    alert("Agba, Wetin you come do here");
  }
});

