let isShow1 = false;
let isShow2 = false;
let isShow3 = false;
let isShow4 = false;
const div = document.getElementById("info");

function toggleDiv(functionName) {
	if (functionName == "myFunction1") {
		if (isShow1) {
			div.style.display = "none";
			isShow1 = false;
		} else {
			div.innerHTML = "<div class='alert alert-primary'><a id='link' href='https://www.facebook.com/profile.php?id=100009762091194' target='_blank'> <b>Facebook: Minh Master</b> </a> </div>";
			div.style.display = "block";
			isShow1 = true;
			isShow2 = false;
			isShow3 = false;
			isShow4 = false;
		}
	} else if (functionName == "myFunction2") {
		if (isShow2) {
			div.style.display = "none";
			isShow2 = false;
		} else {
			div.innerHTML = "<div class='alert alert-danger'><a id='link' href='https://www.youtube.com/channel/UCCVIeKy92nAU8cb3z9dfjOA' target='_blank'> <b>Youtube: Funny Channel</b> </a> </div>";
			div.style.display = "block";
			isShow2 = true;
			isShow1 = false;
			isShow3 = false;
			isShow4 = false;
		}
	} else if (functionName == "myFunction3") {
		if (isShow3) {
			div.style.display = "none";
			isShow3 = false;
		} else {
			div.innerHTML = "<div class='alert alert-secondary'><a id='link' href='https://vm.tiktok.com/ZMYvefdQG/' target='_blank'> <b>Tiktok: Minh Master</b> </a> </div>";
			div.style.display = "block";
			isShow3 = true;
			isShow1 = false;
			isShow2 = false;
			isShow4 = false;
		}
	} else if (functionName == "myFunction4") {
		if (isShow4) {
			div.style.display = "none";
			isShow4 = false;
		} else {
			div.innerHTML = "<div class='alert alert-dark'> <a id='link' href='https://github.com/MasterTLM' target='_blank'><b>GitHub: MasterTLM</b> </div>";
			div.style.display = "block";
			isShow4 = true;
			isShow1 = false;
			isShow2 = false;
			isShow3 = false;
		}
	}
}
// <a id='link' href='mailto:tranleminh106@gmail.com' target='_blank'>


//-------------------- Hide Header ------------------------
const boxes = document.querySelectorAll(".wrap-100");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 10) * 9;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();


//--------------------------Phân quyền ADMIN-----------------------------------
// var account = '{"owner":[{"username":"tranleminh106","password":"1234"}]}';
// var obj = JSON.parse(account);
// function frmValidate() {
// 	var frm = document.forms['login'];
// 	var username = frm.username;
// 	var password = frm.password;
// 	<!-- var isAdmin = frm.isAdmin; -->
  
// 	if (username.value == obj.owner[0].username && password.value == obj.owner[0].password) {
// 	  // Cấp quyền admin và lưu thông tin vào JSON
// 		isAdmin.value = 'true';
// 		obj.owner[0].isAdmin = true;
  
// 	  window.location.href = 'https://mastertlm.github.io/owner.html?isAdmin=' + isAdmin.value;
// 	} else {
// 	  alert('Lỗi! Sai Tài khoản hoặc Mật khẩu');
// 	  window.location.reload;
// 	}
// }          
