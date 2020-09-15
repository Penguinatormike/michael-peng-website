function get_initial_population(popolation_size, cities)
{
    var population = [];
    for (var i = 0; i < POPULATION_SIZE; i++)
        population[i] = random_permutation_cities(cities);  // Each inidividual is an array of city numbers from 0 to NO_CITIES-1.

    return population;
}

// length: the length of an individual
function get_crossover_point(length)
{
    return Math.floor(Math.random() * (length-1)) + 1;  // [1, length-1]
}

// check if an individual is valid or not.
function check_individual(individual)
{
    for (var i = 0; i < individual.length; i++)
        for (var j = i+1; j < individual.length; j++)
            if (individual[i] == individual[j])
                return false;

    return true;
}

function draw_individual(individual, cities, ctx, canvas)
{
    var tmp_cities = [];
    for (var i = 0; i < individual.length; i++)
        tmp_cities[i] = cities[individual[i]];

    draw_cities(tmp_cities, ctx, canvas);
}

function get_distance_between_two_cities(a, b, cities)
{
    if (a == undefined || b == undefined || a >= cities.length || b >= cities.length || a < 0 || b < 0)
        alert('Strange; a=' + a + ', b=' + b);

    return Math.sqrt((cities[a].x - cities[b].x) * (cities[a].x - cities[b].x) +
        (cities[a].y - cities[b].y) * (cities[a].y - cities[b].y));
}

function full_random_permutation_cities(cities)
{
    var permutation = [];
    for (var i = 0; i < cities.length; i++) {
        permutation[i] = i;
    }
    for (var i; i < 100; i++) {
        for (var j = 0; j < cities.length; j++) {
            var k = Math.floor(Math.random() * cities.length);
            var tmp;
            tmp = permutation[j];
            permutation[j] = permutation[k];
            permutation[k] = tmp;
        }
    }

    return permutation;
}

function random_permutation_cities(cities)
{
    var permutation = [];
    var city;
    var target;

    city = 0;
    permutation[city] = Math.floor(Math.random() * cities.length);

    while(permutation.length < cities.length)
    {
        var distances = [];
        var i = 0;
        for (var to = 0; to < cities.length; to++) {
            if (permutation.indexOf(to) < 0) {
                distances[i++] = {city: to, distance: get_distance_between_two_cities(permutation[city], to, cities)};
            }
        }
        distances.sort(function(a, b) { return a.distance - b.distance; });

        target = Math.floor(Math.random() * (distances.length / 3));

        city++;
        permutation[city] = distances[target].city;
        //console.log('distance =' +distances[target].distance);
    }
    //console.log('permutation = ' + permutation[i].distance);
    return permutation;

}

function draw_cities(cities, ctx, canvas)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < cities.length; i++) {
        draw_circle(ctx, cities[i].x, cities[i].y, 5, 0);
        if (i != cities.length - 1)
            draw_line(ctx, cities[i].x, cities[i].y, cities[i+1].x, cities[i+1].y);
        else
            draw_line(ctx, cities[i].x, cities[i].y, cities[0].x, cities[0].y);
    }
}

function draw_line(ctx, x1, y1, x2, y2)
{
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function draw_circle(ctx, x, y, r, a)
{
    ctx.beginPath();
    ctx.arc(x, y, r, a, 2*Math.PI);
    ctx.stroke();
}

function initial_cities(n, width, height)  // n cities; width x height canvas
{
    var cities = [];

    for (var i = 0; i < n; i++) {
        var position = {};
        position['x'] = Math.floor(Math.random() * width);
        position['y'] = Math.floor(Math.random() * height);
        cities[i] = position;
        //cities[i] = {x: Math.floor(Math.random() * width), y: Math.round(Math.random() * height)};
    }

    return cities;
}

function initial_map(cities, width, height)  // width x height canvas
{
    var n = cities.length;
    var distances = [];

    for (var i = 0; i < n; i++) {
        var distance = [];
        var d;
        for (var j = 0; j < n; j++) {
            d = Math.sqrt((cities[i].x - cities[j].x) * (cities[i].x - cities[j].x) +
                (cities[i].y - cities[j].y) * (cities[i].y - cities[j].y));
            distance[j] = d;
        }
        distances[i] = distance;
    }

    return distances;
}