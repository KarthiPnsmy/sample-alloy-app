
function sayHello() {
	alert("Hello Titans!!!");
}

$.callXhr.addEventListener("click",function(e){
    searchForBooks();
});

var MAX_BOOKS = 10; // for demo purposes, set a max for the number of books
function setTableData(books){
	    var data = [];
	    _.each(books, function(book) {
	      var args = {
	        title: book.title,
	        authors: book.authors,
	        image: book.image
	      };
	      var row = Alloy.getController('row', args).getView();
	      data.push(row);
	    });
	    $.table.setData(data);
}

function searchForBooks() {
	// search Google Book API
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e) {
			alert("this.responseText = "+this.responseText);
			processBookData(this.responseText);
		},
		onerror: function(e) {	
			alert("Error:"+JSON.stringify(e));
		},
		timeout: 5000
	});
	xhr.open("GET", Alloy.CFG.serverBaseUrl);
	xhr.send();
}

function processBookData(data) {
	var books = [];

	// make sure the returned data is valid
	try {
		var items = JSON.parse(data).items;
	} catch (e) {
		alert('Invalid response from server. Try again.');
		return;
	}

	// process each book, turning it into a table row
	for (var i = 0; i < Math.min(items.length,MAX_BOOKS); i++) {
		var info = items[i].volumeInfo;
		if (!info) { continue; }
		var links = info.imageLinks || {};
		var authors = (info.authors || []).join(', ');
		books.push({
			title: info.title || '',
			authors: authors,
			image: links.smallThumbnail || links.thumbnail || 'none'
		});
	}

	// fire success handler with list of books
	Ti.API.info("books data ====== "+JSON.stringify(books));
    setTableData(books);
}

$.index.open();
