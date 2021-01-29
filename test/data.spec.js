import {filterGender} from '../src/data.js';


describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns `${genderlessCharacter}`', () => {
    expect(filterGender()).toBe('${genderlessCharacter}');
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
