/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/

function newImage(asset,leftPix, bottomPix){
    let object = document.createElement('img')
    object.src = asset
    object.style.position = 'fixed'
    object.style.left = leftPix +'px'
    object.style.bottom = bottomPix +'px'
    document.body.append(object)
    return object
    }
    
    function newItem(asset,leftPix, bottomPix){
    let object = newImage(asset,leftPix,bottomPix)
    
    object.addEventListener('dblclick', function(){
        object.remove()
    })
    }
     
    let grassHeight =window.innerHeight-500
    let skyHeight =window.innerHeight -100
    
    /*Grass and Sky*/
    multipleG('assets/grass.png',0, grassHeight) ;
    multipleS('assets/sky.png',0, skyHeight);

    //images
    newImage('assets/green-character.gif',100,100);
    newImage('assets/pine-tree.png',450,200);
    newImage('assets/tree.png',200,300);
    newImage('assets/pillar.png',350,100);
    newImage('assets/crate.png',150,200);
    newImage('assets/well.png',500,425);
    
    /*Pick up items*/
    
    newItem('assets/sword.png',500,405);
    newItem('assets/shield.png',165,185);
    newItem('assets/staff.png',600,100);

    function multipleG(asset,leftPix, bottomPix){
        for (let w=0; w<window.innerWidth;w+=100){
        for (let h=0; h<window.innerHeight;h+=100){
            newImage('assets/grass.png', leftPix + w, bottomPix - h) 
        }}
        }

    function multipleS(asset,leftPix, bottomPix){
        for (let w=0; w<window.innerWidth;w+=100){
        for (let h=0; h<window.innerHeight-600;h+=100){
            newImage(asset, leftPix + w, bottomPix - h)
        }}
        }    
    
    