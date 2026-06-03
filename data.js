window.galleryData = window.galleryData || {};

/* Japan */
window.galleryData.japan = Array.from({ length: 40 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");

  let position = "center center";

  if (num === "05") {
    position = "center center";
  }

  if (num === "07") {
    position = "bottom center";
  }

    if (num === "11") {
    position =  "50% 70%";
  }

      if (num === "08") {
    position = "50% 70%";
  }

      if (num === "18") {
    position = "50% 100%";
  }

      if (num === "24") {
    position = "50% 30%";
  }

      if (num === "40") {
    position = "50% 90%";
  }

  return {
    src: `images/japan/japan-${num}.jpg`,
    thumbSrc: `images/japan/thumbs/japan-${num}.jpg`,
    caption: `Japan ${num}`,
    objectPosition: position
  };
});

/* Osaka */
window.galleryData.osaka = Array.from({ length: 55 }, (_, i) => {
const comments = {
  "08": "Osaka, 2024",
  "12": "Umeda Station",
  "35": "Late Night Walk"
};

const num = String(i + 1).padStart(2, "0");

let position = "center center";

if (num === "11") {
  position = "50% 70%";
}

if (num === "51") {
  position = "50% 20%";
}

return {
  src: `images/osaka/osaka-${num}.jpg`,
  thumbSrc: `images/osaka/thumbs/osaka-${num}.jpg`,
  caption: `Osaka ${num}`,
  comment: comments[num] || "",
  objectPosition: position  
};
});

/* France */
window.galleryData.france = Array.from({ length: 40 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");

  return {
    src: `images/france/france-${num}.jpg`,
    thumbSrc: `images/france/thumbs/france-${num}.jpg`,
    caption: `France ${num}`,
    objectPosition: "center center"
  };
});

/* Vietnam
 */
window.galleryData.vietnam = Array.from({ length: 40 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");

    let position = "center center";

        if (num === "24") {
  position = "50% 30%";
}

    if (num === "25") {
  position = "50% 90%";
}

return {
  src: `images/vietnam/vietnam-${num}.jpg`,
  thumbSrc: `images/vietnam/thumbs/vietnam-${num}.jpg`,
  caption: `Vietnam ${num}`,
  objectPosition: position
};
});
/* Project - Object */
window.galleryData.object = Array.from({ length: 30 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");

      if (num === "01") {
  position = "50% 85%";
}
        if (num === "04") {
  position = "50% 20%";
}
        if (num === "15") {
  position = "50% 30%";
}
        if (num === "17") {
  position = "50% 90%";
}
        if (num === "18") {
  position = "50% 50%";
}
  return {
    src: `images/object/object-${num}.jpg`,
    thumbSrc: `images/object/thumbs/object-${num}.jpg`,
    caption: `Object ${num}`,
    objectPosition: position
  };
});

/* Empty placeholders for future projects */
window.galleryData.korea = [];
window.galleryData.thailand = [];
