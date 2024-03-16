let pictures = document.querySelectorAll(".pic");
let upload = document.getElementById("upload-field");

upload.onchange = function(){
    pictures.forEach(function(picture, index){
        picture.src = URL.createObjectURL(upload.files[0]);

    });
   
}