document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resources

function openResourceModal(title, content) {
    document.getElementById('resourceModalTitle').innerText = title;
    document.getElementById('resourceModalContent').innerText = content;
    document.getElementById('resourceModal').style.display = 'block';
}

function closeResourceModal() {
    document.getElementById('resourceModal').style.display = 'none';
}
