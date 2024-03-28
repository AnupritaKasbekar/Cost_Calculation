module.exports = (sequelize,DataTypes)=>{
    const Importsamples = sequelize.define("Importsamples",{
          
            ided:{
                 type:DataTypes.FLOAT,
                 
            },
            fn:{
                type:DataTypes.STRING(40),
              
            },
            ln:{
                type:DataTypes.STRING(50)
            },
           
         
    });
   
    return Importsamples;
}