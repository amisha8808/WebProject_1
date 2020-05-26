var student = {

	name:"",
	type:"student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event)
{
	document.getElementById('name').addEventListener("keyup",keyup);

}

function keyup(event)
{
	calculateNumericOutput();
}

function calculateNumericOutput()
{
	student.name=document.getElementById('name').value;
	var totalNamevalue=0;
	for(var i=0;i<student.name.length;i++)
	{
		totalNamevalue += student.name.charCodeAt(i);

	}
var output ="total ANSCII value of person's name"+totalNamevalue;
document.getElementById('output').innerText=output;
}