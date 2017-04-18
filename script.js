
console.log("Proyecto Elementos de Programacion Orientado a Objetos");


d3.json("https://data.ny.gov/resource/vz4f-yrf8.json",function(data) {
    console.log(data);
    });


    $.get('https://data.ny.gov/resource/vz4f-yrf8.json', function(json){
      //  document.write(json.length);
        console.log(json.length);
        $("#tamano").html("Numero de elementos: "+json.length);
        var perro=[];
        for(i=0 ;i<7;i++){
            perro.push(i);
        }
    });






d3.select("svg")
.selectAll("rect")
.data([3.85, 3.98, 4.2, 4.24, 4.28, 4.59, 5.16, 5.31,5.67, 6.23, 6.40, 6.65, 6.95, 7.04,7.35,7.84,7.96,8.32,8.59, 8.78, 8.82, 9.08,9.25, 9.43, 9.55, 10.39, 10.90, 11.59, 11.67, 12.99, 13.2, 13.77, 14.39, 15.5, 48.72, 51.27, 53.58, 55.09, 55.43, 64.91, 65.62, 66.72, 69.72, 73.45 ])
.enter()
.append("rect")
.attr("width",17)
.attr("height", function(d) {return d})
.style("fill", "#00FFFF")
.style("stroke", "#000080")
.style("stroke-width", "1px")
.attr("x", function(d,i) {return i * 18;})
.attr("y", function(d) {return 200 - d;});
