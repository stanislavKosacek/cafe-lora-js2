import './style.css';

export const Header = (props) => {
  const element = document.createElement('div');
  element.innerHTML = `
  <header>
    <div class="header__content container">
      <div class="site-logo"></div>

      <div class="navigation">
        <button class="nav-btn"></button>
        <nav class="rollout-nav nav-closed">
          <a href="#home">domů</a>
          <a href="#menu">menu</a>
          <a href="#gallery">galerie</a>
          <a href="#contact">kontakt</a>
        </nav>
      </div>
    </div>
  </header>
  `;

  element.querySelector('.nav-btn').addEventListener('click', () => {
    element.querySelector('.rollout-nav').classList.toggle('nav-closed');
  });

  const rolloutNav = element.querySelector('.rollout-nav');

  rolloutNav.addEventListener('click', (e) => {
    rolloutNav.classList.add('nav-closed');
  });

  return element;
};
