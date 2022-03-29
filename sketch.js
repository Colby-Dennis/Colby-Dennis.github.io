// Oscillator Variables
let pb1a1
let pb1a1Oscillators
let pb1a2
let pb1a2Oscillators
let pb1a3
let pb1a3Oscillators
let pb1b1
let pb1b1Oscillators
let pb1b2
let pb1b2Oscillators
let pb1b3
let pb1b3Oscillators
let pb1b4
let pb1b4Oscillators
let pb1b5
let pb1b5Oscillators
let pb1c1
let pb1c1Oscillators
let pb1c2
let pb1c2Oscillators

let pb1de
let pb1deOscillators
let pb1da
let pb1daOscillators

let pb2a105
let pb2a105Oscillators
let pb2a110
let pbwa110Oscillators
let pb2a115
let pb2a115Oscillators
let pb2a120
let pb2a120Oscillators
let pb2a125
let pb2a125Oscillators
let pb2a130
let pb2a130Oscillators
let pb2a135
let pb2a135Oscillators
let pb2a140
let pb2a140Oscillators

let pb2a205
let pb2a205Oscillators
let pb2a210
let pbwa210Oscillators
let pb2a215
let pb2a215Oscillators
let pb2a220
let pb2a220Oscillators
let pb2a225
let pb2a225Oscillators
let pb2a230
let pb2a230Oscillators
let pb2a235
let pb2a235Oscillators
let pb2a240
let pb2a240Oscillators

let pb2b4
let pb2b4Oscillators
let pb2b10
let pb2b10Oscillators

let pb2c4
let pb2c4Oscillators
let pb2c10
let pb2c10Oscillators

// Button Variables
let waveButton;
let showProblem1Button;
let showProblem1DButton;
let showProblem2AL3Button;
let showProblem2AL10Button;
let showProblem2BButton
let showProblem2CButton 

// Control Variables
let isShowingLongitudinal = false;
var showState = 1;
let test;

function turnIntoArrays(arr, lineCount = 1) {
    var arrFinal = [];
    var tempArr = [];
    for (var x in arr) {
        var tempString = arr[x].trim()
        tempString = tempString.replace(/ +/g,",")
        var tempArrStrings = tempString.split(",");
        if (tempArrStrings.length > 1) {
            for (var y in tempArrStrings) {
                tempArr.push(float(tempArrStrings[y]))
            }

            if (((x)%lineCount) == (lineCount-1)) {
                arrFinal.push(tempArr);
                tempArr = [];
            }
        }
    }
    return arrFinal
}

function loadProblem1() {
    pb1a1 = loadStrings('Problem1a1.txt');
    pb1a2 = loadStrings('Problem1a2.txt');
    pb1a3 = loadStrings('Problem1a3.txt');
    pb1b1 = loadStrings('Problem1b1.txt');
    pb1b2 = loadStrings('Problem1b2.txt');
    pb1b3 = loadStrings('Problem1b3.txt');
    pb1b4 = loadStrings('Problem1b4.txt');
    pb1b5 = loadStrings('Problem1b5.txt');
    pb1c1 = loadStrings('Problem1c1.txt');
    pb1c2 = loadStrings('Problem1c2.txt');
}

function loadProblem1D() {
    pb1de = loadStrings('Problem1deuler.txt');
    pb1da = loadStrings('Problem1danalytical.txt');
}

function loadProblem2AL3() {
    pb2a105 = loadStrings('Problem2a105.txt')
    pb2a110 = loadStrings('Problem2a110.txt')
    pb2a115 = loadStrings('Problem2a115.txt')
    pb2a120 = loadStrings('Problem2a120.txt')
    pb2a125 = loadStrings('Problem2a125.txt')
    pb2a130 = loadStrings('Problem2a130.txt')
    pb2a135 = loadStrings('Problem2a135.txt')
    pb2a140 = loadStrings('Problem2a140.txt')
}

function loadProblem2AL10() {
    pb2a205 = loadStrings('Problem2a205.txt')
    pb2a210 = loadStrings('Problem2a210.txt')
    pb2a215 = loadStrings('Problem2a215.txt')
    pb2a220 = loadStrings('Problem2a220.txt')
    pb2a225 = loadStrings('Problem2a225.txt')
    pb2a230 = loadStrings('Problem2a230.txt')
    pb2a235 = loadStrings('Problem2a235.txt')
    pb2a240 = loadStrings('Problem2a240.txt')
}

