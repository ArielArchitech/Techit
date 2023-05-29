let products = [
    {
        id: 2536,
        name: "Sony Professional 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
        image: "./Media/Sony.jpeg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:"Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
        image: "./Media/Lenovo.jpeg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:"Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "./Media/Asus.jpeg",},
    ];

    // לכתוב פונקציה שתפקידה להציג את המוצרים בקארדים של בוטסטרפ
    // שלושה קארדים בשורה
    // תמונה של המוצר, שם המוצר, קטגוריה וכפתור לפרטים מלאים

function showCardSection(){
    for(let i = 0 ; i < products.length ; i++){
        document.getElementById("products").innerHTML += 
        `<div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}" style="height: 250px;">
                <div class="card-body">
                    <h5 class="card-title">${products[i].name}</h5>
                    <p class="card-text">${products[i].category}</p>
                    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="modalInfo(${i})">See More</a>
                </div>
            </div>
        </div>` 
}
}    
    showCardSection();

    // פונקציה שמזינה פרטים למודאל על סמך אינדקס

    function modalInfo(index) {
            document.getElementById("ModalLabel").innerHTML = products[index].name;
            document.getElementById("modalBody").innerHTML = 
            `<p class="text-start lh-lg"><b>Serial Number</b>: 
            ${products[index].id}</p>
            <p class="text-start lh-lg"><b>Category</b>: 
            ${products[index].category}</p>
            <p class="text-start lh-lg"><b>Description</b>: 
            ${products[index].description}</p>
            <p class="fs-3 text-end lh-lg"><b>Price</b>: 
            ${products[index].price}</p>
            `
        }