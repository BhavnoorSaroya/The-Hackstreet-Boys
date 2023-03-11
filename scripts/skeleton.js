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

bhavLink.addEventListener('click', ()=> {
    window.location.href = "https://www.linkedin.com/in/bhavnoor-saroya/";
});

jasLink.addEventListener("click", ()=>{
    window.location.href = "https://www.linkedin.com/in/jaskirat-singh-46b506159/";
});

yousLink.addEventListener("click", ()=> {
    window.location.href = "https://www.linkedin.com/in/m-yousuf-rabani-9a509364/";
})

jaspLink.addEventListener("click", ()=> {
    window.location.href = "https://www.linkedin.com/in/jasper-oh-595586124/";
});

abiLink.addEventListener("click", ()=> {
    window.location.href = "https://www.linkedin.com/in/abhishekchouhannk/";
})