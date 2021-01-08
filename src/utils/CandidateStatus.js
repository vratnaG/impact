let status = {}

export var CandidateStatus = (function () {
    const _rejected = 2
    const _seleceted = 1
    const _NA = -1
    function initStatus() {
        status = {}
    }

    function reject(id) {
        return status[id] = _rejected
    }

    function select(id) {
        return status[id] = _seleceted
    }

    function getStatus(id) {
        console.log(status)
        return status[id] || _NA
    }

    return { // public interface
        initStatus,
        reject,
        select,
        getStatus
    };
})();


