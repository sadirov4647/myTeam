let status = false;

function show(){
    if(status){
        document.querySelector(".site-nav__features").style.right = '0';
        status =!status
    }else{
        document.querySelector(".site-nav__features").style.right = '-300px';
        status =!status
    }
}