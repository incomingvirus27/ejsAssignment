
$("#addBtn").click(function (){
	$("#bookModal").show();
})
$("#cancelBtn").click(function (){
	$("#bookModal").hide();
})
$("#newBookBtn").click(function (){
	addToELibrary();
})


const bookRow = document.getElementById('bookRow');
const elibrary = [];
function Book(title, pub, pages, yearPub, coverImgURL,bookPrice, bookAuthor, bookLang,bookCount, bookExtr) {
	this.title = title;
	this.pub = pub;
	this.pages = pages;
	this.yearPub = yearPub;
	this.coverImgURL = coverImgURL;
	this.price = bookPrice;
	this.author = bookAuthor;
	this.language = bookLang;
	this.country = bookCount;
	this.extract = bookExtr;
	this.read = 0;
}


function addToELibrary() {
	if (validateInput()) {
		let title = $("#txtTitle").val();
		let pub = $("#txtPub").val();
		let pages = $("#txtPages").val();
		let coverImgURL = $("#txtCoverURL").val();
		let yearPub = $("#txtPubYear").val();
		let price = $("#bookPrice").val();
		let author = $("#bookAuthor").val();
		let language = $("#language").val();
		let country = $("#bookCountry").val();
		let extract = $("#bookExtract").val();
console.log($("#language").val());
		let book = new Book(title, pub, pages,yearPub,coverImgURL,price, author, language, country, extract)
		// elibrary.push(book);
		saveBook(book);
		location.reload();
		
	} else {
		alert('Sorry, all fields are required');
	}
}

function validateInput() {
	if ($("#txtTitle").val() == '' || $("#txtPub").val() == '' || $("#txtPages").val() == '' || $("#txtCoverURL").val() == '' || $("#txtPubYear").val()== "" || $("#bookPrice").val() =="" || $("#bookAuthor").val() ==""||$("#languages").val() =="") {
		return false;
	}
	return true;
}

$(function(){
    var template = new EJS({
        text: $('#template').html()
    });
    let booksArray = JSON.parse(localStorage.getItem('books'));
    console.log(booksArray);
    $('#list').html(template.render({list:booksArray}));
    });

const show = document.querySelector('#show');
		function closeModalBox(){
			show.style.display = 'none';
		}
		// <button class="btn btn2 btn-block btn-success" id="btn" onClick="closeModalBox()">close</button>
		// This is the show details function
function showDetails(bookitems){
	if (localStorage.getItem('books') !== null){
		booksArray = JSON.parse(localStorage.getItem('books'))
		booksArray[bookitems];
		console.log(booksArray[bookitems]);		
		document.getElementById("show").innerHTML=`
		<h6 class="clas6">Publisher: <span>${booksArray[bookitems].pub}</span></h6>
		<p>Price: <span>${booksArray[bookitems].price}</span></p>
		<p>Extract: <span>${booksArray[bookitems].extract}</span></p>
		<p>Pages: <span>${booksArray[bookitems].pages}</span></p>
		<p>Language: <span>${booksArray[bookitems].language}</span></p>
		<p>Country: <span>${booksArray[bookitems].country}</span></p>		
	</div>
		`;
		console.log(booksArray[bookitems].bookextract)		
		document.getElementById("show").style.display = 'block';
	}
}

// THis saves book in the storage
function saveBook(bookObj) {
	let booksArray = [];
	if (localStorage.getItem('books') == null) {
		booksArray.push(bookObj);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('New book added to the eLibrary!');
	} else {
		booksArray = JSON.parse(localStorage.getItem('books'));
		booksArray.push(bookObj);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('New book added to the eLibrary');
	}
}

// This is a function that deletes book from the storage.
function deleteBook(bookID) {
	if (localStorage.getItem('books') !== null) {
		booksArray = JSON.parse(localStorage.getItem('books'));
		booksArray.splice(bookID, 1);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('book deleted');
		location.reload();
	}
}



		

