$(document).ready(function() {
    //get input value in display
    $('#additem').click(function(){
    var shop= $("#shopInput").val();
    if(shop){
        //Append list item to the list
        $('#shoplist').append("<li><span class='Listtext'>"+shop+"</span><span class='editButton'>Edit</span><span class='removeButton'>Remove</span></li>")
        $('#shopInput').val('');
    }
    })
    //Mark list item is completed
    $('#shoplist').on('click','.Listtext', function(){
        $(this).toggleClass('completed');
        $('.completed').css({
            'text-decoration': 'line-through',
            'color': 'red'
        });
    })
    //Remove item form the list
    $('#shoplist').on('click','.removeButton',function(){
        $(this).parent().remove();
    })
    //Edit item text 
    $('#shoplist').on('click','.editButton',function(){
        var $Listtext = $(this).siblings('.Listtext');
        var currenlist=$Listtext.text();
        var newtext=prompt('Edit List Item:',currenlist);
        if(newtext){
        $Listtext.text(newtext);
        }
    })
    
})