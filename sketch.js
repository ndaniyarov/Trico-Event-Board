var button;

//let eventLists;

function setup() {
  createCanvas(500, 200);
  //button = createButton('Add event');
  //button.position(300, 50);
  //button.mousePressed(changeBG);
  someCheckedEvent();
  //noLoop();
  //events();
}
function events(){
  textSize(20);
  textAlign(LEFT);
  text('Party 1', 100, 90);
}
function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}
function someCheckedEvent(){
  bmcCheckbox = createCheckbox('Bryn Mawr', false);
  bmcCheckbox.changed(myCheckedEvent);
  hcCheckbox = createCheckbox('Haverford', false);
  hcCheckbox.changed(myCheckedEvent);
  swatCheckbox = createCheckbox('Swarthmore', false);
  swatCheckbox.changed(myCheckedEvent);
}

function draw() {
  background(250);
  textSize(20);
  textAlign(LEFT);
  text('Tri-co Event Board', 50, 30);
  text('Tri-Co heckathon', 100, 90);
  textAlign(LEFT);
  textSize(16);
  text('A bunck of cute people do cute stuff together', 100, 120);
  //let eventName = eventLists.name;
  //let eventDescription = eventLists.description;
  //textAlign(CENTER);
  //text(eventName, 0, height - 100, width, 30);
  //textSize(16);
  //text(eventDescription,0,height - 80, width,30);
}
function changeBG() {
  var val = random(255);
  background(val);
}

//function preload() {
  // Get the most recent earthquake in the database
  //let url =
  //'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
  // 'summary/all_day.geojson';
 // eventLists = loadJSON("assets/eventList.json");
//}





