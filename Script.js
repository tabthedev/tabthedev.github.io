//Sign-up///////////////////////////////////////

var file;

function loadFile(input) {
    file = input.files[0];	//선택된 파일 가져오기

    //미리 만들어 놓은 div에 text(파일 이름) 추가
    var name = document.getElementById('PFP_Filename');
    name.textContent = file.name;

    //이미지를 image-show div에 추가
    var container = document.getElementById('PFPPreview');
    container.src = URL.createObjectURL(file); 
    
};

function ResetFile(input) {
    file = null;	//선택된 파일 가져오기

    //미리 만들어 놓은 div에 text(파일 이름) 추가
    var name = document.getElementById('PFP_Filename');
    name.textContent = "Default PFP";

    //이미지를 image-show div에 추가
    var container = document.getElementById('PFPPreview');
    container.src = "https://www.tabthedev.kro.kr/Default_PFP.png"; 
    
};


function SU_Submit() {
    var Nickname = document.getElementById('Username-Register');
    var Password = document.getElementById('Password-Register');

};







//Login////////////////////////////////////////