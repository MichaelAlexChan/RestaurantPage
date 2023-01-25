function contactSectionFill() {
  const container = document.getElementById('content');
  container.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Contact Us!';
  container.appendChild(header);

  const subHead = document.createElement('h2');
  subHead.textContent = 'Meme';
  container.appendChild(subHead);

  const subHead2 = document.createElement('h2');
  subHead2.textContent = 'Moomoo';
  container.appendChild(subHead2);

  const text = document.createElement('p');
  text.textContent = `Contact Num: #########`
  container.appendChild(text);
}

export default contactSectionFill;