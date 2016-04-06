

$(document).ready(function() {
    $('#gridTable').DataTable( {
        "processing": true,
        "serverSide": true,
        "sAjaxDataProp": "data",
        "ajax": {
            "url": "http://ec2-52-37-242-144.us-west-2.compute.amazonaws.com:81/products",
            "dataType": "json"
        }
    } );
});
