const btns = document.querySelectorAll('.btn');
            const modalOverlay = document.querySelector('.modal-overlay ');
            const modals = document.querySelectorAll('.modal');       
            btns.forEach((el) => {
            	el.addEventListener('click', (e) => {
            		let path = e.currentTarget.getAttribute('data-path');
                
            		modals.forEach((el) => {
            			el.classList.remove('modal--visible');
            		});
                
            		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            		modalOverlay.classList.add('modal-overlay--visible');
            	});
            });
            modalOverlay.addEventListener('click', (e) => {
            	console.log(e.target);
            
            	if (e.target == modalOverlay) {
            		modalOverlay.classList.remove('modal-overlay--visible');
            		modals.forEach((el) => {
            			el.classList.remove('modal--visible');
            		});
            	}
            });
			modals


// INFO MODAL
const modalEl = document.querySelector("info-modal");
async function openModal(id) {
	modalEl.classList.add("modal--show");

modalEl.innerHTML=`
<div class="info__card">
<img class="modal__info-backdrop" src="" alt="">
<h2>
    <span class="modal__product-title"></span>
</h2>
<ul class="modal__product-info">
    <div class="loader"></div>
    <li class="info-firm"></li>
    <li class="price"></li>
</ul>
<button type="button" class="info-modal__button-close">Закрыть</button>
</div>
`
}
// LOGIN
function login()
{
	var uName = document.getElementById("username").value;
	var pWord = document.getElementById("password").value;

	var userName = localStorage.setItem("uName",uName);
	var passWord = localStorage.setItem("pWord",pWord);

	var userName = localStorage.getItem("uName",uName);
	var passWord = localStorage.getItem("pWord",pWord);

	var a,b;
	a="Mikita";
	b=12345;

	if(a==userName & b==passWord)
	{
		alert("Succesfuly,Welcome Mikita!");
	}else
	{
		alert("Not Succesfuly! GET OUT");
	}
}
