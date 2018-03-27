'use strict';
const Sequelize = require('sequelize');
const crypto = require('crypto');
const config = require('../../config/config');
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
            id: {
              type: Sequelize.STRING,
              primaryKey: true
            },
            username: {
              type: Sequelize.STRING
            },
            password: {
              type: Sequelize.STRING
            },
            avatar: {
              type: Sequelize.STRING
            },
            name: {
              type: Sequelize.STRING
            },
            birthdate: {
                type: Sequelize.DATEONLY
            },
            address_id: {
                type: Sequelize.INTEGER,
                validate:{
                    isInt:{ args: true}
                }
            },
            marker_id: {
                type: Sequelize.INTEGER,
                validate:{
                    isInt:{ args: true}
                }
            },
            role_id: {
                type: Sequelize.INTEGER,
                validate:{
                    isInt:{ args: true}
                }
            }
        },{
            timestamps: false,
            tableName: 'users'
        });
    Users.authenLogin = function(postUsername, postPassword, cb) {
        let hashpassword = crypto.createHmac('sha256', config.crypto_key)
                            .update(postPassword)
                            .digest('hex');
        console.log(hashpassword);
        Users.findOne({where: {username: postUsername, password: hashpassword}}).then(user =>{
            if(!user) cb("logged in failed", user);
            else cb(false, user);
        })
    };
    Users.associate = function(models) {
        Users.belongsTo(models.ClassUser,  { foreignKey: 'id', targetKey: 'pupil_id'});
        Users.hasMany(models.Icons, {
            foreignKey: 'id',
            sourceKey: 'marker_id'
        });
        Users.hasMany(models.Address, {
            foreignKey: 'id',
            sourceKey: 'address_id'
        });
    
    }

    Users.Abc = 'day la ABC';
    
  return Users;
};
