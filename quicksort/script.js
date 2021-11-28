var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
    for (var i = 0; i < 20; i++) {

        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);

        // Creating element div
        var array_ele = document.createElement("div");

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
    var value = 0;

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    // Creating label element for displaying 
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html 
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
    
}

// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {

        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame(function () {

            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

// Asynchronous BubbleSort function
async function InsertionSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");
    var blockscolour = [];
    var empty = blocks[blocks.length - 1].style.transform;

    // BubbleSort Algorithm
    for (var i = 1; i < blocks.length - 1; i++) {

        for (var i = 0; i < blocks.length - 1; i++) {
            colour = blocks[i].style.getPropertyValue('block')
            blockscolour.push(colour)
        }

        var current = blocks[i];
        var temp = blocks[i].style.transform;
        // The last element of our sorted subarray
        var j = i - 1;
        while ((j > -1) && (current < blocks[j])) {
            //Biggest value yet colours
            blocks[j].style.backgroundColor = "#13CE66";
            blockscolour[j] = "#13CE66";

            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            console.log("run");

            blocks[i].style.transform = empty;

            await swap(blocks[j], blocks[j + 1]);
            blocks = document.querySelectorAll(".block");

            // Changing the color to the previous one
            blocks[j].style.backgroundColor = blockscolour[j];
            blocks[j + 1].style.backgroundColor = blockscolour[j+1];
            j--;
        }
        blocks[j + 1].style.transform = temp;
    }
}

// Calling generatearray function
generatearray();

// Calling BubbleSort function
InsertionSort();