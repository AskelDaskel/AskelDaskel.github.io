function TopSummoner1() {
  var timer;
  var ready = false;
  var spell = document.getElementById("TopSummoner1").value;
  if (spell != "Smite") {
  var element = document.getElementById("Top1")
  var child = document.getElementById("Top1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("TopSummoner1").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "TopSummonerSpell1");
  input.setAttribute("onclick", "TopSummonerStop1()");
  document.getElementById("Top1").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookTop").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightTop").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityTop").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownTop1 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "TopSummonerSpell1")
    input.setAttribute("onclick", "TopSummoner1()")
    document.getElementById("Top1").appendChild(input);
    clearInterval(countdownTop1)
  }
  document.getElementById("TopCooldown1").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("TopCooldown1").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function TopSummoner2() {
  var timer;
  var ready = false;
  var spell = document.getElementById("TopSummoner2").value;
  if (spell != "Smite") {
  var element = document.getElementById("Top2")
  var child = document.getElementById("Top2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("TopSummoner2").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "TopSummonerSpell2");
  input.setAttribute("onclick", "TopSummonerStop2()");
  document.getElementById("Top2").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookTop").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightTop").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityTop").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownTop2 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "TopSummonerSpell2")
    input.setAttribute("onclick", "TopSummoner2()")
    document.getElementById("Top2").appendChild(input);
    clearInterval(countdownTop2)
  }
  document.getElementById("TopCooldown2").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("TopCooldown2").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function JungleSummoner1() {
  var timer;
  var ready = false;
  var spell = document.getElementById("JungleSummoner1").value;
  if (spell != "Smite") {
  var element = document.getElementById("Jungle1")
  var child = document.getElementById("Jungle1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("JungleSummoner1").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "JungleSummonerSpell1");
  input.setAttribute("onclick", "JungleSummonerStop1()");
  document.getElementById("Jungle1").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookJungle").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightJungle").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityJungle").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownJungle1 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "JungleSummonerSpell1")
    input.setAttribute("onclick", "JungleSummoner1()")
    document.getElementById("Jungle1").appendChild(input);
    clearInterval(countdownJungle1)
  }
  document.getElementById("JungleCooldown1").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("JungleCooldown1").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function JungleSummoner2() {
  var timer;
  var ready = false;
  var spell = document.getElementById("JungleSummoner2").value;
  if (spell != "Smite") {
  var element = document.getElementById("Jungle2")
  var child = document.getElementById("Jungle2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("JungleSummoner2").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "JungleSummonerSpell2");
  input.setAttribute("onclick", "JungleSummonerStop2()");
  document.getElementById("Jungle2").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookJungle").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightJungle").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityJungle").checked === true) {
    timer -= timer*0.1;
  }
  if (spell != "Smite") {
  countdownJungle2 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "JungleSummonerSpell2")
    input.setAttribute("onclick", "JungleSummoner2()")
    document.getElementById("Jungle2").appendChild(input);
    clearInterval(countdownJungle2)
  }
  document.getElementById("JungleCooldown2").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("JungleCooldown2").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function MidSummoner1() {
  var timer;
  var ready = false;
  var spell = document.getElementById("MidSummoner1").value;
  if (spell != "Smite") {
  var element = document.getElementById("Mid1")
  var child = document.getElementById("Mid1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("MidSummoner1").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "MidSummonerSpell1");
  input.setAttribute("onclick", "MidSummonerStop1()");
  document.getElementById("Mid1").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookMid").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightMid").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityMid").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownMid1 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "MidSummonerSpell1")
    input.setAttribute("onclick", "MidSummoner1()")
    document.getElementById("Mid1").appendChild(input);
    clearInterval(countdownMid1)
  }
  document.getElementById("MidCooldown1").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("MidCooldown1").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function MidSummoner2() {
  var timer;
  var ready = false;
  var spell = document.getElementById("MidSummoner2").value;
  if (spell != "Smite") {
  var element = document.getElementById("Mid2")
  var child = document.getElementById("Mid2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("MidSummoner2").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "MidSummonerSpell2");
  input.setAttribute("onclick", "MidSummonerStop2()");
  document.getElementById("Mid2").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookMid").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightMid").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityMid").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownMid2 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "MidSummonerSpell2")
    input.setAttribute("onclick", "MidSummoner2()")
    document.getElementById("Mid2").appendChild(input);
    clearInterval(countdownMid2)
  }
  document.getElementById("MidCooldown2").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("MidCooldown2").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function ADCSummoner1() {
  var timer;
  var ready = false;
  var spell = document.getElementById("ADCSummoner1").value;
  if (spell != "Smite") {
  var element = document.getElementById("ADC1")
  var child = document.getElementById("ADC1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("ADCSummoner1").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "ADCSummonerSpell1");
  input.setAttribute("onclick", "ADCSummonerStop1()");
  document.getElementById("ADC1").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookADC").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightADC").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityADC").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownADC1 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "ADCSummonerSpell1")
    input.setAttribute("onclick", "ADCSummoner1()")
    document.getElementById("ADC1").appendChild(input);
    clearInterval(countdownADC1)
  }
  document.getElementById("ADCCooldown1").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("ADCCooldown1").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function ADCSummoner2() {
  var timer;
  var ready = false;
  var spell = document.getElementById("ADCSummoner2").value;
  if (spell != "Smite") {
  var element = document.getElementById("ADC2")
  var child = document.getElementById("ADC2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("ADCSummoner2").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "ADCSummonerSpell2");
  input.setAttribute("onclick", "ADCSummonerStop2()");
  document.getElementById("ADC2").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookADC").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightADC").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LucidityADC").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownADC2 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "ADCSummonerSpell2")
    input.setAttribute("onclick", "ADCSummoner2()")
    document.getElementById("ADC2").appendChild(input);
    clearInterval(countdownADC2)
  }
  document.getElementById("ADCCooldown2").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("ADCCooldown2").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function SupportSummoner1() {
  var timer;
  var ready = false;
  var spell = document.getElementById("SupportSummoner1").value;
  if (spell != "Smite") {
  var element = document.getElementById("Support1")
  var child = document.getElementById("Support1").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("SupportSummoner1").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "SupportSummonerSpell1");
  input.setAttribute("onclick", "SupportSummonerStop1()");
  document.getElementById("Support1").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookSupport").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightSupport").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LuciditySupport").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownSupport1 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "SupportSummonerSpell1")
    input.setAttribute("onclick", "SupportSummoner1()")
    document.getElementById("Support1").appendChild(input);
    clearInterval(countdownSupport1)
  }
  document.getElementById("SupportCooldown1").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("SupportCooldown1").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function SupportSummoner2() {
  var timer;
  var ready = false;
  var spell = document.getElementById("SupportSummoner2").value;
  if (spell != "Smite") {
  var element = document.getElementById("Support2")
  var child = document.getElementById("Support2").hasChildNodes();
  if (child) {
    element.removeChild(element.firstChild);
  }

  var SummonerName = document.getElementById("SupportSummoner2").value;
  var imagePath = ("../SummonerSquares/BW/" + SummonerName + "Square.png");
  var input = document.createElement("input");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "SupportSummonerSpell2");
  input.setAttribute("onclick", "SupportSummonerStop2()");
  document.getElementById("Support2").appendChild(input);
}

  if (spell == "Barrier") { timer = barrier }
  if (spell == "Cleanse") { timer = cleanse }
  if (spell == "Exhaust") { timer = exhaust }
  if (spell == "Flash") { timer = flash }
  if (spell == "Ghost") { timer = ghost }
  if (spell == "Heal") { timer = heal }
  if (spell == "Ignite") { timer = ignite }
  if (spell == "Teleport") { timer = teleport }
  if (document.getElementById("UnsealedSpellBookSupport").checked === true) {
    timer -= timer*0.25;
  }
  if (document.getElementById("CosmicInsightSupport").checked === true) {
    timer -= timer*0.05;
  }
  if (document.getElementById("LuciditySupport").checked === true) {
    timer -= timer*0.1;
  }

  if (spell != "Smite") {
  countdownSupport2 = setInterval(function () {
  timer--;
  if (Math.round(timer) == 0) {
    ready = true;

    element.removeChild(element.firstChild);
    var input = document.createElement("input");
    var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
    input.type = "image";
    input.src = imagePath;
    input.setAttribute("id", "SupportSummonerSpell2")
    input.setAttribute("onclick", "SupportSummoner2()")
    document.getElementById("Support2").appendChild(input);
    clearInterval(countdownSupport2)
  }
  document.getElementById("SupportCooldown2").value = Math.round(timer) + " sec";
  if (ready) {
    document.getElementById("SupportCooldown2").value = "Ready";
    ready = false;
  }
  }, 1000)
}
}

function TopSummonerStop1() {
  clearInterval(countdownTop1)
  document.getElementById("TopCooldown1").value = "Ready";
  var element = document.getElementById("Top1")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("TopSummoner1").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "TopSummonerSpell1")
  input.setAttribute("onclick", "TopSummoner1()")
  document.getElementById("Top1").appendChild(input);
}

function TopSummonerStop2() {
  clearInterval(countdownTop2)
  document.getElementById("TopCooldown2").value = "Ready";
  var element = document.getElementById("Top2")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("TopSummoner2").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "TopSummonerSpell2")
  input.setAttribute("onclick", "TopSummoner2()")
  document.getElementById("Top2").appendChild(input);
}

function JungleSummonerStop1() {
  clearInterval(countdownJungle1)
  document.getElementById("JungleCooldown1").value = "Ready";
  var element = document.getElementById("Jungle1")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("JungleSummoner1").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "JungleSummonerSpell1")
  input.setAttribute("onclick", "JungleSummoner1()")
  document.getElementById("Jungle1").appendChild(input);
}

function JungleSummonerStop2() {
  clearInterval(countdownJungle2)
  document.getElementById("JungleCooldown2").value = "Ready";
  var element = document.getElementById("Jungle2")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("JungleSummoner2").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "JungleSummonerSpell2")
  input.setAttribute("onclick", "JungleSummoner2()")
  document.getElementById("Jungle2").appendChild(input);
}

function MidSummonerStop1() {
  clearInterval(countdownMid1)
  document.getElementById("MidCooldown1").value = "Ready";
  var element = document.getElementById("Mid1")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("MidSummoner1").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "MidSummonerSpell1")
  input.setAttribute("onclick", "MidSummoner1()")
  document.getElementById("Mid1").appendChild(input);
}

