const content = document.getElementById("content");

const galleryPages = {
  japan: {
    title: "RECENT WORK",
    englishTitle: "RECENT WORK",
    koreanTitle: "최근 작업물",
    koreanDescriptionLines: [
      "26.05.02~05.07 도쿄시, 후추시.",
    ],
    englishDescriptionLines: [
      "26.05.02~05.07 Tokyo, Fuchu.",
    ],
    featuredImage: "images/japan/japan-22.jpg",
    featuredCaption: "Japan 22"
  },
  osaka: {
    title: "One month in Osaka(2024)",
    englishTitle: "One month in Osaka(2024)",
    koreanTitle: "오사카에서의 한 달",
    koreanDescriptionLines: [
      "한글 본문"
    ],
    englishDescriptionLines: [
      "English description"
    ],
    featuredImage: "images/osaka/osaka-08.jpg",
    featuredCaption: "Osaka 8"
  },
  korea: {
  title: "English Title",
  englishTitle: "English Title",
  koreanTitle: "한글 제목",
  isPublic: false,
  koreanDescriptionLines: [
    "한글 본문"
  ],
  englishDescriptionLines: [
    "English description"
  ]
},
thailand: {
  title: "English Title",
  englishTitle: "English Title",
  koreanTitle: "한글 제목",
  isPublic: false,
  koreanDescriptionLines: [
    "한글 본문"
  ],
  englishDescriptionLines: [
    "English description"
  ]
},
  vietnam: {
    title: "An Incomplete Paradise : Phu Quoc",
    englishTitle: "An Incomplete Paradise : Phu Quoc",
    koreanTitle: "미완성 섬 : 푸꾸옥",
    featuredImage: "images/vietnam/vietnam-18.jpg",
    featuredCaption: "Vietnam 18",
    koreanDescriptionLines: [
      "장모님의 환갑 여행으로 처가댁과 함께 푸꾸옥에 다녀왔다.",
      "",
      "아시아, 유럽 등 얕지만 다양한 문화적 관광지가 들어서 있었다. 하지만 섬의 지질학적 뿌리는 베트남에 두고 있어 여러 나라가 합심하여 베트남에게 위탁한 것 같은 ",
      "섬의 뉘앙스가 강하게 풍겨왔다. 섬은 아직 많은 곳이 개발중이었고 그러다보니 떠오른 단어는 ‘미완성 된 파라다이스’",
      "",
      "따듯했지만 활기찼지만 모두가 익숙한 이방인으로써 서로에 대한 미묘한 어색함이 맴돌던 곳이었다. 한국인이 많았기 때문이려나?",
      "일주일간의 방문으로 모든 것을 다 알긴 어렵겠지만 가족들은 “푸꾸옥 갈바엔 00가겠다” 라는 문장을 시작으로 다시 방문 할 일은 없을 거라고 코멘트를 남겼었다.",
      "",
      "나는 이상하게 이곳에서의 삶에 대한 궁금증이 생겼던 여행이었다. 개발중인 도시에서의 삶은 어떨까?"
    ],
    englishDescriptionLines: [
      "I visited Phu Quoc with my wife's family on a trip celebrating my mother-in-law's 60th birthday.",
      "",
      "The island was filled with tourist attractions inspired by a mix of Asian and European cultures. Although geographically part of Vietnam",
      "it often felt as if several countries had come together to create a destination and then handed it back to Vietnam.That impression lingered",
      "throughout the trip. Much of the island was still under development, and the phrase that kept coming to mind was “An Incomplete Paradise.",
      "",
      "It was warm and full of energy, yet there was also a subtle sense of awkwardness in the air, as if everyone was a familiar stranger. Maybe that",
      "was because there were so many Koreans around. A week is hardly enough time to fully understand a place, but most of my family came away",
      "saying some version of, “If I had to choose, I'd rather travel somewhere else.” None of them seemed interested in coming back.",
      "",
      "For some reason, I was left with a different feeling. I found myself wondering what life might be like here.",
      "What does it mean to live in a city that is still being built?"
    ]
  },
  france: {
    title: "Honeymoon in France",
    englishTitle: "Honeymoon in France",
    koreanTitle: "프랑스로의 신혼여행",
    featuredImage: "images/france/france-37.jpg",
    featuredCaption: "France 37",
   koreanDescriptionLines: [
  "25년 8월 30일. 결혼을 했다.",
  "",
  "나와 나라는 파리로 신혼여행을 떠났다. 이 사진들은 파리에서 보고 느낀 것들을 담아온 것이다.",
  "",
  "컬러필름으로 담은 사진들은 우리 둘의 영혼의 안식처로 자리잡은 파리의 소도시 ‘안시’와 ‘샤모니’에서의 기록물이다.",
  "우린 종종 추억에 잠기며 아름다웠던 그곳을 예찬하곤 한다.",
  "",
  "흑백필름으로 담은 사진들은 파리 시내에서의 기록물이다.",
  "파리는 때로는 더럽고 냄새도 났지만, 낭만있었고 우아했고 사랑스러운 곳이었다."
],
englishDescriptionLines: [
  "August 30, 2025. We got married.",
  "",
  "For our honeymoon, my wife and I traveled to Paris. These photographs are fragments of what I saw and felt during that journey.",
  "",
  "The color photographs were made in Annecy and Chamonix, two towns that have become a refuge for our souls.",
  "We often find ourselves reminiscing about our time there, speaking of those beautiful places with admiration and affection.",
  "",
  "The black-and-white photographs were made in Paris itself.",
  "At times, the city was dirty and carried unpleasant smells, yet it remained romantic, elegant, and lovely."
]
  }

  
};
const projectPages = {
  fragment: {
    englishTitle: "FRAGMENT",
    koreanTitle: "프래그먼트",
    isPublic: false,
    coverImage: null,
    koreanDescriptionLines: [
      "한글 본문"
    ],
    englishDescriptionLines: [
      "English description"
    ]
  },

  anbu: {
    englishTitle: "Anbu",
    koreanTitle: "안부 (安否)",
    isPublic: false,
    coverImage: null,
    koreanDescriptionLines: [
      "한글 본문"
    ],
    englishDescriptionLines: [
      "English description"
    ]
  },

  nara: {
    englishTitle: "Nara",
    koreanTitle: "나라",
    isPublic: false,
    coverImage: null,
    koreanDescriptionLines: [
      "한글 본문"
    ],
    englishDescriptionLines: [
      "English description"
    ]
  }
};

