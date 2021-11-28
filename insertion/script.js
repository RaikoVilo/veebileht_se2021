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
    array_ele.style.width = `18px`;
    array_ele.style.transform = `translate(${20 * 30}px)`;

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
        let temp = el1.style.transform;
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
    const n = blocks.length;
    var blocks_height = [];
    for (let i = 0; i < n; i++) {
        blocks_height.push(blocks[i].clientHeight)
    }
    for (let i = 0; i < blocks.length - 1; i++) {
        blockscolour.push("#6b5b95")
    }

    // BubbleSort Algorithm
    for (let i = 1; i < (n - 1); i++) {

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
        let i_val = 0;
        let n_val = 0;
        for (let z = 0; z < n; z++) {
            if (blocks[z].clientHeight == blocks_height[i]) {
                i_val = z;
            }
            if (blocks[z].clientHeight == blocks_height[n - 1]) {
                n_val = z;
            }
        }
        let temp = blocks_height[i];
        blocks_height[i] = blocks_height[n-1];
        blocks_height[n - 1] = temp;
        await swap(blocks[i_val], blocks[n_val]);
        blocks = document.querySelectorAll(".block");
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (blocks_height[n-1] < blocks_height[j])) {

            let j1_val = 0;
            let j2_val = 0;
            n_val = 0;
            for (let z = 0; z < n; z++) {
                if (blocks[z].clientHeight == blocks_height[j]) {
                    j1_val = z;
                }
                if (blocks[z].clientHeight == blocks_height[j+1]) {
                    j2_val = z;
                }
                if (blocks[z].clientHeight == blocks_height[n-1]) {
                    n_val = z;
                }
            }

            //Biggest value yet colours
            blocks[j1_val].style.backgroundColor = "#13CE66";
            blockscolour[j] = "#13CE66";

            // To change background-color of the
            // blocks to be compared
            blocks[j1_val].style.backgroundColor = "#FF4949";
            blocks[n_val].style.backgroundColor = "#FF4949";
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            // Changing the color to the previous one
            blocks[j1_val].style.backgroundColor = blockscolour[j];
            blocks[n_val].style.backgroundColor = blockscolour[j + 1];

            temp = blocks_height[j];
            blocks_height[j] = blocks_height[j+1];
            blocks_height[j+1] = temp;
            await swap(blocks[j2_val], blocks[j1_val]);
            blocks = document.querySelectorAll(".block");
            j--;
        }
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
        let j_val = 0;
        n_val = 0;
        for (let z = 0; z < n; z++) {
            if (blocks[z].clientHeight == blocks_height[j+1]) {
                j_val = z;
            }
            if (blocks[z].clientHeight == blocks_height[n - 1]) {
                n_val = z;
            }
        }
        temp = blocks_height[j+1];
        blocks_height[j+1] = blocks_height[n - 1];
        blocks_height[n - 1] = temp;
        blocks[n_val].style.backgroundColor = "#13CE66";
        blockscolour[j+1] = "#13CE66";
        await swap(blocks[j_val], blocks[n_val]);
        blocks = document.querySelectorAll(".block");
    }
}

// Calling generatearray function
generatearray();

// Calling BubbleSort function
InsertionSort();