menu_list_array = ["Veg Margherita Pizza","chikan cheese pizza","chikan pizza", "paneer cheese pizza", "paneer pizza" ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++)
{
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}

}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="secation class='cards'>";
for(var s=0;s<menu_list_array.length;s++)
{
    htmldata=htmldata+"</secation>";
    document.getElementById("addedmenu").innerHTML=htmldata;
}


}

function add_top(){

var item=document.getElementById("display_addedmenu").value;
menu_list_array.push(item);
add_item();

}