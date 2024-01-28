//Create particle array

function init(){

    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 8000;
    for(let i = 0; i < numberOfParticles * 3; i++){
        let size = (Math.random() * 3) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

//Check if particle are clise enough to draw between them
function connect(){
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length;a++){
        for(let b = a; a < particlesArray.length;b++){
            let distance = 
            ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + (particlesArray[a].y - particlesArray[b].y)
            + (particlesArray[a].y - particlesArray[b].y);

            
        }
    }
}
