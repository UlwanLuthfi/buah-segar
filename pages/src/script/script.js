// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

hamburger.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("translate-x-full");

  mobileMenu.classList.toggle("translate-x-full");
  hamburger.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (!isOpen) {
    document.body.style.overflow = "hidden";
    // Add background to navbar when menu is open - FORCE remove all other bg classes
    navbar.classList.remove(
      "bg-transparent",
      "bg-white/90",
      "backdrop-blur",
      "shadow-md"
    );
    navbar.classList.add("bg-black/90");

    // Force hamburger lines to white when menu is open
    const lines = hamburger.querySelectorAll(".hamburger-line");
    lines.forEach((line) => {
      line.classList.remove("bg-black");
      line.classList.add("bg-white");
    });
  } else {
    document.body.style.overflow = "";
    // Restore navbar background based on scroll position
    const scrolled = window.scrollY > triggerPoint;
    navbar.classList.remove("bg-black/90");

    if (scrolled) {
      navbar.classList.add("bg-white/90", "backdrop-blur", "shadow-md");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white/90", "backdrop-blur", "shadow-md");
    }

    // Restore hamburger line color based on scroll
    const lines = hamburger.querySelectorAll(".hamburger-line");
    lines.forEach((line) => {
      if (scrolled) {
        line.classList.add("bg-black");
        line.classList.remove("bg-white");
      } else {
        line.classList.add("bg-white");
        line.classList.remove("bg-black");
      }
    });
  }

  const lines = hamburger.querySelectorAll(".hamburger-line");
  if (!isOpen) {
    lines[0].style.transform = "rotate(45deg) translateY(8px)";
    lines[1].style.opacity = "0";
    lines[2].style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    lines[0].style.transform = "none";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "none";
  }
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    document.body.style.overflow = "";

    // Restore navbar background based on scroll position
    const scrolled = window.scrollY > triggerPoint;
    navbar.classList.remove("bg-black/90");

    if (scrolled) {
      navbar.classList.add("bg-white/90", "backdrop-blur", "shadow-md");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white/90", "backdrop-blur", "shadow-md");
    }

    // Restore hamburger line color
    const lines = hamburger.querySelectorAll(".hamburger-line");
    lines.forEach((line) => {
      if (scrolled) {
        line.classList.add("bg-black");
        line.classList.remove("bg-white");
      } else {
        line.classList.add("bg-white");
        line.classList.remove("bg-black");
      }
    });

    lines[0].style.transform = "none";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "none";
  });
});

// Navbar
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");
const navLinks = document.querySelectorAll(".nav-link");
const hamburgerLines = document.querySelectorAll(".hamburger-line");

const triggerPoint = hero.offsetHeight - 80;

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > triggerPoint;

  // Don't change navbar style if mobile menu is open
  const isMobileMenuOpen = !mobileMenu.classList.contains("translate-x-full");

  if (!isMobileMenuOpen) {
    // Navbar background
    navbar.classList.toggle("bg-white/90", scrolled);
    navbar.classList.toggle("backdrop-blur", scrolled);
    navbar.classList.toggle("shadow-md", scrolled);
    navbar.classList.toggle("bg-transparent", !scrolled);

    // Nav link color & text shadow (desktop)
    navLinks.forEach((link) => {
      link.classList.toggle("text-black", scrolled);
      link.classList.toggle("text-white", !scrolled);
      link.classList.toggle("text-shadow-lg/40", !scrolled);
    });

    // Hamburger line color
    hamburgerLines.forEach((line) => {
      line.classList.toggle("bg-black", scrolled);
      line.classList.toggle("bg-white", !scrolled);
    });
  }
});

const testimonials = [
  {
    name: "Ulwan Luthfi",
    role: "Mahasiswa",
    initials: "UL",
    rating: 5,
    text: "Sejak belanja di Rayuan Manis, saya nggak khawatir lagi soal kualitas buah untuk keluarga. Buahnya selalu segar, bersih, dan rasanya manis alami. Anak-anak jadi lebih suka makan buah setiap hari.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    initials: "SN",
    rating: 5,
    text: "Pelayanannya sangat memuaskan! Pengiriman cepat dan buahnya sampai dalam kondisi sempurna. Harga juga terjangkau untuk kualitas premium seperti ini.",
  },
  {
    name: "Budi Santoso",
    role: "Pengusaha",
    initials: "BS",
    rating: 5,
    text: "Saya sering pesan hampers untuk klien dan partner bisnis. Rayuan Manis selalu memberikan packaging yang menarik dan buah berkualitas. Recommended!",
  },
  {
    name: "Rina Wijaya",
    role: "Dokter",
    initials: "RW",
    rating: 5,
    text: "Sebagai dokter, saya sangat merekomendasikan konsumsi buah organik. Rayuan Manis menyediakan buah-buah organik terbaik yang aman untuk kesehatan keluarga.",
  },
  {
    name: "Ahmad Fauzi",
    role: "Karyawan Swasta",
    initials: "AF",
    rating: 5,
    text: "Praktis banget! Tinggal pesan online, buah langsung diantar ke rumah. Kualitasnya konsisten dan customer servicenya responsif. Puas banget!",
  },
];

