<template>
  <div>
    <!-- 🔵 Thanh điều hướng -->
    <nav class="navbar">
      <div class="nav-content">
        <!-- 📱 Tên shop bên trái -->
        <div class="nav-left">
          📱 <strong>King Phone</strong>
        </div>

        <!-- ✅ Mục điều hướng giữa -->
        <div class="nav-center">
          <router-link to="/" class="nav-link">🏠 {{ $t('page.productList') }}</router-link>
          <router-link to="/add" class="nav-link">🆕 {{ $t('page.addProduct') }}</router-link>
          <router-link to="/news" class="nav-link">📰 {{ $t('page.new') }}</router-link>
          <router-link to="/contact" class="nav-link">📞 {{ $t('page.contactUs') }}</router-link>
        </div>

        <!-- ✅ Tên bên phải -->
        <div class="nav-right">
          👤 Le Mac Hoang King
        </div>
      </div>
    </nav>

    <!-- 🔤 Cờ chọn ngôn ngữ -->
    <div class="language-bar">
      <button
        @click="$i18n.locale = 'en'"
        :class="{ active: $i18n.locale === 'en' }"
        title="English"
      >
        <img src="/flags/gb.png" alt="EN" />
      </button>
      <button
        @click="$i18n.locale = 'vi'"
        :class="{ active: $i18n.locale === 'vi' }"
        title="Tiếng Việt"
      >
        <img src="/flags/vn.png" alt="VI" />
      </button>
      <button
        @click="$i18n.locale = 'fr'"
        :class="{ active: $i18n.locale === 'fr' }"
        title="Français"
      >
        <img src="/flags/fr.png" alt="FR" />
      </button>
    </div>
  </div>
</template>

<script setup>
// Không cần logic ở đây
</script>

<style scoped>
/* 🧭 NAVBAR */
.navbar {
  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, #1d1b6b, #4a90e2);
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(74, 144, 226, 0.4);
  top: 0;
  z-index: 1000;
}

/* 🔗 Nội dung nav */
.nav-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* 👈 Tên shop trái */
.nav-left {
  position: absolute;
  left: 30px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

/* 🌐 Liên kết giữa */
.nav-center {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #e0e0e0;
}

/* 👤 Góc phải sát mép */
.nav-right {
  position: absolute;
  right: 30px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
}

/* 🌍 Cờ ngôn ngữ */
.language-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
}

.language-bar button {
  border: 2px solid #4a90e2;
  background: white;
  border-radius: 6px;
  width: 48px;
  height: 32px;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.language-bar button.active {
  box-shadow: 0 0 5px #357abd;
  border-color: #357abd;
}

.language-bar button:hover {
  transform: scale(1.1);
}

.language-bar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
</style>
