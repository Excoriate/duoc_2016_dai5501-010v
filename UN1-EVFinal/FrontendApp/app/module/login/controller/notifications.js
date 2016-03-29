/**
 * Created by Alex Torres on 3/26/2016.
 */

function CheckCredentials()
{



}

$('#loginForm').submit(function(){

    var flagAreNotEmpty =  (($('#username').val() != "") &&
    $('#password').val() !="") && $('#email').val() !="";

    if(flagAreNotEmpty)
    {
        if(($('#username').val() == "admin")  &&
            ($('#password').val() == "admin123"))
        {
            //alert("Login correcto");
            $("#success_message").css("display", "");
            $("#error_message").css("display","none");

            window.location.href ="../main/views/index.html";

        }
        else {
            //alert("Credenciales incorrectas.  Intentelo nuevamente");
            $("#success_message").css("display", "none");
            $("#error_message").css("display","");
        }
    }

});

$('#submitBtn').click(function() {
    /* when the button in the form, display the entered values in the modal */
    $('#lname').text($('#lastname').val());
    $('#fname').text($('#firstname').val());
});

$('#submit').click(function(){
    /* when the submit button in the modal is clicked, submit the form */
    alert('submitting');
    $('#formfield').submit();
});




$(document).ready(function() {
    $('#loginForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Por favor ingrese un usuario con formato adecuado.'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'El campo e-mail es obligatorio'
                        },
                        emailAddress: {
                            message: 'El formato del e-mail es inválido'
                        }
                    }
                },
                password: {
                    validators: {
                        stringLength: {
                            min: 8,
                        },
                        notEmpty: {
                            message: 'El campo password es obligatorio'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow")

            var flagAreNotEmpty =  (($('#username').val() != "") &&
                $('#password').val() !="") && $('#email').val() !="";

            if(flagAreNotEmpty)
            {
                if(($('#username').val() == "admin")  &&
                    ($('#password').val() == "admin123"))
                {
                    //Re dirigimos.
                    window.location.href ="../../main/views/index.html";

                }
                else {
                    Alert("Credenciales incorrectas");
                }
            }


            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});



