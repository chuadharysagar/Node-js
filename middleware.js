module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide age");
    }
    if (req.query.age < 18) {
        resp.send("You are not elligible Under age");
    }
    else {
        next();
    }
}