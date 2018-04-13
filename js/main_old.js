{
    document.body.style.display = "grid";

    const FILE = document.getElementById('file');
    const IMG = document.getElementById('image');
    var TMP;

    $('#newstyle').on('submit', function(e) {
        console.log(e);
        e.preventDefault();
        
        TMP = e;
    })





    // function onchange FILE
    file.onchange = function(e) {
        var r = new FileReader();
        r.readAsDataURL(FILE.files[0]);
        r.onloadend = function() {
            IMG.src = r.result
        }
    }


    // Menu toggle submenu
    $('#menu').on('click', function() {
        var m = document.getElementById('submenu');
        if (m.style.display == 'block') $('#submenu').hide(300)
        else $('#submenu').show(300)
    });
    $('#submenu li').on('click', function(e) {
        loadPage(e.target.attributes['data-page'].value);
        $('#submenu').hide(300)
    });


    function ocr() {

        //var myimage = document.getElementById("largeImage").src;

        Tesseract.recognize(IMG)
            .then(function(result) {
                console.log(result);
                document.getElementById("textarea1").value = result.text; // assign results to a textbox
            })
    }
}