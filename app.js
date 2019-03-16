function imgmove(){
    document.getElementById("img").src = "coin.gif";
    var random = Math.random();
    var imgmove1 = Math.floor(random * 2);
    console.log(imgmove);
    setTimeout(function(){
    
    if(imgmove1 === 1) {
        document.getElementById("img").src = "PONUD.jpg";
    }
    else if(imgmove1 === 0) {
        document.getElementById("img").src = "poun.jpg";
    }
    },2000)
    
    }