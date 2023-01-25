function menuSectionFill() {
  const container = document.getElementById('content');
  container.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Menu';
  container.appendChild(header);

  const subHead = document.createElement('h2');
  subHead.textContent = 'Appetizers';
  container.appendChild(subHead);

  const text = document.createElement('p');
  text.textContent = `Yum Yum delikus`
  container.appendChild(text);
}

export default menuSectionFill;