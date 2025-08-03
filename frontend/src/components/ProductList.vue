<template>
  <div class="product-list">
    <h2>🛒 {{ t('page.productList') }}</h2>

    <div v-if="products.length" class="product-grid">
      <div v-for="product in products" :key="product._id" class="product-card">
        <h4>{{ t('name') }}: {{ product.name }}</h4>
        <p><strong>{{ t('price') }}:</strong> {{ product.price }}$</p>
        <p><small><strong>{{ t('description') }}:</strong> {{ product.description }}</small></p>
        <div class="buttons">
          <button @click="editProduct(product)" class="btn btn-edit">
            {{ t('edit') }}
          </button>
          <button @click="deleteProduct(product._id)" class="btn btn-delete">
            {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>

    <p v-else>{{ t('page.noProducts') }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

const { t } = useI18n();
const router = useRouter();
const products = ref([]);

const fetchProducts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/products');
    products.value = res.data;
  } catch (err) {
    console.error('❌ Failed to fetch products:', err);
  }
};

const deleteProduct = async (id) => {
  const confirmed = confirm(t('confirmDelete') || 'Are you sure you want to delete this product?');
  if (!confirmed) return;

  try {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
    alert(t('success.delete'));
    fetchProducts();
    router.replace({ query: {} });
  } catch (err) {
    alert(t('error.delete'));
    console.error('❌ Delete error:', err);
  }
};

const editProduct = (product) => {
  router.push(`/edit/${product._id}`);
};

onMounted(() => {
  fetchProducts();
  const successType = router.currentRoute.value.query.success;
  if (successType === 'add') {
    alert(t('success.add'));
    router.replace({ query: {} });
  } else if (successType === 'update') {
    alert(t('success.update'));
    router.replace({ query: {} });
  }
});
</script>

<style scoped>
.product-list {
  max-width: 800px;
  margin: 20px auto;
}

.product-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-card {
  background-color: #f4f4f4;
  padding: 20px;
  border-left: 5px solid #4a90e2;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.product-card h4 {
  margin: 0 0 8px;
  font-weight: bold;
}

.product-card p {
  margin: 4px 0;
}

.buttons {
  margin-top: 10px;
}

.btn {
  padding: 8px 14px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.btn-edit {
  background-color: #4CAF50;
  color: white;
}

.btn-delete {
  background-color: #F44336;
  color: white;
}
</style>
