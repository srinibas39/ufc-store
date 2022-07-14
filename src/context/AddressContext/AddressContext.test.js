
describe("testing Addresss Reducer", () => {
    test("It should add new address ", () => {
        const addressForm = {
            country: "India",
            name: "Adarsh Ballika",
            house: "#1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony",
            city: "Banglore",
            state: "Maharashtra ",
            zipcode: "853008",
            phn: "5719801234",
        }

        const action = { type: "ADDRESS", payload: addressForm }

        const initialState = {
            addresses: [],
        }

        const expectedState = {
            addresses: [{
                country: "India",
                name: "Adarsh Ballika",
                house: "#1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony",
                city: "Banglore",
                state: "Maharashtra ",
                zipcode: "853008",
                phn: "5719801234",
            }],
        }

        
    })
})