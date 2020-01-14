!function () {
    !function t() {
        try {
            !function c(n) {
                (isNaN(n) || n % 20 === 0) &&
                    function () { }.constructor("'this is an anti-debugging tool';debugger")()
                c(++n)
            }(0)
        } catch (e) {
            setTimeout(t, 1e3)
        }
    }()
}();