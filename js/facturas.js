var urlget_facturas = 'https://localhost/G3_20/controler/facturas.php?op=get_facturas';
var urlpost_facturas = 'https://localhost/G3_20/controler/facturas.php?op=insert_facturas';
var urlget_facturas = 'https://localhost/G3_20/controler/facturas.php?op=get_facturas';
var urlput_facturas = 'https://localhost/G3_20/controler/facturas.php?op=update_facturas';
var urldelete_facturas = 'https://localhost/G3_20/controler/facturas.php?op=delete_facturas';

$(document).ready(function () {
    cargarFactura();
})

function cargarFactura() {

    $.ajax({
        url: urlget_Factura,
        type: 'GET',
        datatype: 'JSON',
        success: function (response) {
            var miItems = response;
            var valores = '';

            for (i = 0; i < miItems.length; i++) {
                valores += '<tr>' +
                    '<td>' + miItems[i].NUMERO_FACTURA + '</td>' +
                    '<td>' + miItems[i].ID_SOCIO + '</td>' +
                    '<td>' + miItems[i].FECHA_FACTURA + '</td>' +
                    '<td>' + miItems[i].DETALLE + '</td>' +
                    '<td>' + miItems[i].SUB_TOTAL + '</td>' +
                    '<td>' + miItems[i].TOTAL_ISV + '</td>' +
                    '<td>' + miItems[i].TOTAL + '</td>' +
                    '<td>' + miItems[i].FECHA_VENCIMIENTO + '</td>' +
                    
                    '<td>' +
                    '<button class="btn btn-warning" onclick="Factura(' + miItems[i].id + ')">Editar</button>' +
                    '<button class="btn btn-danger" onclick="Factura(' + miItems[i].id + ')">Eliminar</button>' +
                    '</td>' +
                    '</tr>';
                $('.Factura').html(valores);
            }
        }
    })
}

function agregarFactura() {
    var datos = {
        NUMERO_FACTURA: $('#NUMERO_FACTURA').val(),
        ID_SOCIO: $('#ID_SOCIO').val(),
        FECHA_FACTURA: $('#FECHA_FACTURA').val(),
        DETALLE: $('#DETALLE').val(),
        SUB_TOTAL: $('#SUB_TOTAL').val(),
        TOTAL_ISV: $('#TOTAL_ISV').val(),
        TOTAL: $('#TOTAL').val(),
        FECHA_VENCIMIENTO: $('#FECHA_VENCIMIENTO').val()
    };

    var datos_json = JSON.stringify(datos);

    $.ajax({
        url: urlpost_facturas,
        type: 'POST',
        data: datos_json,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        }
    })
    alert("Factura Agregada");
}

function cargarFacturas(idSocio) {
    var datos = {
        id : idSocio
    };

    var datos_json = JSON.stringify(datos);

    $.ajax({
        url: urlget_facturas,
        type: 'POST',
        data: datos_json,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            var miItems = response;

            $('#NUMERO_FACTURA').val(miItems[0].NUMERO_FACTURA);
            $('#ID_SOCIO').val(miItems[0].ID_SOCIO);
            $('#FECHA_FACTURA').val(miItems[0].FECHA_FACTURA);
            $('#DETALLE').val(miItems[0].DETALLE);
            $('#SUB_TOTAL').val(miItems[0].SUB_TOTAL);
            $('#TOTAL_ISV').val(miItems[0].TOTAL_ISV);
            $('#TOTAL').val(miItems[0].TOTAL);
            $('#FECHA_VENCIMIENTO').val(miItems[0].FECHA_VENCIMIENTO);
            
        }
    })
    alert("Factura Agregada");
}

function eliminarFactura(id) {


}