const dropdownMaker = function (identifier) {
    let id =`.${identifier}`;
    let allContainers = document.querySelectorAll(id);
    for(let i=0;i<allContainers.length;i++) {
        let container = allContainers[i];
        let button = container.querySelector('button');
        let menu = container.querySelector('div');
        container.style.position = 'relative';
        container.style.display = 'inline-block';
        menu.style.position = 'absolute';
        menu.style.visibility = 'hidden';
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.alignItems = 'start';
        menu.style.backgroundColor = 'hsl(0, 20.00%, 93.10%)';
        menu.style.border = 'none';
        menu.style.borderRadius = '8px';
        menu.style.width = '50px';
        button.addEventListener('mouseover', ()=>{
            if(menu.style.visibility==='hidden') {
                menu.style.visibility = 'visible';    
            } else {
                menu.style.visibility = 'hidden';    
            }
        });
        button.addEventListener('click', ()=>{
            if(menu.style.visibility==='hidden') {
                menu.style.visibility = 'visible';    
            } else {
                menu.style.visibility = 'hidden';    
            }
        });
    }
    window.onclick = (Event) => {
        if(!Event.target.matches(id)) {
            let menus = document.querySelectorAll(`${id}>div`);
            for(let i=0;i<menus.length;i++) {
                if(menus[i].style.visibility==='visible') {
                    menus[i].style.visibility = 'hidden';
                }
            }
        }
    }
}
