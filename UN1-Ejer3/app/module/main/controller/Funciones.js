/**
 * Created by Alex Torres on 3/18/2016.
 */

//ATR: Permite ocultar el Div.
function HideDivHide() {
    var div = document.getElementById("divOculto");

    if(div !== undefined)
    {
        //$("#divOculto").show();
        $("#divOculto").css("display","none");

    }

}

//ATR: Permite ocultar el Div.
function ShowDiv() {
    var div = document.getElementById("divOculto");

    if(div !== undefined)
    {
        //$("#divOculto").show();
        $("#divOculto").css("display", "");

    }

}

//ATR: Permite mostrar el modal oculto, que desplegará el inicio de sesió.
function ShowModalLogin()
{
    $('#modalLogin').modal({
        show: 'show'
    });

}
