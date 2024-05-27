
const create_hashmap = function () {
    let capacity = 16
    let buckets = Array(capacity).fill([null,null]);
    let load_factor = 0.75

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }

    const set = function (key,value) {
        let hashCode = hash(key);
        buckets[hashCode] =  [key,value]
        if (length()>=(capacity*load_factor)) {
            capacity*=2
        }
    }

    const get = function (key) {
        if (has(key)) {
            return buckets[hash(key)][1];
        }
    }

    const has = function (key) {
        return buckets[hash(key)][0]===key;
    }

    const remove = function (key) {
        let hashCode = hash(key)
        buckets[hashCode] = [null,null]
    }

    const length = function () {
        let count = 0
        for (let i = 0; i < capacity; i++) {
            if (buckets[i][0] != null) {
                count++
            }
        }
        return count
    }

    const clear = function () {
        for (let i = 0; i < capacity; i++) {
            buckets[i] = [null, null]
        }
    }

    const keys = function () {
        let arr = []
        for (let i = 0; i < capacity; i++) {
            if (buckets[i][0] !== null) {
                arr.push(buckets[i][0])
            }
        }
        return arr
    }

    const values = function () {
        let arr = []
        for (let i = 0; i < capacity; i++) {
            if (buckets[i][1] !== null) {
                arr.push(buckets[i][1])
            }
        }
        return arr
    }

    const entries = function () {
        return buckets
    }

    return {set, get, has, remove, length, clear, keys, values, entries}
}