$(document).ready(function (bullsAndCows)
    {
        var randomNumber = (Math.random()*10);
        return randomNumber
    },

    function (game) {
        var a = bullsAndCows();

        for (var i; i = 1; i++)

        {
            var b = bullsAndCows();

            var c = bullsAndCows();

            var d = bullsAndCows();

            if (b != a && c != a && c != b && d != a && d != c && d != b)
            {break}
        }

        var random = a.toString() + b.toString() + c.toString() + d.toString();

        $("random").text();
    },

    function verification() {
        randomNumber = randomNumber.toString();

        verify = true;

        for (var i = 0; i < 4; i++){
            if (randomNumber.lastIndex(randomNumber.charAt(i)) != i)
            {verify = false;
            break;}
        }

        return verify;
    },
    
    function (checkNumber) {
        
    }


);