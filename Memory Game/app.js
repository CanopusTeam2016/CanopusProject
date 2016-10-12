function init() {
    let img1= document.getElementById('field');
    let img2= document.getElementById('background');

    draw();

    function draw() {
        let ctx = document.getElementById('canvas').getContext('2d');

        //make fields
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 8; col++) {
                let x = 4 + col * 100;
                let y = 4 + row * 100;
                ctx.fillStyle = 'green';
                ctx.fillRect(x, y, 92, 92);
            }
        }

        let live = false;
        window.addEventListener('click', function (event) {
            if(!live){
                live = true;
                requestAnimationFrame(animate);
            }
        });
        let col=0;
        let row=0;
        function animate() {
            let x = 4 + col * 100;
            let y = 4 + row * 100;
            col++;
            row++;
            ctx.fillStyle="#ff0000";
            ctx.lineCap = 'round';
            //ctx.fillRect(x, y, 92, 92);
            ctx.drawImage(img1, 0,0);
            ctx.drawImage(img2, 100,100);

            requestAnimationFrame(animate);
        }
        //ctx.drawImage(img1, 0, 0);
        //ctx.drawImage(img2, 0, 100)
    }
}

init();
