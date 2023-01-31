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

  const description = document.createElement('div');
  description.classList.add('box');
  const text = document.createElement('p');
  text.textContent = `Paradise Cove restaurant offers a selection of high-quality seafood dishes
  and other amazing fare! Let us take you on a beach getaway with our amazing appetizers, succulent seafood, enrapturing entrees, and delicious desserts!`
  description.appendChild(text);
  container.appendChild(description);
  
  const hours = document.createElement('div');
  hours.classList.add('box');
  const hoursHead = document.createElement('h3');
  hoursHead.textContent = 'Hours';
  const hoursText = document.createElement('p');
  hoursText.innerHTML = 'Sunday 8-8PM<br />Monday 8-8PM<br />Tuesday CLOSED<br />Wednesday 8-8PM<br />Thursday 8-8PM<br />Friday 8-8PM<br />Saturday 9-10PM'
  hours.appendChild(hoursHead);
  hours.appendChild(hoursText);
  container.appendChild(hours);
}

export default homeSectionFill;