let activeItems = [];
let currentIndex = 0;
let lightboxOpen = false;
let lightboxEl = null;
let lightboxImg = null;
let lightboxFigure = null;
let touchStartX = 0;
let touchEndX = 0;
let lockedScrollY = 0;

function renderGallery(key) {
  const config = galleryPages[key];

  if (config.isPublic === false) {
    content.innerHTML = `
      <section class="coming-soon-page">
        <h2>COMING SOON</h2>
      </section>
    `;
    return;
  }

  const galleryItems = window.galleryData?.[key] || [];

  const featuredSrc = config.featuredImage || galleryItems[0]?.src || "";
  const featuredCaption = config.featuredCaption || galleryItems[0]?.caption || `${config.englishTitle || config.title} 01`;

  const featuredMarkup = featuredSrc
    ? `<div class="gallery-featured"><div class="gallery-featured-image" style="background-image: url('${featuredSrc}');" aria-label="${featuredCaption}"></div>`
    : `<div class="gallery-featured gallery-coming-soon"><span>COMING SOON</span></div>`;

  activeItems = galleryItems;
  const isVietnam = key === "vietnam";
const hasKoreanText = Array.isArray(config.koreanDescriptionLines) && config.koreanDescriptionLines.length > 0;
  const pageClasses = `gallery-page fragment-page${isVietnam ? " vietnam-page" : ""}${hasKoreanText ? " has-korean" : ""}`;

  const renderTextLines = (lines) => lines.map((line) => {
    if (line === "") return `<p class="gallery-space"></p>`;
    return `<p>${line}</p>`;
  }).join("");

  const introMarkup = `
      ${hasKoreanText ? `
      <h2 class="gallery-korean-title">${config.koreanTitle || ""}</h2>
      <div class="gallery-intro gallery-korean-intro">
        ${renderTextLines(config.koreanDescriptionLines)}
      </div>
      <div class="gallery-language-gap"></div>
      ` : ""}
      <h2 class="gallery-english-title">${config.englishTitle || config.title}</h2>
      <div class="gallery-intro gallery-english-intro">
        ${renderTextLines(config.englishDescriptionLines || config.descriptionLines || [])}
      </div>
    `;

  content.innerHTML = `
    <section class="${pageClasses}">
      ${featuredMarkup}

      ${introMarkup}

      ${galleryItems.length ? `
        <div class="japan-thumb-grid">
          ${galleryItems.map((it, idx) => `
            <button class="japan-thumb" data-index="${idx}" aria-label="Open ${it.caption}">
              <span class="thumb-frame">
                <img src="${it.thumbSrc || it.src}" alt="${it.caption}" loading="lazy" decoding="async" style="object-position: ${it.objectPosition};">
              </span>
            </button>
          `).join("")}
        </div>
      ` : `<div class="gallery-empty gallery-coming-soon"><span>COMING SOON</span></div>`}
    </section>
  `;

  document.querySelectorAll(".japan-thumb").forEach((btn) => {
    btn.addEventListener("click", function () {
      const idx = Number(this.getAttribute("data-index")) || 0;
      openLightbox(idx);
    });
  });
}

