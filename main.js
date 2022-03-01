name_of_students = [];

function submit()
{
    var name1 = document.getElementById("name_of_the_student_1").value;
    var name2 = document.getElementById("name_of_the_student_2").value;
    var name3 = document.getElementById("name_of_the_student_3").value;
    var name4 = document.getElementById("name_of_the_student_4").value;

    name_of_students.push(name1);
    name_of_students.push(name2);
    name_of_students.push(name3);
    name_of_students.push(name4);

    console.log (name_of_students);
    
    document.getElementById("display_name").innerHTML = name_of_students;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_students.sort();
    console.log(name_of_students);
    document.getElementById("display_name").innerHTML = name_of_students;
}






