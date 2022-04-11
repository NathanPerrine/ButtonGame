console.log("Hello from the other side.")

{
    let btn = document.createElement("button");
    let colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    let taunts = ['Na na na na na', "Can't catch me!", "Ha ha!", "Click me!", "Phbbbt!"]
    let scoretag = document.getElementById('score')
    let score = 0
    btn.className = "btn btn-info m-1 border-secondary"
    btn.innerHTML = "Click me!";
    btn.style = `display: block; position: absolute; left: ${document.body.clientWidth/2.15}px`
    btn.type = "submit";
    btn.name = "gameBtn";
    btn.addEventListener("click", function() {
        // alert("Button is Clicked!")
        let color_num = Math.floor(Math.random() * colors.length)
        let taunt_num = Math.floor(Math.random() * taunts.length)
        let l    = Math.floor(Math.random() * (document.body.clientWidth - 50))
        let t    = Math.floor(Math.random() * (document.body.clientHeight - 50))
        score++
        if (color_num == 7){
            document.body.className=`vh-100 bg-${colors[color_num]} text-light`
        } else {
            document.body.className=`vh-100 bg-${colors[color_num]}`
        }

        btn.innerHTML = taunts[taunt_num]

        btn.style.left = l+"px"
        btn.style.top = t+"px"
        scoretag.innerHTML = `Score: ${score}`
    });
    document.body.append(btn);
}