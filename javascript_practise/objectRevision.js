/*
The personDetails() function is called with two parameters, a and b. These represent the first name and last name of a person.
Complete the function personDetail() such that it returns an object modelling a person that has the following properties:
    firstName: this value is equal to parameter a.
    lastName: this value is equal to parameter b.
    fullName: this value is equal to concatenation of a and b separated by a space.
*/

function personDetail(a, b) {
    let obj = {
          firstName : a,
          lastName : b,
          fullName: a+" "+b
    }
    return obj
}