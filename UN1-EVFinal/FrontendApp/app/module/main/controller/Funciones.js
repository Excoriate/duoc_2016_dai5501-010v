/**
 * Created by Alex Torres on 3/18/2016.
 */

//ATR: Permite ocultar el Div.
function HideGrid() {
    var div = document.getElementById("gridApiRest");

    if(div !== undefined)
    {
        //$("#divOculto").show();
        $("#gridApiRest").css("display","none");

    }

}

//ATR: Permite ocultar el Div.
function ShowGrid() {
    var div = document.getElementById("gridApiRest");

    if(div !== undefined)
    {
        //$("#divOculto").show();
        $("#gridApiRest").css("display", "");

    }

}

//ATR: Permite mostrar el modal oculto, que desplegará el inicio de sesió.
//function ShowModalLogin()
//{
//    $('#modalLogin').modal({
//        show: 'show'
//    });
//
//}

