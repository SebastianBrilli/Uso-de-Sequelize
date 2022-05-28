module.exports= (sequelize ,dataTypes)=>{
    
    let alias='Genre';
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        ranking:{
            allowNull: false,
            type: dataTypes.INTEGER
        },
        active:{
            allowNull: false,
            type: dataTypes.INTEGER
        },
        }
        let config={
            tableName: 'genres', 
            timestamps: false 
            }
    
    
    const Genre= sequelize.define(alias, cols, config)
        return Genre
}