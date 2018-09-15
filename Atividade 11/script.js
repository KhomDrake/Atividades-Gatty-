let button;
let numbers = [];

function setup()
{
    noCanvas();
    for (let index = 1; index <= 4; index++) {
        createP("Número " + index + ":");
        numbers.push(createInput("0", "number"));
    }   
    createElement("br");
    createElement("br");
    button = createButton("Calcular");
    button.mousePressed(() => {
        
        let number = [];

        for (let i = 0; i < numbers.length; i++) 
        {
            number.push(numbers[i].value());
        }
        for (let i = 0; i < numbers.length; i++) 
        {
            for (let j = 0; j < numbers.length; j++) 
            {
                if(i != j)
                {
                    createP(Compare(number[i], number[j]));
                }
            }
        }
        for (let i = 0; i < numbers.length; i++) 
        {
            number[i]++;
        }

        for (let i = 0; i < numbers.length; i++) 
        {
            for (let j = 0; j < numbers.length; j++) 
            {
                if(i != j)
                {
                    createP(Compare(number[i], number[j]));
                }
            }
        }

    });
}

function draw()
{
    noLoop();
}

function Compare(a, b)
{
    if(a > b)
    {
        return a + " é maior que " + b;
    }
    else if(a < b)
    {
        return a + " é menor que " + b;
    }
    else
    {
        return a + " é igual " + b;
    }

}