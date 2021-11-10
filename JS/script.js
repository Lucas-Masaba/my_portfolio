const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const projectDetails = document.querySelectorAll('.seen-project');

const projects = [
  {
    id: 1,
    name: 'Tonic',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot1.png',
    linkBtnOne: 'project1.html',
    imageLive: './pics/detailProjectLive.png',

  },
  {
    id: 2,
    name: 'modal 2',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot1.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',

  },
  {
    id: 3,
    name: 'modal 3',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot1.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',

  },
  {
    id: 4,
    name: 'modal 4',
    descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot1.png',
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
  const test = button;
  button.addEventListener('click', () => {
    const idModal = test.getAttribute('id');

    const modalWindow = document.querySelector('.project-details-modal');
    modalWindow.classList.add('showModal', 'animate__bounceInDown');
    const h3Test = modalWindow.querySelector('h3');
    const paragraph = modalWindow.querySelector('.work-description p');
    const imageNode = modalWindow.querySelector('.work-img img');
    const githubButton = modalWindow.querySelector('.github');
    h3Test.innerHTML = projects[idModal].name;
    paragraph.innerHTML = projects[idModal].descrition;
    imageNode.src = projects[idModal].image;
    githubButton.href = 'teste12322';

    const closeModalMobile = modalWindow.querySelector('[data-close-button]');

    closeModalMobile.addEventListener('click', () => {
      modalWindow.classList.remove('showModal', 'animate__bounceInDown');
    });
  });
});
