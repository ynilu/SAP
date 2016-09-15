

var problems =
        [
            {number1: -7, number2: 3, operator: '+'},
            {number1: 5, number2: -6, operator: '+'},
            {number1: 4, number2: -17, operator: '+'},
            {number1: -8, number2: 19, operator: '+'},
            {number1: 21, number2: -12, operator: '+'},
            {number1: -35, number2: -18, operator: '+'},
            {number1: -29, number2: -16, operator: '+'},
            {number1: -24, number2: -16, operator: '+'},
            {number1: -36, number2: 50, operator: '+'},
            {number1: 61, number2: -24, operator: '+'}
        ];

var round = 0;

var problem = new Vue({
    el: '#problem',
    data: {
        number1: problems[round].number1,
        number2: problems[round].number2,
        operator: problems[round].operator
    },
    methods: {
        check: function () {
            answer = eval(this.number1.toString().concat(this.operator).concat(this.number2.toString()));
            result = $("#result").val();
            if(result == answer)
            {
                console.log('correct');
                console.log(answer);
                console.log(result);
                $('#correct').css('display', 'block');
                $('#wrong').css('display', 'none');
                $('#check').css('display', 'none');
                if(round == problems.length - 1)
                {
                    $('#finish').css('display', 'block');
                    return;
                }
                $('#next').css('display', 'inline-block');
            }
            else
            {
                console.log('wrong');
                console.log(answer);
                console.log(result);
                $('#correct').css('display', 'none');
                $('#wrong').css('display', 'block');
                // hint();
                switch(this.operator) {
                case '+':
                    $('#hint_add').css('display', 'block');
                    break;
                case '-':
                    $('#hint_sub').css('display', 'block');
                    break;
                default:
                    console.log('undefined operator');
                }
            }
        },

        next: function () {
            round++;
            $('#correct').css('display', 'none');
            $('#hint_add').css('display', 'none');
            $('#hint_sub').css('display', 'none');
            $('#next').css('display', 'none');
            $('#check').css('display', 'inline-block');
            $('#result').val('');
            this.number1 = problems[round].number1;
            this.number2 = problems[round].number2;
            this.operator = problems[round].operator;
        }
    }
});



