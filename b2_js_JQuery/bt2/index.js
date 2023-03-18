
$(document).ready(function(){

//load js HTMLcomponent
    $(".header").load("/b2_js_JQuery/bt2/header.html");
    $(".footer").load("/b2_js_JQuery/bt2/footer.html");
    $(".left-content").load("/b2_js_JQuery/bt2/left-content.html");

//data product
var product = [
    { id: 1, name: "product 1", price:  20000,  qty: 20,
    image:  "/b2_js_JQuery/img/pro26.jpg"},
    { id: 2, name: "product 2", price:  20000,  qty: 20,
    image:  "/b2_js_JQuery/img/pro27.jpg"},
    { id: 3, name: "product 3", price:  20000,  qty: 20,
    image:  "/b2_js_JQuery/img/pro28.jpg",},
    { id: 4, name: "product 4", price:  20000,  qty: 20,
    image:  "/b2_js_JQuery/img/pro26.jpg"},
    { id: 5, name: "product 5", price:  20000,  qty: 20,
    image:  "/b2_js_JQuery/img/pro27.jpg"},
    { id: 6, name: "product 6", price:  20000,  qty: 20,
    image:  "/b2_js_JQuery/img/pro28.jpg"},
]

//display product item
    console.log(product)
    for (i = 0; i < product.length; i++) {
        var item = product[i];
        $(".product").append("<tr  class=\"product-item\"><td>"+ item.id +"</td><td>"+ item.name + "</td><td><img  src=\"" + item.image + "\"/></td><td>"+ item.price + " VND </td><td>"+ item.qty + "</td><td><button type=\"button\" class=\"btn btn-danger\">Delete</button><button type=\"button\" class=\"btn btn-warning\">Edit</button></td></tr>");
        $("img").addClass("image-content");
    }

//search
    $(".search-button").click(function() {
        var value_search = $(".search-input").val().toLowerCase();
        var count =0
        $(".product").empty()
        for (i = 0; i < product.length; i++) {
            var item = product[i];
            if (item.name == value_search) {
                count+=1
                $(".product").append("<tr  class=\"product-item\"><td>"+ item.id +"</td><td>"+ item.name + "</td><td><img  src=\"" + item.image + "\"/></td><td>"+ item.price + " VND </td><td>"+ item.qty + "</td><td><button type=\"button\" class=\"btn btn-danger\">Delete</button><button type=\"button\" class=\"btn btn-warning\">Edit</button></td></tr>");
                $("img").addClass("image-content");
            }
        }
        if (count === 0) {
            alert("no result")
            for (i = 0; i < product.length; i++) {
                var item = product[i];
                    $(".product").append("<tr  class=\"product-item\"><td>"+ item.id +"</td><td>"+ item.name + "</td><td><img  src=\"" + item.image + "\"/></td><td>"+ item.price + " VND </td><td>"+ item.qty + "</td><td><button type=\"button\" class=\"btn btn-danger\">Delete</button><button type=\"button\" class=\"btn btn-warning\">Edit</button></td></tr>");
                    $("img").addClass("image-content");            
            }
        }
    });

//add new item
    $('.store').click(function () {
        var proid = $('#inputid').val();
        var proname = $('#inputname').val();
        var proimage = $('#inputimage').val();
        var proprice = $('#inputprice').val();
        var proqty = $('#inputqty').val();

        product.push({id: proid, name: proname, price: proprice, qty:proqty, image: proimage});
        $('.modal').hide();
            $(".product").append("<tr  class=\"product-item\"><td>"+ proid +"</td><td>"+ proname + "</td><td><img  src=\"" + proimage + "\"/></td><td>"+ proprice + " VND </td><td>"+ proqty + "</td><td><button type=\"button\" class=\"btn btn-danger\">Delete</button><button type=\"button\" class=\"btn btn-warning\">Edit</button></td></tr>");
            $("img").addClass("image-content");                        
    });
    

//show - hide modal
    $('.addNew').click(function () {
        $('.modal').show();
    });
    $('.close').click(function () {
        $('.modal').hide();
    });
    $(window).on('click', function (e) {
      if ($(e.target).is('.modal')) {
        $('.modal').hide();
      }
    });

//delete
    $(".btn-danger").click(function(){
        $(this).parent().parent().hide();
    });

});



// paginate
// $(document).ready (function () {  
//     $('#data').after ('<div id="nav"></div>');  
//     var rowsShown = 3;  
//     var rowsTotal = $('#data tbody tr').length;  
//     var numPages = rowsTotal/rowsShown;  
//     for (i = 0;i < numPages;i++) {  
//         var pageNum = i + 1;  
//         $('#nav').append ('<a href="#" rel="'+i+'">'+pageNum+'</a> ');  
//     }  
//     $('#data tbody tr').hide();  
//     $('#data tbody tr').slice (0, rowsShown).show();  
//     $('#nav a:first').addClass('active');  
//     $('#nav a').bind('click', function() {  
//     $('#nav a').removeClass('active');  
//    $(this).addClass('active');  
//         var currPage = $(this).attr('rel');  
//         var startItem = currPage * rowsShown;  
//         var endItem = startItem + rowsShown;  
//         $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
//         css('display','table-row').animate({opacity:1}, 300);  
//     });  
// });   

