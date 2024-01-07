document.getElementById('screenshotBtn').addEventListener('click',function(){
    //Hide Screenshot button from captured screenshot
    this.classList.add('hidden')
    //Take the screenshot
    html2canvas(document.documentElement,{
        scale: window.devicePixelRatio, //Capture at this device's pixel ratio
        logging: true, //Enable logging for debugging
        useCORS : true, //Use CORS to handle cross-origin images
        windowHeight : window.innerHeight,
        windowWidth : window.innerWidth
    }).then(canvas=>{
        //create an image
        var image = canvas.toDataURL("image/png").replace("img/png", "image/octet-stream");
        //Create a link to download the image
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = image;
        link.click();
        //Show the button again
        this.classList.remove('hidden');
    });
})