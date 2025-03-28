// No.1
// Let is a globally scoped in that values can be reassigned and redeclared, 
// Const is a block scoped, it cannot be reassigned neither redeclared and 
// Var s also a block scoped where it can be reassigned but not redeclared

// No.2
// Javascript objects are used in the reallife entities while arrays are not

// No.3
// == are used to convert loose entities before converting them while
//  === are used to convert strict entities

// No.4
// In JavaScript, an event is an occurrence that happens in the browser, where a user is interacting with a page element
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ButtonClickEvent</title>
</head>
<body>
    <button id="Button">Click Me!</button>

    <script>
        const button = document.getElementById('Button');
        button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    </script>

</body>
</html>


// No.5
// Map is used to transform arrays and to also create a new array while
//  ForEach method is used to perform actions and don't need a new array