function MidSummonerStop2() {
  clearInterval(countdownMid2)
  document.getElementById("MidCooldown2").value = "Ready";
  var element = document.getElementById("Mid2")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("MidSummoner2").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "MidSummonerSpell2")
  input.setAttribute("onclick", "MidSummoner2()")
  document.getElementById("Mid2").appendChild(input);
}

function ADCSummonerStop1() {
  clearInterval(countdownADC1)
  document.getElementById("ADCCooldown1").value = "Ready";
  var element = document.getElementById("ADC1")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("ADCSummoner1").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "ADCSummonerSpell1")
  input.setAttribute("onclick", "ADCSummoner1()")
  document.getElementById("ADC1").appendChild(input);
}

function ADCSummonerStop2() {
  clearInterval(countdownADC2)
  document.getElementById("ADCCooldown2").value = "Ready";
  var element = document.getElementById("ADC2")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("ADCSummoner2").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "ADCSummonerSpell2")
  input.setAttribute("onclick", "ADCSummoner2()")
  document.getElementById("ADC2").appendChild(input);
}

function SupportSummonerStop1() {
  clearInterval(countdownSupport1)
  document.getElementById("SupportCooldown1").value = "Ready";
  var element = document.getElementById("Support1")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("SupportSummoner1").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "SupportSummonerSpell1")
  input.setAttribute("onclick", "SupportSummoner1()")
  document.getElementById("Support1").appendChild(input);
}

function SupportSummonerStop2() {
  clearInterval(countdownSupport2)
  document.getElementById("SupportCooldown2").value = "Ready";
  var element = document.getElementById("Support2")
  element.removeChild(element.firstChild);
  var SummonerName = document.getElementById("SupportSummoner2").value;
  var input = document.createElement("input");
  var imagePath = ("../SummonerSquares/" + SummonerName + "Square.png");
  input.type = "image";
  input.src = imagePath;
  input.setAttribute("id", "SupportSummonerSpell2")
  input.setAttribute("onclick", "SupportSummoner2()")
  document.getElementById("Support2").appendChild(input);
}
