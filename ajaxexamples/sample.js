$(document).ready(function () {
     
    $.ajax("sample.json",
    {  
        
        dataType:'json',
        contentType:'application/json',
        cache:false,
        beforeSend : function () {
            $("#status").text("loading...");
            
        }
    }).done(function(response) {
       
        var html1;
        $.each(response,function(index,value){
              html1 = ' <div data-id="'+value.id+'">';
              html1 +=' no '+value.id+' ';
              html1 +=' Name :'+ value.name +' ';
              html1+= ' area '+value.area+', amount is '+value.amount +'. <a href="javascript:void(0)" class="amount">clickme<a> </div>'
               $("#result").append(html1);
        })
       
        
    }).fail(function(request,errorType,errorMessage) {
        $("#status").text( errorMessage );
       console.log(errorType, request);
    }).always(function () {
        
                $("#status").text("loading completed.");
             
    });
    
    var total   = 0;
    $('body').on("click",".amount",function(event){
    event.preventDefault();
    console.log("amount button clcked");
    var elementid  = +$(this).closest('div').data('id');
    console.log("data id is "+ elementid);
    $.ajax("test.json",{
       type:"post",
       data:{id: elementid},
       dataType:"json",
       contentType:"applcation/json",
       
    }).done(function(response){
       console.log(response);
    })
    .always(function(){
       
    })
    })
});


       