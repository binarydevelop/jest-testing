const functions = {
    add: (num1 , num2) => {
        return num1 + num2;
    },

    isNull: () => {
        return null; 
    },

    checkValue: (x) => {
        return x
    },

    createUser: () => {
        const user = { firstName: 'Tushar', lastName: 'Roy'};
        return user;
    },

     myBeverage : {
        delicious: true,
        sour: false,
      }

}

module.exports = functions; 