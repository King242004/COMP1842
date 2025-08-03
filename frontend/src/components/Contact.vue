<template>
  <div class="contact-page">
    <h2>📞 {{ t('page.contactUs') }}</h2>
    <p>📍 {{ t('contact.address') }}</p>
    <p>📧 {{ t('contact.email') }}</p>
    <p>📱 {{ t('contact.phone') }}</p>
    <p>⏰ {{ t('contact.hours') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-left: 5px solid #4a90e2;
}
.contact-page p {
  margin: 8px 0;
  font-size: 16px;
}
</style>
