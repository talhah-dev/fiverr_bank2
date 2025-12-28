const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" data-aos="fade-down"
        class="fixed transition-all duration-500 top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center md:h-24 justify-between">

            <a href="/index.html" class="text-xl font-semibold text-slate-900">
                <img src="/docs/assets/images/logo.png" class="h-10 md:h-14" alt="">
            </a>

            <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
                <a href="/index.html" class="hover:text-slate-900">Banques</a>
                <a href="/bank-pros.html" class="hover:text-slate-900">Banques Pro</a>
                <a href="/assurances.html" class="hover:text-slate-900">Assurances</a>
                <a href="/notre-histoire.html" class="hover:text-slate-900">Notre Histoire</a>
                <a href="/contact.html" class="px-5 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 transition">
                    Contact
                </a>
            </nav>

            <button id="menuBtn" class="lg:hidden text-slate-800 text-xl">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>

    <div id="mobileMenu"
        class="fixed top-0 right-0 h-full w-0 bg-white overflow-hidden transition-all duration-300 ease-in-out z-50">

        <div class="flex items-center justify-between px-6 h-16 border-b border-slate-200">
            <a href="/index.html" class="text-xl font-semibold text-slate-900">
                <img src="/docs/assets/images/logo.png" class="h-10 md:h-14" alt="">
            </a>
            <button id="closeBtn" class="text-xl text-slate-800">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <nav class="flex flex-col gap-6 px-6 py-10 text-slate-700 font-medium">
            <a href="/index.html" class="hover:text-slate-900">Banques</a>
            <a href="/bank-pros.html" class="hover:text-slate-900">Banques Pro</a>
            <a href="/assurances.html" class="hover:text-slate-900">Assurances</a>
            <a href="/notre-histoire.html" class="hover:text-slate-900">Notre Histoire</a>
            <a href="/contact.html" class="mt-4 inline-flex justify-center px-6 py-3 rounded-xl bg-slate-900 text-white">
                Contact
            </a>
        </nav>
    </div>
`;
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.width = "0";
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");

  function updateHeaderBg() {
    if (window.scrollY > 100) {
      header.classList.remove("bg-transparent");
      header.classList.add("bg-white/80");
    } else {
      header.classList.remove("bg-white/80");
      header.classList.add("bg-transparent");
    }
  }

  updateHeaderBg();

  window.addEventListener("scroll", updateHeaderBg, { passive: true });
});
