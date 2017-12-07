function TopSelect() {
  var element = document.getElementById("TopContainer")
  var child = document.getElementById("TopContainer").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var ChampionName = document.getElementById("Top").value;
  var imagePath = ("ChampionSquares/" + ChampionName + "Square.png");
  var img = document.createElement("IMG");
  img.src = imagePath;
  document.getElementById("TopContainer").appendChild(img);
}

function JungleSelect() {
  var element = document.getElementById("JungleContainer")
  var child = document.getElementById("JungleContainer").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var ChampionName = document.getElementById("Jungle").value;
  var imagePath = ("ChampionSquares/" + ChampionName + "Square.png");
  var img = document.createElement("IMG");
  img.src = imagePath;
  document.getElementById("JungleContainer").appendChild(img);
}

function MidSelect() {
  var element = document.getElementById("MidContainer")
  var child = document.getElementById("MidContainer").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var ChampionName = document.getElementById("Mid").value;
  var imagePath = ("ChampionSquares/" + ChampionName + "Square.png");
  var img = document.createElement("IMG");
  img.src = imagePath;
  document.getElementById("MidContainer").appendChild(img);
}

function ADCSelect() {
  var element = document.getElementById("ADCContainer")
  var child = document.getElementById("ADCContainer").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var ChampionName = document.getElementById("ADC").value;
  var imagePath = ("ChampionSquares/" + ChampionName + "Square.png");
  var img = document.createElement("IMG");
  img.src = imagePath;
  document.getElementById("ADCContainer").appendChild(img);
}

function SupportSelect() {
  var element = document.getElementById("SupportContainer")
  var child = document.getElementById("SupportContainer").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var ChampionName = document.getElementById("Support").value;
  var imagePath = ("ChampionSquares/" + ChampionName + "Square.png");
  var img = document.createElement("IMG");
  img.src = imagePath;
  document.getElementById("SupportContainer").appendChild(img);
}