function loadProblem2B() {
    pb2b4 = loadStrings('Problem2b4.txt')
    pb2b10 = loadStrings('Problem2b10.txt')
}

function loadProblem2C() {
    pb2c4 = loadStrings('Problem2c4.txt')
    pb2c10 = loadStrings('Problem2c10.txt')
}

function loadProblem1Oscillators() {
    var initial = 60;
    var offset = 55;
    pb1a1Oscillators = new Oscillators(turnIntoArrays(pb1a1), initial, 100,2);
    pb1a2Oscillators = new Oscillators(turnIntoArrays(pb1a2), initial+1*offset, 100,2);
    pb1a3Oscillators = new Oscillators(turnIntoArrays(pb1a3), initial+2*offset, 100,2);
    pb1b1Oscillators = new Oscillators(turnIntoArrays(pb1b1), initial+3*offset, 100,2);
    pb1b1Oscillators.diameter = pb1b1Oscillators.diameter / 1.3;
    pb1b2Oscillators = new Oscillators(turnIntoArrays(pb1b2, 2), initial+4*offset, 50, 2);
    pb1b2Oscillators.diameter = pb1b2Oscillators.diameter / 1.5;
    pb1b3Oscillators = new Oscillators(turnIntoArrays(pb1b3, 2), initial+5*offset, 50, 2);
    pb1b3Oscillators.diameter = pb1b3Oscillators.diameter / 1.5;
    pb1b4Oscillators = new Oscillators(turnIntoArrays(pb1b4), initial+6*offset, 50, 2);
    pb1b4Oscillators.diameter = pb1b4Oscillators.diameter / 1.5;
    pb1b5Oscillators = new Oscillators(turnIntoArrays(pb1b5, 2), initial+7*offset, 50, 2);
    pb1b5Oscillators.diameter = pb1b5Oscillators.diameter / 1.5;
    pb1c1Oscillators = new Oscillators(turnIntoArrays(pb1c1, 4), initial+8*offset, 25, 5);
    pb1c1Oscillators.diameter = pb1c1Oscillators.diameter / 2;
    pb1c2Oscillators = new Oscillators(turnIntoArrays(pb1c2, 4), initial+9*offset, 25, 5);
    pb1c2Oscillators.diameter = pb1c2Oscillators.diameter / 2;
}

function loadProblem1DOscillators() {
    pb1deOscillators = new Oscillators(turnIntoArrays(pb1de, 2), 200, 50, 2);
    pb1daOscillators = new Oscillators(turnIntoArrays(pb1da, 2), 400, 50, 2);
}

function loadProblem2AL3Oscillators() {
    pb2a105Oscillators = new Oscillators(turnIntoArrays(pb2a105), 60, 100, 2);
    pb2a110Oscillators = new Oscillators(turnIntoArrays(pb2a110), 120, 100, 2);
    pb2a115Oscillators = new Oscillators(turnIntoArrays(pb2a115), 180, 100, 2);
    pb2a120Oscillators = new Oscillators(turnIntoArrays(pb2a120), 240, 100, 2);
    pb2a125Oscillators = new Oscillators(turnIntoArrays(pb2a125), 300, 100, 2);
    pb2a130Oscillators = new Oscillators(turnIntoArrays(pb2a130), 360, 100, 2);
    pb2a135Oscillators = new Oscillators(turnIntoArrays(pb2a135), 420, 100, 2);
    pb2a140Oscillators = new Oscillators(turnIntoArrays(pb2a140), 480, 100, 2);
}

function loadProblem2AL10Oscillators() {
    pb2a205Oscillators = new Oscillators(turnIntoArrays(pb2a205, 2), 60, 50, 2);

    pb2a210Oscillators = new Oscillators(turnIntoArrays(pb2a210, 2), 120, 50, 2);

    pb2a215Oscillators = new Oscillators(turnIntoArrays(pb2a215, 2), 180, 50, 2);

    pb2a220Oscillators = new Oscillators(turnIntoArrays(pb2a220, 2), 240, 50, 2);

    pb2a225Oscillators = new Oscillators(turnIntoArrays(pb2a225, 2), 300, 50, 2);

    pb2a230Oscillators = new Oscillators(turnIntoArrays(pb2a230, 2), 360, 50, 2);

    pb2a235Oscillators = new Oscillators(turnIntoArrays(pb2a235, 2), 420, 50, 2);

    pb2a240Oscillators = new Oscillators(turnIntoArrays(pb2a240, 2), 480, 50, 2);
}

