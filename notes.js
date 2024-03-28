const fs =require("fs");    


const getNotes = () => {
    const notes = JSON.parse(fs.readFileSync("./notes.json","utf-8"));
    return notes;
};
const writeToFile = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
};
const addNote = (note) => {
    const notes = getNotes();
    if (notes.find(item => item===note)){
        console.log("Already added");
    }
    else {
        notes.push(note);
        writeToFile(notes);
        console.log("Noted!!!");
    }

};

const showNote = () => {
    const notes = getNotes();
    notes.forEach((item,idx)=> console.log(`${idx+1}: ${item}`));
};
const deleteNote = (index) => {
    const notes = getNotes();
    
    if(index<=notes.length){
        notes.splice(index-1,1);
        writeToFile(notes);
        console.log("Deleted");
    }
    else{
        console.log("Index number is bigger than the lengthh");
    }

};

module.exports = {
    addNote:addNote,
    showNote:showNote,
    deleteNote:deleteNote,
}