let song = document.getElementById("song");
$("#icon").click(function(){
    if(song.paused){
        song.play();
        $("#icon").attr("src", "./images/play.png");
    }
    else{
        song.pause();
        $("#icon").attr("src", "./images/pause.png");
    }
});

