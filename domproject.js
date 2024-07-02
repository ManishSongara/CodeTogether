
const form=document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
const width=parseInt(document.querySelector('#width').value);
const result=document.querySelector('#result');
  if(height==''|| height < 0 || isNaN(height) )
    {
      result.innerHTML=  `please valid height${height}`;
    }
    else if (width==''|| width < 0 || isNaN(width) )
    {
      result.innerHTML=  `please valid width${width}`;
    }
    else{
      const bmi=(width / (height*height)*10000).toFixed(2);
      result.innerHTML=bmi;
    }
});
