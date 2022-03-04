var arrayList = [
  ["Tejay", "Error Handling", "Some Details"],
  ["Daniel", "Logic Troubleshooting", "More Details"],
  ["Steve", "CSS Design", "Other Details"],
];
var index = 0;

function newTicket() {
  var r = document.querySelector(":root");
  r.style.setProperty("--ticketCreationVisibility", "visible");
  r.style.setProperty("--ticketDisplayVisibility", "hidden");
}

function displayTickets() {
  for (i = 0; i < arrayList.length; i++) {
    for (j = 0; j < arrayList[i].length - 1; j++) {
      if (arrayList[i][j] == "") {
        break;
      } else {
        var table = document.getElementById("listItems");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = arrayList[i][j];
        cell2.innerHTML = arrayList[i][j + 1];
        j++;
      }
    }
  }
}

function addTicket() {
  var r = document.querySelector(":root");
  r.style.setProperty("--ticketCreationVisibility", "hidden");
  r.style.setProperty("--ticketDisplayVisibility", "visible");

  var customerName = document.getElementById("customerName").value;
  var subject = document.getElementById("subject").value;
  var details = document.getElementById("details").value;

  var table = document.getElementById("listItems");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = customerName;
  cell2.innerHTML = subject;

  //   var ticket = {
  //     customerName: customerName,
  //     subject: subject,
  //     details: details,
  //   };

  arrayList.push([customerName, subject, details]);
  document.getElementById("customerName").value = "";
  document.getElementById("subject").value = "";
}

function viewTicket(e) {
  //Clicking a ticket will open the Edit window
  //   alert(e.target.innerText); //current cell
  //   alert(e.target.parentNode.innerText); //Current row.
  var ticketSelected = e.target.parentNode.innerText;
  var ticketKey = ticketSelected.split("\t", 1);

  console.log(ticketKey);

  var r = document.querySelector(":root");
  r.style.setProperty("--ticketCreationVisibilityEdit", "visible");
  r.style.setProperty("--ticketDisplayVisibility", "hidden");

  for (i = 0; i < arrayList.length; i++) {
    for (j = 0; j < arrayList[i].length; j++) {
      if (arrayList[i][j] == ticketKey) {
        document.getElementById("customerNameEdit").value = arrayList[i][j];
        document.getElementById("subjectEdit").value = arrayList[i][j + 1];
        document.getElementById("detailsEdit").value = arrayList[i][j + 2];

        index = i;
        // console.log(arrayList[i][j]);
        // console.log(arrayList[i][j + 1]);
        // console.log(arrayList[i][j + 2]);
        break;
      }
    }
  }
}

function addTicketEdit() {
  var customerName = document.getElementById("customerNameEdit").value;
  var subject = document.getElementById("subjectEdit").value;
  var details = document.getElementById("detailsEdit").value;

  var editItem = [customerName, subject, details];
  arrayList.splice(index, 1, editItem);

  cancelBtnEdit();
}
function cancelBtn() {
  var r = document.querySelector(":root");
  r.style.setProperty("--ticketCreationVisibility", "hidden");
  r.style.setProperty("--ticketDisplayVisibility", "visible");
}
function cancelBtnEdit() {
  var r = document.querySelector(":root");
  r.style.setProperty("--ticketCreationVisibilityEdit", "hidden");
  r.style.setProperty("--ticketDisplayVisibility", "visible");
}

function deleteBtnEdit() {
  var table = document.getElementById("listItems");
  for (i = 0; i < arrayList.length; i++) {
    table.deleteRow(-1);
  }
  arrayList.splice(index, 1);
  var r = document.querySelector(":root");
  r.style.setProperty("--ticketCreationVisibilityEdit", "hidden");
  r.style.setProperty("--ticketDisplayVisibility", "visible");
  displayTickets();
}
