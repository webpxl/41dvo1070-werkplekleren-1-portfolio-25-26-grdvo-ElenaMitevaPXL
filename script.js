
<script>
    document.querySelectorAll('.hover-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('open');
        const text = card.querySelector('.card-hidden-text');
        if (card.classList.contains('open')) {
            text.style.maxHeight = text.scrollHeight + "px";
            text.style.opacity = "1";
        } else {
            text.style.maxHeight = "0px";
            text.style.opacity = "0";
        }
    });
});
</script>

