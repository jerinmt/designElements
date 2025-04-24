const imageCarousel = function (identifier, height, width, total) {
    //setting up the frame and the image strip
    let id = `#${identifier}`;
    let frame = document.querySelector(id);
    let strip = frame.querySelector('div');
    frame.style.position = 'relative';
    strip.style.position = 'absolute';
    frame.style.width = width;
    frame.style.height = height;
    frame.style.overflow = 'hidden';
    strip.style.display = 'flex';
    const showPic = function (number) {
        let shift = 100 * (1 - number);
        strip.style.left = `${shift}%`;    
    }
    let times = 1;
    //automatic scrolling
    setInterval(() => {
        showPic(times);
        if(times<total) {
            times += 1;
        }
        else {
            times = 1;
        }
    }, 3000);
    //adding a previous arrow and a next arrow
    let leftArrow = document.createElement('h1');
    let rightArrow = document.createElement('h1');
    leftArrow.innerHTML = '&#10094';
    rightArrow.innerHTML = '&#10095';
    leftArrow.style.color = 'gray';
    leftArrow.style.top = '40%';
    rightArrow.style.color = 'gray';
    rightArrow.style.top = '40%';
    rightArrow.style.right = '0%';
    leftArrow.style.position = 'absolute';
    rightArrow.style.position = 'absolute';
    leftArrow.style.cursor = 'pointer';
    rightArrow.style.cursor = 'pointer';
    leftArrow.addEventListener('click', ()=> {
        if(times>1) {
            times -= 1;
        } else {
            times = total;
        }
        showPic(times);
    }, false);
    rightArrow.addEventListener('click', ()=> {
        if(times==total) {
            times = 1;
        }
        showPic(times);
    }, false);
    frame.appendChild(leftArrow);
    frame.appendChild(rightArrow);
    //adding the pic navigator cicles
    let dotsContainer = document.createElement('div');
    frame.appendChild(dotsContainer);
    dotsContainer.style.height = '8%';
    dotsContainer.style.display = 'flex';
    dotsContainer.style.justifyContent = 'center';
    dotsContainer.style.gap = '5px';
    dotsContainer.style.position = 'absolute';
    dotsContainer.style.bottom = '4px';
    dotsContainer.style.left = '50%';
    dotsContainer.style.transform = 'translate(-50%, 0%)';
    let dots = [];
    for(let i=0;i<total;i++) {
        dots[i] = document.createElement('div');
        dots[i].style.height = '20px';
        dots[i].style.width = '20px';
        dots[i].style.backgroundColor = 'gray';
        dots[i].style.borderRadius = '50%';
        dots[i].style.opacity = '0.5';
        dots[i].addEventListener('click', ()=>{
            times = i+1;
            showPic(times);
        });
        dotsContainer.appendChild(dots[i]);
    }
    
}