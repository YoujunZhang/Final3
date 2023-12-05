function clickPictureChangeColor(){
    let picture = document.getElementById("blue"); 
    picture.style.backgroundColor = "green";
    picture.style.width = "50px";
    picture.style.height = "200px";
  }
  
  function clickPictureAddBorder(){
    var picture = document.getElementById("black");
    console.log("this is the fetched element:", picture); 
    picture.style.backgroundColor = "#ffffff"; 
    picture.style.filter = "blur(3px)"; 
    picture.style.filter ="grayscale(100%)";
    document.body.style.backgroundColor = "beige";
  }

  function clickPictur2ChangeColor(){
    let picture2 = document.getElementById("blue"); 
    picture2.style.backgroundColor = "green";
    picture2.style.width = "50px";
    picture2.style.height = "200px";
    picture2.style.filter ="grayscale(100%)"
  }
  
  function clickPicture2AddBorder(){
    var picture2 = document.getElementById("brown");
    console.log("this is the fetched element:", picture2); 
    picture2.style.backgroundColor = "#ffffff"; 
    picture2.style.border = "2px dotted black"; 
    document.body.style.backgroundColor2 = "beige";
  }

