const projects = ['project-1.jpg','project-2.jpg','project-3.jpg','project-4.jpg','project-5.jpg','project-6.jpg'];

const html = projects.map(image=> `
<div class="projects__item">
<img src="./images/${image}" alt="my project" />
<div class="projects__btns">
  <a href="#" class="projects__btn">
    <i class="fa-solid fa-eye fa-3x"></i>
  </a>
  <a href="#" class="projects__btn">
    <i class="fa-brands fa-github fa-3x"></i>
  </a>
</div>
</div>
`).join('');

document.querySelector('.projects__items').innerHTML = html