
document.querySelector(".product-img").addEventListener('click', function (){
    imgURL = document.querySelector(".product-img img").getAttribute("src");
    
    let newWindow = document.createElement("div");
    newWindow.setAttribute("class", "img-window");
    newWindow.addEventListener('click', function (){
        this.remove();
    });

    let newImg = document.createElement('img');
    newImg.setAttribute("src", imgURL);
    newWindow.appendChild(newImg);
    document.body.appendChild(newWindow);
    
});


