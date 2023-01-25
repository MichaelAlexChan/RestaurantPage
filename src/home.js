import HeaderImage from '../assets/beach.jpg';

function homeSectionFill() {
  const container = document.getElementById('content');
  container.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Paradise Cove Restaurant';
  container.appendChild(header);

  const image = new Image();
  image.src = HeaderImage;
  image.setAttribute('id', 'headerImage');
  container.appendChild(image);

  const subHead = document.createElement('h2');
  subHead.textContent = 'Taste the treasures of the ocean!';
  container.appendChild(subHead);

  const text = document.createElement('p');
  text.textContent = `Paradise Cove restaurant offers a selection of high-quality seafood dishes
  and other amazing fare! Let us take you on a beach getaway with our amazing appetizers, succulent seafood, enrapturing entrees, and delicious desserts!`
  container.appendChild(text);
}

export default homeSectionFill;