function Audio() {
    var audio = 
    document.getElementById("myAudio");
    audio.play();
    audio.loop = true;
}

fetch('includes/header.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('header-top').innerHTML = data;
})
.catch(error=>console.error('Erro ao carregar o header:', error));

fetch('includes/footer.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('footer-under').innerHTML = data;
})
.catch(error=>console.error('Erro ao carregar o footer:', error));

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}