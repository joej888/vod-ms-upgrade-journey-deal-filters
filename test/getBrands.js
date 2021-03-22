const chai = require ('chai');
const chaiHttp = require("chai-http")
const expect = chai.expect;
chai.use(chaiHttp)
const app = require("../app")

describe("GET BRANDS", () => {

	it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
        	.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/category/brandNames')       
    	expect(res.status).to.equal(200)
       
	})
})