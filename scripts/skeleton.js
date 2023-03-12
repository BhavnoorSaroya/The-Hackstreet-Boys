function loadSkeleton(){
    $('#navbarPlaceholder').load('./navbar.html');
    $("#footerDiv").load("./footer.html");
}

loadSkeleton();

var bhavLink = document.getElementById('bavLink');
var jasLink = document.getElementById('jasLink');
var yousLink = document.getElementById('yousLink');
var jaspLink = document.getElementById('jasperLink');
var abiLink = document.getElementById('abiLink');

if (location.pathname == "/aboutus.html"){
    bhavLink.addEventListener('click', ()=> {
        window.open("https://www.linkedin.com/in/bhavnoor-saroya/");
    });
    
    jasLink.addEventListener("click", ()=>{
        window.open("https://www.linkedin.com/in/jaskirat-singh-46b506159/")
    });
    
    yousLink.addEventListener("click", ()=> {
        window.open("https://www.linkedin.com/in/m-yousuf-rabani-9a509364/");
    })
    
    jaspLink.addEventListener("click", ()=> {
        window.open("https://www.linkedin.com/in/jasper-oh-595586124/");
       
    });
    
    abiLink.addEventListener("click", ()=> {
        window.open("https://www.linkedin.com/in/abhishekchouhannk/")
    })
}


var resumeRoasterBtn = document.getElementById('roasterBtn');
var scraperBtn = document.getElementById('scraperBtn');
var aboutBtn = document.getElementById('aboutBtn');
var resumeRoasterBtn1 = document.getElementById('roasterBtn1');
var scraperBtn1 = document.getElementById('scraperBtn1');

if (location.pathname == '/index.html') {
    resumeRoasterBtn.addEventListener('click', ()=> {
        window.location.href = "resumeroaster.html";
    })
    
    scraperBtn.addEventListener("click", ()=> {
        window.location.href = "";
    })
    
    aboutBtn.addEventListener("click", ()=> {
        window.location.href = "aboutus.html";
    })

    resumeRoasterBtn1.addEventListener("click", ()=> {
        window.location.href = "resumeroaster.html";
    })

    scraperBtn1.addEventListener("click", ()=> {
        window.location.href = "";
    })
}
