function checkWin() {
    var inputs = [
        document.getElementById("b1").value, document.getElementById("b2").value, document.getElementById("b3").value,
        document.getElementById("b4").value, document.getElementById("b5").value, document.getElementById("b6").value,
        document.getElementById("b7").value, document.getElementById("b8").value, document.getElementById("b9").value
    ]





    if ((inputs[0] != '') && (inputs[1] != '') && (inputs[2] != '') && (inputs[3] != '') && (inputs[4] != '') && (inputs[5] != '') && (inputs[6] != '') && (inputs[7] != '') && (inputs[8] != '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {
        checkWinForPlayer('x', inputs)

        checkWinForPlayer('0', inputs)
        if (flag == 1) {
            document.getElementById('print').innerHTML = "player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "player 0 Turn";
        }
    }

}
function checkWinForPlayer(symbol, inputs) {
    for (var i = 0; i < inputs.length; i += 3) {
        if ((inputs[i].toLowerCase() == symbol) &&
            (inputs[i + 1].toLowerCase() == symbol) &&
            (inputs[i + 2].toLowerCase() == symbol)) {
            document.getElementById('print').innerHTML = "player " + symbol + "won";
            window.alert('player' + symbol + 'won')
        }


    }
    for (var i = 0; i < inputs.length / 3; i += 1) {
        console.log(i)
        if ((inputs[i].toLowerCase() == symbol) &&
            (inputs[i + 3].toLowerCase() == symbol) &&
            (inputs[i + 6].toLowerCase() == symbol)) {
            document.getElementById('print').innerHTML = "player " + symbol + "won";
            window.alert('player' + symbol + 'won')
        }


    }
    if ((inputs[0].toLowerCase() == symbol) &&
        (inputs[4].toLowerCase() == symbol) &&
        (inputs[8].toLowerCase() == symbol)) {
        document.getElementById('print').innerHTML = "Player " + symbol + " won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player ' + symbol + ' won');
    }
    else if ((inputs[2].toLowerCase() == symbol) &&
        (inputs[4].toLowerCase() == symbol) &&
        (inputs[6].toLowerCase() == symbol)) {
        document.getElementById('print').innerHTML = "Player " + symbol + " won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player ' + symbol + ' won');
    }
}

function reset() {
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}
flag = 1;
function updateCell(id) {
    if (flag == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        flag = 0;
    }
    else {
        document.getElementById(id).value = "0";
        document.getElementById(id).disabled = true;
        flag = 1;
    }
}

// add (staging)
// status
//commit
// push, pull