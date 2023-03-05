function fn() {
    console.log(this);
}
class C {
    constructor() {
        function fn() {
            console.log(this);
        }
        fn();
    }

    method() {
        fn();
    }
}

const c = new C();
c.method();
