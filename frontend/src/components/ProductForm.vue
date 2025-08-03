<template>
  <div class="form-outer">
    <form @submit.prevent="submitForm" class="product-form">
      <div class="form-group">
        <label for="name">{{ $t('name') }}</label>
        <input id="name" v-model.trim="form.name" />
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="desc">{{ $t('description') }}</label>
        <input id="desc" v-model.trim="form.description" />
        <span class="error" v-if="errors.description">{{ errors.description }}</span>
      </div>

      <div class="form-group">
        <label for="price">{{ $t('price') }}</label>
        <input
          id="price"
          type="number"
          v-model.number="form.price"
          step="0.01"
        />
        <span class="error" v-if="errors.price">{{ errors.price }}</span>
      </div>

      <div class="button-group">
        <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
          {{ isEdit ? $t('update') : $t('submit') }}
        </button>
        <button
          v-if="isEdit"
          type="button"
          class="btn btn-cancel"
          @click="$emit('cancel')"
        >
          {{ $t('cancel') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      default: () => ({ name: '', description: '', price: 0 })
    },
    modelValue: Object
  },
  data() {
    return {
      form: { ...this.edit },
      isSubmitting: false,
      errors: {}
    };
  },
  computed: {
    isEdit() {
      return !!this.form._id;
    }
  },
  watch: {
    edit(newVal) {
      this.form = { ...newVal };
      this.errors = {};
    },
    form: {
      handler(newVal) {
        this.$emit('update:modelValue', newVal);
      },
      deep: true
    }
  },
  methods: {
    validateForm() {
      const errors = {};
      const { name, description, price } = this.form;

      if (!name?.trim()) {
        errors.name = this.$t('errors.nameRequired');
      }

      if (!description?.trim()) {
        errors.description = this.$t('errors.descriptionRequired');
      }

      if (price === null || price === '') {
        errors.price = this.$t('errors.priceInvalid');
      } else if (isNaN(price)) {
        errors.price = this.$t('errors.priceInvalid');
      } else if (price < 0) {
        errors.price = this.$t('errors.priceNegative');
      }

      this.errors = errors;

      if (Object.keys(errors).length > 0) {
        this.$emit('error', this.$t('error.submit'));
        return false;
      }

      return true;
    },

    submitForm() {
      if (this.isSubmitting) return;
      if (!this.validateForm()) return;

      this.isSubmitting = true;

      const payload = {
        name: this.form.name.trim(),
        description: this.form.description.trim(),
        price: this.form.price,
        _id: this.form._id
      };

      this.$emit('submit', payload);
      this.isSubmitting = false;
    }
  }
};
</script>

<style scoped>
.form-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 6vh;
}

.product-form {
  width: 100%;
  max-width: 380px;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(52, 152, 219, 0.1),
              0 1.5px 4px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: stretch;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
}

input {
  padding: 10px 12px;
  font-size: 16px;
  border: 1.5px solid #d0d7de;
  border-radius: 8px;
  transition: border-color 0.2s;
  outline: none;
}

input:focus {
  border-color: #3498db;
  background: #f0f8ff;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
  font-weight: 500;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  margin-top: 10px;
  padding: 12px;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  align-self: center;
  transition: background 0.2s;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.10);
}

.btn-submit {
  background: linear-gradient(90deg, #4A90E2 0%, #357ABD 100%);
  color: #fff;
}

.btn-submit:hover {
  background: linear-gradient(90deg, #357ABD 0%, #4A90E2 100%);
}

.btn-submit:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-cancel {
  background: #aaa;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.btn-cancel:hover {
  background: #888;
}
</style>
