const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const projectDetails = document.querySelectorAll('.seen-project');

const projects = [
  {
    /*Has id=0 in HTML because this is the first element in this array with index 0*/
    name: 'Tonic',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot1.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',

  },
  {
    /*Has id=1 in HTML because this is the first element in this array with index 1*/
    name: 'Multi-Post Stories',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot2.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',

  },
  {
    /*Has id=2 in HTML because this is the first element in this array with index 2*/
    name: 'Tonic',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot3.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',

  },
  {
    /*Has id=3 in HTML because this is the first element in this array with index 3*/
    name: 'Multi-Post Stories',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot4.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',

  },
];

function openMenu(mobileMenu, mainTag) {
  if (mobileMenu == null) return;
  mobileMenu.classList.add('active');
  mainTag.classList.add('blur');
}

function closeMenu(mobileMenu) {
  if (mobileMenu == null) return;
  mobileMenu.classList.remove('active');
  mainTag.classList.remove('blur');
}
openMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
    openMenu(mobileMenu, mainTag);
  });
});

closeMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = button.closest('.mobile-menu');
    closeMenu(mobileMenu);
  });
});

projectDetails.forEach((button) => {
  
  button.addEventListener('click', () => {
    const idModal = button.getAttribute('id');

    const modalWindow = document.querySelector('.project-details-modal');
    modalWindow.classList.add('showModal', 'animate__bounceInDown');
    mainTag.classList.add('blur');
    const h3Test = modalWindow.querySelector('h3');
    const paragraph = modalWindow.querySelector('.work-description p');
    const imageNode = modalWindow.querySelector('.work-img img');
    const githubButton = modalWindow.querySelector('.github');
    const arrowCircleButton = modalWindow.querySelector('.arrow_circle');
    h3Test.innerHTML = projects[idModal].name;
    paragraph.innerHTML = projects[idModal].descrition;
    imageNode.src = projects[idModal].image;
    githubButton.src = projects[idModal].imageGit;
    arrowCircleButton.src = projects[idModal].imageLive;
    const closeModalMobile = modalWindow.querySelector('[data-close-button]');

    closeModalMobile.addEventListener('click', () => {
      modalWindow.classList.remove('showModal', 'animate__bounceInDown');
      mainTag.classList.remove('blur');
    });
  });
});

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, invalidMsg) {
  if (!hasValue(input, invalidMsg)) {
    return false;
  }
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#myForm');
const EMAIL_INVALID = 'Please enter a correct email address format and uppercase is not allowed!!';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});
