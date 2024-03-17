<<<<<<< HEAD
let pictures = document.querySelectorAll(".pic");
let upload = document.getElementById("upload-field");

upload.onchange = function(){
    pictures.forEach(function(picture, index){
        picture.src = URL.createObjectURL(upload.files[0]);

    });
   
=======
let pictures = document.querySelectorAll(".pic");
let upload = document.getElementById("upload-field");

upload.onchange = function(){
    pictures.forEach(function(picture, index){
        picture.src = URL.createObjectURL(upload.files[0]);

    });
   
>>>>>>> b732338569d054f91e9973d8fedcc7e63f0f41f4
}