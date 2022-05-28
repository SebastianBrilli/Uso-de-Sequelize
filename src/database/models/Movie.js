module.exports= (sequelize,dataTypes)=>{
    
    let alias='Movie';
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        title:{
            allowNull: false,
            type: dataTypes.STRING(500)
        },
        rating:{
            allowNull: false,
            type: dataTypes.DECIMAL
        },
        awards:{
            allowNull: false,
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        length:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        },
        
        }
        let config={
            tableName: 'movies',
            timestamps: false  
            }
    
    
    const Movie= sequelize.define(alias, cols, config)
        
    return Movie
     
}