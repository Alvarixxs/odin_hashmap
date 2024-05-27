
const create_hashset = function () {
    let capacity = 16
    let buckets = Array(capacity).fill(null);
    let load_factor = 0.75

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }

    const set = function (key) {
        let hashCode = hash(key);
        buckets[hashCode] =  key
        if (length()>=(capacity*load_factor)) {
            capacity*=2
        }
    }

    const has = function (key) {
        return buckets[hash(key)]===key;
    }

    const remove = function (key) {
        let hashCode = hash(key)
        buckets[hashCode] = null
    }

    const length = function () {
        let count = 0
        for (let i = 0; i < capacity; i++) {
            if (buckets[i] != null) {
                count++
            }
        }
        return count
    }

    const clear = function () {
        for (let i = 0; i < capacity; i++) {
            buckets[i] = null
        }
    }

    const keys = function () {
        return buckets
    }

    return {set, has, remove, length, clear, keys}
}