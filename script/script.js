function text_number(form) {
    var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/package.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    let pow = JSON.parse(package);
    let NumberInput = form.number.value;
    alert(pow);

    let arr5 = ['','тысяч','миллион'];
    let arr4 = ['','один','два','три','четыре','пять','шесть','семь','восемь','девять','одна','две'];
    let arr3 = ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
    let arr2 = ['', 'десять','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'];
    let arr1 = ['','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
    let number = (NumberInput + '').split('');
    number.reverse();
    let k = Math.floor(number.length / 3) - 1;
    if(k > 31)
        return alert('Зачем вам такое большое число?');
    let x = number.length % 3;
    let num, hundred, ten, unit, NumberOutput = [];
    number = number.join('');

    if (x == 1) {
        unit = number % 10;
        number = Math.floor(number / 10);

        k++;
        if(k == 1 && unit == 1)
            NumberOutput.push(arr4[10]);
        if(k == 1 && unit == 2)
            NumberOutput.push(arr4[11]);
        if(k != 1 || k == 1 && unit != 1 && unit != 2)
            NumberOutput.push(arr4[unit]);
        //  пушим тысячи
        if(k == 1) {
            if (unit == 1 && ten != 1)
                NumberOutput.push(arr5[k] + 'а');
            if (unit > 1 && unit < 5 && ten != 1)
                NumberOutput.push(arr5[k] + 'и');
            if(unit == 1 && ten == 1 || unit > 4)
                NumberOutput.push(arr5[k]);
        }
        // пушим для остальных чисел кроме тысяч
        if(k > 1){
            if(unit == 1 && ten != 1)
                NumberOutput.push(arr5[k]);
            if(unit > 1 && unit < 5 && ten != 1)
                NumberOutput.push(arr5[k] + 'а');
            if(unit == 1 && ten == 1 || unit > 4)
                NumberOutput.push(arr5[k] + 'ов');
        }
        k--;
    }

    if (x == 2) {
        ten = number % 10;
        number = Math.floor(number / 10);
        unit = number % 10;
        number = Math.floor(number / 10);

        //  проверка на 11-19
        if (ten == 1 && unit != 0)
            NumberOutput.push(arr3[unit]);
        if (unit == 0)
            NumberOutput.push(arr2[ten]);
        k++;
        //  пушим тысячи
        if(k == 1) {
            if (unit == 1 && ten != 1)
                NumberOutput.push(arr5[k] + 'а');
            if (unit > 1 && unit < 5 && ten != 1)
                NumberOutput.push(arr5[k] + 'и');
            else
                NumberOutput.push(arr5[k]);
        }
        // пушим для остальных чисел кроме тысяч
        if(k > 1){
            if(unit == 1 && ten != 1)
                NumberOutput.push(arr5[k]);
            if(unit > 1 && unit < 5 && ten != 1)
                NumberOutput.push(arr5[k] + 'а');
            if(unit == 1 && ten == 1 || unit > 4 || unit == 0)
                NumberOutput.push(arr5[k] + 'ов');
        }
        k--;
    }

    // пушим тройки цифр
    while(number > 0) {
        num = number % 1000;
        number = Math.floor(number / 1000);
        unit = Math.floor(num / 100);
        num = num - unit * 100;
        ten = Math.floor(num / 10);
        hundred = num - ten * 10;
        //  проверка на 11-19
        if (ten == 1) {
            NumberOutput.push(arr1[hundred]);
            NumberOutput.push(arr3[unit]);
        }
        else {
            NumberOutput.push(arr1[hundred]);
            NumberOutput.push(arr2[ten]);
            if(k == 1 && unit == 1)
                NumberOutput.push(arr4[10]);
            if(k == 1 && unit == 2)
                NumberOutput.push(arr4[11]);
            if(k != 1 || k == 1 && unit != 1 && unit != 2)
                NumberOutput.push(arr4[unit]);
        }
        //  пушим тысячи
        if(k == 1 && hundred != 0 || k == 1 && ten != 0 || k == 1 && unit != 0) {
            if (unit == 1 && ten != 1)
                NumberOutput.push(arr5[k] + 'а');
            if (unit > 1 && unit < 5 && ten != 1)
                NumberOutput.push(arr5[k] + 'и');
            if (unit == 1 && ten == 1 || unit > 4 || unit == 0)
                NumberOutput.push(arr5[k]);
        }
        // пушим для остальных чисел кроме тысяч
        if(k > 1 && hundred != 0 || k > 1 && ten != 0 || k > 1 && unit != 0) {
            if(unit == 1 && ten != 1)
                NumberOutput.push(arr5[k]);
            if(unit > 1 && unit < 5 && ten != 1)
                NumberOutput.push(arr5[k] + 'а');
            if(unit == 1 && ten == 1 || unit > 4 || unit == 0)
                NumberOutput.push(arr5[k] + 'ов');
        }
        k--;
    }
    //   выводим результат
    NumberOutput = NumberOutput.filter(function(e){return e});
    NumberOutput = NumberOutput.join(' ');
    alert(NumberOutput);
}