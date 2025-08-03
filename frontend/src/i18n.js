import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    name: 'Name',
    description: 'Description',
    price: 'Price',
    submit: 'Submit',
    edit: 'Edit',
    delete: 'Delete',
    update: 'Update',
    add: 'Add',
    cancel: 'Cancel',
    product: 'Product',
    confirmDelete: 'Are you sure you want to delete this product?',

    page: {
      productList: 'Product List',
      addProduct: 'Add Product',
      editProduct: 'Edit Product',
      news: 'Latest Tech News',
      new: 'News',
      contactUs: 'Contact Us',    
      noProducts: 'No products available.'
    },
    contact: {
      address: 'Hoa Xuan Ward, Da Nang City',
      email: 'Email: hoangkingcompany@fpt.edu.vn',
      phone: 'Phone: 0707339779',
      hours: 'Working Hours: 9:00 AM - 9:00 PM (Mon–Sun)'
    },
    success: {
      add: '✔️ Product added successfully!',
      update: '✔️ Product updated successfully!',
      saved: '✔️ Product saved successfully!',
      delete: '🗑️ Product deleted successfully!'
    },
    error: {
      submit: '❌ Failed to save product. Please try again.',
      delete: '❌ Failed to delete product. Please try again.',
      general: '❌ Product creation failed, please try again!'
    },
    errors: {
      allFieldsRequired: '❌ All fields are required!',
      nameRequired: '❌ Product name is required!',
      descriptionRequired: '❌ Product description is required!',
      priceRequired: '❌ Product price is required!',
      priceInvalid: '❌ Price must be a valid number!',
      priceNegative: '❌ Price must be greater than or equal to 0!'
    }
  },

  vi: {
    name: 'Tên sản phẩm',
    description: 'Mô tả',
    price: 'Giá',
    submit: 'Gửi',
    edit: 'Sửa',
    delete: 'Xoá',
    update: 'Cập nhật',
    add: 'Thêm',
    cancel: 'Hủy',
    product: 'Sản phẩm',
    confirmDelete: 'Bạn có chắc muốn xóa sản phẩm này không?',

    page: {
      productList: 'Danh sách sản phẩm',
      addProduct: 'Thêm sản phẩm',
      editProduct: 'Sửa sản phẩm',
      news: 'Tin công nghệ mới nhất',
      new: 'Tin tức',
      contactUs: 'Liên hệ',      
      noProducts: 'Không có sản phẩm nào.'
    },
    contact: {
      address: 'Phường Hòa Xuân, TP. Đà Nẵng',
      email: 'Email: hoangkingcompany@fpt.edu.vn',
      phone: 'Điện thoại: 0707339779',
      hours: 'Giờ làm việc: 9:00 - 21:00 (Thứ 2 đến Chủ nhật)'
    },
    success: {
      add: '✔️ Thêm sản phẩm thành công!',
      update: '✔️ Cập nhật sản phẩm thành công!',
      saved: '✔️ Lưu sản phẩm thành công!',
      delete: '🗑️ Xóa sản phẩm thành công!'
    },
    error: {
      submit: '❌ Lưu sản phẩm thất bại. Vui lòng thử lại!',
      delete: '❌ Xóa sản phẩm thất bại. Hãy thử lại!',
      general: '❌ Nhập sản phẩm thất bại hãy thử lại!'
    },
    errors: {
      allFieldsRequired: '❌ Không được để trống thông tin!',
      nameRequired: '❌ Không được để trống ô tên!',
      descriptionRequired: '❌ Không được để trống ô mô tả!',
      priceRequired: '❌ Không được để trống ô giá!',
      priceInvalid: '❌ Giá sản phẩm phải là một số!',
      priceNegative: '❌ Giá sản phẩm không được âm!'
    }
  },

  fr: {
    name: 'Nom',
    description: 'Description',
    price: 'Prix',
    submit: 'Soumettre',
    edit: 'Modifier',
    delete: 'Supprimer',
    update: 'Mettre à jour',
    add: 'Ajouter',
    cancel: 'Annuler',
    product: 'Produit',
    confirmDelete: 'Êtes-vous sûr de vouloir supprimer ce produit ?',

    page: {
      productList: 'Liste des produits',
      addProduct: 'Ajouter un produit',
      editProduct: 'Modifier un produit',
      news: 'Dernières actualités technologiques',
      new: 'Actualités',
      contactUs: 'Nous contacter',
      noProducts: 'Aucun produit disponible.'
    },
    contact: {
      address: 'Quartier Hoa Xuan, Ville de Da Nang',
      email: 'Email : hoangkingcompany@fpt.edu.vn',
      phone: 'Téléphone : 0707339779',
      hours: 'Horaires d\'ouverture : 9h00 - 21h00 (Lun–Dim)'
    },
    success: {
      add: '✔️ Produit ajouté avec succès!',
      update: '✔️ Produit mis à jour avec succès!',
      saved: '✔️ Produit enregistré avec succès!',
      delete: '🗑️ Produit supprimé avec succès!'
    },
    error: {
      submit: '❌ Échec de l’enregistrement du produit. Veuillez réessayer.',
      delete: '❌ Échec de la suppression du produit. Veuillez réessayer.',
      general: '❌ Échec de la saisie du produit, veuillez réessayer!'
    },
    errors: {
      allFieldsRequired: '❌ Tous les champs sont obligatoires!',
      nameRequired: '❌ Le nom du produit est requis!',
      descriptionRequired: '❌ La description du produit est requise!',
      priceRequired: '❌ Le prix du produit est requis!',
      priceInvalid: '❌ Le prix doit être un nombre valide!',
      priceNegative: '❌ Le prix ne doit pas être négatif!'
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;