function renderAbout() {
  content.innerHTML = `
    <section class="about-page">
      <div class="about-photo">
        <img src="images/about/about-01.JPG" alt="Kim Seokyoung" class="about-image">
      </div>

      <div class="about-content">
        <h2>ABOUT</h2>
<p class="about-english">I am a photographer based in Korea, working primarily in black and white.</p>
<p class="about-english">I use photography as a way of documenting myself through the people, objects, patterns, and passing moments that draw my attention.</p>
<p class="about-english">My photographs are not intended to deliver a message or comment on social issues.These photographs are simply fragments of the world I have encountered. Their interpretation and meaning are left to the viewer.</p>
       
        <div style="height:30px;"></div>

<p class="about-korean">저는 한국을 기반으로 활동하는 사진가이며, 주로 흑백사진 작업을 합니다.</p>
<p class="about-korean">사람과 사물, 패턴, 그리고 우연한 순간들을 기록하며 세상을 통해 저 자신을 담아냅니다.</p>
<p class="about-korean">제 사진은 특정한 메시지를 전달하거나 사회적 이슈를 이야기하지 않습니다.</p>
<p class="about-korean">단지 제가 마주한 세상의 조각들을 제시할 뿐이며, 해석과 의미는 사진을 보는 이에게 남겨둡니다.</p>
        <div class="about-columns">

       <div>
  <p class="about-section-title">Contact</p>

  <p>
    <a href="mailto:seokyoung0408@naver.com">
      seokyoung0408@naver.com
    </a>
  </p>
    <a href="https://www.instagram.com/aaomidorii_film/" target="_blank">
      Instagram
    </a>
  </p>
</div>
        </div>
      </div>
    </section>
  `;
}

function setHomeMode(isHome) {
  document.body.classList.toggle("home-page", isHome);
}

