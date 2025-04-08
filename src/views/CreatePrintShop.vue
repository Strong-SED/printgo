<template>
    <div class="bg-gray-50 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">Créer une boutique d'impression</h2>
        <form @submit.prevent="submitForm">
          <!-- Nom de la boutique -->
          <div class="mb-4">
            <label for="shopName" class="block text-sm font-semibold text-gray-700">Nom de la boutique</label>
            <input
              type="text"
              id="shopName"
              v-model="shopName"
              class="w-full p-3 border rounded-lg mt-2"
              placeholder="Nom de la boutique"
              required
            />
          </div>
  
          <!-- Adresse de la boutique -->
          <div class="mb-4">
            <label for="address" class="block text-sm font-semibold text-gray-700">Adresse</label>
            <input
              type="text"
              id="address"
              v-model="address"
              class="w-full p-3 border rounded-lg mt-2"
              placeholder="Adresse de la boutique"
              required
            />
          </div>
  
          <!-- Numéro de téléphone -->
          <div class="mb-4">
            <label for="phone" class="block text-sm font-semibold text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              id="phone"
              v-model="phone"
              class="w-full p-3 border rounded-lg mt-2"
              placeholder="Numéro de téléphone"
              required
            />
          </div>
  
          <!-- Services proposés -->
          <div class="mb-4">
            <label for="services" class="block text-sm font-semibold text-gray-700">Services proposés</label>
            <textarea
              id="services"
              v-model="services"
              class="w-full p-3 border rounded-lg mt-2"
              placeholder="Liste des services proposés"
              required
            ></textarea>
          </div>
  
          <!-- Bouton de soumission -->
          <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Créer la boutique
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Définir les valeurs des champs
  const shopName = ref('');
  const address = ref('');
  const phone = ref('');
  const services = ref('');
  
  // Soumission du formulaire
  const submitForm = () => {
    const printShopData = {
      shopName: shopName.value,
      address: address.value,
      phone: phone.value,
      services: services.value,
    };
  
    console.log('Boutique créée :', printShopData);
  
    // Ici, tu peux ajouter la logique pour envoyer les données vers un backend ou un service de base de données
  };
  </script>
  
  <style scoped>
  /* Ajouter des styles si nécessaires pour cette page */
  </style>
  