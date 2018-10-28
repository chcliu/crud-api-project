const app = require("../server/server.js");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("GET /api", () => {
    let status;
    let response;

    before((done) => {
        chai
            .request(app)
            .get("/api")
            .set("Content-Type", "application/json")
            .end((_, res) => {
                status = res.status;
                response = res.text;
                done();
            });
    });

    it("should return status 200.", (done) => {
        status.should.equal(200);
        done();
    });

    it("should provide a welcome message.", (done) => {
        response.should.be.a("string");
        done();
    });
});