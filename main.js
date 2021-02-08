
var canvas=new fabric.Canvas("my_canvas");
var width_of_hero=50;
var height_of_hero=50;
var x=10;
var y=10;
var object="";
var object2="";
var width=30;
var height=30;
function image(){
    fabric.Image.fromURL("Alok.jpg",function(Img)
    {
        object=Img;
        object.scaleToWidth(150);
        object.scaleToHeight(140);
        object.set({
            top:y,
            left:x
        });
        canvas.add(player_object);
    }
    );
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        object2=Img;
        object2.scaleToWidth(width);
        object2.scaleToHeight(height);
        object2.set({
            top:y,
            left:x
        });
        canvas.add(object2);
    }
    );
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press="73"){
        new_image("ironman-head.png");
        console.log("i");
    }
    if(key_press="83"){
        new_image("spider-man.jpg");
        console.log("s");
    }
    if(key_press="82"){
        new_image("hulk-leg.jpg");
        console.log("h");
    }
    if(key_press="75"){
        new_image("ca.jpg");
        console.log("k");
    }
    if(key_press="84"){
        new_image("thor.jpg");
        console.log("t");
    }
    if(key_press=="38"){
        up();
        console.log("up");
    }
    if(key_press=="40"){
        down();
        console.log("down");
    }
    if(key_press=="39"){
        right();
        console.log("right");
    }
    if(key_press=="37"){
        left();
        console.log("left");
    }
}
function up(){
    if(y>=0){
        y=y-height;
        console.log("height= "+height);
        console.log("when up arrow key is pressed , X= "+x+", Y= "+y);
        canvas.remove(object);
        image();
    }
}
function down(){
    if(y<=500){
        y=y+height;
        console.log("height= "+height);
        console.log("when down arrow key is pressed , X= "+x+", Y= "+y);
        canvas.remove(object);
        image()
    }
}
function left(){
    if(x>=0){
        x=x-width;
        console.log("width= "+width);
        console.log("when left arrow key is pressed , X= "+x+", Y= "+y);
        canvas.remove(object);
        image()
    }
}
function right(){
    if(x<=900){
        x=x+width;
        console.log("width= "+width);
        console.log("when right arrow key is pressed , X= "+x+", Y= "+y);
        canvas.remove(object);
        image()
    }
}