$(document).ready(function(){
	$('.open_frame').click(function(){
		console.log('Открываем новое окно');
		window.open('http://frame.local/frame.php', '_blank')
	});

if(window.opener) {
	if(window.opener.location.href == 'http://frame.local/')
		{
			window.blur();
			window.opener.focus();
			console.log("Устанавливаем фокус на окне: " + window.opener.location.href);
		}
	}

});