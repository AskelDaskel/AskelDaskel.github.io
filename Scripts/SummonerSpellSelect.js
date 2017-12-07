function TopSummonerSelect1() {
  var element = document.getElementById("Top1")
  var child = document.getElementById("Top1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("TopSummoner1").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "TopSummonerSpell1")
  input.setAttribute("onclick", "TopSummoner1()")
  document.getElementById("Top1").appendChild(input);

  document.getElementById("TopCooldown1").value = "Ready";
}

function TopSummonerSelect2() {
  var element = document.getElementById("Top2")
  var child = document.getElementById("Top2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("TopSummoner2").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "TopSummonerSpell2")
  input.setAttribute("onclick", "TopSummoner2()")
  document.getElementById("Top2").appendChild(input);

  document.getElementById("TopCooldown2").value = "Ready";
}

function JungleSummonerSelect1() {
  var element = document.getElementById("Jungle1")
  var child = document.getElementById("Jungle1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("JungleSummoner1").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "JungleSummonerSpell1")
  input.setAttribute("onclick", "JungleSummoner1()")
  document.getElementById("Jungle1").appendChild(input);

  document.getElementById("JungleCooldown1").value = "Ready";
}

function JungleSummonerSelect2() {
  var element = document.getElementById("Jungle2")
  var child = document.getElementById("Jungle2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("JungleSummoner2").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "JungleSummonerSpell2")
  input.setAttribute("onclick", "JungleSummoner2()")
  document.getElementById("Jungle2").appendChild(input);

  document.getElementById("JungleCooldown2").value = "Ready";
}

function MidSummonerSelect1() {
  var element = document.getElementById("Mid1")
  var child = document.getElementById("Mid1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("MidSummoner1").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "MidSummonerSpell1")
  input.setAttribute("onclick", "MidSummoner1()")
  document.getElementById("Mid1").appendChild(input);

  document.getElementById("MidCooldown1").value = "Ready";
}

function MidSummonerSelect2() {
  var element = document.getElementById("Mid2")
  var child = document.getElementById("Mid2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("MidSummoner2").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "MidSummonerSpell2")
  input.setAttribute("onclick", "MidSummoner2()")
  document.getElementById("Mid2").appendChild(input);

  document.getElementById("MidCooldown2").value = "Ready";
}

function ADCSummonerSelect1() {
  var element = document.getElementById("ADC1")
  var child = document.getElementById("ADC1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("ADCSummoner1").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "ADCSummonerSpell1")
  input.setAttribute("onclick", "ADCSummoner1()")
  document.getElementById("ADC1").appendChild(input);

  document.getElementById("ADCCooldown1").value = "Ready";
}

function ADCSummonerSelect2() {
  var element = document.getElementById("ADC2")
  var child = document.getElementById("ADC2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("ADCSummoner2").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "ADCSummonerSpell2")
  input.setAttribute("onclick", "ADCSummoner2()")
  document.getElementById("ADC2").appendChild(input);

  document.getElementById("ADCCooldown2").value = "Ready";
}

function SupportSummonerSelect1() {
  var element = document.getElementById("Support1")
  var child = document.getElementById("Support1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("SupportSummoner1").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "SupportSummonerSpell1")
  input.setAttribute("onclick", "SupportSummoner1()")
  document.getElementById("Support1").appendChild(input);

  document.getElementById("SupportCooldown1").value = "Ready";
}

function SupportSummonerSelect2() {
  var element = document.getElementById("Support2")
  var child = document.getElementById("Support2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("SupportSummoner2").value;
  var imagePath = ("SummonerSquares/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.src = imagePath;
  input.type = "image";
  input.setAttribute("id", "SupportSummonerSpell2")
  input.setAttribute("onclick", "SupportSummoner2()")
  document.getElementById("Support2").appendChild(input);

  document.getElementById("SupportCooldown2").value = "Ready";
}
