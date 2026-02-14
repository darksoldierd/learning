const todo = [];

function TodoListItem () {
    const todo1 = document.querySelector(".inp").value;
    const date1 = document.querySelector(".dt").value;

    if (!todo1) return; 

    todo.push({
        listitem: todo1,
        listdate: date1
    });

    document.querySelector(".inp").value = "";
    document.querySelector(".dt").value = "";

    show();
}

function show() {
    let str = "";

    for (let i = 0; i < todo.length; i++){
        str += `

            <div class="wrapper">
                <div style="
                width:100px;
                display:flex;
                justify-content:space-between;
                margin:0 120px 0 0;
                align-items:center;
                ">${todo[i].listitem}</div>
                <div style="
                     display:flex;
                justify-content:center;
                align-items:center;
                    margin:0 90px 0 0;
                ">${todo[i].listdate}</div>
                <button
                display:flex;
                justify-content:center;
                align-items:center;
                class="del-btn"
                onclick="removeItem(${i})">Delete</button>
            </div>
        `;
    }

    document.querySelector(".list").innerHTML = str;
}

function removeItem(i){
    todo.splice(i,1);
    show();
}
