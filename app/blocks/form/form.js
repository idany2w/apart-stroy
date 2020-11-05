const form_submit = async (formData) => {
    const fetchResp = await fetch('mail.php', {
        method: 'POST',
        body: formData
    });
};

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        form_submit(formData)
            .then((response) => {
                console.log(response);
                form.reset();
            })
    });
});

