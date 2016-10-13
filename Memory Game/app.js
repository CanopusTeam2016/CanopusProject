function init() {
    let img1= document.getElementById('first');
    let img2= document.getElementById('second');
    let img3= document.getElementById('third');
    let img4= document.getElementById('fourth');
    let img5= document.getElementById('beDo');
    let img6= document.getElementById('hawaii');

    draw();


    function draw() {
        let ctx = document.getElementById('canvas').getContext('2d');

        drawFields();
        //make fields
        function drawFields() {
            ctx.clearRect(0, 0, 400, 300);

            for (let row = 0; row < 6; row++) {
                for (let col = 0; col < 8; col++) {
                    let x = 4 + col * 100;
                    let y = 4 + row * 100;
                    ctx.fillStyle = 'green';
                    ctx.fillRect(x, y, 92, 92);
                }
            }
        }

        let live = false;
        window.addEventListener('click', function (event) {
            if(!live){
                live = true;
                requestAnimationFrame(mousePosition);
            }
        });

        let count = 0;
        function mousePosition() {
            //initialise
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            //mouseDown
            canvas.addEventListener('mousedown', function (evt) {
                let x = evt.pageX;
                let y = evt.pageY;
                console.log("x: " + x + " Y: " + y);
                if(count == 2){
                    drawFields();
                    count=0;
                }

                if (x <= 100 && x >= 18 && y <= 100 && y >= 20) {
                    ctx.drawImage(img1, 0, 0, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(0, 0, 96, 96);
                    count++;
                } else if (x <= 200 && x >= 100 && y <= 200 && y >= 100) {
                    ctx.drawImage(img2, 100, 100, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(100, 100, 96, 96);
                    count++;
                } else if (x <= 200 && x >= 100 && y <= 100 && y >= 20) {
                    ctx.drawImage(img3, 100, 0, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(100, 0, 96, 96);
                    count++;
                } else if (x <= 300 && x >= 200 && y <= 100 && y >= 20) {
                    ctx.drawImage(img4, 200, 0, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(200, 0, 96, 96);
                    count++;
                } else if (x <= 400 && x >= 300 && y <= 100 && y >= 20) {
                    ctx.drawImage(img3, 300, 0, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(300, 0, 96, 96);
                    count++;
                }
                else if (x <= 100 && x >= 0 && y <= 200 && y >= 100) {
                    ctx.drawImage(img5, 0, 100, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(0, 100, 96, 96);
                    count++;
                } else if (x <= 300 && x >= 200 && y <= 200 && y >= 100) {
                    ctx.drawImage(img6, 200, 100, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(200, 100, 96, 96);
                    count++;
                }
                else if (x <= 400 && x >= 300 && y <= 200 && y >= 100) {
                    ctx.drawImage(img1, 300, 100, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(300, 100, 96, 96);
                    count++;
                }
                else if (x <= 100 && x >= 0 && y <= 300 && y >= 200) {
                    ctx.drawImage(img2, 0, 200, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(0, 200, 96, 96);
                    count++;
                }
                else if (x <= 200 && x >= 100 && y <= 300 && y >= 200) {
                    ctx.drawImage(img4, 100, 200, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(100, 200, 96, 96);
                    count++;
                }
                else if (x <= 300 && x >= 200 && y <= 300 && y >= 200) {
                    ctx.drawImage(img5, 200, 200, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(200, 200, 96, 96);
                    count++;
                }
                else if (x <= 400 && x >= 300 && y <= 300 && y >= 200) {
                    ctx.drawImage(img6, 300, 200, 96, 96);
                    ctx.strokeStyle = "blue";
                    ctx.lineWidth = 5;
                    ctx.strokeRect(300, 200, 96, 96);
                    count++;
                }

            });
        }

        function animate() {
            //ctx.fillStyle="#ff0000";
            //ctx.lineCap = 'round';
            ctx.drawImage(img1, 0,0);
            ctx.drawImage(img2, 100,100,100,100);

            requestAnimationFrame(animate);
        }


    }
}

init();
