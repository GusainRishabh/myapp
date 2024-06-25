    function profiledata() {
            var xhttp;
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            } else {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    const item = xhttp.responseText;
                    const data = JSON.parse(item);


                    document.getElementById("c1").innerHTML=data[0].userName
                }
            }
            xhttp.open("GET", "profile.json","profile.json" ,true);
            xhttp.send();
           }
        function mobiledata() {
            var xhttp;
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            } else {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    const item = xhttp.responseText;
                    const data = JSON.parse(item);

                    document.getElementById("a1").innerHTML=data[0].In_the_box
                    document.getElementById("a2").innerHTML=data[0].productCode
                }
            }
            xhttp.open("GET", "mobile.json","mobile.json" ,true);
            xhttp.send();
           }