//Permite "pintar" cada row de la tabla en Html.
function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //añade un TR a la tabla
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.firstName + "</td>"));
    row.append($("<td>" + rowData.lastName + "</td>"));
}

//Permite 'pintar" una tabla en HTML, a partir de un rendering dinámico.
function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

//Implementa el binding a partir del API Rest dispuesto en AWS.
function BindGridTable(){

    //Primero, muestra la grilla.
    ShowGrid();

    $.ajax({
        url: '/echo/json/',
        type: "post",
        dataType: "json",
        data: {
            json: JSON.stringify([
                {
                    id: 1,
                    firstName: "Peter",
                    lastName: "Jhons"
                },
                {
                    id: 2,
                    firstName: "David",
                    lastName: "Bowie"
                }
            ]),
            delay: 3
        },
        success: function(data, textStatus, jqXHR) {
            //Llama a la función que pinta la tabla.
            drawTable(data);
        }
    });
}
