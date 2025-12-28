const lenis = new Lenis({
    autoRaf: true,
});


AOS.init({
    once: true,
    duration: 1000
});


// components

// LOADER
const loader = document.getElementById("loader");

loader.innerHTML = `
  <div id="siteLoader" class="fixed inset-0 z-[9999] bg-white">
    <div class="relative h-full w-full overflow-hidden">
      <!-- Background glow -->
      <div class="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-amber-500/15 blur-3xl"></div>
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl"></div>

      <!-- Content -->
      <div class="relative flex h-full items-center justify-center px-6">
        <div class="w-full max-w-sm rounded-[2rem] border border-gray-200 bg-white/80 p-8 shadow-2xl backdrop-blur">
          <div class="flex flex-col items-center gap-5">
            <!-- Logo + ring -->
            <div class="relative flex h-24 w-24 items-center justify-center">
              <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-500 opacity-20 blur-xl"></div>

              <div class="relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <img src="/docs/assets/images/logo.png" class="h-9 w-9 object-contain" alt="Nuage Comparateur" />
              </div>

              <div
                class="absolute inset-0 rounded-[2rem] border-2 border-transparent border-l-fuchsia-600 border-t-rose-600 border-r-amber-500 border-b-amber-500 animate-spin"
              ></div>
            </div>

            <!-- Text -->
            <div class="text-center">
              <p class="text-lg font-extrabold text-gray-900">Nuage Comparateur</p>
              <p class="mt-1 text-sm text-gray-600">Préparation des meilleures offres…</p>
            </div>

            <!-- Progress -->
            <div class="w-full">
              <div class="h-2 w-full overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                <div class="h-full w-1/3 rounded-full bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-500 animate-nuageLoaderBar"></div>
              </div>

              <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                  Chargement
                </span>
                <span class="font-semibold">Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom hint -->
      <div class="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs text-gray-400">
        Comparaison informative — résultats selon critères
      </div>
    </div>
  </div>
`;

// Ensure keyframes exist (inject once)
(function ensureLoaderKeyframes() {
    if (document.getElementById("nuage-loader-keyframes")) return;

    const style = document.createElement("style");
    style.id = "nuage-loader-keyframes";
    style.textContent = `
    @keyframes nuageLoaderBar {
      0%   { transform: translateX(-120%); }
      50%  { transform: translateX(25%); }
      100% { transform: translateX(220%); }
    }
    .animate-nuageLoaderBar {
      animation: nuageLoaderBar 1.15s ease-in-out infinite;
      will-change: transform;
    }
  `;
    document.head.appendChild(style);
})();

const MIN_LOADER_TIME = 500;
const startTime = Date.now();

function hideLoader() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

    setTimeout(() => {
        loader.style.transition = "opacity 450ms ease";
        loader.classList.add("opacity-0", "pointer-events-none");
        setTimeout(() => loader.remove(), 500);
    }, remaining);
}

window.addEventListener("load", hideLoader);
