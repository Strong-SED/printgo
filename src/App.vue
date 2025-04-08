<template>
  <div class="bg-slate-100">
    <header class="w-full h-20 shadow-lg bg-slate-100 flex justify-around items-center mb-4 sticky top-0 z-50" >
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="/images/logo_print.png" alt="logo" class="w-30 h-30">
          <h2 class="text-2xl text-slate-700 font-bold">
            Print<span class="font-extrabold">Go</span>
          </h2>
        </router-link>
      </div>
      <nav>
        <ul class="flex space-x-4 text-md font-semibold items-center">
          <li>
            <Link 
              contenu="Connexion" 
              svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 w-5 h-5"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"/></svg>' 
              goto="/login" 
              class="white" 
            />
          </li>
          <li>
            <Link 
              contenu="Inscription" 
              svg='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>' 
              goto="/signup" 
              class="black" 
            />
          </li>
        </ul>
      </nav>
    </header>

    <!-- Vue dynamique -->
    <router-view />

     <!-- Footer -->

     <footer class="bg-gray-900 text-white py-10">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">

        <!-- Logo + Description -->
        <div class="flex flex-col items-center md:items-start">
          <img src="/images/white_on_trans.png" alt="PrintGo Logo" class="h-50 w-50 mb-3">
          <p class="text-gray-400 text-sm">
            Simplifiez vos impressions et photocopies avec **PrintGo**. Connectez-vous aux boutiques locales en un clic
            ! 🚀
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold text-indigo-400">Nos Services</h3>
          <ul class="mt-3 space-y-2 text-gray-300">
            <li>📄 Impression rapide</li>
            <li>📷 Photocopies</li>
            <li>🖨️ Impression couleur & noir/blanc</li>
            <li>📚 Reliure & plastification</li>
            <li>🚀 Retrait express</li>
          </ul>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-lg font-semibold text-indigo-400">Liens utiles</h3>
          <ul class="mt-3 space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-indigo-300">À propos</a></li>
            <li><a href="#" class="hover:text-indigo-300">Contact</a></li>
            <li><a href="#" class="hover:text-indigo-300">Conditions d'utilisation</a></li>
            <li><a href="#" class="hover:text-indigo-300">Confidentialité</a></li>
          </ul>
        </div>

        <!-- Réseaux sociaux -->
        <div>
          <h3 class="text-lg font-semibold text-indigo-400">Suivez-nous</h3>
          <div class="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" class="text-gray-400 hover:text-indigo-300"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-indigo-300"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-indigo-300"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-400 hover:text-indigo-300"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      <!-- Copyright -->
      <div class="mt-10 text-center text-gray-500 text-sm">
        &copy; 2025 PrintGo. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>

<script setup>
import Link from './components/Link.vue';
</script>

<style scoped>
/* Aucune règle spécifique pour App.vue */
</style>
