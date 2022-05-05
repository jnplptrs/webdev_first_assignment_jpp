const data = [
  {
    "ID": "1",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "2",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "3",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "4",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "5",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "6",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "7",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "8",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "9",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "10",
    "FirstName": "Max",
    "LastName": "Mustermann",
    "Gender": "1",
    "DOB": "2000/01/01",
    "Department": "Applied computer science",
    "EmailID": "maxmustermann@muster.com",
    "JoiningDate": "2000-01-02"
  },
  {
    "ID": "10",
    "FirstName": "Jesus",
    "LastName": "Wintermanager",
    "Gender": "1",
    "DOB": "1996/06/06",
    "Department": "Business Management",
    "EmailID": "emperorSigmar@warhammer.com",
    "JoiningDate": "2015-09-01"
  }
]
function filterDepartment(students, Department) {
  return students.filter(function (e) {
    return e.Department === Department
  });
}

function filterJoiningYear(students, Semester) {
  if (Semester === "Summer") {
    return students.filter(function (e) {
      return e.JoiningDate.split("-")[1] >= 4 && e.JoiningDate.split("-")[1] <= 8
    });
  } else if (Semester === "Winter") {
    return students.filter(function (e) {
      return e.JoiningDate.split("-")[1] >= 9 || e.JoiningDate.split("-")[1] <= 3
    });
  }
}


function displayTable(data){
  let tempData = data.slice()

  if(document.getElementById("staffDepartment").value != "All"){
    tempData = filterDepartment(tempData, document.getElementById("staffDepartment").value)
  }

  if(document.getElementById("staffSemester").value != "All"){
    tempData = filterJoiningYear(tempData, document.getElementById("staffSemester").value)
  }

  let tab = '<table>';
  tab += '<tr>';
  for (let rowname in tempData[0]){
    tab += '<th>' + rowname + '</th>';
  }
  tab += '</tr>'
  for(let count = 0;count < tempData.length;count++){
    tab += '<tr>';
    for (let Tdata in tempData[count]){
      tab += '<td>' + tempData[count][Tdata] + '</td>';
    }
    tab += '</tr>'
  }
  tab += '</table>'
  return document.getElementById("staffTable").innerHTML = tab;
}

window.onload = function (){
  displayTable(data)
}
