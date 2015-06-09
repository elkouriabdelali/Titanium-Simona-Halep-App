$.slideImage1.image = "http://www.superjobs.co/cms/images/articles/1876//mari/simona-halep-2015-indian-wells-01.jpg";
$.slideImage2.image = "http://www.superjobs.co/cms/images/articles/1873/mari/simona-halep-dubai-2015-08.jpg";
$.slideImage3.image = "http://www.superjobs.co/cms/images/articles/1872/mari/simona-halep-australian-open-2015-10.png";

//
//		Menu Events and Layout
//

$.menu.addEventListener('click', function() {

	if ($.menu.image == '/images/menu.png') {
		$.menu.image = '/images/close.png';
		$.menuView.height = '300dp';
	} else {
		$.menu.image = '/images/menu.png';
		$.menuView.height = '0dp';
	}
});

$.homeItem.addEventListener('click', function() {
	changeScrollView($.scrollView, $.scoreView, $.socialScrollView);
});

$.scoreItem.addEventListener('click', function() {
	changeScrollView($.scoreView, $.socialScrollView, $.scrollView);
});

$.socialItem.addEventListener('click', function() {
	changeScrollView($.socialScrollView, $.scrollView, $.scoreView);
});

function changeScrollView(active, inactive1, inactive2) {
	$.menu.image = '/images/menu.png';
	$.menuView.height = '0dp';
	active.height = Ti.UI.SIZE;
	inactive1.height = '0dp';
	inactive2.height = '0dp';
}

//
//		Reading the JSON Information for the News and Scores section
//

var url = "http://mide765.com/json/info.json";
var client = Ti.Network.createHTTPClient({
	onload : function(e) {
		response = JSON.parse(this.responseText);

		addContent(response.news[0].title, response.news[0].content, response.news[0].image, $.newsTitle0, $.newsContent0);
		addContent(response.news[1].title, response.news[1].content, response.news[1].image, $.newsTitle1, $.newsContent1);
		addContent(response.news[2].title, response.news[2].content, response.news[2].image, $.newsTitle2, $.newsContent2);
		addContent(response.news[3].title, response.news[3].content, response.news[3].image, $.newsTitle3, $.newsContent3);
		addContent(response.news[4].title, response.news[4].content, response.news[4].image, $.newsTitle4, $.newsContent4);

		addContent(response.scores[0].player1 + "\n" + response.scores[0].player2, response.scores[0].score, response.scores[0].win, $.scoreTitle0, $.scoreContent0);
		addContent(response.scores[1].player1 + "\n" + response.scores[1].player2, response.scores[1].score, response.scores[1].win, $.scoreTitle1, $.scoreContent1);
		addContent(response.scores[2].player1 + "\n" + response.scores[2].player2, response.scores[2].score, response.scores[2].win, $.scoreTitle2, $.scoreContent2);
		addContent(response.scores[3].player1 + "\n" + response.scores[3].player2, response.scores[3].score, response.scores[3].win, $.scoreTitle3, $.scoreContent3);

	},
	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('error');
	}
});
client.open("GET", url);
client.send();

function addContent(title, description, image, titleLabel, descriptionLabel) {
	titleLabel.text = title;
	descriptionLabel.value = description;
}

//
//		Reading the JSON Information for the Social section
//

var url = "https://graph.facebook.com/v2.3/simonahalep/posts?access_token=CAACEdEose0cBALsCMZB3PM8RkOHXwivnnh6KvZAEfhR9FjtsujItPkBQUJGkAX5aorrfGGbHPMcKNurK7eG0lfT4XItkJWvrZB7tuyHhFpYTH8fmHarPGbgMt7lfFxBZBJmW9WDOenHnkAcFGSQGAYI5JslZCf2GidFQLXWLxXQAZCKZBm5MANdbEnM8j1tW4rR9ZBWKdpZA2vhteWCRd1hQW7zscyTQpjklf1A1AS7ZAjewZDZD";
var client = Ti.Network.createHTTPClient({
	onload : function(e) {
		response = JSON.parse(this.responseText);

		$.imageSocial0.image = response.data[0].message;
		$.textSocial0.text = response.data[0].picture;
		$.dateSocial0.value = response.data[0].created_time;

		$.imageSocial1.image = response.data[1].message;
		$.textSocial1.text = response.data[1].picture;
		$.dateSocial1.value = response.data[1].created_time;

		$.imageSocial2.image = response.data[2].message;
		$.textSocial2.text = response.data[2].picture;
		$.dateSocial2.value = response.data[2].created_time;

		$.imageSocial3.image = response.data[3].message;
		$.textSocial3.text = response.data[3].picture;
		$.dateSocial3.value = response.data[3].created_time;

	},
	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('error');
	}
});
client.open("GET", url);
client.send();

//
//		Open the App
//

$.index.open();
