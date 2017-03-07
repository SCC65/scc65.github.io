var myImage = document.querySelector('img');
myImage.onclick = function()
{
	var mySrc = myImage.getAttribute ('src');
	if (mySrc == 'images/bristol.png')
	{
		myImage.setAttribute ('src', 'images/image.png');
	}
	else
	{
		myImage.setAttribute ('src', 'images/bristol.png');
	}
}
function soundClick()
{
	var audio = new Audio();
	audio.src = 'audio/smiv.mp3';
	audio.play();
}
