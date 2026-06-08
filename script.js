
let n = 0;
let showresult = document.getElementById("result-box");
let updateResult = document.getElementById("result");
let b = document.getElementById("player");
let result = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];
function move(Id) {
    let x = 0;
    let i = 0;
    let j = 0;
    let a = document.getElementById(`${Id}`);
    if (a.innerText === '') {
        x = Id;
        j = x % 10;
        i = Math.floor(x / 10);
        if (n % 2 === 0) {
            a.style.background = '#FB7185';
            // a.style.color = '#38BDF8';
            a.textContent = 'X';
            b.textContent = 'O';
            b.style.color = '#38BDF8';
            result[i][j] = 1;
        }
        else {
            a.style.background = '#38BDF8';
            // a.style.color = '#FB7185'
            a.textContent = 'O';
            b.textContent = 'X';
            b.style.color = '#FB7185';
            result[i][j] = 2;
        }
        n++;
        check();
    } else {
        a.style.background = "#1E293B";
        a.textContent = "";
        n--;
        result[i][j] = 0;
    }
}
function check() {
    let flag = 0;
    for (let p = 0; p < 3; p++) {
        flag = 0;
        for (let q = 0; q < 2; q++) {
            if ((result[p][q] === result[p][q + 1]) && result[p][q] != 0)
                flag++;
            else
                break;
        }
        if (flag === 2) {
            if (result[p][0] === 1) {
                updateResult.textContent = "X won the Game . ";
                updateResult.style.color="#FB7185"
            }
            else {
                updateResult.textContent = "O won the Game . ";
                updateResult.style.color="#38BDF8"
            }
            showresult.style.display = "flex";
            setTimeout(reset,5000);
        }
    }
    for (let q = 0; q < 3; q++) {
        flag = 0;
        for (let p = 0; p < 2; p++) {
            if ((result[p][q] === result[p+1][q]) && result[p][q] != 0)
                flag++;
            else
                break;
        }
        if (flag === 2) {
            if (result[0][q] === 1) {
                updateResult.textContent = "X won the Game . ";
                updateResult.style.color="#FB7185"
            }
            else {
                updateResult.textContent = "O won the Game . ";
                updateResult.style.color="#38BDF8"
            }
            showresult.style.display = "flex";
            setTimeout(reset,5000);
        }
    }
    if (((result[0][0]===result[1][1] ) && (result[1][1]===result[2][2]) &&(result[0][0]!=0))||((result[1][1]===result[2][0]) && (result[1][1]===result[0][2]) && (result[0][2]!=0)))
    {
        if(result[1][1]===1)
        { 
            updateResult.textContent="X won the Game . ";
            updateResult.style.color="#FB7185"
        }
        else
           { updateResult.textContent="O won the Game . ";
            updateResult.style.color="#38BDF8"
           }
        showresult.style.display='flex';
        setTimeout(reset,5000);
    }
    if (n === 9) {
        showresult.style.display = "flex";
        setTimeout(reset,5000);
    }
}
function reset() {
    showresult.style.display = "none";
    let innerbox = document.getElementsByClassName("innerbox");
    for (let p = 0; p < 9; p++) {
        innerbox[p].style.background = "#1E293B";
        innerbox[p].textContent = "";
    }
    for (let p = 0; p < 3; p++) {
        for (let q = 0; q < 3; q++) {
            result[p][q] = 0;
        }
    }
    updateResult.textContent="Match Draw .";
    updateResult.style.color='black';
    n=0;
}
