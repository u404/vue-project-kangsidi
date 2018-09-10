export default {
  // 冒泡排序
  popSort: function (arr) {
    // 习惯性的是往下沉
    for (let i = 0, len = arr.length; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    // 这是往上冒
    // for (let i = 0, len = arr.length; i < len; i++) {
    //   for (let j = len - 1; j > i; j--) {
    //     if (arr[j] < arr[j - 1]) {
    //       let temp = arr[j]
    //       arr[j] = arr[j - 1]
    //       arr[j - 1] = temp
    //     }
    //   }
    // }
  },
  choiceSort: function (arr) {
    for (let i = 0, len = arr.lenth; i < len - 1; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < min) {
          min = j
        }
      }
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  },
  insertSort: function (arr) {
    for (let i = 1, len = arr.lenth; i < len; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j]
          arr[j] = arr[j - 1]
          arr[j - 1] = temp
        }
      }
    }
  },
  // 归并排序（基础版），这个版本会在过程中创建非常多的数组对象，这一点会导致一定的性能损耗
  mergeSort: function (arr) {
    // 二路合并：对比两个数组未合并的元素，按大小插入结果数组，直到其中一个数组都push到结果数组（没得比了），把剩下的一个数组依次push到结果数组
    const merge = function (arr1, arr2) {
      let result = []
      let i1 = 0
      let i2 = 0
      while (arr1[i1] && arr2[i2]) {
        if (arr1[i1] < arr2[i2]) {
          result.push(arr1[i1++])
        } else {
          result.push(arr2[i2++])
        }
      }
      while (arr1[i1]) {
        result.push(arr1[i1++])
      }
      while (arr2[i2]) {
        result.push(arr2[i2++])
      }
      return result
    }

    const splitMerge = function (arr) {
      if (arr.length === 1) {
        return arr
      }
      let middle = Math.floor(arr.length / 2)
      let left = arr.slice(0, middle)
      let right = arr.slice(middle, arr.length)
      merge(splitMerge(left), splitMerge(right))
    }

    return splitMerge(arr)
  },
  mergeSortOptimize: function (arr) {
    const merge = function (arr, first, middle, last, temp) {
      let i = first
      let j = middle + 1
      let k = 0
      while (i <= middle && j <= last) {
        if (arr[i] < arr[j]) {
          temp[k++] = arr[i++]
        } else {
          temp[k++] = arr[j++]
        }
      }
      while (i <= middle) {
        temp[k++] = arr[i++]
      }
      while (j <= last) {
        temp[k++] = arr[j++]
      }

      for (let i = 0; i < k; i++) {
        arr[first + i] = temp[i]
      }
    }
  }
}

const le = {
  aa: 0
}
const le2 = {
  aa: 1
}
export { le }

export { le2 }