function updateActiveMenu() {
  const currentKey = location.hash.replace("#", "") || "home";
  const sidebarLinks = document.querySelectorAll(".sidebar a:not(.sidebar-instagram)");
  
  sidebarLinks.forEach((link) => {
    const linkHash = link.getAttribute("href").replace("#", "");
    if (linkHash === currentKey) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function renderProject(key) {
  const config = projectPages[key];

  if (!config) return "";

  if (config.isPublic === false) {
    content.innerHTML = `
      <section class="coming-soon-page">
        <h2>COMING SOON</h2>
      </section>
    `;
    return "";
  }

  if (!config) return "";

  const renderTextLines = (lines) => lines.map((line) => {
    if (line === "") return `<p class="gallery-space"></p>`;
    return `<p>${line}</p>`;
  }).join("");

  const coverMarkup = config.coverImage
    ? `<div class="project-cover">
      <img src="${config.coverImage}" alt="${config.englishTitle}" class="project-cover-image">
    </div>`
    : `<div class="project-cover project-cover-placeholder">
      <span>COMING SOON</span>
    </div>`;

  return `
   <section class="project-page gallery-page">
    ${coverMarkup}

    <h2 class="project-korean-title gallery-korean-title">${config.koreanTitle || ""}</h2>
    <div class="project-intro project-korean-intro gallery-intro gallery-korean-intro">
      ${renderTextLines(config.koreanDescriptionLines || [])}
    </div>

    <div class="gallery-language-gap"></div>

    <h2 class="project-english-title gallery-english-title">${config.englishTitle || ""}</h2>
    <div class="project-intro project-english-intro gallery-intro gallery-english-intro">
      ${renderTextLines(config.englishDescriptionLines || [])}
    </div>
  </section>
`;
}

function renderDefault(key) {

  if (key === "home") {
    return "";
  }

  const titles = {
    fragment: "FRAGMENT",
    anbu: "안부 (安否)",
    nara: "Nara",
  };

  const title = titles[key] || "";

  return `
    <h2>${title}</h2>
  `;
}

function renderPage() {
  const key = location.hash.replace("#", "") || "home";
  setHomeMode(key === "home");
  updateActiveMenu();

  if (key === "about") {
    renderAbout();
    window.scrollTo(0, 0);
    return;
  }

if (galleryPages[key]) {
  renderGallery(key);
  window.scrollTo(0, 0);
  return;
}

if (projectPages[key]) {
  renderProject(key);
  window.scrollTo(0, 0);
  return;
}

  content.innerHTML = renderDefault(key);
  window.scrollTo(0, 0);
}

function ensureLightbox() {
  if (lightboxEl) return;

  lightboxEl = document.createElement("div");
  lightboxEl.className = "lightbox";
  lightboxEl.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>
    <button class="lightbox-button lightbox-prev" aria-label="Previous">‹</button>
    <figure class="lightbox-figure">
      <div class="lightbox-img" aria-label=""></div>
    </figure>
    <button class="lightbox-button lightbox-next" aria-label="Next">›</button>
  `;

  document.body.appendChild(lightboxEl);

  lightboxFigure = lightboxEl.querySelector(".lightbox-figure");
  lightboxImg = lightboxEl.querySelector(".lightbox-img");

  lightboxEl.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightboxEl.querySelector(".lightbox-prev").addEventListener("click", () => showImage(currentIndex - 1));
  lightboxEl.querySelector(".lightbox-next").addEventListener("click", () => showImage(currentIndex + 1));

  lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) {
    closeLightbox();
  }
});

lightboxFigure.addEventListener("click", (e) => {
  const rect = lightboxFigure.getBoundingClientRect();
  const clickX = e.clientX - rect.left;

  if (clickX < rect.width / 2) {
    showImage(currentIndex - 1);
  } else {
    showImage(currentIndex + 1);
  }
});

lightboxEl.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightboxEl.addEventListener("touchmove", (e) => {
  e.preventDefault();
}, { passive: false });

lightboxEl.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;

  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) < 40) return;

  if (diff < 0) {
    showImage(currentIndex + 1);
  } else {
    showImage(currentIndex - 1);
  }
}, { passive: true });
}

function openLightbox(index) {
  if (!activeItems.length) return;

  ensureLightbox();
  lightboxOpen = true;
  currentIndex = index;
  lightboxEl.classList.add("is-open");
  lockedScrollY = window.scrollY || window.pageYOffset;
  lockedScrollY = window.scrollY || window.pageYOffset;
  document.documentElement.classList.add("lightbox-locked");
  document.body.classList.add("lightbox-locked");
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.top = `-${lockedScrollY}px`;
  showImage(index, true);
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxOpen = false;
  lightboxEl.classList.remove("is-open");
  document.documentElement.classList.remove("lightbox-locked");
  document.body.classList.remove("lightbox-locked");
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
}

function showImage(index, immediate = false) {
  if (!activeItems.length || !lightboxImg || !lightboxFigure) return;

  if (index < 0) index = activeItems.length - 1;
  if (index >= activeItems.length) index = 0;

  currentIndex = index;
  const item = activeItems[currentIndex];

  const update = () => {
    lightboxImg.style.backgroundImage = `url('${item.src}')`;
    lightboxImg.setAttribute("aria-label", item.caption || "");
    requestAnimationFrame(() => lightboxFigure.classList.remove("is-fading"));
  };

  if (immediate) {
    lightboxFigure.classList.remove("is-fading");
    update();
    return;
  }

  lightboxFigure.classList.add("is-fading");
  window.setTimeout(update, 180);
}

window.addEventListener("keydown", (e) => {
  if (!lightboxOpen) return;

  if (e.key === "Escape") {
    closeLightbox();
  }

  if (e.key === "ArrowRight") {
    showImage(currentIndex + 1);
  }

  if (e.key === "ArrowLeft") {
    showImage(currentIndex - 1);
  }
});

window.addEventListener("hashchange", renderPage);
window.addEventListener("DOMContentLoaded", () => {
  renderPage();
  updateActiveMenu();

  const menuButton = document.querySelector(".mobile-menu-toggle");
  if (menuButton && window.matchMedia("(min-width: 601px)").matches) {
  menuButton.remove();
}
  const sidebar = document.querySelector(".sidebar");

  if (menuButton && sidebar) {
    menuButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      sidebar.classList.toggle("is-open");
    });

    sidebar.querySelectorAll(".sidebar-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("is-open");
      });
    });
  }
});
["contextmenu", "dragstart"].forEach((eventName) => {
  document.addEventListener(eventName, (e) => {
    const target = e.target;

    if (
      target.closest &&
      target.closest("img, .lightbox-figure, .thumb-frame, .gallery-featured, .about-photo")
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);
});

document.addEventListener("touchstart", (e) => {
  const target = e.target;

  if (
    target.closest &&
    target.closest("img, .lightbox-figure, .thumb-frame, .gallery-featured, .about-photo")
  ) {
    e.preventDefault();
  }
}, { passive: false, capture: true });