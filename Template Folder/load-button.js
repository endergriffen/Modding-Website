fetch('/Template Folder/template-layout.html')
    .then(res => res.text())
    .then(html => {
        const placeholder = document.getElementById('circle-button-placeholder');
        if (placeholder) {
            placeholder.innerHTML = html;

            // Customize the button
            const btn = placeholder.querySelector('.circle-button');
            if (btn) {
                btn.textContent = placeholder.getAttribute('data-text') || 'Click';
                btn.href = placeholder.getAttribute('data-link') || '#';
            }
        }
    });