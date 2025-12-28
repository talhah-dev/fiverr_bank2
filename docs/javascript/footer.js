const footer = document.getElementById("footer");

footer.innerHTML = `
    <footer class="relative bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-6 pt-20 pb-8">

            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">

                <div>
                    <a href="/index.html" class="text-xl font-semibold text-slate-900">
                        <img src="/docs/assets/images/logo.png" class="h-16 md:h-14" alt="">
                    </a>
                    <p class="text-sm mt-5 text-slate-600 max-w-sm">
                        Plateforme indépendante de comparaison bancaire, d’assurances et de services financiers.
                    </p>
                </div>

                <div>
                    <h4 class="font-semibold text-slate-900 mb-4">
                        Comparer
                    </h4>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li><a href="#/index.html" class="hover:text-slate-900">Banques</a></li>
                        <li><a href="/bank-pros.html" class="hover:text-slate-900">Banques Pro</a></li>
                        <li><a href="/assurances.html" class="hover:text-slate-900">Assurances</a></li>
                        <li><a href="/notre-histoire.html" class="hover:text-slate-900">Notre Histoire</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-slate-900 mb-4">
                        Ressources
                    </h4>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li><a href="/faq.html" class="hover:text-slate-900">FAQ</a></li>
                        <li><a href="/contact.html" class="hover:text-slate-900">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-slate-900 mb-4">
                        Légal
                    </h4>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li><a href="/mentions-legales.html" class="hover:text-slate-900">Mentions légales</a></li>
                        <li><a href="/privacy-policy.html" class="hover:text-slate-900">Politique de confidentialité</a></li>
                    </ul>
                </div>

            </div>

            <div
                class="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                <p class="text-sm text-slate-500">
                    © 2025 Opti’ Scan. Tous droits réservés.
                </p>

                <div class="flex items-center gap-6 text-slate-500">
                    <a href="#" class="hover:text-slate-900 text-xl transition-all">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" class="hover:text-slate-900 text-xl transition-all">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="hover:text-slate-900 text-xl transition-all">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </div>
    </footer>
`