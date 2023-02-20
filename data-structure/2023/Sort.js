function ArrayList() {
  let array = [];

  this.insert = function (item) {
    array.push(item);
  };

  const swap = function (index1, index2) {
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  this.toString = function () {
    return array.join();
  };

  this.bubbleSort = function () {
    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  this.selectionSort = function () {
    const length = array.length;
    let indexMin;

    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  this.insertionSort = function () {
    const length = array.length;
    let j;
    let temp;
    for (let i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  const mergeSortRec = function (array) {
    const length = array.length;

    if (length === 1) {
      return array;
    }

    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  const merge = function (left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }

    return result;
  };

  this.quickSort = function () {
    quick(array, 0, array.length - 1);
  };

  const partition = function (array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    console.log("피봇은 " + pivot + "; 좌측 포인터는 " + left + "; 우측 포인터는 " + right);

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
        console.log("i = " + i);
      }

      while (array[j] > pivot) {
        j--;
        console.log("j = " + j);
      }

      if (i <= j) {
        console.log("swap " + array[i] + " with " + array[j]);
        swapQuickStort(array, i, j);
        i++;
        j--;
      }
    }

    return i;
  };

  const swapQuickStort = function (array, index1, index2) {
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  const quick = function (array, left, right) {
    let index;

    if (array.length > 1) {
      index = partition(array, left, right);

      if (left < index - 1) {
        quick(array, left, index - 1);
      }

      if (index < right) {
        quick(array, index, right);
      }
    }
    return array;
  };

  this.binarySearch = function (item) {
    this.quickSort();

    let lowIndex = 0;
    let highIndex = array.length - 1;
    let midIndex;
    let element;

    while (lowIndex <= highIndex) {
      midIndex = Math.floor((lowIndex + highIndex) / 2);
      element = array[midIndex];
      if (element < item) {
        lowIndex = midIndex + 1;
      } else if (element > item) {
        highIndex = midIndex - 1;
      } else {
        console.log("found it");
        return midIndex;
      }
    }
    return -1;
  };
}

console.log("********** 퀵 정렬 **********");
array = new ArrayList();

array.insert(3);
array.insert(5);
array.insert(1);
array.insert(6);
array.insert(4);
array.insert(7);
array.insert(2);

console.log(array.toString());

array.quickSort();

console.log(array.toString());

console.log("********** 이진 검색 **********");

console.log(array.binarySearch(3));
