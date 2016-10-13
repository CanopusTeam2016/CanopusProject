$(document).ready(function () {

    let can = $('#canvas')[0];
    let ctx = can.getContext('2d');
    let w = can.width;
    let h = can.height;

    let cw = 10; // cell width
    let d = 'right'; //default direction

    let score = 0;
    let status = 'init';

    let food;
    let snake_array;

    init();

    function init() {
        score = 0;
        create_background();
        create_food();
        create_snake();
        if (typeof game_loop != 'undefined')
            clearInterval(game_loop);
        game_loop = setInterval(paint, 120);
    }

    function pause() {
        if (status != 'pause') {
            if (typeof game_loop != 'undefined')
                clearInterval(game_loop);
            status = 'pause';
        }
        else {
            game_loop = setInterval(paint, 120);
            status = 'running';
        }
    }

    function show_score() {
        ctx.fillStyle = 'black';
        ctx.font = "20px Georgia";
        ctx.fillText('Score: ' + score, 5, 20)
    }

    function create_background() {
        // paint the canvas
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);
    }

    function create_snake() {
        let length = 5; // length of snake
        snake_array = [];

        for (let i = length - 1; i > 0; i--) {
            snake_array.push({x: i, y: 0});
        }
    }

    function paint() {
        // clear the background
        create_background();

        show_score();
        // movement code
        // 1, calculate the position of next cell
        // 2, place the new cell in front of the head cell
        // 3, pop out the tail cell

        let nx = snake_array[0].x;
        let ny = snake_array[0].y;

        // edge detect and correct
        if (nx > w / cw) nx = 1;
        if (nx < 0) nx = w / cw - 1;
        if (ny > h / cw) ny = 1;
        if (ny < 0) ny = h / cw - 1;

        //change the head position based on the direction
        if (d == 'right')nx++;
        else if (d == 'left')nx--;
        else if (d == 'up')ny--;
        else if (d == 'down')ny++;

        if (check_collision(nx, ny, snake_array) == true) {
            status = 'dead';
            return;
        }

        let next_head = {x: nx, y: ny};
        snake_array.unshift(next_head);

        if (nx == food.x && ny == food.y) {
            score++;
            create_food();
        }
        else {
            snake_array.pop();
        }

        // paint the snake
        for (let i = 0; i < snake_array.length; i++) {
            let c = snake_array[i];
            paint_cell(c.x, c.y);
        }

        // paint the food
        paint_cell(food.x, food.y);


        // keyboard control
        $(document).keydown(function (e) {
            let key = e.which;
            // the latter cause prevent direction reverse
            if (key == '37' && d != 'right') d = 'left';
            else if (key == '38' && d != 'down') d = 'up';
            else if (key == '39' && d != 'left') d = 'right';
            else if (key == '40' && d != 'up') d = 'down';
            else if (key == '27') init();
            else if (key == '32') pause();
        })
    }

    function paint_cell(x, y) {
        ctx.fillStyle = '#0000ff';
        ctx.fillRect(x * cw, y * cw, cw, cw);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(x * cw, y * cw, cw, cw);
    }

    function create_food() {
        food = {
            x: Math.round(Math.random() * (w - cw) / cw),
            y: Math.round(Math.random() * (h - cw) / cw)
        };
        return food
    }

    function check_collision(x, y, array) {
        for (let i = 0; i < array.length; i++) {
            if (x == array[i].x && y == array[i].y)
                return true;
        }
        return false;
    }
});
