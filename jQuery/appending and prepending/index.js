$(() => {
    $('prepend').click(() => {
        let text = $('#item').val()
        $('#list').prepend($(`<li>`).text(text))

    })
})