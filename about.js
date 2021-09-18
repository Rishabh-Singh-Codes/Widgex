const text="Welcome to WIDGEX, here you will find all your productivity and utility tools at one place. Just bookmark this page, jot down the tasks to done and by when, and carry on with your work! ";
const ar=document.getElementById('about');

let index=0;

function writeText() {
    ar.innerText = text.slice(0, index);

    index++;

    if(index>text.length -1){
        index=0;
    }

}

setInterval(writeText, 85);