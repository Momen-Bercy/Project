// الكانفاس بيعمل كل الشغل صور

/* var myCanvas = document.getElementById('myCanvas'),

    myContext = myCanvas.getContext('2d');
    
    myCanvasWidth = myCanvas.width;
    
    myCanvasHeight = myCanvas.height;
    
    */
    
    // context معناها سياق او اللوحة او القماشة اللي هترسم عليها 

    // myContext = myCanvas.getContext('2d'); builtin function 
  
// canvas(fillRect,fillStyle, strokStyle, lineWidth & clearRec)
  
/* myContext.fillStyle = '#080';

myContext.fillRect(10, 10, 100, 50);

myContext.fillStyle = '#f00';

myContext.fillRect(20, 20, 100, 50);

myContext.fillStyle = '#00f';

myContext.fillRect(30, 30, 100, 50);

// كل واحد بلون وابعاد مختلفة 

myContext.strokeStyle = '#ff0';

myContext.lineWidth = 10;

// lineWidth يعتبر ضخامة ال border

myContext.strokeRect(100, 100, 100, 50);

// ال stroke مبيملاش المحتوى عامل زي البوردر

myContext.fillRect(0, 0, 800, 400);

myContext.clearRect(10, 10, 100, 100);

لو كل كانفاس بلون يشيل منه حتة */

/*

myContext.fillStyle = '#eee';

myContext.fillRect(0, 0, 300, 300);

myContext.strokeStyle = '#f00';

myContext.lineWidth = 5;

// Top Left Line

myContext.moveTo(10, 10);

myContext.lineTo(130, 130);

// Top Right Line

myContext.moveTo(290, 10);

myContext.lineTo(170, 130);

// Bottom Left Line

myContext.moveTo(10, 290);

myContext.lineTo(130, 170);

// Bottom Right Line

myContext.moveTo(290, 290);

myContext.lineTo(170, 170);

myContext.stroke()

*/

/*

myContext.font = "60px arial";

myContext.fillStyle = "#f00";

myContext.fillText('M', 20, 60,);

myContext.font = "70px arial"

myContext.fillStyle = "#0f0";

myContext.fillText('o', 40, 80,);

myContext.font = "80px arial"

myContext.fillStyle = "#d0d";

myContext.fillText('m', 60, 100,);

myContext.font = "90px arial"

myContext.fillStyle = "#ee0";

myContext.fillText('e', 80, 120,);

myContext.font = "100px arial"

myContext.fillStyle = "#00f";

myContext.fillText('n', 100, 140,);

myContext.font = "110px arial"

myContext.strokeStyle = "#00f";

myContext.strokeText('Momen', 50, 200);

*/

// Creat The Canvas On Page

var myPageCanvas = document.createElement('canvas');

// Assing Id To This Canvas

myPageCanvas.id = 'c';

// Customize The Canvas

myPageCanvas.width = 600;
myPageCanvas.height = 100;
myPageCanvas.style.display = 'block';
myPageCanvas.style.margin = '50px auto';

// Add The Canvs To the Page

document.body.appendChild(myPageCanvas);

// Get Canvas Information

var myCanvas = document.getElementById('c');

    myContext = myCanvas.getContext('2d');

// Fill & Style Option

myContext.fillStyle = '#f00';
myContext.strokeStyle = '#00f';
myContext.lineWidth = 2;
myContext.font = '60px Arial';

// Add The Text

myContext.fillText('Elzero Web School', 50, 80);
myContext.strokeText('Elzero Web School', 50, 80);

// Add The Second Text

myContext.strokeStyle = '#080';
myContext.lineWidth = 1;
myContext.strokeText('Elzero Web School', 50, 80);