import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "url conction  - postgres://....",
    {
        dialect: "postgres",								       
        define: {									       
            timestamps: false
        }
    }
)

export default sequelize




