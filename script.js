document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.innerText = 'Tampilkan lebih sedikit';
    } else {
        moreInfo.style.display = 'none';
        this.innerText = 'Tampilkan lebih banyak';
    }
});
