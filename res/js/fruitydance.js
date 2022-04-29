const $ = selector => document.querySelector(selector);
$("audio").volume = 0;

$("body").onclick = () => {
    if ($("audio").paused) {
        $("audio").play()
    } else {
        $("audio").pause()
        $("audio").volume = 0;
    }

}

var steps = 0, mode = 0 

setInterval(() => {
    $(".fruitydance").style.backgroundPositionX = `${220 * Math.round(steps)}px`
    $(".fruitydance").style.backgroundPositionY = `${256 * ($("audio").paused ? 0 : mode)}px`
    $(".paused").style.opacity = $("audio").paused ? 1 : 0

    if ($("audio").volume < 1) $("audio").volume = ($("audio").volume + 0.025).toPrecision(2);

    if (steps < 7) {
        steps = $("audio").paused ? steps+0.5 : steps+1
    } else {
        //mode = mode > 8 ? 0 : mode+1
        mode = Math.round(Math.random() * 9)
        steps = 0;
    }
}, 80);