let currentIndex = 0;

function createStars(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(129 140 248)" class="w-4 h-4 md:w-5 md:h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                `;
  }
  return stars;
}

function createTestimonialCard(testimonial, isCenter) {
  const isMobile = window.innerWidth < 768;
  const scale = isCenter ? "scale-100" : isMobile ? "scale-90" : "scale-80";
  const opacity = isCenter
    ? "opacity-100"
    : isMobile
    ? "opacity-50"
    : "opacity-60";
  const zIndex = isCenter ? "z-10" : "z-0";
  const width = isMobile ? "w-64" : "w-80";

  return `
                <div class="carousel-item ${width} ${zIndex}">
                    <div class="bg-indigo-100 rounded-2xl px-4 md:px-6 py-4 md:py-6 flex flex-col gap-3 md:gap-4 shadow-lg h-64 md:h-72 ${scale} ${opacity} transition-all duration-500">
                        <div class="flex">
                            ${createStars(testimonial.rating)}
                        </div>
                        <blockquote class="italic text-xs md:text-sm grow">
                            "${testimonial.text}"
                        </blockquote>
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-fuchsia-400 flex items-center justify-center text-xs md:text-sm text-white font-semibold">
                                ${testimonial.initials}
                            </div>
                            <div>
                                <p class="font-semibold text-xs md:text-sm">${
                                  testimonial.name
                                }</p>
                                <p class="text-xs text-gray-600">${
                                  testimonial.role
                                }</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}

function renderCarousel() {
  const carousel = document.getElementById("carousel");
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // MOBILE MODE → SCROLL
    carousel.innerHTML = testimonials
      .map(
        (t) => `
        <div class="min-w-[16rem] snap-center">
          <div class="bg-indigo-100 rounded-2xl px-4 py-4 shadow-lg h-64 flex flex-col gap-3">
            <div class="flex">
              ${createStars(t.rating)}
            </div>
            <blockquote class="italic text-sm grow">
              "${t.text}"
            </blockquote>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-fuchsia-400 flex items-center justify-center text-sm text-white font-semibold">
                ${t.initials}
              </div>
              <div>
                <p class="font-semibold text-sm">${t.name}</p>
                <p class="text-xs text-gray-600">${t.role}</p>
              </div>
            </div>
          </div>
        </div>
      `
      )
      .join("");

    // Nonaktifkan dots & autoplay di mobile
    document.getElementById("dots").innerHTML = "";
    clearInterval(autoplayInterval);
    return;
  }

  // DESKTOP MODE → CAROUSEL
  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  carousel.innerHTML = `
    ${createTestimonialCard(testimonials[prevIndex], false)}
    ${createTestimonialCard(testimonials[currentIndex], true)}
    ${createTestimonialCard(testimonials[nextIndex], false)}
  `;

  renderDots();
}

function renderDots() {
  const dotsContainer = document.getElementById("dots");
  dotsContainer.innerHTML = testimonials
    .map(
      (_, index) => `
                <button 
                    class="w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-indigo-600 w-8"
                        : "bg-indigo-300"
                    }"
                    onclick="goToSlide(${index})"
                ></button>
            `
    )
    .join("");
}

function nextSlide() {
  if (window.innerWidth < 768) return;
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderCarousel();
}

function prevSlide() {
  if (window.innerWidth < 768) return;
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  renderCarousel();
}

// Event Listeners
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Auto play (optional)
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause autoplay on hover
document
  .getElementById("carousel-container")
  .addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval);
  });

document
  .getElementById("carousel-container")
  .addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });

// Re-render carousel on window resize
window.addEventListener("resize", () => {
  renderCarousel();
});

// Initial render
renderCarousel();
