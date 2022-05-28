module.exports= (sequelize ,dataTypes)=>{
    
    let alias='Actor';
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_name:{
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        last_name:{
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        rating:{
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER
        },
        }
        let config={
            tableName: 'actors', 
            timestamps: false 
            }
    
    
    const Actor= sequelize.define(alias, cols, config)
        return Actor
}