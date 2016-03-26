/**
 * Created by Alex Torres on 3/26/2016.
 */

function ShowModalLogin()
{
    $('#modalLogin').modal({
        show: 'show'
    });

}

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
