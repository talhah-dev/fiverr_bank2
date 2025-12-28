const footer = document.getElementById("footer");

footer.innerHTML = `
    <footer class="bg-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <!-- Brand -->
                <div>
                    <div class="flex items-center gap-3">
                        <a href="/index.html">
                            <img src="/docs/assets/images/logo.png" class="h-20" alt="">
                        </a>
                    </div>

                    <p class="mt-4 text-sm leading-relaxed text-gray-300">
                        Comparez simplement les meilleures offres bancaires et assurances. Des informations claires pour
                        vous aider à
                        choisir plus vite, en toute confiance.
                    </p>

                    <div class="mt-5 flex items-center gap-3">
                        <a href="#" aria-label="Facebook"
                            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="X"
                            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn"
                            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#" aria-label="Instagram"
                            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <!-- Navigation -->
                <div>
                    <p class="text-sm font-bold capitalize text-white">Navigation</p>
                    <ul class="mt-4 space-y-4 text-sm">
                        <li>
                            <a href="/bank-pros.html" class="text-gray-300 transition hover:text-white">Catégories</a>
                        </li>
                        <li>
                            <a href="/notre-histoire.html" class="text-gray-300 transition hover:text-white">Notre Histoire</a>
                        </li>
                        <li>
                            <a href="/contact.html" class="text-gray-300 transition hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>

                <!-- Categories -->
                <div>
                    <p class="text-sm font-bold capitalize text-white">Catégories</p>
                    <ul class="mt-4 space-y-5 text-sm">
                        <li>
                            <a href="/index.html" class="text-gray-300 transition hover:text-white">
                                <i class="fa-solid fa-building-columns mr-2 text-white/80"></i>Banques
                            </a>
                        </li>
                        <li>
                            <a href="/index.html" class="text-gray-300 transition hover:text-white">
                                <i class="fa-solid fa-briefcase mr-2 text-white/80"></i>Banques Pro
                            </a>
                        </li>
                        <li>
                            <a href="/assurances.html" class="text-gray-300 transition hover:text-white">
                                <i class="fa-solid fa-shield-halved mr-2 text-white/80"></i>Assurances
                            </a>
                        </li>
                        <li>
                            <a href="/notre-histoire.html" class="text-gray-300 transition hover:text-white">
                                <i class="fa-solid fa-book-open mr-2 text-white/80"></i>Guides
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact / Legal -->
                <div id="contact">
                    <p class="text-sm font-bold capitalize text-white">Contact</p>

                    <div class="mt-4 space-y-4 text-sm text-gray-300">
                        <p class="flex items-start gap-3">
                            <span
                                class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <span>
                                support@nuagecomparateur.fr
                                <span class="block text-xs text-gray-400">Réponse sous 24–48h</span>
                            </span>
                        </p>

                        <p class="flex items-start gap-3">
                            <span
                                class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <span>
                                France
                                <span class="block text-xs text-gray-400">Service en ligne</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bottom bar -->
            <div class="border-t border-white/10 py-6">
                <div
                    class="flex gap-3 text-center items-center justify-center">
                    <p class="text-xs text-gray-400">
                        © <span id="year"></span> Nuage Comparateur. Tous droits réservés.
                    </p>
                </div>
            </div>
        </div>
    </footer>

`

 document.getElementById("year").textContent = new Date().getFullYear();