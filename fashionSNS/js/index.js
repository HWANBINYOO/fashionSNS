const star = document.querySelectorAll(".fa-star");
function starclick(){
        star.classList.toggle('.yellowColor');
}

let newImage = document.getElementById('image-show');
let profilemainimg = document.querySelector(".profilemainimg");
newImage.style.display = "none";
function loadFile(input) {
        let file = input.files[0];	//선택된 파일 가져오기
    
        //새로운 이미지 div 추가
        let newImage = document.createElement("img");
        newImage.setAttribute("class", 'img');
        
        //이미지 source 가져오기
        newImage.src = URL.createObjectURL(file);   
        
        newImage.style.objectFit = "contain";
        //이미지를 image-show div에 추가
        let container = document.getElementById('image-show');
        container.appendChild(newImage);
        showImage();
    };

    
    function showImage() {
        let imgbtn = document.querySelector('.button');
        //이미지는 화면에 나타나고
        newImage.style.display = "";
        profilemainimg.style.display="none";
        imgbtn.style.display = "none";
}
