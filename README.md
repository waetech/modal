# modal
This is a simple modal with a 3 second delay.
<!DOCTYPE>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Simple Modal</title>
    <link rel="stylesheet" href="style2.css">
    
    
    </head>
<body>
    
    <button id="modalBtn" class="button">Click Here</button>
    
    <div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
        <span class="closeBtn">&times;</span>
            <h2>Welcome to Histology</h2>
        </div>
        <div class="modal-body">
         <p>These are events based on various subjects.</p>
            <p>This site will give you an interactive timeline experience through the history of science, art and other historical events.  Explore each one by clicking on the image and reading a glimpse of the past.  </p>
            <button id="enterBtn"class="button">Enter</button>
        </div>
        <div class="modal-footer">
        <h3>Modal Footer</h3>
        </div>
        
       
        </div>
        
    </div>
    
    <script src="main.js"></script>
    
    </body>



</html>
