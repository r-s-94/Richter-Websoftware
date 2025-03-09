let currentCRMIndex = 0;

function crmMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__crm-carousel-images img"
  );
  const totalImages = images.length;

  currentCRMIndex += step;

  if (currentCRMIndex < 0) {
    currentCRMIndex = totalImages - 1;
  }

  if (currentCRMIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentCRMIndex * 100;

  document.querySelector(
    ".project-section__crm-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

let currentShopIndex = 0;

function shopMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__shop-carousel-images img"
  );
  const totalImages = images.length;

  currentShopIndex += step;

  if (currentShopIndex < 0) {
    currentShopIndex = totalImages - 1;
  }

  if (currentShopIndex >= totalImages) {
    currentShopIndex = 0;
  }

  const offset = -currentShopIndex * 100;

  document.querySelector(
    ".project-section__shop-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

let currentWebsiteIndex = 0;

function websiteMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__website-carousel-images img"
  );
  const totalImages = images.length;

  currentWebsiteIndex += step;

  if (currentWebsiteIndex < 0) {
    currentWebsiteIndex = totalImages - 1;
  }

  if (currentWebsiteIndex >= totalImages) {
    currentWebsiteIndex = 0;
  }

  const offset = -currentWebsiteIndex * 100;

  document.querySelector(
    ".project-section__website-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

let currentNoteIndex = 0;

function noteAppMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__note-carousel-images img"
  );
  const totalImages = images.length;

  currentNoteIndex += step;

  if (currentNoteIndex < 0) {
    currentNoteIndex = totalImages - 1;
  }

  if (currentNoteIndex >= totalImages) {
    currentNoteIndex = 0;
  }

  const offset = -currentNoteIndex * 100;

  document.querySelector(
    ".project-section__note-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}
