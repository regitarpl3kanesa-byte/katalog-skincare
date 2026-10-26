const products = [
    {
        title: 'Bundling Skincare Camille',
        price: 'Rp 414.000',
        description: 'Rangkaian skincare untuk membantu mencerahkan dengan bahan-bahan yang berkualitas dan kandungan aktif alami.',
        image: 'img/camille.jpg'
    },
    {
        title: 'Davina Bundling Burgundy',
        price: 'Rp 322.922',
        description: 'Membantu kulit tampak lebih cerah, lembap, dan glowing dengan formulasi yang nyaman dipakai setiap hari.',
        image: 'img/daviena.jpg'
    },
    {
        title: 'Oh My Skin DYN Paket Perfect Glow Lengkap',
        price: 'Rp 283.360',
        description: 'Rangkaian skincare dengan kandungan terbaik untuk membantu kulit tampak lebih cerah, sehat, dan glowing.',
        image: 'img/dyn.jpg'
    },
    {
        title: 'Bundling Skincare Facetology',
        price: 'Rp 368.000',
        description: 'Diperkuat dengan bahan-bahan alami yang membantu mencerahkan dan melembapkan kulit.',
        image: 'img/facetology.jpg'
    },
    {
        title: 'Finally Found You Skincare Set',
        price: 'Rp 468.000',
        description: 'Set skincare yang cocok untuk aktivitas harian dan membantu mencegah kulit kusam akibat sinar UV.',
        image: 'img/finally%20found%20you.jpg'
    },
    {
        title: 'Glad2glow Brightening Skincare Set',
        price: 'Rp 250.000',
        description: 'Rangkaian skincare yang membantu mencerahkan kulit dan memberi sensasi wajah lebih bersih dan segar.',
        image: 'img/glad2glow.jpg'
    },
    {
        title: 'Glowglowing Skincare Set',
        price: 'Rp 365.000',
        description: 'Rangkaian skincare yang membantu mencerahkan kulit dan memberi sensasi wajah lebih lembap, bersih, dan cerah.',
        image: 'img/gloglowing.jpg'
    },
    {
        title: 'Scarlatte Skincare Set',
        price: 'Rp 350.000',
        description: 'Membantu menjaga kelembapan kulit dan mendukung proses perbaikan kulit setiap hari agar tampak lebih sehat dan bercahaya.',
        image: 'img/scarlatte.jpg'
    },
    {
        title: 'Skintific Skincare Set',
        price: 'Rp 536.000',
        description: 'Set skincare yang membantu menjaga kelembapan kulit dan memberi sensasi wajah lebih cerah, sehat, dan bercahaya.',
        image: 'img/skintific.jpg'
    }
];

const modal = document.getElementById('productModal');
const imagePreviewModal = document.getElementById('imagePreviewModal');
const instagramModal = document.getElementById('instagramModal');
const detailImg = document.getElementById('detailImg');
const detailTitle = document.getElementById('detailTitle');
const detailPrice = document.getElementById('detailPrice');
const detailDesc = document.getElementById('detailDesc');
const previewImage = document.getElementById('previewImage');
const previewCaption = document.getElementById('previewCaption');

function openDetail(index) {
    const product = products[index];
    if (!product) return;

    detailImg.src = product.image;
    detailImg.alt = product.title;
    detailTitle.textContent = product.title;
    detailPrice.textContent = product.price;
    detailDesc.textContent = product.description;
    modal.classList.add('active');
}

function closeDetail() {
    modal.classList.remove('active');
}

function openImagePreview(src, title) {
    previewImage.src = src;
    previewImage.alt = title;
    previewCaption.textContent = title;
    imagePreviewModal.classList.add('active');
}

function closeImagePreview() {
    imagePreviewModal.classList.remove('active');
}

function showInstagramLink() {
    instagramModal.classList.add('active');
}

function closeInstagramModal() {
    instagramModal.classList.remove('active');
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeDetail();
    }

    if (event.target === imagePreviewModal) {
        closeImagePreview();
    }

    if (event.target === instagramModal) {
        closeInstagramModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDetail();
        closeImagePreview();
        closeInstagramModal();
    }
});

const brandLogo = document.querySelector('.brand-logo');
if (brandLogo) {
    brandLogo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openImagePreview('img/logo.jpg', 'Rera Beauty logo');
        }
    });
}

const instagramBtn = document.querySelector('.social-btn');
if (instagramBtn) {
    instagramBtn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showInstagramLink();
        }
    });
}
