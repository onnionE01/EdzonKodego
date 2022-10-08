var count = 0;
var intNum = 0;
var stringNum = `0`;

var pet = {
    feet: 4,
    eyes: 2,
    pname: "Kitty",
};

function showMyPet() {
    var message=`My Pet Name is ${pet.pname}`;
    document.getElementById('Pet-name')[0].innerHTML= message;

}

function MyHtmlDoc() {
    document.body.getElementsByTagName('div')[0].innerHTML="HTML IS SHOWN";
}

function trueORfalse() {
    const isZero = intNum == stringNum;
    alert(`Integer 0 is equal to String Zero is  ${isZero}`);
}

function sayHello() {

    alert('Hello its my first Javascript code');
}

function addCount() {
    count++;
    document.getElementsByClassName('petNum')[0].innerHTML =count;
}