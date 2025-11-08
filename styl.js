document.addEventListener('DOMContentLoaded', () => {
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(h3Element => {
        h3Element.addEventListener('click', () => {
            let content = h3Element.nextElementSibling;

            if (content && content.classList.contains('content')) {
                let confirmHide = confirm("Apakah Anda yakin ingin menyembunyikan konten ini?");

                if (confirmHide) {
                    content.classList.add('hidden');
                } else {
                    content.classList.remove('hidden');
                }
            }
        });
    });


    const modeSwitchButton = document.getElementById('modeSwitch');
    const body = document.body;

    modeSwitchButton.addEventListener('click', () => {
        body.classList.toggle('messy-mode');

        if (body.classList.contains('messy-mode')) {
            modeSwitchButton.textContent = "Ganti ke Mode Rapi";
        } else {
            modeSwitchButton.textContent = "Ganti ke Mode Berantakan";
        }
    });
});