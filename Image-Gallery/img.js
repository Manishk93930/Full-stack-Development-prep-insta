<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', function () {
    let uploadInput = document.getElementById('upload1');
    let gallery = document.querySelector('.gallery');

    uploadInput.addEventListener('change', function () {
        if (uploadInput.files.length > 0) {
            let file = uploadInput.files[0];

            // Create an object URL for the selected file
            let objectURL = URL.createObjectURL(file);

            // Create a new image element
            let newImage = new Image();
            newImage.src = objectURL;

            // Append the new image to the gallery
            gallery.appendChild(newImage);

            // Release the object URL to free resources
          //   URL.revokeObjectURL(objectURL);
        }
    });

    let arrowbtn=document.querySelector(".arrow");
    arrowbtn.onclick = () => {
     var active = document.querySelector(".active");
     if(gallery.classList.contains("active")){
          gallery.classList.remove("active");
     }else{
          gallery.classList.add("active");
     }
 
    }
});


=======

document.addEventListener('DOMContentLoaded', function () {
    let uploadInput = document.getElementById('upload1');
    let gallery = document.querySelector('.gallery');

    uploadInput.addEventListener('change', function () {
        if (uploadInput.files.length > 0) {
            let file = uploadInput.files[0];

            // Create an object URL for the selected file
            let objectURL = URL.createObjectURL(file);

            // Create a new image element
            let newImage = new Image();
            newImage.src = objectURL;

            // Append the new image to the gallery
            gallery.appendChild(newImage);

            // Release the object URL to free resources
          //   URL.revokeObjectURL(objectURL);
        }
    });

    let arrowbtn=document.querySelector(".arrow");
    arrowbtn.onclick = () => {
     var active = document.querySelector(".active");
     if(gallery.classList.contains("active")){
          gallery.classList.remove("active");
     }else{
          gallery.classList.add("active");
     }
 
    }
});


>>>>>>> b732338569d054f91e9973d8fedcc7e63f0f41f4
