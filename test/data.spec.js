import {filterGender, filterStatus, orderZA} from '../src/data.js';


const characters = [
  {   "id": 9,
      "name": "Agency Director",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male"
    },
    {
      "id": 17,
      "name": "Annie",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female"
    },
    {
      "id": 18,
      "name": "Antenna Morty",
      "status": "Alive",
      "species": "Human",
      "type": "Human with antennae",
      "gender": "Male"
    },
    {
      "id": 102,
      "name": "Donna Gueterman",
      "status": "Dead",
      "species": "Robot",
      "type": "",
      "gender": "Female"
    },
    {
      "id": 110,
      "name": "Eli",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male"
    }   
];


describe('filderGender', () => {
  it('is a function', () => { expect(typeof filterGender).toEqual('function');
  });
  it('should return female characters when filter is female', () => {
    const results= filterGender(characters, "gender", "Female");
    results.forEach((character) => {
      expect(filterGender(character)).toEqual("Female");
    });
  });
    it('should return male characters when filter is male', () => {
      const results= filterGender(characters, "gender", "Male");
      results.forEach((character) => {
        expect(filterGender(character)).toEqual( "Male");
      });
    });
  });

describe('filterStatus', () => {
  it('is a function', () => { expect(typeof filterStatus).toEqual('function');
  });
  it('should return alive characters when filter is alive', () => {
    const results= filterStatus(characters, "gender", "Alive");
    results.forEach((character) => {
      expect(filterStatus(character)).toEqual("Alive");
    });
  });
  it('should return dead characters when filter is dead', () => {
    const results= filterStatus(characters, "gender", "Dead");
    results.forEach((character) => {
      expect(filterStatus(character)).toEqual("Dead");
});
});
});

describe('orderZA', () => {
  it('is a function', () => { expect(typeof orderZA).toEqual('function');
  });
  it('must return the characters ordered from Z to A', () => {
    const results= orderZA(characters);
    results.sort((character) => {
     expect(orderZA(character)).toEqual("ZA");
    });
  });  
});

