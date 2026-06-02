const content = document.getElementById("content");

const galleryPages = {
  japan: {
    title: "RECENT WORK",
    englishTitle: "RECENT WORK",
    koreanTitle: "최근 작업물",
    koreanDescriptionLines: [
      "26.05.02~05.07 도쿄시, 후추시.",
      "올해의 일본은 카메라 한 대와 20롤의 필름과 함께한 6일간의 여정이었다.",
      "아무래도 혼자 사진 작업을 위해 해외로 나간다는 것은 늘 설레는 일이지만, 이상하게도 올해는 그 기분이 많이 들지 않았다. 지금 한국에서의 스트릿 작업에도 꽤 만족하고 있기 때문이지 않을까 정도로 생각해본다.",
      "작년 8월, 까만 옷이 하얗게 변할 정도의 무더위 속에서 발견한 나카노의 새로운 매력을 잊지 못한다. 한여름의 열기를 뚫고 빛나던 시키노모리 공원의 여름 이벤트는 볼 수 없겠지만, 봄의 모습은 어떨까 하는 기대가 있었다. 하지만 오랜만의 여행에 고독한 소심쟁이가 되어버린 탓에, 그 시간을 제대로 만끽하지 못한 것이 아쉽다.",
      "3년 전 같은 시기에 방문했던 후추시의 ‘쿠라야미 마츠리’는 이번 여행의 가장 큰 목적이었다.",
      "마지막 이틀간 이어진 화려한 축제 속에서 나는 물 만난 물고기처럼 신사 주변을 이리저리 누비며 인상적인 장면들을 포착해갔다. PRESS인 척하며 행사 메인 로드에 침입도 해보고, 배가 고파 들른 야끼소바 야타이에서는 반가운 얼굴을 우연히 마주하기도 했다.",
      "짧았지만 좋았다.",

    ],
    englishDescriptionLines: [
      "26.05.02~05.07 Tokyo, Fuchu.",
      "This year's trip to Japan was a six-day journey with just one film camera and twenty rolls of film.",
      "Traveling abroad alone for photography is usually exciting. This time, though, it felt different. Maybe it's because I've been quite satisfied with my street photography work in Korea lately.",
      "I still remember Nakano last August, when the heat was enough to turn black clothes white with salt. The summer event at Shikinomori Park, which seemed to shine through the midsummer heat, was no longer there, but I was curious to see what spring would look like instead.",
      "After such a long time away, I found myself traveling more cautiously than usual. Looking back, I don't think I made the most of my time in Nakano.",
      "The main reason for returning was Kurayami Matsuri in Fuchu, which I had visited around the same time three years ago. during the festival's final two days, I moved around the shrine grounds like a fish in water, capturing moments. I slipped onto the main festival route pretending to be press, and later ran into a familiar face at a yakisoba yatai.",
      "It was short, but good.",

    ],
    featuredImage: "images/japan/japan-22.jpg",
    featuredCaption: "Japan 22"
  },
  osaka: {
    title: "One month in Osaka(2024)",
    englishTitle: "One month in Osaka(2024)",
    koreanTitle: "오사카에서의 한 달",
    koreanDescriptionLines: [
      "24. 11. 11 ~ 12. 12 ‘임페리얼 대국’이라는 화려하고 강렬한 이름을 가진 빌딩 902호에서의 시간들.",
      "그때의 나는 왜 그랬나 싶을 정도로 무언가에 쫓기듯 계속 사진만 찍어댔다. 어찌 보면 여행이기도 할텐데 늦잠도 낮잠도 나에겐 허락되지 않은  사치였다. 백수주제에 많은 돈을 들여서 온 곳이니 그 돈에 걸맞는 결과물을 마음속으로 계속해서 갈구하고 있었나보다.",
      "이 기간이 기억에서 흐릿해지는걸 원치 않았는지 생전 처음으로 한 달 동안의 일기를 썼고 40롤의 필름을 어떤 렌즈로 어디서 어떤 기간에 찍었고 이 필름이 몇번째 필름인지 번호까지 붙여가며 정성스럽게 관리했다. 지금도 그 일기를 종종 본다. 생각보다 자세히 적어서 한 두 줄만 읽어도 순식간에 그 시간으로 되돌아 간 것 같았다.",
      "이 때의 사진은 누군가에게는 단지 스트릿 사진이겠지만 나에겐 꽤 특별한 사진들이다. ‘최고의 작가’를 만났고 ‘내 사진에 대한 정체성 확립’과 ‘스스로에게 던졌던 질문에 대한 확신의 답’으로 채워갔던 내 작업의 변곡점 같은 사진이랄까. 덕분에 지금 이 홈페이지를 만들 수도 있었다.",
    ],
    englishDescriptionLines: [
      "24. 11. 11 ~ 12. 12 Time in Room 902 of the ‘Imperial Taikoku’ Building.",
      "Looking back, I have no idea why I was in such a rush. All I did that month was take photographs, as if something was always pushing me forward.",
      "It was supposed to be a trip, but even sleeping in or taking a nap felt like luxuries I couldn't afford. I had spent a lot of money to be there, and I felt I had to make photographs that felt worth the trip.",
      "I wanted to hold on to those memories for a little longer, so for the first time in my life, I kept a diary for an entire month. During that month, I shot forty rolls of film and carefully logged each one — where it was shot, which lens I used, when I shot it, and even gave every roll a number.",
      "I still read those diaries sometimes. They're surprisingly detailed. Sometimes a few lines are enough to take me straight back to those days.",
      "To some people, they're just street photographs. To me, they're much more than that. That trip was a turning point in my work. I met the photographer who influenced me the most, began to understand what I wanted from photography, and finally found answers to many of the questions I had been asking myself. In a way, these photographs made this website possible.",

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
      "아시아, 유럽 등 얕지만 다양한 문화적 관광지가 들어서 있었다. 하지만 섬의 지질학적 뿌리는 베트남에 두고 있어 여러 나라가 합심하여 베트남에게 위탁한 것 같은 섬의 뉘앙스가 강하게 풍겨왔다. 섬은 아직 많은 곳이 개발중이었고 그러다보니 떠오른 단어는 ‘미완성 된 파라다이스’",
      "따듯했지만 활기찼지만 모두가 익숙한 이방인으로써 서로에 대한 미묘한 어색함이 맴돌던 곳이었다. 한국인이 많았기 때문이려나? 일주일간의 방문으로 모든 것을 다 알긴 어렵겠지만 가족들은 “푸꾸옥 갈바엔 00가겠다” 라는 문장을 시작으로 다시 방문 할 일은 없을 거라고 코멘트를 남겼었다.",
      "나는 이상하게 이곳에서의 삶에 대한 궁금증이 생겼던 여행이었다. 개발중인 도시에서의 삶은 어떨까?"
    ],
    englishDescriptionLines: [
      "I visited Phu Quoc with my wife's family on a trip celebrating my mother-in-law's 60th birthday.",
      "The island was filled with tourist attractions inspired by a mix of Asian and European cultures. Although geographically part of Vietnam it often felt as if several countries had come together to create a destination and then handed it back to Vietnam.That impression lingered throughout the trip. Much of the island was still under development, and the phrase that kept coming to mind was “An Incomplete Paradise.",
      "It was warm and full of energy, yet there was also a subtle sense of awkwardness in the air, as if everyone was a familiar stranger. Maybe that was because there were so many Koreans around. A week is hardly enough time to fully understand a place, but most of my family came away saying some version of, “If I had to choose, I'd rather travel somewhere else.” None of them seemed interested in coming back.",
      "For some reason, I was left with a different feeling. I found myself wondering what life might be like here.",
      "What does it mean to live in a city that is still being built?"
    ],
  },
  france: {
    title: "Honeymoon in France",
    englishTitle: "Honeymoon in France",
    koreanTitle: "프랑스로의 신혼여행",
    featuredImage: "images/france/france-37.jpg",
    featuredCaption: "France 37",
   koreanDescriptionLines: [
  "25년 8월 30일. 결혼을 했다.",
  "나와 나라는 파리로 신혼여행을 떠났다. 이 사진들은 파리에서 보고 느낀 것들을 담아온 것이다.",
  "컬러필름으로 담은 사진들은 우리 둘의 영혼의 안식처로 자리잡은 파리의 소도시 ‘안시’와 ‘샤모니’에서의 기록물이다.",
  "우린 종종 추억에 잠기며 아름다웠던 그곳을 예찬하곤 한다.",
  "흑백필름으로 담은 사진들은 파리 시내에서의 기록물이다.",
  "파리는 때로는 더럽고 냄새도 났지만, 낭만있었고 우아했고 사랑스러운 곳이었다."
],
englishDescriptionLines: [
  "August 30, 2025. We got married.",
  "For our honeymoon, my wife and I traveled to Paris. These photographs are fragments of what I saw and felt during that journey.",
  "The color photographs were made in Annecy and Chamonix, two towns that have become a refuge for our souls. We often find ourselves reminiscing about our time there, speaking of those beautiful places with admiration and affection.",
  "The black-and-white photographs were made in Paris itself. At times, the city was dirty and carried unpleasant smells, yet it remained romantic, elegant, and lovely."
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
    ? `<div class="gallery-featured"><img src="${featuredSrc}" alt="${featuredCaption}" class="gallery-featured-image"></div>`
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
<p class="about-korean">저는 한국을 기반으로 활동하는 사진가이며, 주로 흑백사진 작업을 합니다.</p>
<p class="about-korean">사람과 사물, 패턴, 그리고 우연한 순간들을 기록하며 세상을 통해 저 자신을 담아냅니다.</p>
<p class="about-korean">제 사진은 특정한 메시지를 전달하거나 사회적 이슈를 이야기하지 않습니다.</p>
<p class="about-korean">단지 제가 마주한 세상의 조각들을 제시할 뿐이며, 해석과 의미는 사진을 보는 이에게 남겨둡니다.</p>
       
        <div style="height:20px;"></div>
<p class="about-english">I am a photographer based in Korea, working primarily in black and white.</p>
<p class="about-english">I use photography as a way of documenting myself through the people, objects, patterns, and passing moments that draw my attention.</p>
<p class="about-english">My photographs are not intended to deliver a message or comment on social issues.These photographs are simply fragments of the world I have encountered. Their interpretation and meaning are left to the viewer.</p>

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
      <img class="lightbox-img" alt="">
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
  document.body.classList.add("lightbox-locked");
  showImage(index, true);
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxOpen = false;
  lightboxEl.classList.remove("is-open");
  document.body.classList.remove("lightbox-locked");
}
function preloadImage(src) {
  if (!src) return;
  const img = new Image();
  img.src = src;
}

function preloadAround(index) {
  if (!activeItems.length) return;

  const prevIndex = index <= 0 ? activeItems.length - 1 : index - 1;
  const nextIndex = index >= activeItems.length - 1 ? 0 : index + 1;

  preloadImage(activeItems[prevIndex]?.src);
  preloadImage(activeItems[nextIndex]?.src);
}

function showImage(index, immediate = false) {
  if (!activeItems.length || !lightboxImg || !lightboxFigure) return;

  if (index < 0) index = activeItems.length - 1;
  if (index >= activeItems.length) index = 0;

  currentIndex = index;
  const item = activeItems[currentIndex];

  lightboxFigure.classList.add("is-fading");

  lightboxImg.onload = () => {
    requestAnimationFrame(() => {
      lightboxFigure.classList.remove("is-fading");
    });
    preloadAround(currentIndex);
  };

  lightboxImg.src = item.src;
  lightboxImg.alt = item.caption || "";

  if (immediate) {
    lightboxFigure.classList.remove("is-fading");
    preloadAround(currentIndex);
  }
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
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
