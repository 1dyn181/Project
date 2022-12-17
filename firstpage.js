var result = location.search.substring(1);
    if (result !== '') {
        const out = document.querySelector('.glavtext2');
        out.textContent = result;
}