import home from './home'
import menu from './menu'
import contact from './contact'
import './style.css';

function sectionFill(section) {
  if (section === 'home'){
    home();
  }
  else if (section === 'menu') {
    menu();
  }
  else {
    contact();
  }
}

//sectionFill();

const navigation = document.getElementById("nav");
navigation.addEventListener('click', (event) => {
  const section = event.target.getAttribute('id');
  sectionFill(section);
})