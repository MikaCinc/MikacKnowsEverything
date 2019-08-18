window.onload = () => {
    document.getElementById("yourQuestion").focus()
}

var flag = false;
var bigFlag = false;
var phoneFlag = false;
var str = "mikac please answer my question";
var start = null;
var answer = "";
var dontKnow = [
    "i don't know now :( , but maybe i'll know later...",
    "ask me in 5 seconds...",
    "maybe google can help you with that",
    "maybe cortana can help you with that",
    "I'm stuck for 3 seconds"
];
var phone = "bring back my phoneeeeeeeeee source!"
var guessesArr = [
    "i think it's: ",
    "i guess it may be: ",
    "don't judge me if i'm wrong, but i think it is: ",
    "i'm mikac, I must know that: "
]

function returnRandomguess() {
    var ran_num = Math.floor(Math.random() * guessesArr.length)
    return guessesArr[ran_num];
}

function gotoQuestion() {
    flag = false;
    bigFlag = false;
    phoneFlag = false;
    answer = "";
    document.getElementById("menu").style.display = "none";
    document.getElementById("answerDiv").style.display = "none";
    document.getElementById("yourQuestion").value = "";
    document.getElementById("request").value = "";
    document.getElementById("questionDiv").style.display = "block";
    document.getElementById("answerAfterProgress").style.display = "none";
    document.getElementById("yourQuestion").focus()
}

function gotoMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("questionDiv").style.display = "none";
    document.getElementById("answerDiv").style.display = "none";
}

function idontknow(event) {
    if (event.keyCode === 16) {
        bigFlag = !bigFlag;
    } else if (event.keyCode === 17) {
        phoneFlag = !phoneFlag
    }
}

function requestInput() {
    var value = document.getElementById("request").value;
    var valueWithoutLast = value.substr(0, value.length - 1);
    if (flag) {
        if (value.charAt(value.length - 1) === ".") {
            flag = false;
            value = value.substr(0, value.length - 1)
            document.getElementById("request").value = value + str[value.length];
        } else {
            var valueLastChar = value.charAt(value.length - 1);
            answer += valueLastChar;
            document.getElementById("request").value = valueWithoutLast + str[value.length - 1]
        }
    } else {
        if (value.charAt(value.length - 1) === ".") {
            flag = true;
            value = value.substr(0, value.length - 1)
            start = value.length
            document.getElementById("request").value = value + str[value.length];
        }
    }

}

function rndNumber(n) {
    return Math.floor(Math.random() * n);
}

function rndColor(flag) {
    var alpha = flag ? "0.5" : "1.0"
    return "rgba(" + rndNumber(255) + ", " + rndNumber(255) + ", " + rndNumber(255) + ", " + alpha + ")"
}

function answer1() {
    if (answer.length || bigFlag || phoneFlag) {
        document.getElementById("questionDiv").style.display = "none";
        document.getElementById("answerDiv").style.display = "block";
        document.getElementById("questionH2").innerHTML = document.getElementById("yourQuestion").value;
        document.getElementById("progress_parent").style.display = "block"
        standard(bigFlag || phoneFlag);
        if (!phoneFlag) {
            var span = document.createElement("span")
            var txt = document.createTextNode(bigFlag ? dontKnow[rndNumber(dontKnow.length)] : answer)
            span.appendChild(txt)
            setInterval(function () {
                span.style.color = rndColor()
            }, 1000)
            var answerH2 = document.getElementById("answerH2");
            answerH2.innerHTML = bigFlag ? " " : returnRandomguess();
            answerH2.appendChild(span)
        } else {
            var answerH2 = document.getElementById("answerH2");
            answerH2.innerHTML = phone;
        }

    }
}

// SCRIPT FOR PROGRESS BAR!

var int;
var speed = rndNumber(100);

const labels = [
    "fetching social media",
    "calculating width and height",
    "calculating length of arrays",
    "calculating length of objects",
    "making sure to ban all cheaters",
    "downloading data...",
    "downloading source",
    "downloading page",
    "downloading answers",
    "making sure its you",
    "using memory",
    "using camera",
    "trying to compete with google",
    "not gooood....",
    "fighting with data",
    "a lot of data...",
    "searching with bing",
    "contacting myspace",
    "contacting twitter",
    "contacting facebook",
    "fetching sources",
    "fetching answers",
    "cleaning code",
    "cleaning error",
    "error #744889",
    "error #3453453",
    "error #666",
    "error #874533",
    "error #15555",
    "error #17200",
    "error #505",
    "error #85930",
    "success with data binding",
    "success with data fetching",
    "success with your profile...",
    "spying on you",
    "looking good for now...",
    "what a question ?!?",
    "prototyping",
    "results should show if </>",
    "results should show if #117856",
    "instagram things",
    "linkedin things",
    "magic things",
    "throwing magic",
    "found lost data!",
]

function standard(flags) {
    clearInterval(int);
    var width = 0;
    speed = flags ? rndNumber(20) : rndNumber(80);
    document.getElementById("progress_child").style.backgroundColor = rndColor()
    document.getElementById("progress_parent").style.backgroundColor = "grey"
    int = setInterval(function () {
        width += 1
        document.getElementById('progress_child').style.width = width + "%";
        makeRNDNUMBERS()
        if (width % 20 === 0 || width === 1) {
            document.getElementById("rndLabels").style.color = rndColor();
            document.getElementById("rndLabels").innerHTML = labels[rndNumber(labels.length)];
        }
        if (width == 100) {
            clearInterval(int)
            document.getElementById("rndLabels").innerHTML = ""
            document.getElementById("answerAfterProgress").style.display = "block";
            document.getElementById("progress_parent").style.display = "none"
        }
    }, speed)
}

function makeRNDNUMBERS() {
    var elems = document.getElementsByClassName("rndNumbers");
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = rndNumber(99999999999);
        elems[i].style.backgroundColor = rndColor(true);
    }
}