document.getElementById('portrait-photo').addEventListener('click', function() {
    this.style.border = '5px solid #000';
    this.style.filter = 'grayscale(100%)';
});

document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
