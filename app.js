const noteInput = document.getElementById('note'),
titleInput = document.getElementById('title'),
noteContainer = document.getElementById('note-container'),
submitBtn = document.getElementById('btn');

let notesArr = [],
noteCount = 0;

document.addEventListener("DOMContentLoaded", getSavedNote);

submitBtn.addEventListener("click", () => {
    noteCount++;
  
  if((noteInput.value === "") && (title.value === "")) {
    alert("You must input something before you can submit");
    
    return false;
  } else if ((noteInput.value === "") || (titleInput.value === "")){
    alert("Note cannot be empty or without a header")
  } else {
    const note = noteInput.value,
    title = titleInput.value;
    
    const new_note = {
    title: title,
    note: note
  };
  
  notesArr.push(new_note);

  let noteDiv = document.createElement("div");
  noteDiv.classList.add("note-div");
  noteDiv.innerHTML = `
    <p class="num">${noteCount}</p>
    <h4 class="heading">${new_note.title}</h4>
    <p class="text">${new_note.note}</p>
    <button class="delete-btn">Delete</button>
  `
  
  noteContainer.appendChild(noteDiv);
  
  noteInput.value = "";
  titleInput.value = "";
  }
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    const lead = Array.from(noteContainer.children).indexOf(e.target.parentNode);
    
    notesArr.splice(lead, 1);
    
    localStorage.setItem("notes", JSON.stringify(new_note));
    
    e.target.parentNode.remove();
  }
})

function getSavedNote() {
  if(typeof(storage) !== "undefined") {
    let noteString = localStorage.getItem('notes');
    let savedNote = JSON.parse(noteString);
    return savedNote;
  } else {
    // Sorry dnddjejdjj
  }
}  