function loadProblem2BOscillators() {
    pb2b4Oscillators = new Oscillators(turnIntoArrays(pb2b4), 200, 50, 2);
    pb2b10Oscillators = new Oscillators(turnIntoArrays(pb2b10, 2), 400, 50, 2);
}

function loadProblem2COscillators() {
    pb2c4Oscillators = new Oscillators(turnIntoArrays(pb2c4), 200, 50, 2);
    pb2c10Oscillators = new Oscillators(turnIntoArrays(pb2c10, 2), 400, 50, 2);
}

function drawProblem1Oscillators() {
    textSize(12);
    pb1a1Oscillators.show(isShowingLongitudinal);
    pb1a1Oscillators.update();
    

    pb1a2Oscillators.show(isShowingLongitudinal);
    pb1a2Oscillators.update();
    
    pb1a3Oscillators.show(isShowingLongitudinal);
    pb1a3Oscillators.update();
    
    pb1b1Oscillators.show(isShowingLongitudinal);
    pb1b1Oscillators.update();
    
    pb1b2Oscillators.show(isShowingLongitudinal);
    pb1b2Oscillators.update();
    
    pb1b3Oscillators.show(isShowingLongitudinal);
    pb1b3Oscillators.update();
    
    pb1b4Oscillators.show(isShowingLongitudinal);
    pb1b4Oscillators.update();
    
    pb1b5Oscillators.show(isShowingLongitudinal);
    pb1b5Oscillators.update();
    
    pb1c1Oscillators.show(isShowingLongitudinal);
    pb1c1Oscillators.update();

    pb1c2Oscillators.show(isShowingLongitudinal);
    pb1c2Oscillators.update();


    var initial = 40;
    var offset = 55
    text('9.1.a) L=2, n=1', 10, initial);
    text('9.1.a) L=2, n=2', 10, initial+1*offset);
    text('9.1.a) L=2, random', 10, initial+2*offset);
    text('9.1.b) L=4, n=2', 10, initial+3*offset);
    text('9.1.b) L=10, n=3', 10, initial+4*offset)
    text('9.1.b) L=10, n=8', 10, initial+5*offset)
    text('9.1.b) L=4, random', 10, initial+6*offset)
    text('9.1.b) L=10, random', 10, initial+7*offset)
    text('9.1.c) L=20, n=3', 10, initial+8*offset);
    text('9.1.c) L=20, n=6', 10, initial+9*offset);
}

function drawProblem1DOscillators() {
    pb1deOscillators.show(isShowingLongitudinal)
    pb1deOscillators.update();

    pb1daOscillators.show(isShowingLongitudinal);
    pb1daOscillators.update();

    text('9.1.d) L=10, n=3, Euler-Richardson', 10, 160);
    text('9.1.d) L=10, n=3, Analytical', 10, 360);
}

function drawProblem2AL3Oscillators() {
    pb2a105Oscillators.show(isShowingLongitudinal);
    pb2a105Oscillators.update();

    pb2a110Oscillators.show(isShowingLongitudinal);
    pb2a110Oscillators.update();

    pb2a115Oscillators.show(isShowingLongitudinal);
    pb2a115Oscillators.update();

    pb2a120Oscillators.show(isShowingLongitudinal);
    pb2a120Oscillators.update();

    pb2a125Oscillators.show(isShowingLongitudinal);
    pb2a125Oscillators.update();

    pb2a130Oscillators.show(isShowingLongitudinal);
    pb2a130Oscillators.update();

    pb2a135Oscillators.show(isShowingLongitudinal);
    pb2a135Oscillators.update();

    pb2a140Oscillators.show(isShowingLongitudinal);
    pb2a140Oscillators.update();

    for (var i = 0; i < 8; i++) {
        text('Omega = '+(0.5+(0.5*i)), 10, 40+(60*i));
    }
}

