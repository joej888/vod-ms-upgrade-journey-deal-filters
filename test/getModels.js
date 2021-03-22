const chai = require ('chai');
const chaiHttp = require("chai-http")
const expect = chai.expect;
chai.use(chaiHttp)
const app = require("../app")

describe("GET MODELS", () => {

	it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
        	.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/productSpecification')
            .query({
                brandName:'apple'
            })       
    	expect(res.status).to.equal(200)
       
	})

    it("should return status 200", async () => {
    	let res = await chai
        	.request(app)
        	.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/productSpecification')
            .query({
                brandName:'samsung'
            })       
    	expect(res.status).to.equal(200)
       
	})

    it("should return status 404", async () => {
    	let res = await chai
        	.request(app)
        	.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/productSpecification')
            .query({
                brandName:''
            })       
    	expect(res.status).to.equal(404)
       
	})

    it("should return status 404", async () => {
    	let res = await chai
        	.request(app)
        	.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/productSpecification')
            .query({
                brandName:'xyz'
            })       
    	expect(res.status).to.equal(404)
       
	})
})