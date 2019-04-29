$("form#contact").submit(function(e){
    name = $('input[name="name"]').val();
    if(name=='') {
        $('#modalEmptyName').modal('show');
        e.preventDefault();
        return false;
    }

    emailAddr = $('input[name="email"]').val();
    if(emailAddr=='') {
        $('#modalEmptyEmail').modal('show');
        e.preventDefault();
        return false;
    }

    msg = $('textarea[name="message"]').val();
    if(msg=='') {
        $('#modalEmptyMsg').modal('show');
        e.preventDefault();
    }
});