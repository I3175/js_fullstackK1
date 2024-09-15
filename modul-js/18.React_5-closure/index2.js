
// Hàm này chạy
function setupHelp() {
    var helpText = [
        {id: "email", help: "Your email address"},
        {id: "name", help: "Your full name"},
        {id: "age", help: "Your age (you must be over 16)"},

    ];



    for(var i = 0; i < helpText.length; i++) 
    {
        // Culprot is the use of 'var' on this line
        let item = helpText[i];

        // tao ra cac version khac nhau bang closure
        document.getElementById(item.id).onfocus = function () {
            document.getElementById("help").textContent = item.help;
        }
    }

}

setupHelp();
