import './style.css';

export const Footer = (props) => {
  const element = document.createElement('div');
  element.innerHTML = `
  <footer>
    <div class="container">
      <div class="footer__content">
        Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
      </div>
    </div>
  </footer>
  `;

  return element;
};
