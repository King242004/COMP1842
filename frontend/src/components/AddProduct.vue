<template>
  <div class="container">
    <h2 class="page-title">
      <span v-if="isEdit">🛠️ {{ title }}</span>
      <span v-else>🛍️ {{ title }}</span>
    </h2>

    <ProductForm
      :edit="product"
      :modelValue="product"
      @submit="handleSubmit"
      @cancel="handleCancel"
      @error="handleError"
      @update:modelValue="updateTempData"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import ProductForm from './ProductForm.vue';

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();

const product = ref({ name: '', description: '', price: 0 });
const isEdit = ref(false);

// 📌 Khôi phục dữ liệu nếu có trong localStorage
onMounted(() => {
  const saved = localStorage.getItem('temp-product');
  if (!route.params.id && saved) {
    product.value = JSON.parse(saved);
  }
  loadProduct();
});

const updateTempData = (newData) => {
  product.value = { ...newData };
  if (!isEdit.value) {
    localStorage.setItem('temp-product', JSON.stringify(product.value));
  }
};

const title = computed(() =>
  isEdit.value ? t('page.editProduct') : t('page.addProduct')
);

const loadProduct = async () => {
  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    try {
      const res = await axios.get(`http://localhost:3000/api/products/${id}`);
      product.value = res.data;
    } catch (err) {
      console.error('❌ ' + t('error.submit'), err);
    }
  } else {
    isEdit.value = false;
  }
};

const handleSubmit = async (data) => {
  const submitData = {
    name: data.name.trim(),
    description: data.description.trim(),
    price: Number(data.price)
  };

  try {
    const response = isEdit.value
      ? await axios.put(`http://localhost:3000/api/products/${product.value._id || route.params.id}`, submitData)
      : await axios.post('http://localhost:3000/api/products', submitData);

    localStorage.removeItem('temp-product'); // ✅ Xoá cache
    router.push({ path: '/', query: { success: isEdit.value ? 'update' : 'add' } });
  } catch (err) {
    alert(t('error.submit'));
    console.error(err);
  }
};


const handleError = (msg) => alert(msg);
const handleCancel = () => router.push('/');

// 🔁 Reload nếu URL thay đổi
watch(() => route.fullPath, loadProduct);
</script>


<style scoped>
.page-title {
  text-align: center;
  font-size: 26px;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
}
</style>
