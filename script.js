let currentIndex = 0;

function crmMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__crm-carousel-images img"
  );
  const totalImages = images.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }

  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;

  document.querySelector(
    ".project-section__crm-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

function shopMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__shop-carousel-images img"
  );
  const totalImages = images.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }

  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;

  document.querySelector(
    ".project-section__shop-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

function websiteMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__website-carousel-images img"
  );
  const totalImages = images.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }

  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;

  document.querySelector(
    ".project-section__website-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

function noteAppMoveSlide(step) {
  const images = document.querySelectorAll(
    ".project-section__note-carousel-images img"
  );
  const totalImages = images.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }

  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;

  document.querySelector(
    ".project-section__note-carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}
