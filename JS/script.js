document.addEventListener('DOMContentLoaded', () => {
  const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
  const closeMobileMenu = document.querySelectorAll('[data-close-button]');
  const mainTag = document.querySelector('.main');
  const projectGrid = document.querySelector('.grid-container');

  const projects = [
    {
      name: 'Budget App',
      desktopImg: './pics/budget_app_desktop.png',
      description:
        'Have you ever reached the end of a month and you realize you spent a crazy amount of money 🤯? Well, this app helps you keep track of those payments so that you can know how to budget your expenditure.',
      image: './pics/budget_app_mobile.png',
      company_name: 'Microverse',
      dev_stack: 'Back End Dev',
      year_created: '2022',
      tech: ['Ruby', 'Rails', 'SQL'],
      live_demo: 'https://lucas-budget-app.herokuapp.com/',
      git_source: 'https://github.com/Lucas-Masaba/budget_app',
    },
    {
      name: 'Hotelzilla',
      desktopImg: './pics/hotelzilla_desktop.png',
      description:
        'This is a hotel booking website where you can book rooms from hotels in different countries around the world through making reservations. In this project, I worked in the back-end team and was responsible for developing the API.',
      image: './pics/hotelzilla_mobile.png',
      company_name: 'Microverse',
      dev_stack: 'Full Stack Dev',
      year_created: '2022',
      tech: ['React', 'Redux', 'Ruby', 'Rails', 'SQL'],
      live_demo: 'https://hotelzilla.netlify.app/',
      git_source: 'https://github.com/keroloussamy/Hotelzilla-api',
    },
    {
      name: 'Covid Tracker',
      desktopImg: './pics/covid_desktop.png',
      description:
        'with this website, one can track how covid-19 is affecting different countries around the world 🌍. You can get information on how many people have recovered, contracted the virus and died of the virus.',
      image: './pics/covid_mobile.png',
      company_name: 'Microverse',
      dev_stack: 'Front End Dev',
      year_created: '2022',
      tech: ['React', 'Redux', 'Webpack'],
      live_demo: 'https://covid-metrics-lucas-masaba.netlify.app/',
      git_source: 'https://github.com/Lucas-Masaba/covid_metrics',
    },
    {
      name: 'Space Travelers Hub',
      desktopImg: './pics/space.png',
      description:
        "Have you ever thought of going to outer space and see what is beyond earth. Imagine being able to book rockets so that you have the chance to explore the marvels of the universe 🌌, doesn't that sound cool 😎. With this web app, you can book rockets and missions so that you are able to travel to the far reaches of our galaxy.",
      image: './pics/space-mobile.png',
      company_name: 'Microverse',
      dev_stack: 'Front End Dev',
      year_created: '2022',
      tech: ['React', 'Redux', 'Webpack'],
      live_demo: 'https://space-traveler-zaman-lucas.netlify.app/',
      git_source: 'https://github.com/Lucas-Masaba/space-travelers',
    },
    {
      name: 'Cook Book',
      desktopImg: './pics/cookbook_desktop.png',
      description:
        'This application allows you to create and save your favorite recipes so you can share them with the world! You can decide to put up your public recipes for others out there as well. It was built with Ruby on Rails,',
      image: './pics/cookbook_mobile.png',
      company_name: 'Microverse',
      dev_stack: 'Back End Dev',
      year_created: '2022',
      tech: ['Ruby', 'Rails', 'SQL'],
      live_demo: 'https://space-traveler-zaman-lucas.netlify.app/',
      git_source: 'https://github.com/Lucas-Masaba/space-travelers',
    },

    {
      name: 'Pokepedia',
      desktopImg: './pics/pokepedia_desktop.png',
      description:
        'Get to know our pokemon. Each pokemon is categorised by type such as water, electric, fire and so on. Click on a pokemon of your choice to get their stats. Its pretty fun.',
      image: './pics/pokepedia_mobile.png',
      company_name: 'Side Project',
      dev_stack: 'Front End',
      year_created: '2022',
      tech: ['React', 'Tailwind', 'Redux'],
      live_demo: 'https://lucas-pokepedia.netlify.app/',
      git_source: 'https://github.com/Lucas-Masaba/pokepedia',
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
      const mobileMenu = document.querySelector(
        button.dataset.mobileMenuTarget,
      );
      openMenu(mobileMenu, mainTag);
    });
  });

  closeMobileMenu.forEach((button) => {
    button.addEventListener('click', () => {
      const mobileMenu = button.closest('.mobile-menu');
      closeMenu(mobileMenu);
    });
  });

  projectGrid.innerHTML = projects
    .map(
      (project, index) => `
    <div class="card ${index % 2 === 0 ? 'reveal fade-left' : 'reveal fade-right'}">
    <div class=${index % 2 === 0 ? 'seperate_container' : 'seperate_container_y'
        }>
      <div class="screenshot_container">
        <img
          class="screenshot"

          src="${project.image}"
          alt="This is a screenshot for the first project"
        />
      </div>
      <div class="seperate">
        <h1 class="descreptive-heading">${project.name}</h1>
        <ul class="experience-container">
          <li>
            <p class="canopy">${project.company_name}</p>
          </li>
          <li>
            <img
              class="dot"
              src="./pics/dot.png"
              alt="This a dot image"
            />
          </li>
          <li>
            <p class="back-end-dev">${project.dev_stack}</p>
          </li>
          <li>
            <img
              class="dot"
              src="./pics/dot.png"
              alt="This a dot image"
            />
          </li>
          <li>
            <p class="back-end-dev">${project.year_created}</p>
          </li>
        </ul>
        <p class="paragraph">
          ${project.description}
        </p>
        <ul class="language-button ordinary-language-button">
        ${project.tech
          .map(
            (singleTech) => `
          <li><button type="button" class="l-button">${singleTech}</button></li>
          `,
          )
          .join('')}
        </ul>
        <button type="button" id="${index}" class="seen-project">
          See Project
        </button>
      </div>
    </div>
  </div>
  
    `,
    )
    .join('');

  const projectDetails = document.querySelectorAll('.seen-project');

  projectDetails.forEach((button, index) => {
    button.addEventListener('click', () => {
      const idModal = button.getAttribute('id');

      const modalWindow = document.querySelector('.project-details-modal');
      modalWindow.classList.add('showModal', 'animate__bounceInDown');
      mainTag.classList.add('blur');

      modalWindow.innerHTML = `
          <div class="modal-details-content">
          <article class="work-container flex project-1">
            <div class="project-detail-header">
              <h3>${projects[idModal].name}</h3>
              <button
                type="button"
                data-close-button
                class="close-button-project"
              >
                &times;
              </button>
            </div>
  
            <ul class="experience-container">
              <li>
                <p class="canopy">${projects[idModal].company_name}</p>
              </li>
              <li>
                <img class="dot" src="./pics/dot.png" alt="This a dot image" />
              </li>
              <li>
                <p class="back-end-dev">${projects[idModal].dev_stack}</p>
              </li>
              <li>
                <img class="dot" src="./pics/dot.png" alt="This a dot image" />
              </li>
              <li>
                <p class="back-end-dev year-created">${projects[idModal].year_created
        }</p>
              </li>
            </ul>
  
            <div class="work-img">
              <img
                class="snapshot_popup_desktop popup-image-${index}"
                src="./pics/snapshot1.png"
                alt="Picture of ${projects[idModal].name}"
              />
            </div>
            <div class="work-description desktop_work_description">
              <div class="desktop_project_detail_paragraph">
                <p>${projects[idModal].description}</p>
              </div>
              <div class="desktop_project_detail-button">
                <ul class="pop-language-button language-button">
                  ${projects[index].tech
          .map(
            (singleTech) => `
                  <li><button type="button" class="l-button">${singleTech}</button></li>
                  `,
          )
          .join('')}
                </ul>
                <div class="project-detail-buttons">
                  <a href="${projects[idModal].live_demo}" class="live-class">
                    <button type="button" class="seen-project see-source">
                      Live
                      <img
                        src="./pics/detailProjectLive.png"
                        class="see-source-img arrow_circle"
                        alt="a buttton linking to the live version of ${projects[idModal].name
        }"
                      />
                    </button>
                  </a>
                  <a href="${projects[idModal].git_source
        }" class="source-class">
                    <button type="button" class="seen-project see-source">
                      Source
                      <img
                        src="./pics/detailProjectGit.png"
                        class="see-source-img github"
                        alt="A button linking to the GitHub repo of ${projects[idModal].name
        }"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
          `;

      const desktopPopUp = document.querySelector(`.popup-image-${index}`);
      desktopPopUp.style.content = `url(${projects[idModal].image})`;

      // Create a condition that targets viewports at least 768px wide
      const mediaQuery = window.matchMedia('(min-width: 768px)');

      function handleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) {
          // Then log the following message to the console
          const desktopPopUp = document.querySelector(`.popup-image-${index}`);
          desktopPopUp.style.content = `url(${projects[idModal].desktopImg})`;
        } else {
          const desktopPopUp = document.querySelector(
            '.snapshot_popup_desktop',
          );
          desktopPopUp.style.content = `url(${projects[idModal].image})`;
        }
      }

      // Register event listener
      mediaQuery.addEventListener('change', handleTabletChange);

      // Initial check
      handleTabletChange(mediaQuery);

      const closeModalMobile = modalWindow.querySelector('[data-close-button]');

      closeModalMobile.addEventListener('click', () => {
        modalWindow.classList.remove('showModal', 'animate__bounceInDown');
        mainTag.classList.remove('blur');
      });
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

/* local storage */

/* Javascript object with all data to be stored locally  */
const fullNameForm = document.getElementById('fullname');
const emailForm = document.getElementById('email');
const commentForm = document.getElementById('message-input');

function handleChange() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: commentForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    fullNameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    commentForm.value = formObject.comment;
  }
});

fullNameForm.onchange = handleChange;
emailForm.onchange = handleChange;
commentForm.onchange = handleChange;

/** Scroll Animation */

const noScroll = document.querySelectorAll(".no-scroll")

const reveal = () => {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active-scroll");
    } else {
      reveals[i].classList.remove("active-scroll");
    }
  }
}

window.addEventListener("scroll", reveal);
noScroll.addEventListener("DOMContentLoaded", reveal());