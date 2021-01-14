
function chunkArrayInGroups(arr, size) {

var meret  = arr.length/size;

var ujTomb = [];

    for (var i = 0; i < meret ; i++){

        var belsoTomb= arr.splice(0,size);

        ujTomb.push(belsoTomb);

    }

return ujTomb;

}


chunkArrayInGroups(["a", "b", "c", "d"], 2);