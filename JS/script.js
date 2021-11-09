const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');

const projectDetails = document.querySelectorAll('.seen-project')
const projectDetail = document.querySelector('.project-detail');


const projects = [
    {
        id: 1,
        name:  "Tonic",
        descrition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        image: "./pics/snapshot1.png",
        imageGit: "./pics/detailProjectGit.png",
        imageLive: "./pics/detailProjectLive.png"

    }
]

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
projectDetails.forEach((button)=>{
    button.addEventListener('click', (e) => {
        const selected_project = projects.filter((project)=> project.id == e.target.id)[0]
        mainTag.classList.add('blur');
        projectDetail.classList.add('active');
        projectDetail.innerHTML = `
        <article class="work-container flex project-1">
            <div class="project-detail-header">
              <h3>${selected_project.name}</h3>
              <button data-close-button class="close-button-project">&times;</button>
           </div>
           
             
              <ul class="experience-container">
            <li>
              <p class="canopy">CANOPY</p>
            </li>
            <li><img class="dot" src="./pics/dot.png" alt="This a dot image"></li>
            <li>
              <p class="back-end-dev">Back End Dev</p>
            </li>
            <li><img class="dot" src="./pics/dot.png" alt="This a dot image"></li>
            <li>
              <p class="back-end-dev">2015</p>
            </li>
          </ul>
            
          <div class="work-img">
            <img src=${selected_project.image} alt="Picture for the project Tonic, showing a laptop and a widescreen." />
          </div>
          <div class="work-description">
            <p>
              ${selected_project.descrition}
            </p>
           <ul class="language-button">
            <li><button type="button" class="l-button">html</button></li>
            <li><button type="button" class="l-button">css</button></li>
            <li><button type="button" class="l-button">javaScript</button></li>
          </ul>
            <div class="project-detail-buttons">
                <button type="button" class="seen-project see-source">See Project
                <img class="see-source-img" src=${selected_project.imageLive} alt="" />
                </button>
                <button type="button" class="seen-project see-source">See Project
                <img class="see-source-img" src=${selected_project.imageGit} alt="" />
                </button>
            </div>
          </div>
        </article>
        `;
    })
})
