function upimg(e){
    var imgSource = e.target.result;
    var preview= document.getElementById('preview')

    preview.src=imgSource;
}

function documentProgres(e){
    var img = e.target.files[0];

    var read = new FileReader();

    read.addEventListener('load',upimg,false)
    
    read.readAsDataURL(img);
}

function droparea(e){

    const dropArea = document.querySelector(".drop-area");
}

document.getElementById('document')

.addEventListener('change',documentProgres,false)
