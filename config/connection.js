const { Sequelize } =  require('sequelize');

const sequelize =  new Sequelize("postgres://mpwlxmik:LB4CnmtiP6qrSQa6Xfw1EJ3o6bAV855b@motty.db.elephantsql.com/mpwlxmik",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate(); 
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!', error);
  }


  module.exports={Sequelize,sequelize};