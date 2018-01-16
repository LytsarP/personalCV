$('form input[type="submit"]').click(sendForm);

function sendForm(send) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    send.preventDefault();
    $.ajax({
        url: "https://formspree.io/lytsarp@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            phone: $('#phone').val(),
            message: $('#message').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
    })
}