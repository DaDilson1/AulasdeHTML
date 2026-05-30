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
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fa fa-sun-o"></i> Claro';
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('dark-mode', 'enabled');
            themeToggle.innerHTML = '<i class="fa fa-moon-o"></i> Escuro';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            themeToggle.innerHTML = '<i class="fa fa-sun-o"></i> Claro';
        }
    });
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