function drawProblem2AL10Oscillators() {
    pb2a205Oscillators.show(isShowingLongitudinal);
    pb2a205Oscillators.update();

    pb2a210Oscillators.show(isShowingLongitudinal);
    pb2a210Oscillators.update();

    pb2a215Oscillators.show(isShowingLongitudinal);
    pb2a215Oscillators.update();

    pb2a220Oscillators.show(isShowingLongitudinal);
    pb2a220Oscillators.update();

    pb2a225Oscillators.show(isShowingLongitudinal);
    pb2a225Oscillators.update();

    pb2a230Oscillators.show(isShowingLongitudinal);
    pb2a230Oscillators.update();

    pb2a235Oscillators.show(isShowingLongitudinal);
    pb2a235Oscillators.update();

    pb2a240Oscillators.show(isShowingLongitudinal);
    pb2a240Oscillators.update();

    for (var i = 0; i < 8; i++) {
        text('Omega = '+(0.5+(0.5*i)), 10, 40+(60*i));
    }
}

function drawProblem2BOscillators() {
    pb2b4Oscillators.show(isShowingLongitudinal);
    pb2b4Oscillators.update();
    text('L=4, Omega corresponds to n=2', 10, 160)

    pb2b10Oscillators.show(isShowingLongitudinal);
    pb2b10Oscillators.update();
    text('L=10, Omega corresponds to n=2', 10, 360)
}

function drawProblem2COscillators() {
    pb2c4Oscillators.show(isShowingLongitudinal);
    pb2c4Oscillators.update();
    text('L=4, Omega corresponds to n=2, Damping = 0.05', 10, 160)

    pb2c10Oscillators.show(isShowingLongitudinal);
    pb2c10Oscillators.update();
    text('L=10, Omega corresponds to n=2, Damping = 0.05', 10, 360)
}

function createProblemButtons() {
    waveButton = createButton('Change Wave Type');
    waveButton.position(620, 20);
    waveButton.mousePressed(changeWaveType);

    showProblem1Button = createButton('Show Problem 9.1');
    showProblem1Button.position(620, 50);
    showProblem1Button.mousePressed(showProblem1);

    showProblem2AL3Button = createButton('Show Problem 9.2.a L=3');
    showProblem2AL3Button.position(620, 110);
    showProblem2AL3Button.mousePressed(showProblem2AL3)

    showProblem2AL10Button = createButton('Show Problem 9.2.a L=10');
    showProblem2AL10Button.position(620, 140);
    showProblem2AL10Button.mousePressed(showProblem2AL10);

    showProblem2BButton = createButton('Show Problem 9.2.b');
    showProblem2BButton.position(620, 170);
    showProblem2BButton.mousePressed(showProblem2B);

    showProblem2CButton = createButton('Show Problem 9.2.c');
    showProblem2CButton.position(620, 200);
    showProblem2CButton.mousePressed(showProblem2C);

    showProblem1DButton = createButton('Show Problem 9.1.d');
    showProblem1DButton.position(620, 80)
    showProblem1DButton.mousePressed(showProblem1D);
}

function preload() {
    loadProblem1();
    loadProblem1D()
    loadProblem2AL3();
    loadProblem2AL10();
    loadProblem2B();
    loadProblem2C();
    testFile = loadStrings('test.txt');
}


function setup() {
    createCanvas(600, 600);

    loadProblem1Oscillators();
    loadProblem1DOscillators()
    loadProblem2AL3Oscillators();
    loadProblem2AL10Oscillators();
    loadProblem2BOscillators();
    loadProblem2COscillators();
    createProblemButtons();

}
  
function draw() {
    background(100);
    if (showState == 1) {
        drawProblem1Oscillators();
    } else if (showState == 2) {
        drawProblem2AL3Oscillators();
    } else if (showState == 3) {
        drawProblem2AL10Oscillators();
    } else if (showState == 4) {
        drawProblem2BOscillators();
    } else if (showState == 5) {
        drawProblem2COscillators();
    } else if (showState == 6) {
        drawProblem1DOscillators();
    }

}

function changeWaveType() {isShowingLongitudinal = !isShowingLongitudinal;}

function showProblem1() {showState = 1;}

function showProblem1D() {showState=6}

function showProblem2AL3() {showState = 2;}

function showProblem2AL10() {showState = 3;}

function showProblem2B() {showState = 4;}

function showProblem2C() {showState = 5;}