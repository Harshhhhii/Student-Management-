// Load saved data
let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let id = document.getElementById("id").value;
    let course = document.getElementById("course").value;

    if (!name || !age || !id || !course) {
        document.getElementById("output").innerHTML = "⚠️ Fill all fields!";
        return;
    }

    students.push({ name, age, id, course });
    saveData();

    document.getElementById("output").innerHTML = "✅ Student Added!";
}

function displayStudents() {
    if (students.length === 0) {
        document.getElementById("output").innerHTML = "No students available.";
        return;
    }

    let output = "";

    students.forEach(s => {
        output += `
        <div style="background:#f3f4f6; padding:10px; margin:5px; border-radius:8px;">
            <b>${s.name}</b><br>
            ID: ${s.id}<br>
            Course: ${s.course}
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}

function searchStudent() {
    let searchId = document.getElementById("searchId").value;

    let found = students.find(s => s.id === searchId);

    if (found) {
        document.getElementById("output").innerHTML = `
        <div style="background:#c6f6d5; padding:10px; border-radius:8px;">
            ✅ Found: ${found.name} (${found.course})
        </div>`;
    } else {
        document.getElementById("output").innerHTML = "❌ Student Not Found";
    }
}
