// create variables at the top
var keys = document.querySelectorAll(".key")
var notes = {
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio"),
}

var pColor = document.querySelectorAll("pColor")

// define functions in the middle 
function playNote(key) {
    // console.log(key)
    notes[key].play(),
        notes[key].currentTime = 0.5;
}

// call functions and/or add Event Listeners 
keys.forEach(function (key) {
    key.addEventListener("click", function () {
        playNote(key.id)
    })
})
document.addEventListener('keydown', function (event) {
    if (event.key == "s") {
        playNote("cKey")
        document.getElementById('cKey').style.background = "#df00ae";
    }
    else if (event.key == "d") {
        playNote("dKey")
        document.getElementById('dKey').style.background = "#fd0505";
    }
    else if (event.key == "f") {
        playNote("eKey")
        document.getElementById('eKey').style.background = "#4bfd05";
    }
    else if (event.key == "g") {
        playNote("fKey")
        document.getElementById('fKey').style.background = "#00c9b8";
    }
    else if (event.key == "h") {
        playNote("gKey")
        document.getElementById('gKey').style.background = "#df00ae";
    }
    else if (event.key == "j") {
        playNote("aKey")
        document.getElementById('aKey').style.background = "#d3d600";
    }
    else if (event.key == "k") {
        playNote("bKey")
        document.getElementById('bKey').style.background = "#d62b00";
    }
}
)

document.addEventListener('keyup', function (event) {
    if (event.key == "s") {
        document.getElementById('cKey').style.background = "";
    }
    else if (event.key == "d") {
        document.getElementById('dKey').style.background = "";
    }
    else if (event.key == "f") {
        document.getElementById('eKey').style.background = "";
    }
    else if (event.key == "g") {
        document.getElementById('fKey').style.background = "";
    }
    else if (event.key == "h") {
        document.getElementById('gKey').style.background = "";
    }
    else if (event.key == "j") {
        document.getElementById('aKey').style.background = "";
    }
    else if (event.key == "k") {
        document.getElementById('bKey').style.background = "";
    }
}
)