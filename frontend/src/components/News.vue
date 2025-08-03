<template>
  <div class="news-page">
    <h2>📰 {{ t('page.news') }}</h2>
    <ul>
      <li>
        <h4>iPhone 16 Pro Expected This September</h4>
        <p>Apple may launch iPhone 16 Pro with improved battery life and AI camera features.</p>
      </li>
      <li>
        <h4>Samsung Galaxy Z Fold 6 Now Available</h4>
        <p>The latest foldable phone is slimmer and more powerful than ever before.</p>
      </li>
      <li>
        <h4>New Discounts on Xiaomi Phones!</h4>
        <p>Up to 30% off selected models this week only at Le Mac Phone Store.</p>
      </li>
      <li>
        <h4>Google Pixel 9 Leaked Ahead of Launch</h4>
        <p>The Pixel 9 is rumored to feature a new Tensor G4 chip and a refreshed design.</p>
      </li>
      <li>
        <h4>OnePlus 13 May Feature 6000mAh Battery</h4>
        <p>Leaks suggest the new OnePlus flagship could bring record-breaking battery life.</p>
      </li>
      <li>
        <h4>Nothing Phone (3) Gets Transparent Charging Case</h4>
        <p>The stylish brand introduces a new magnetic case that displays charging animations.</p>
      </li>
      <li>
        <h4>Honor Magic V3: Slimmest Foldable Phone Yet</h4>
        <p>Honor claims a new record for thinnest foldable, with top-tier specs to match.</p>
      </li>
      <li>
        <h4>ASUS ROG Phone 8 Breaks Performance Records</h4>
        <p>This gaming powerhouse comes with Snapdragon 8 Gen 3 and a 165Hz AMOLED display.</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.news-page {
  max-width: 800px;
  margin: 20px auto;
}
.news-page h2 {
  margin-bottom: 20px;
}
.news-page ul {
  list-style: none;
  padding: 0;
}
.news-page li {
  background: #f4f4f4;
  padding: 15px;
  margin-bottom: 15px;
  border-left: 5px solid #4a90e2;
}
</style>
