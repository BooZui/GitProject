import Circle from "./circle/Circle.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let circleX = 50;
let circleY = 50;
let radius = 80;
let color = "#000000"

const circle = new Circle(ctx, circleX, circleY, radius, color);
circle.render();